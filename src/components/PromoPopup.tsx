'use client';
import { useCallback,useEffect,useRef,useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight,X } from 'lucide-react';
import { PLEIADES_ARTICLE_SLUG,PLEIADES_PROMO_IMAGE } from '@/data/pleiades-promo';
import { PROMO_COPY,PROMO_IMAGE,promoHref,shouldShowBaptismPopup,shouldShowPleiadesPopup } from '@/lib/promo';
export function PromoPopup(){
 const path=usePathname();const en=path.startsWith('/en');const campaign=shouldShowPleiadesPopup(path)?'pleiades':shouldShowBaptismPopup(path)?'baptism':null;
 const [open,setOpen]=useState(false);const dialog=useRef<HTMLDialogElement>(null);
 const key=`orion-promo-${campaign}-2026`;
 const dismiss=useCallback(()=>{setOpen(false);try{localStorage.setItem(key,'dismissed');}catch{/* Dismissed for this view. */}},[key]);
 useEffect(()=>{setOpen(false);if(!campaign)return;try{if(localStorage.getItem(key))return;}catch{/* Storage is optional. */}const timer=setTimeout(()=>{if(!document.querySelector('dialog[open], [role=dialog]')&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName||''))setOpen(true);},18000);return()=>clearTimeout(timer);},[path,campaign,key]);
 useEffect(()=>{if(!open||!dialog.current)return;const element=dialog.current;const previous=document.body.style.overflow;element.showModal();document.body.style.overflow='hidden';return()=>{element.close();document.body.style.overflow=previous;};},[open]);
 const pleiades=campaign==='pleiades';const copy=en?PROMO_COPY.en:PROMO_COPY.el;
 const href=pleiades?`${en?'/en':''}/blog/${PLEIADES_ARTICLE_SLUG}`:promoHref(en);
 return <dialog ref={dialog} className="orion-promo" aria-labelledby="offer-title" onCancel={e=>{e.preventDefault();dismiss();}}><div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-border bg-background px-5 py-3"><span className="text-[11px] uppercase tracking-[.15em] text-brand-deep">{pleiades?(en?'Our partnership':'Η συνεργασία μας'):(en?'Baptism packages':'Πακέτα βάπτισης')}</span><button type="button" onClick={dismiss} className="flex h-11 w-11 items-center justify-center rounded-full border border-border !p-0" aria-label={en?'Close offer':'Κλείσιμο προσφοράς'}><X className="h-5 w-5" aria-hidden="true" /></button></div><div className="overflow-y-auto overscroll-contain"><Link href={href} onClick={dismiss} className="block bg-cream p-3"><Image src={pleiades?PLEIADES_PROMO_IMAGE:PROMO_IMAGE} width={pleiades?939:1254} height={pleiades?1675:1254} alt={pleiades?'Κτήμα Ωρίων × Pleiades Catering':copy.alt} sizes="(max-width:480px) 90vw, 420px" className="mx-auto h-auto max-h-[36dvh] w-full object-contain" /></Link><div className="p-5 sm:p-6"><h2 id="offer-title" className="font-heading text-2xl leading-snug">{pleiades?'Κτήμα Ωρίων × Pleiades Catering':copy.title}</h2><p className="mb-5 mt-3 text-sm leading-relaxed text-muted-foreground">{pleiades?(en?'Discover the catering partnership and discuss the menu for your reception.':'Γνωρίστε τη συνεργασία και συζητήστε μαζί μας το μενού της δεξίωσής σας.'):copy.subtitle}</p><Link href={href} onClick={dismiss} className="button button4 w-full !text-sm">{pleiades?(en?'Explore the partnership':'Δείτε τη συνεργασία'):copy.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><button type="button" onClick={dismiss} className="mt-2 min-h-11 w-full text-sm text-muted-foreground">{en?'Not now':'Όχι τώρα'}</button></div></div></dialog>;
}
