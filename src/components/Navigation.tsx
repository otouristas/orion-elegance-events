'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as Collapsible from '@radix-ui/react-collapsible';
import { PROMO_COPY, promoHref, shouldShowBaptismMenuIndicator } from '@/lib/promo';
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

  const promoCopy = isEnglish ? PROMO_COPY.en : PROMO_COPY.el;
  const showPromo = shouldShowBaptismMenuIndicator(pathname);
  const isPackagesLink = (href: string) => href === '/vaptisi' || href === '/en/baptism';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
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
                              className="flex items-center justify-between gap-2 px-5 py-3.5 text-sm text-foreground hover:bg-brand-main/10 hover:text-brand-main transition-colors border-b border-border/30 last:border-0 font-medium"
                            >
                              <span>{isEnglish ? subItem.labelEn : subItem.label}</span>
                              {showPromo && isPackagesLink(subItem.href) && (
                                <span className="shrink-0 rounded-full bg-brand-main/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-main">
                                  {promoCopy.menuBadge}
                                </span>
                              )}
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
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay - FULL SCREEN, OPAQUE, MAXIMUM Z-INDEX */}
        <div 
          className={`xl:hidden fixed inset-0 bg-background z-[9999] transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Header bar with close button */}
          <div className="bg-brand-text text-white px-6 py-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <Menu size={24} />
              <span className="font-heading text-xl">{isEnglish ? 'Menu' : 'Μενού'}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(false);
              }}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={2.5} />
            </button>
          </div>

          <div 
            className="h-[calc(100vh-64px)] overflow-y-auto bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-4">
              {showPromo && (
                <Link
                  href={promoHref(isEnglish)}
                  onClick={() => setIsMenuOpen(false)}
                  className="mx-4 mb-4 flex items-center gap-3 rounded-lg border border-brand-main/30 bg-brand-main/10 px-4 py-4 transition-colors hover:bg-brand-main/20"
                >
                  <Sparkles className="h-5 w-5 flex-shrink-0 text-brand-main" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-main">
                      {promoCopy.menuBadge}
                    </span>
                    <span className="block text-sm font-semibold text-foreground">
                      {promoCopy.menuLabel}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-brand-main" />
                </Link>
              )}

              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border">
                  {item.submenu ? (
                    <Collapsible.Root>
                      <Collapsible.Trigger className="w-full flex items-center justify-between px-6 py-5 text-foreground font-semibold text-base hover:text-brand-main hover:bg-muted/30 transition-colors">
                        <span>{isEnglish ? item.labelEn : item.label}</span>
                        <ChevronDown className="w-5 h-5 transition-transform duration-200 data-[state=open]:rotate-180" />
                      </Collapsible.Trigger>
                      <Collapsible.Content className="bg-muted/50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={isEnglish ? subItem.hrefEn : subItem.href}
                            className="flex items-center justify-between gap-2 px-10 py-4 text-sm text-foreground hover:text-brand-main hover:bg-brand-main/10 transition-all font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span>{isEnglish ? subItem.labelEn : subItem.label}</span>
                            {showPromo && isPackagesLink(subItem.href) && (
                              <span className="shrink-0 rounded-full bg-brand-main/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-main">
                                {promoCopy.menuBadge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </Collapsible.Content>
                    </Collapsible.Root>
                  ) : (
                    <Link
                      href={isEnglish ? item.hrefEn : item.href}
                      className="block px-6 py-5 text-foreground font-semibold text-base hover:text-brand-main hover:bg-muted/30 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {isEnglish ? item.labelEn : item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="p-6">
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/50 border border-border">
                  <Globe className="w-4 h-4" />
                  <button
                    onClick={() => switchLanguage('el')}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all ${
                      !isEnglish ? 'bg-brand-main text-white' : 'text-muted-foreground border border-border'
                    }`}
                  >
                    ΕΛ
                  </button>
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all ${
                      isEnglish ? 'bg-brand-main text-white' : 'text-muted-foreground border border-border'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-6 pb-6">
                <Link href={isEnglish ? "/en/contact" : "/request"}>
                  <Button className="w-full button button4 text-base py-6" onClick={() => setIsMenuOpen(false)}>
                    {isEnglish ? 'Book a free tour' : 'Κλείστε δωρεάν ξενάγηση'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
