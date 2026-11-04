'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
export const CONSENT_EVENT='orion-cookie-consent';
export function CookieConsent({ lang }: {lang?:'el'|'en'}) {
 const pathname=usePathname();const en=lang==='en'||(!lang&&pathname.startsWith('/en'));const [visible,setVisible]=useState(false);
 useEffect(()=>{try{setVisible(!localStorage.getItem('cookieConsent'));}catch{setVisible(true);}},[]);
 const choose=(value:string)=>{try{localStorage.setItem('cookieConsent',value);}catch{/* The choice still applies to this page session. */}window.dispatchEvent(new CustomEvent(CONSENT_EVENT,{detail:value}));setVisible(false);};
 if(!visible)return null;
 return <aside aria-label={en?'Cookie preferences':'Προτιμήσεις cookies'} className="fixed bottom-4 left-4 right-4 z-[55] max-w-md rounded-lg border border-border bg-background p-5 shadow-xl sm:right-auto"><h2 className="font-heading text-xl">{en?'Your privacy preferences':'Οι προτιμήσεις σας'}</h2><p className="mb-4 mt-2 text-sm leading-relaxed text-muted-foreground">{en?'With your permission, analytics cookies help us understand how the website is used. You can continue with essential functions only.':'Με την άδειά σας, τα cookies ανάλυσης μας βοηθούν να καταλάβουμε πώς χρησιμοποιείται η ιστοσελίδα. Μπορείτε να συνεχίσετε μόνο με τις απαραίτητες λειτουργίες.'}</p><div className="flex flex-wrap gap-2"><button type="button" onClick={()=>choose('accepted')} className="button button4 flex-1 !px-3 !text-xs">{en?'Allow analytics':'Αποδοχή ανάλυσης'}</button><button type="button" onClick={()=>choose('declined')} className="min-h-11 flex-1 rounded-full border border-brand-text px-3 text-xs font-semibold">{en?'Essential only':'Μόνο απαραίτητα'}</button></div></aside>;
}
