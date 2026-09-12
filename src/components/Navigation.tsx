'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe, Phone, Star, ArrowRight, CalendarHeart } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/messaging';
import { LANDLINE_DISPLAY, LANDLINE_TEL, whatsappUrl } from '@/lib/contact-links';
import { AVERAGE_RATING, REVIEW_COUNT } from '@/data/reviews';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as Collapsible from '@radix-ui/react-collapsible';
const logoDark = '/images/logo-dark.png';
const logoWhite = '/images/logo-white.png';

interface NavigationProps {
  isScrolled?: boolean;
  isTransparent?: boolean;
}

interface NavItem {
  label: string;
  labelEn: string;
  href: string;
  hrefEn: string;
  submenu?: Array<{ label: string; labelEn: string; href: string; hrefEn: string }>;
}

const pageMapping: Record<string, string> = {
  '/': '/en', '/en': '/',
  '/emeis': '/en/about', '/en/about': '/emeis',
  '/dexiosi': '/en/reception', '/en/reception': '/dexiosi',
  '/gamos': '/en/weddings', '/en/weddings': '/gamos',
  '/vaptisi': '/en/baptism', '/en/baptism': '/vaptisi',
  '/eterikes-ekdiloseis': '/en/corporate-events', '/en/corporate-events': '/eterikes-ekdiloseis',
  '/parti': '/en/party', '/en/party': '/parti',
  '/o-horos': '/en/venue', '/en/venue': '/o-horos',
  '/ekklisies': '/en/churches', '/en/churches': '/ekklisies',
  '/ypiresies': '/en/services', '/en/services': '/ypiresies',
  '/fotografos': '/en/photographer', '/en/photographer': '/fotografos',
  '/dj-mousiki': '/en/dj-music', '/en/dj-music': '/dj-mousiki',
  '/reviews': '/en/reviews', '/en/reviews': '/reviews',
  '/epikoinonia': '/en/contact', '/en/contact': '/epikoinonia',
  '/ktima-gamou': '/en/weddings',
  '/ktima-vaptisis': '/en/baptism',
  '/blog': '/en/blog', '/en/blog': '/blog',
  '/gallery': '/en/gallery', '/en/gallery': '/gallery',
  '/request': '/en/contact',
};

export const Navigation = ({ isScrolled = false, isTransparent = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isEnglish = pathname.startsWith('/en');

  // Sentence case rather than all-caps: Greek capitals are markedly harder to
  // scan than Latin ones, and twenty stacked caps labels read as a wall.
  const navItems: NavItem[] = [
    { label: 'Αρχική', labelEn: 'Home', href: '/', hrefEn: '/en' },
    { label: 'Ο χώρος', labelEn: 'The venue', href: '/o-horos', hrefEn: '/en/venue' },
    {
      label: 'Εκδηλώσεις',
      labelEn: 'Events',
      href: '/dexiosi',
      hrefEn: '/en/reception',
      submenu: [
        { label: 'Κτήμα γάμου', labelEn: 'Wedding venue', href: '/ktima-gamou', hrefEn: '/en/weddings' },
        { label: 'Γάμος: τι περιλαμβάνει', labelEn: 'What a wedding includes', href: '/gamos', hrefEn: '/en/weddings' },
        { label: 'Κτήμα βάπτισης', labelEn: 'Baptism venue', href: '/ktima-vaptisis', hrefEn: '/en/baptism' },
        { label: 'Βάπτιση: πακέτα & μενού', labelEn: 'Baptism packages', href: '/vaptisi', hrefEn: '/en/baptism' },
        { label: 'Εταιρικές εκδηλώσεις', labelEn: 'Corporate events', href: '/eterikes-ekdiloseis', hrefEn: '/en/corporate-events' },
        { label: 'Πάρτι', labelEn: 'Private parties', href: '/parti', hrefEn: '/en/party' },
      ],
    },
    {
      label: 'Εκκλησίες',
      labelEn: 'Churches',
      href: '/ekklisies',
      hrefEn: '/en/churches',
      submenu: [
        { label: 'Άγιος Αλέξανδρος, Δασκαλειό', labelEn: 'Agios Alexandros, Daskaleio', href: '/el/ekklisies/agios-alexandros-daskaleio', hrefEn: '/en/churches/agios-alexandros-daskaleio' },
        { label: 'Προφήτης Ηλίας, Θορικό', labelEn: 'Profitis Ilias, Thoriko', href: '/el/ekklisies/profitis-ilias-thoriko', hrefEn: '/en/churches/profitis-ilias-thoriko' },
        { label: 'Άγιος Παντελεήμονας, Κερατέα', labelEn: 'Agios Panteleimonas, Keratea', href: '/el/ekklisies/agios-panteleimonas-keratea', hrefEn: '/en/churches/agios-panteleimonas-keratea' },
        { label: 'Παναγία Γκαρικά', labelEn: 'Panagia Gkarika', href: '/el/ekklisies/panagia-gkarika', hrefEn: '/en/churches/panagia-gkarika' },
        { label: 'Αγία Τριάδα', labelEn: 'Agia Triada', href: '/el/ekklisies/agia-triada', hrefEn: '/en/churches/agia-triada' },
      ],
    },
    {
      label: 'Υπηρεσίες',
      labelEn: 'Services',
      href: '/ypiresies',
      hrefEn: '/en/services',
      submenu: [
        { label: 'Φωτογράφος', labelEn: 'Photographer', href: '/fotografos', hrefEn: '/en/photographer' },
        { label: 'DJ & μουσική', labelEn: 'DJ & music', href: '/dj-mousiki', hrefEn: '/en/dj-music' },
      ],
    },
    // The planning guides carry the terms whose SERPs are all guides and
    // listicles; they were orphaned off the main nav until now.
    { label: 'Οδηγοί', labelEn: 'Guides', href: '/blog', hrefEn: '/en/blog' },
    { label: 'Κριτικές', labelEn: 'Reviews', href: '/reviews', hrefEn: '/en/reviews' },
    { label: 'Εμείς', labelEn: 'About', href: '/emeis', hrefEn: '/en/about' },
    { label: 'Επικοινωνία', labelEn: 'Contact', href: '/epikoinonia', hrefEn: '/en/contact' },
  ];

  const bgClass = isTransparent && !isScrolled
    ? 'bg-transparent'
    : 'bg-background/95 backdrop-blur-md border-b border-border';

  const useLightLogo = isTransparent && !isScrolled;
  const logoSrc = useLightLogo ? logoWhite : logoDark;
  const textColor = useLightLogo ? 'text-white' : 'text-foreground';

  /**
   * Switches to an explicit language rather than toggling. Both buttons
   * previously called one toggle, so pressing "ΕΛ" while already on the Greek
   * site navigated the user to English.
   */
  const closeMenu = () => setIsMenuOpen(false);

  const switchLanguage = (target: 'el' | 'en') => {
    if ((target === 'en') === isEnglish) {
      return;
    }
    router.push(pageMapping[pathname] ?? (target === 'en' ? '/en' : '/'));
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    /* The nav is `position: fixed` with a z-index, so it forms a stacking
       context and everything inside it — the mobile menu included — is painted
       at the nav's level no matter how high its own z-index is. While the menu
       is open the nav itself has to rise above the floating contact button,
       which otherwise paints over the menu's pinned action bar. */
    <nav
      className={`fixed left-0 right-0 top-0 transition-all duration-300 ${
        isMenuOpen ? 'z-[9999]' : 'z-50'
      } ${bgClass}`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href={isEnglish ? "/en" : "/"} className="flex items-center z-[60]">
            <Image
              src={logoSrc}
              alt="Ktima Orion"
              width={170}
              height={170}
              className={`h-16 md:h-20 w-auto max-w-[200px] object-contain object-left transition-all duration-300 ${useLightLogo ? 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]' : ''}`}
              priority
              sizes="(max-width: 768px) 160px, 200px"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDesktopDropdown(item.label)}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      className={`font-medium text-[0.9rem] whitespace-nowrap transition-colors duration-300 hover:text-brand-main ${textColor} flex items-center gap-1 px-3 py-2`}
                      aria-expanded={openDesktopDropdown === item.label}
                      onClick={() => setOpenDesktopDropdown(openDesktopDropdown === item.label ? null : item.label)}
                    >
                      {isEnglish ? item.labelEn : item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDesktopDropdown === item.label && (
                      <div className="absolute top-full left-0 w-64 pt-1 z-[100]">
                        <div className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={isEnglish ? subItem.hrefEn : subItem.href}
                              className="block px-5 py-3.5 text-sm text-foreground hover:bg-brand-main/10 hover:text-brand-main transition-colors border-b border-border/30 last:border-0 font-medium"
                            >
                              {isEnglish ? subItem.labelEn : subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={isEnglish ? item.hrefEn : item.href}
                    className={`font-medium text-[0.9rem] whitespace-nowrap transition-colors duration-300 hover:text-brand-main ${textColor} px-3 py-2 block`}
                  >
                    {isEnglish ? item.labelEn : item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: CTA + Language */}
          <div className="hidden xl:flex items-center gap-3">
            <Link href={isEnglish ? "/en/contact" : "/request"}>
              <Button variant="outline" className="button button4 text-sm px-6">
                {isEnglish ? 'Book a tour' : 'Δωρεάν ξενάγηση'}
              </Button>
            </Link>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-background/80 border border-border backdrop-blur-sm">
              <Globe className="w-3.5 h-3.5" />
              <button
                onClick={() => switchLanguage('el')}
                aria-current={!isEnglish ? 'true' : undefined}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  !isEnglish ? 'bg-brand-main text-white' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ΕΛ
              </button>
              <button
                onClick={() => switchLanguage('en')}
                aria-current={isEnglish ? 'true' : undefined}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  isEnglish ? 'bg-brand-main text-white' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`xl:hidden z-[60] p-2 ${textColor} hover:bg-muted/20 rounded-md transition-colors`}
            aria-label={isEnglish ? 'Menu' : 'Μενού'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/*
        Full-screen mobile menu.

        Deliberately not just a list of links: on phones this panel is the main
        conversion surface, so the contact actions sit above the navigation
        rather than buried under it, and a WhatsApp/call bar stays pinned to the
        bottom while the list scrolls. It is rendered outside `.container-max`
        so it reaches the screen edges, and sized with flex + dvh rather than
        `calc(100vh - 64px)`, which mis-measures on mobile browsers whose
        toolbars grow and shrink.
      */}
      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 z-[9999] flex flex-col bg-background transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'pointer-events-none invisible opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Bar */}
        <div className="flex shrink-0 items-center justify-between bg-brand-text px-5 py-4 text-white">
          <Link href={isEnglish ? '/en' : '/'} onClick={closeMenu} className="flex items-center">
            <Image
              src={logoWhite}
              alt="Κτήμα Ωρίων"
              width={150}
              height={60}
              className="h-11 w-auto object-contain object-left"
              sizes="150px"
            />
          </Link>
          <button
            onClick={closeMenu}
            className="-mr-2 rounded-full p-2 transition-colors hover:bg-white/10"
            aria-label={isEnglish ? 'Close menu' : 'Κλείσιμο μενού'}
          >
            <X size={26} strokeWidth={2} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          {/* Lead capture, first thing in view */}
          <div className="bg-gradient-to-b from-brand-main/10 to-background px-5 pb-7 pt-6">
            <p className="eyebrow">{isEnglish ? 'Talk to us' : 'Μιλήστε μαζί μας'}</p>
            <p className="mt-2 font-heading text-2xl leading-snug text-brand-text">
              {isEnglish
                ? 'Check your date in a minute'
                : 'Δείτε αν είναι ελεύθερη η ημερομηνία σας'}
            </p>

            <div className="mt-5 space-y-2.5">
              <a
                href={whatsappUrl(undefined, isEnglish ? 'en' : 'el')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex w-full items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-white shadow-md transition-colors hover:bg-[#1FB055]"
              >
                <WhatsAppIcon className="h-6 w-6 shrink-0" />
                <span className="flex flex-col text-left leading-tight">
                  <span className="font-semibold">
                    {isEnglish ? 'Message on WhatsApp' : 'Στείλτε μήνυμα στο WhatsApp'}
                  </span>
                  <span className="text-[13px] text-white/85">
                    {isEnglish ? 'Fastest reply' : 'Ο γρηγορότερος τρόπος'}
                  </span>
                </span>
                <ArrowRight className="ml-auto h-5 w-5 shrink-0" aria-hidden="true" />
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${LANDLINE_TEL}`}
                  onClick={closeMenu}
                  className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-brand-main/40 px-3 py-3.5 text-brand-text transition-colors hover:bg-brand-main/10"
                >
                  <Phone className="h-5 w-5 text-brand-deep" aria-hidden="true" />
                  <span className="text-sm font-medium">
                    {isEnglish ? 'Call' : 'Καλέστε μας'}
                  </span>
                  <span className="text-[12px] text-muted-foreground">{LANDLINE_DISPLAY}</span>
                </a>
                <Link
                  href={isEnglish ? '/en/contact' : '/request'}
                  onClick={closeMenu}
                  className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-brand-text px-3 py-3.5 text-white transition-colors hover:bg-brand-deep"
                >
                  <CalendarHeart className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-medium">
                    {isEnglish ? 'Get a quote' : 'Ζητήστε προσφορά'}
                  </span>
                  <span className="text-[12px] text-white/75">
                    {isEnglish ? 'Free, no commitment' : 'Δωρεάν, χωρίς δέσμευση'}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Proof points — every figure is verifiable elsewhere on the site */}
          <div className="border-y border-border bg-cream/60 px-5 py-4">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 fill-current text-brand-main" aria-hidden="true" />
              ))}
              <span className="ml-1 text-sm font-medium text-brand-text">
                {AVERAGE_RATING.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                {isEnglish ? `from ${REVIEW_COUNT} reviews` : `από ${REVIEW_COUNT} κριτικές`}
              </span>
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[
                { v: '50–350', l: isEnglish ? 'guests' : 'άτομα' },
                { v: '100+', l: 'parking' },
                { v: '2009', l: isEnglish ? 'since' : 'από το' },
              ].map((item) => (
                <div key={item.l} className="rounded-xl bg-background/70 py-2">
                  <dt className="font-heading text-lg leading-none text-brand-text">{item.v}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {item.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Navigation */}
          <nav aria-label={isEnglish ? 'Main' : 'Κύρια πλοήγηση'} className="pb-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border">
                {item.submenu ? (
                  <Collapsible.Root>
                    <Collapsible.Trigger className="flex w-full items-center justify-between px-5 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted/40 data-[state=open]:text-brand-deep">
                      <span>{isEnglish ? item.labelEn : item.label}</span>
                      <ChevronDown className="h-5 w-5 transition-transform duration-200 data-[state=open]:rotate-180" />
                    </Collapsible.Trigger>
                    <Collapsible.Content className="bg-muted/40">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={isEnglish ? subItem.hrefEn : subItem.href}
                          className="block px-8 py-3 text-[15px] text-muted-foreground transition-colors hover:text-brand-deep"
                          onClick={closeMenu}
                        >
                          {isEnglish ? subItem.labelEn : subItem.label}
                        </Link>
                      ))}
                    </Collapsible.Content>
                  </Collapsible.Root>
                ) : (
                  <Link
                    href={isEnglish ? item.hrefEn : item.href}
                    className="block px-5 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted/40"
                    onClick={closeMenu}
                  >
                    {isEnglish ? item.labelEn : item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="px-5 pb-8">
            <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 p-2.5">
              <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <button
                onClick={() => switchLanguage('el')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  !isEnglish ? 'bg-brand-text text-white' : 'text-muted-foreground'
                }`}
              >
                Ελληνικά
              </button>
              <button
                onClick={() => switchLanguage('en')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  isEnglish ? 'bg-brand-text text-white' : 'text-muted-foreground'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Pinned so the two actions stay reachable however far the list scrolls */}
        <div
          className="grid shrink-0 grid-cols-2 gap-2.5 border-t border-border bg-background px-5 py-3"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <a
            href={whatsappUrl(undefined, isEnglish ? 'en' : 'el')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-medium text-white transition-colors hover:bg-[#1FB055]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href={`tel:${LANDLINE_TEL}`}
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 rounded-full bg-brand-text px-4 py-3 font-medium text-white transition-colors hover:bg-brand-deep"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {isEnglish ? 'Call' : 'Κλήση'}
          </a>
        </div>
      </div>
    </nav>
  );
};
