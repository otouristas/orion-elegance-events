'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Loader2, Mail, Phone } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitToFormspree } from '@/lib/formspree';
import { EMAIL, PHONE } from '@/lib/seo/config';

export default function Request({ lang = 'el' }: { lang?: 'el' | 'en' }) {
  const en = lang === 'en';
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [confirmed, setConfirmed] = useState(false);
  const [eventType, setEventType] = useState('');
  const [minimumDate, setMinimumDate] = useState('');
  const feedback = useRef<HTMLDivElement>(null);
  const requestId = useRef('');
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('event');
    if (type && ['wedding','christening','wedding-baptism','party','corporate'].includes(type)) setEventType(type);
    setMinimumDate(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Athens', year:'numeric', month:'2-digit', day:'2-digit' }).format(new Date()));
  }, []);
  useEffect(() => { if (status === 'success' || status === 'error') feedback.current?.focus(); }, [status]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    for (const [key, value] of data.entries()) if (typeof value === 'string') payload[key] = value.trim();
    payload.services = data.getAll('services').join(', ');
    payload.type = 'request';
    payload.lang = lang;
    requestId.current ||= crypto.randomUUID();
    payload.requestId = requestId.current;
    setStatus('sending');
    try {
      const response = await submitToFormspree(payload);
      if (!response.ok) throw new Error('submission_failed');
      const result = await response.json() as { confirmationSent?: boolean };
      setConfirmed(result.confirmationSent === true);
      setStatus('success');
      requestId.current = '';
      form.reset();
      setEventType('');
    } catch { setStatus('error'); }
  }

  return <Layout lang={lang}>
    <div className="pt-20">
      <section className="bg-cream">
        <div className="container-max grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div><p className="eyebrow">{en ? 'Your celebration, your way' : 'Ας σχεδιάσουμε τη δική σας ημέρα'}</p><h1 className="mt-5 font-heading">{en ? 'Tell us what you have in mind.' : 'Πείτε μας πώς φαντάζεστε την εκδήλωσή σας.'}</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{en ? 'Share your preferred date and guest count. We will discuss availability, the reception and a personal quote, or arrange a free visit to the venue.' : 'Στείλτε μας την ημερομηνία που σκέφτεστε και τον αριθμό των καλεσμένων σας. Θα συζητήσουμε τη διαθεσιμότητα, τις παροχές και την προσφορά σας ή θα κανονίσουμε μια δωρεάν ξενάγηση στο κτήμα.'}</p><p className="mt-5 text-sm font-semibold text-brand-deep">{en ? 'No commitment · Keratea, Attica · 50–350 guests' : 'Χωρίς δέσμευση · Κερατέα Αττικής · 50–350 καλεσμένοι'}</p></div>
          <div className="relative hidden aspect-[4/3] md:block"><Image src="/images/hero-image.jpg" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" alt={en ? 'Garden reception at Ktima Orion' : 'Ο κήπος του Κτήματος Ωρίων για τη δεξίωσή σας'} priority /></div>
        </div>
      </section>
      <section className="section-padding !pt-12">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            {(status === 'success' || status === 'error') && <div ref={feedback} tabIndex={-1} role={status === 'error' ? 'alert' : 'status'} className={`mb-8 rounded-lg border p-6 ${status === 'success' ? 'border-green-600 bg-green-50 text-green-950' : 'border-red-600 bg-red-50 text-red-950'}`}>
              <h2 className="font-heading text-2xl">{status === 'success' ? (en ? 'Your request was submitted.' : 'Το αίτημά σας υποβλήθηκε.') : (en ? 'Your request could not be submitted.' : 'Το αίτημά σας δεν υποβλήθηκε.')}</h2>
              <p className="mt-3">{status === 'success' ? (en ? 'Thank you. Our team will contact you to discuss your event. This is not a booking confirmation.' : 'Σας ευχαριστούμε. Η ομάδα μας θα επικοινωνήσει μαζί σας για την εκδήλωσή σας. Η αποστολή αιτήματος δεν αποτελεί κράτηση ημερομηνίας.') : (en ? 'Your details are still in the form. Try again or call us at 22990 68812.' : 'Τα στοιχεία σας παραμένουν στη φόρμα. Δοκιμάστε ξανά ή καλέστε μας στο 22990 68812.')}</p>
              {confirmed && <p className="mt-2">{en ? 'An acknowledgement email was also sent to your email address.' : 'Στάλθηκε επίσης email επιβεβαίωσης στη διεύθυνσή σας.'}</p>}
            </div>}
            <form action="/api/send-email" method="POST" onSubmit={submit} className="space-y-8" aria-busy={status === 'sending'}>
              <input type="hidden" name="type" value="request" /><input type="hidden" name="lang" value={lang} />
              <div className="hidden" aria-hidden="true"><label>Website<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
              <fieldset disabled={status === 'sending'} className="space-y-6"><legend className="mb-6 font-heading text-2xl">{en ? 'How can we reach you?' : 'Πώς θα επικοινωνήσουμε μαζί σας;'}</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="firstName">{en ? 'First name *' : 'Όνομα *'}</Label><Input id="firstName" name="firstName" autoComplete="given-name" maxLength={120} required /></div>
                  <div className="space-y-2"><Label htmlFor="lastName">{en ? 'Last name *' : 'Επώνυμο *'}</Label><Input id="lastName" name="lastName" autoComplete="family-name" maxLength={120} required /></div>
                  <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" autoComplete="email" maxLength={320} required /></div>
                  <div className="space-y-2"><Label htmlFor="phone">{en ? 'Phone *' : 'Τηλέφωνο *'}</Label><Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={80} required /></div>
                </div>
              </fieldset>
              <fieldset disabled={status === 'sending'} className="space-y-6"><legend className="mb-6 font-heading text-2xl">{en ? 'Your celebration' : 'Η εκδήλωσή σας'}</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2"><Label htmlFor="eventType">{en ? 'Event type *' : 'Είδος εκδήλωσης *'}</Label><select id="eventType" name="eventType" required value={eventType} onChange={e => setEventType(e.target.value)} className="min-h-12 w-full rounded-md border border-input bg-background px-3"><option value="">{en ? 'Please select' : 'Επιλέξτε'}</option>{[['wedding','Γάμος','Wedding'],['christening','Βάπτιση','Baptism'],['wedding-baptism','Γάμος & βάπτιση','Wedding & baptism'],['corporate','Εταιρική εκδήλωση','Corporate event'],['party','Πάρτι','Private party'],['other','Άλλο','Other']].map(([v,el,eng]) => <option key={v} value={v}>{en ? eng : el}</option>)}</select></div>
                  <div className="space-y-2"><Label htmlFor="eventDate">{en ? 'Preferred date (optional)' : 'Επιθυμητή ημερομηνία (προαιρετικά)'}</Label><Input id="eventDate" name="eventDate" type="date" min={minimumDate || undefined} aria-describedby="date-hint" /><p id="date-hint" className="text-xs text-muted-foreground">{en ? 'Still deciding? Leave this blank.' : 'Δεν έχετε αποφασίσει ακόμη; Αφήστε το κενό.'}</p></div>
                  <div className="space-y-2"><Label htmlFor="guestCount">{en ? 'Approximate guest count' : 'Περίπου πόσοι καλεσμένοι;'}</Label><Input id="guestCount" name="guestCount" type="number" min="1" max="350" step="1" inputMode="numeric" placeholder={en ? 'e.g. 120' : 'π.χ. 120'} /></div>
                  <div className="space-y-2"><Label htmlFor="budget">{en ? 'Budget (optional)' : 'Προϋπολογισμός (προαιρετικά)'}</Label><Input id="budget" name="budget" maxLength={80} placeholder={en ? 'Total or per guest' : 'Συνολικά ή ανά άτομο'} /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="specialRequests">{en ? 'What would you like us to know?' : 'Τι θα θέλατε να γνωρίζουμε;'}</Label><Textarea id="specialRequests" name="specialRequests" rows={5} maxLength={5000} placeholder={en ? 'A venue visit, catering, decoration or questions about your event.' : 'Ξενάγηση στον χώρο, catering, στολισμός ή ερωτήσεις για την εκδήλωσή σας.'} /></div>
              </fieldset>
              <p className="text-sm leading-relaxed text-muted-foreground">{en ? 'We use your details to respond to this inquiry. Please avoid sharing sensitive personal information in the message.' : 'Χρησιμοποιούμε τα στοιχεία σας για να απαντήσουμε στο αίτημά σας. Αποφύγετε την αναφορά ευαίσθητων προσωπικών δεδομένων στο μήνυμα.'}</p>
              <button type="submit" disabled={status === 'sending'} className="button button4 w-full sm:w-auto">{status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" />{en ? 'Submitting…' : 'Αποστολή…'}</> : <>{en ? 'Send my request' : 'Στείλτε το αίτημά σας'}<ArrowRight className="h-4 w-4" aria-hidden="true" /></>}</button>
            </form>
          </div>
          <aside className="self-start border-t border-border pt-8 lg:sticky lg:top-28 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0"><h2 className="font-heading text-2xl">{en ? 'Let’s talk.' : 'Προτιμάτε να μιλήσουμε;'}</h2><a className="mt-5 flex min-h-12 items-center gap-3 text-sm" href={`tel:${PHONE}`}><Phone className="h-4 w-4" />22990 68812</a><a className="flex min-h-12 items-center gap-3 break-all text-sm" href={`mailto:${EMAIL}`}><Mail className="h-4 w-4 shrink-0" />{EMAIL}</a><div className="mt-6 space-y-4 border-t border-border pt-6">{(en ? ['Personal quote for your event','Free venue visit by appointment','Date confirmed directly with our team'] : ['Προσωπική προσφορά για την εκδήλωσή σας','Δωρεάν ξενάγηση κατόπιν ραντεβού','Επιβεβαίωση ημερομηνίας με την ομάδα μας']).map(text => <p key={text} className="flex gap-3 text-sm leading-relaxed"><CheckCircle className="h-4 w-4 shrink-0 text-brand-deep" />{text}</p>)}</div></aside>
        </div>
      </section>
    </div>
  </Layout>;
}
