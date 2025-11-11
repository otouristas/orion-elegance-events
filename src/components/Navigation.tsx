import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Collapsible from '@radix-ui/react-collapsible';
import logoDark from '@/assets/logo-dark.png';
import logoWhite from '@/assets/logo-white.png';

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
  '/diorganotis-gamon': '/en/wedding-planner', '/en/wedding-planner': '/diorganotis-gamon',
  '/fotografos': '/en/photographer', '/en/photographer': '/fotografos',
  '/dj-mousiki': '/en/dj-music', '/en/dj-music': '/dj-mousiki',
  '/reviews': '/en/reviews', '/en/reviews': '/reviews',
  '/contact': '/en/contact', '/en/contact': '/contact',
};

export const Navigation = ({ isScrolled = false, isTransparent = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isEnglish = location.pathname.startsWith('/en');

  const navItems: NavItem[] = [
    { label: 'ΑΡΧΙΚΗ', labelEn: 'HOME', href: '/', hrefEn: '/en' },
    { label: 'ΕΜΕΙΣ', labelEn: 'ABOUT', href: '/emeis', hrefEn: '/en/about' },
    { 
      label: 'ΔΕΞΙΩΣΗ', 
      labelEn: 'RECEPTION',
      href: '/dexiosi',
      hrefEn: '/en/reception',
      submenu: [
        { label: 'ΓΑΜΟΣ', labelEn: 'WEDDING', href: '/gamos', hrefEn: '/en/weddings' },
        { label: 'ΒΑΠΤΙΣΗ', labelEn: 'BAPTISM', href: '/vaptisi', hrefEn: '/en/baptism' },
        { label: 'ΕΤΑΙΡΙΚΕΣ ΕΚΔΗΛΩΣΕΙΣ', labelEn: 'CORPORATE EVENTS', href: '/eterikes-ekdiloseis', hrefEn: '/en/corporate-events' },
        { label: 'ΠΑΡΤΙ', labelEn: 'PARTY', href: '/parti', hrefEn: '/en/party' }
      ]
    },
    { label: 'Ο ΧΩΡΟΣ', labelEn: 'THE VENUE', href: '/o-horos', hrefEn: '/en/venue' },
    { label: 'ΕΚΚΛΗΣΙΕΣ', labelEn: 'CHURCHES', href: '/ekklisies', hrefEn: '/en/churches' },
    { 
      label: 'ΥΠΗΡΕΣΙΕΣ', 
      labelEn: 'SERVICES',
      href: '/ypiresies',
      hrefEn: '/en/services',
      submenu: [
        { label: 'ΔΙΟΡΓΑΝΩΤΗΣ ΓΑΜΩΝ', labelEn: 'WEDDING PLANNER', href: '/diorganotis-gamon', hrefEn: '/en/wedding-planner' },
        { label: 'ΦΩΤΟΓΡΑΦΟΣ', labelEn: 'PHOTOGRAPHER', href: '/fotografos', hrefEn: '/en/photographer' },
        { label: 'DJ - ΜΟΥΣΙΚΗ', labelEn: 'DJ - MUSIC', href: '/dj-mousiki', hrefEn: '/en/dj-music' }
      ]
    },
    { label: 'ΚΡΙΤΙΚΕΣ', labelEn: 'REVIEWS', href: '/reviews', hrefEn: '/en/reviews' },
    { label: 'ΕΠΙΚΟΙΝΩΝΙΑ', labelEn: 'CONTACT', href: '/contact', hrefEn: '/en/contact' },
  ];

  const bgClass = isTransparent && !isScrolled
    ? 'bg-transparent'
    : 'bg-background/95 backdrop-blur-md border-b border-border';

  const logoSrc = (isTransparent && !isScrolled) ? logoWhite : logoDark;
  const textColor = (isTransparent && !isScrolled) ? 'text-white' : 'text-foreground';

  const handleLanguageSwitch = () => {
    const currentPath = location.pathname;
    const targetPath = pageMapping[currentPath] || (isEnglish ? '/' : '/en');
    navigate(targetPath);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
          <Link to={isEnglish ? "/en" : "/"} className="flex items-center z-[60]">
            <img
              src={logoSrc}
              alt="Ktima Orion"
              className="h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
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
                      className={`font-medium text-sm tracking-wide transition-colors duration-300 hover:text-brand-main ${textColor} flex items-center gap-1 px-3 py-2`}
                    >
                      {isEnglish ? item.labelEn : item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDesktopDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-background rounded-lg shadow-2xl border border-border z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={isEnglish ? subItem.hrefEn : subItem.href}
                            className="block px-5 py-3.5 text-sm text-foreground hover:bg-brand-main/10 hover:text-brand-main transition-colors border-b border-border/30 last:border-0 font-medium"
                          >
                            {isEnglish ? subItem.labelEn : subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={isEnglish ? item.hrefEn : item.href}
                    className={`font-medium text-sm tracking-wide transition-colors duration-300 hover:text-brand-main ${textColor} px-3 py-2 block`}
                  >
                    {isEnglish ? item.labelEn : item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: CTA + Language */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to={isEnglish ? "/en/contact" : "/contact"}>
              <Button variant="outline" className="button button4 text-sm px-6">
                {isEnglish ? 'REQUEST' : 'ΖΗΤΗΣΗ'}
              </Button>
            </Link>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-background/80 border border-border backdrop-blur-sm">
              <Globe className="w-3.5 h-3.5" />
              <button
                onClick={handleLanguageSwitch}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  !isEnglish ? 'bg-brand-main text-white' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ΕΛ
              </button>
              <button
                onClick={handleLanguageSwitch}
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
            className={`lg:hidden z-[60] p-2 ${textColor} hover:bg-muted/20 rounded-md transition-colors`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay - Fixed to viewport, always accessible */}
        <div 
          className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-md z-[100] transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Close button at top */}
          <div className="sticky top-0 bg-background/95 border-b border-border px-4 py-4 flex justify-between items-center z-10">
            <span className="font-semibold text-lg">{isEnglish ? 'Menu' : 'Μενού'}</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div 
            className="h-full overflow-y-auto pb-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-4">
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
                            to={isEnglish ? subItem.hrefEn : subItem.href}
                            className="block px-10 py-4 text-sm text-foreground hover:text-brand-main hover:bg-brand-main/10 transition-all font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {isEnglish ? subItem.labelEn : subItem.label}
                          </Link>
                        ))}
                      </Collapsible.Content>
                    </Collapsible.Root>
                  ) : (
                    <Link
                      to={isEnglish ? item.hrefEn : item.href}
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
                    onClick={handleLanguageSwitch}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all ${
                      !isEnglish ? 'bg-brand-main text-white' : 'text-muted-foreground border border-border'
                    }`}
                  >
                    ΕΛ
                  </button>
                  <button
                    onClick={handleLanguageSwitch}
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
                <Link to={isEnglish ? "/en/contact" : "/contact"}>
                  <Button className="w-full button button4 text-base py-6" onClick={() => setIsMenuOpen(false)}>
                    {isEnglish ? 'REQUEST' : 'ΖΗΤΗΣΗ'}
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
