import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { z } from 'zod';
import { buildOwnerInquiryEmailHtml, buildCustomerInquiryEmailHtml, buildContactOwnerEmailHtml, buildContactCustomerEmailHtml, eventTypeMap } from '@/lib/email/inquiry-email';
export const runtime = 'nodejs';
const base = { email:z.string().trim().email().max(320), lang:z.enum(['el','en']).default('el'), requestId:z.string().uuid().optional(), _gotcha:z.string().max(500).optional() };
const inquiry = z.object({ ...base, type:z.literal('request'), firstName:z.string().trim().min(1).max(120), lastName:z.string().trim().min(1).max(120), phone:z.string().trim().min(3).max(80), eventType:z.enum(['wedding','christening','wedding-baptism','party','corporate','other']), eventDate:z.string().regex(/^$|^\d{4}-\d{2}-\d{2}$/).optional().refine(v=>!v||(!Number.isNaN(Date.parse(v))&&new Date(v).toISOString().slice(0,10)===v)), guestCount:z.string().regex(/^$|^[1-9]\d{0,2}$/).optional().refine(v=>!v||Number(v)<=350), budget:z.string().max(80).optional(), specialRequests:z.string().max(5000).optional(), howDidYouHear:z.string().max(200).optional(), services:z.preprocess(v=>typeof v==='string'?v.split(', ').filter(Boolean):v,z.array(z.string().max(120)).max(10).default([])) });
const contact = z.object({ ...base, type:z.literal('contact'), name:z.string().trim().min(1).max(200), phone:z.string().max(80).optional(), subject:z.string().trim().min(1).max(200), message:z.string().trim().min(1).max(10000) });
const schema = z.discriminatedUnion('type',[inquiry,contact]);
type EmailEnv = { RESEND_API_KEY?: string; RESEND_FROM?: string; INQUIRY_RATE_LIMITER?: { limit(input:{key:string}):Promise<{success:boolean}> } };
const json = (body:object,status=200) => NextResponse.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request:Request) {
  const origin=request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin) return json({ok:false,message:'Invalid request origin'},403);
  if(Number(request.headers.get('content-length')||0)>20000) return json({ok:false,message:'Request too large'},413);
  let raw:unknown;
  try { const text=await request.text(); if(new TextEncoder().encode(text).length>20000)return json({ok:false,message:'Request too large'},413); raw=request.headers.get('content-type')?.includes('application/json')?JSON.parse(text):Object.fromEntries(new URLSearchParams(text)); } catch { return json({ok:false,message:'Invalid request'},400); }
  const parsed=schema.safeParse(raw);
  if(!parsed.success)return json({ok:false,message:'Please check the form fields'},400);
  const d=parsed.data;
  if(d._gotcha)return json({ok:false,message:'Unable to submit this request'},400);
  let env:EmailEnv={};
  try { env=getCloudflareContext().env as EmailEnv; } catch { /* Native Next.js development has no Worker context. */ }
  if(env.INQUIRY_RATE_LIMITER) { const result=await env.INQUIRY_RATE_LIMITER.limit({key:request.headers.get('cf-connecting-ip')||'unknown'});if(!result.success)return json({ok:false,message:'Please wait before trying again'},429); }
  const key=env.RESEND_API_KEY||process.env.RESEND_API_KEY;
  const from=env.RESEND_FROM||process.env.RESEND_FROM;
  if(!key||!from)return json({ok:false,message:'Please call 22990 68812 or email info@ktimaorion.gr'},503);
  const resend=new Resend(key);
  const id=d.requestId||crypto.randomUUID();
  const owner=d.type==='request'?buildOwnerInquiryEmailHtml(d):buildContactOwnerEmailHtml(d);
  const customer=d.type==='request'?buildCustomerInquiryEmailHtml(d):buildContactCustomerEmailHtml(d);
  const subject=d.type==='request'?`Νέο αίτημα: ${eventTypeMap[d.eventType]} | ${d.firstName} ${d.lastName}`:`Νέο μήνυμα: ${d.subject}`;
  try {
    const result=await resend.emails.send({from,to:['info@ktimaorion.gr'],replyTo:d.email,subject,html:owner},{idempotencyKey:`orion-owner/${id}`});
    if(result.error||!result.data?.id){console.error('Inquiry owner delivery rejected',result.error?.name);return json({ok:false,message:'Unable to submit. Please try again or call us.'},502);}
    // The inquiry is accepted once the owner notification is accepted. A failed
    // acknowledgement must never turn a successful inquiry into a false failure.
    let confirmationSent=false;
    try {const acknowledgement=await resend.emails.send({from,to:[d.email],replyTo:'info@ktimaorion.gr',subject:d.lang==='en'?'We received your inquiry | Ktima Orion':'Λάβαμε το αίτημά σας | Κτήμα Ωρίων',html:customer},{idempotencyKey:`orion-customer/${id}`});confirmationSent=!acknowledgement.error&&!!acknowledgement.data?.id;if(!confirmationSent)console.error('Inquiry acknowledgement rejected',acknowledgement.error?.name);}catch{console.error('Inquiry acknowledgement unavailable');}
    return json({ok:true,confirmationSent});
  } catch {console.error('Inquiry delivery unavailable');return json({ok:false,message:'Unable to submit. Please try again or call us.'},502);}
}
