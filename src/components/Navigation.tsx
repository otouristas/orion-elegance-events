'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react';
import { GREEK_TO_ENGLISH_PATH } from '@/lib/seo/hreflang';
import { PHONE } from '@/lib/seo/config';
import { PROMO_COPY, promoHref } from '@/lib/promo';

type Item = { el: string; en: string; href: string; hrefEn: string };
const destinations: Item[] = [
  { el: 'Γάμος', en: 'Weddings', href: '/ktima-gamou', hrefEn: '/en/weddings' },
  { el: 'Βάπτιση', en: 'Baptisms', href: '/ktima-vaptisis', hrefEn: '/en/baptism' },
  { el: 'Ο χώρος', en: 'The venue', href: '/o-horos', hrefEn: '/en/venue' },
  { el: 'Φωτογραφίες', en: 'Gallery', href: '/gallery', hrefEn: '/en/gallery' },
];
const groups: { el: string; en: string; items: Item[] }[] = [
  { el: 'Σχεδιάστε την εκδήλωσή σας', en: 'Plan your celebration', items: [
    { el: 'Γάμος: παροχές & οργάνωση', en: 'Wedding receptions', href: '/gamos', hrefEn: '/en/weddings' },
    { el: 'Βάπτιση: πακέτα & μενού', en: 'Baptism packages', href: '/vaptisi', hrefEn: '/en/baptism' },
    { el: 'Δεξιώσεις', en: 'Receptions', href: '/dexiosi', hrefEn: '/en/reception' },
    { el: 'Εταιρικές εκδηλώσεις', en: 'Corporate events', href: '/eterikes-ekdiloseis', hrefEn: '/en/corporate-events' },
    { el: 'Πάρτι', en: 'Private parties', href: '/parti', hrefEn: '/en/party' },
    { el: 'Υπηρεσίες', en: 'Services', href: '/ypiresies', hrefEn: '/en/services' },
    { el: 'Φωτογράφος', en: 'Photographer', href: '/fotografos', hrefEn: '/en/photographer' },
    { el: 'DJ & μουσική', en: 'DJ & music', href: '/dj-mousiki', hrefEn: '/en/dj-music' },
  ]},
  { el: 'Εκκλησίες κοντά στο κτήμα', en: 'Nearby churches', items: [
    { el: 'Όλες οι εκκλησίες', en: 'All nearby churches', href: '/ekklisies', hrefEn: '/en/churches' },
    { el: 'Άγιος Αλέξανδρος, Δασκαλειό', en: 'Agios Alexandros, Daskaleio (Greek)', href: '/el/ekklisies/agios-alexandros-daskaleio', hrefEn: '/el/ekklisies/agios-alexandros-daskaleio' },
    { el: 'Προφήτης Ηλίας, Θορικό', en: 'Profitis Ilias, Thoriko (Greek)', href: '/el/ekklisies/profitis-ilias-thoriko', hrefEn: '/el/ekklisies/profitis-ilias-thoriko' },
    { el: 'Άγιος Παντελεήμονας, Κερατέα', en: 'Agios Panteleimonas (Greek)', href: '/el/ekklisies/agios-panteleimonas-keratea', hrefEn: '/el/ekklisies/agios-panteleimonas-keratea' },
    { el: 'Παναγία Γκαρικά', en: 'Panagia Gkarika (Greek)', href: '/el/ekklisies/panagia-gkarika', hrefEn: '/el/ekklisies/panagia-gkarika' },
    { el: 'Αγία Τριάδα', en: 'Agia Triada', href: '/el/ekklisies/agia-triada', hrefEn: '/en/churches/agia-triada' },
  ]},
];
const information: Item[] = [
  { el: 'Αρχική', en: 'Home', href: '/', hrefEn: '/en' },
  { el: 'Οδηγοί γάμου & βάπτισης', en: 'Planning guides', href: '/blog', hrefEn: '/en/blog' },
  { el: 'Κριτικές', en: 'Guest reviews', href: '/reviews', hrefEn: '/en/reviews' },
  { el: 'Εμείς', en: 'About us', href: '/emeis', hrefEn: '/en/about' },
  { el: 'Επικοινωνία & πρόσβαση', en: 'Contact & directions', href: '/epikoinonia', hrefEn: '/en/contact' },
];

export function Navigation({ isScrolled = false, isTransparent = false }: { isScrolled?: boolean; isTransparent?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const en = pathname.startsWith('/en');
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const navigating = useRef(false);
  const light = isTransparent && !isScrolled;
  const request = en ? '/en/request' : '/request';
  const href = (item: Item) => en ? item.hrefEn : item.href;
  const label = (item: Item) => en ? item.en : item.el;
  const active = (item: Item) => pathname === href(item) || (item.href === '/ktima-gamou' && pathname === '/gamos') || (item.href === '/ktima-vaptisis' && pathname === '/vaptisi');
  const close = (navigate = false) => { navigating.current = navigate; setOpen(false); };

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const media = matchMedia('(min-width: 1280px)');
    const resize = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', resize);
    return () => media.removeEventListener('change', resize);
  }, []);
  useEffect(() => {
    if (!open || !dialog.current) return;
    const element = dialog.current;
    const opener = trigger.current;
    const body = document.body;
    const original = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow };
    const scroll = window.scrollY;
    navigating.current = false;
    element.showModal();
    Object.assign(body.style, { position: 'fixed', top: `-${scroll}px`, width: '100%', overflow: 'hidden' });
    element.querySelector<HTMLButtonElement>('[data-menu-close]')?.focus();
    return () => {
      element.close();
      Object.assign(body.style, original);
      if (!navigating.current) { window.scrollTo(0, scroll); opener?.focus({ preventScroll: true }); }
      else window.scrollTo(0, 0);
    };
  }, [open]);

  function language(target: 'el' | 'en') {
    if ((target === 'en') === en) return;
    const mapping: Record<string, string> = { ...GREEK_TO_ENGLISH_PATH, '/ktima-gamou': '/en/weddings', '/ktima-vaptisis': '/en/baptism', '/el/ekklisies/agia-triada': '/en/churches/agia-triada' };
    const translated = target === 'en'
      ? mapping[pathname] ?? (pathname.startsWith('/blog/') ? `/en${pathname}` : '/en/churches')
      : Object.entries(mapping).find(([, value]) => value === pathname)?.[0] ?? (pathname.startsWith('/en/blog/') ? pathname.slice(3) : '/');
    close(true);
    router.push(translated);
  }

  return <>
    <nav aria-label={en ? 'Main navigation' : 'Κύρια πλοήγηση'} className={`fixed inset-x-0 top-0 z-50 transition-colors ${light ? 'bg-transparent text-white' : 'border-b border-border bg-background/95 text-foreground backdrop-blur-md'}`}>
      <div className="container-max flex h-20 items-center justify-between gap-3">
        <Link href={en ? '/en' : '/'} aria-label={en ? 'Ktima Orion home' : 'Κτήμα Ωρίων αρχική'}>
          <Image src={light ? '/images/logo-white.png' : '/images/logo-dark.png'} alt={en ? 'Ktima Orion' : 'Κτήμα Ωρίων'} width={170} height={170} className="h-[72px] w-auto" priority />
        </Link>
        <div className="hidden items-center gap-5 xl:flex">
          {destinations.slice(0,3).map(item => <Link key={item.href} href={href(item)} aria-current={active(item) ? 'page' : undefined} className="nav-desktop-link">{label(item)}</Link>)}
          {[information[1], information[2], information[4]].map(item => <Link key={item.href} href={href(item)} aria-current={active(item) ? 'page' : undefined} className="nav-desktop-link">{label(item)}</Link>)}
          <button type="button" onClick={() => language(en ? 'el' : 'en')} className="min-h-11 min-w-11 px-2" aria-label={en ? 'Ελληνικά' : 'English'}>{en ? 'ΕΛ' : 'EN'}</button>
        </div>
        <div className="flex items-center gap-2">
          <Link href={request} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-xs font-semibold sm:text-sm ${light ? 'bg-white text-brand-text' : 'bg-brand-text text-white'}`}>{en ? 'Request a quote' : 'Ζητήστε προσφορά'}<ArrowRight className="hidden h-4 w-4 sm:block" aria-hidden="true" /></Link>
          <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={en ? 'Open menu' : 'Άνοιγμα μενού'} className="flex h-12 w-12 items-center justify-center rounded-full border border-current/25 !p-0 xl:hidden"><Menu aria-hidden="true" className="h-6 w-6" /></button>
        </div>
      </div>
    </nav>
    <dialog ref={dialog} id="mobile-navigation" className="orion-menu" aria-labelledby="menu-title" aria-describedby="menu-description" onCancel={e => { e.preventDefault(); close(); }}>
      <div className="menu-top">
        <Link href={en ? '/en' : '/'} onClick={() => close(true)} className="font-heading text-xl">{en ? 'Ktima Orion' : 'Κτήμα Ωρίων'}</Link>
        <div className="flex items-center gap-1">
          {(['el','en'] as const).map(locale => <button key={locale} type="button" onClick={() => language(locale)} aria-pressed={(locale === 'en') === en} className="menu-language">{locale === 'el' ? 'ΕΛ' : 'EN'}</button>)}
          <button data-menu-close type="button" onClick={() => close()} className="menu-close" aria-label={en ? 'Close menu' : 'Κλείσιμο μενού'}><X className="h-6 w-6" aria-hidden="true" /></button>
        </div>
      </div>
      <div className="menu-scroll">
        <aside className="menu-story">
          <Image src="/images/hero-image.jpg" alt="" fill sizes="45vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/95 via-brand-text/20 to-brand-text/10" />
          <div className="relative mt-auto p-10 text-white"><p className="text-xs uppercase tracking-widest">{en ? 'Keratea, Attica · since 2009' : 'Κερατέα Αττικής · από το 2009'}</p><p className="mt-5 font-heading text-4xl">{en ? 'A place for your people.' : 'Ο χώρος για τις δικές σας στιγμές.'}</p><p className="mt-5 text-sm leading-relaxed text-white/85">{en ? 'Garden with sea views. Indoor reception hall. Space for 50–350 guests.' : 'Κήπος με θέα στη θάλασσα. Κλιματιζόμενη αίθουσα. Δεξιώσεις για 50–350 καλεσμένους.'}</p></div>
        </aside>
        <div className="menu-links">
          <p id="menu-title" className="text-xs uppercase tracking-[0.2em] text-brand-deep">{en ? 'Your celebration starts here' : 'Η εκδήλωσή σας ξεκινά εδώ'}</p>
          <p id="menu-description" className="mt-2 text-sm text-muted-foreground">{en ? 'Explore the venue and tell us what you are planning.' : 'Γνωρίστε τον χώρο και πείτε μας τι σχεδιάζετε.'}</p>
          <div className="my-6 grid grid-cols-1 gap-1">
            {destinations.map((item,i) => <Link href={href(item)} key={item.href} onClick={() => close(true)} aria-current={active(item) ? 'page' : undefined} className="menu-destination"><span className="text-xs tabular-nums text-brand-deep">0{i+1}</span><span className="flex-1 font-heading text-3xl">{label(item)}</span>{active(item) && <span className="text-xs font-semibold">{en ? 'You are here' : 'Είστε εδώ'}</span>}<ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>)}
          </div>
          <div className="menu-actions"><Link href={request} onClick={() => close(true)} className="button button4 w-full">{en ? 'Request a quote / a visit' : 'Ζητήστε προσφορά / ξενάγηση'}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><a href={`tel:${PHONE}`} className="flex min-h-11 items-center justify-center gap-2 text-sm"><Phone className="h-4 w-4" aria-hidden="true" />22990 68812</a></div>
          <Link href={promoHref(en)} onClick={() => close(true)} className="my-6 flex items-center gap-4 border-y border-border py-5 text-sm"><span className="rounded-full bg-brand-text px-3 py-1 text-xs text-white">{en ? 'Baptism' : 'Βάπτιση'}</span><span className="flex-1">{(en ? PROMO_COPY.en : PROMO_COPY.el).menuLabel}<small className="mt-1 block text-muted-foreground">{en ? 'For events from 100 guests · see terms' : 'Για εκδηλώσεις από 100 άτομα · δείτε τους όρους'}</small></span><ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
          {groups.map(group => <details key={group.el} className="menu-group" open={group.items.some(active)}><summary>{en ? group.en : group.el}<ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" /></summary><div>{group.items.filter((item,i,items) => items.findIndex(x => href(x) === href(item)) === i).map(item => <Link href={href(item)} key={item.href} aria-current={pathname === href(item) ? 'page' : undefined} onClick={() => close(true)}>{label(item)}</Link>)}</div></details>)}
          <div className="mt-5 grid sm:grid-cols-2">{information.map(item => <Link className="menu-info" key={item.href} href={href(item)} aria-current={active(item) ? 'page' : undefined} onClick={() => close(true)}>{label(item)}</Link>)}</div>
        </div>
      </div>
    </dialog>
  </>;
}
