'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Phone } from 'lucide-react';
import { PHONE } from '@/lib/seo/config';
export function RequestCTA() {
  const path = usePathname();
  if (path === '/request' || path === '/en/request') return null;
  const en = path.startsWith('/en');
  return <section className="bg-brand-text py-12 text-white md:py-16" aria-labelledby="request-cta-title"><div className="container-max flex flex-col justify-between gap-7 lg:flex-row lg:items-center"><div><p className="text-xs uppercase tracking-[.18em] text-brand-light">{en ? 'The next step' : 'Το επόμενο βήμα'}</p><h2 id="request-cta-title" className="mt-3 font-heading text-3xl text-white md:text-4xl">{en ? 'Shall we plan your celebration?' : 'Να σχεδιάσουμε τη δική σας εκδήλωση;'}</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">{en ? 'Tell us your date and guest count. Request a personal quote or arrange a free visit.' : 'Πείτε μας ημερομηνία και αριθμό καλεσμένων. Ζητήστε προσωπική προσφορά ή κλείστε μια δωρεάν ξενάγηση.'}</p></div><div className="flex shrink-0 flex-col gap-3"><Link href={en ? '/en/request' : '/request'} className="inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-text">{en ? 'Request a quote' : 'Ζητήστε προσφορά'}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><a href={`tel:${PHONE}`} className="inline-flex min-h-11 items-center justify-center gap-2 text-sm text-white"><Phone className="h-4 w-4" aria-hidden="true" />22990 68812</a></div></div></section>;
}
