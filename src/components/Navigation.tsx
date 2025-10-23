import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoDark from '@/assets/logo-dark.png';
import logoWhite from '@/assets/logo-white.png';

interface NavigationProps {
  isScrolled?: boolean;
  isTransparent?: boolean;
}

interface NavItem {
  label: string;
  labelEn?: string;
  href: string;
  hrefEn?: string;
  submenu?: Array<{ label: string; labelEn?: string; href: string; hrefEn?: string }>;
}

// Page mapping for language switching
const pageMapping: Record<string, string> = {
  '/': '/en',
  '/en': '/',
  '/gamos': '/en/weddings',
  '/en/weddings': '/gamos',
  '/vaptisi': '/en/baptism',
  '/en/baptism': '/vaptisi',
  '/eterikes-ekdiloseis': '/en/corporate-events',
  '/en/corporate-events': '/eterikes-ekdiloseis',
  '/parti': '/en/party',
  '/en/party': '/parti',
  '/ekklisies': '/en/churches',
  '/en/churches': '/ekklisies',
  '/contact': '/en/contact',
  '/epikoinonia': '/en/contact',
  '/en/contact': '/contact',
};

export const Navigation = ({ isScrolled = false, isTransparent = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isEnglish = location.pathname.startsWith('/en');

  const navItemsGreek: NavItem[] = [
    { label: 'ΑΡΧΙΚΗ', labelEn: 'HOME', href: '/', hrefEn: '/en' },
    { label: 'ΕΜΕΙΣ', labelEn: 'ABOUT', href: '/emeis', hrefEn: '/en' },
    { 
      label: 'ΔΕΞΙΩΣΗ', 
      labelEn: 'RECEPTION',
      href: '/dexiosi',
      hrefEn: '/en',
      submenu: [
        { label: 'ΓΑΜΟΣ', labelEn: 'WEDDING', href: '/gamos', hrefEn: '/en/weddings' },
        { label: 'ΒΑΠΤΙΣΗ', labelEn: 'BAPTISM', href: '/vaptisi', hrefEn: '/en/baptism' },
        { label: 'ΕΤΑΙΡΙΚΕΣ ΕΚΔΗΛΩΣΕΙΣ', labelEn: 'CORPORATE EVENTS', href: '/eterikes-ekdiloseis', hrefEn: '/en/corporate-events' },
        { label: 'ΠΑΡΤΙ', labelEn: 'PARTY', href: '/parti', hrefEn: '/en/party' }
      ]
    },
    { label: 'Ο ΧΩΡΟΣ', labelEn: 'THE VENUE', href: '/o-horos', hrefEn: '/en' },
    { label: 'ΕΚΚΛΗΣΙΕΣ', labelEn: 'CHURCHES', href: '/ekklisies', hrefEn: '/en/churches' },
    { 
      label: 'ΥΠΗΡΕΣΙΕΣ', 
      labelEn: 'SERVICES',
      href: '/ypiresies',
      hrefEn: '/en',
      submenu: [
        { label: 'ΔΙΟΡΓΑΝΩΤΗΣ ΓΑΜΩΝ', labelEn: 'WEDDING PLANNER', href: '/diorganotis-gamon', hrefEn: '/en' },
        { label: 'ΦΩΤΟΓΡΑΦΟΣ', labelEn: 'PHOTOGRAPHER', href: '/fotografos', hrefEn: '/en' },
        { label: 'DJ - ΜΟΥΣΙΚΗ', labelEn: 'DJ - MUSIC', href: '/dj-mousiki', hrefEn: '/en' }
      ]
    },
    { label: 'ΚΡΙΤΙΚΕΣ', labelEn: 'REVIEWS', href: '/reviews', hrefEn: '/en' },
    { label: 'ΕΠΙΚΟΙΝΩΝΙΑ', labelEn: 'CONTACT', href: '/contact', hrefEn: '/en/contact' },
  ];

  const navItems = navItemsGreek;

  const bgClass = isTransparent && !isScrolled
    ? 'bg-transparent'
    : 'bg-background/95 backdrop-blur-md border-b border-border supports-[backdrop-filter]:backdrop-blur-md';

  const logoSrc = (isTransparent && !isScrolled) ? logoWhite : logoDark;
  const textColor = (isTransparent && !isScrolled) ? 'text-white' : 'text-foreground';

  const handleDropdownToggle = (label: string) => {
    const newState = openDropdown === label ? null : label;
    setOpenDropdown(newState);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    closeDropdown();
  };

  const handleLanguageSwitch = () => {
    const currentPath = location.pathname;
    const targetPath = pageMapping[currentPath] || (isEnglish ? '/' : '/en');
    navigate(targetPath);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        closeDropdown();
      }
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdown]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    closeDropdown();
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={isEnglish ? "/en" : "/"} className="flex items-center">
            <img
              src={logoSrc}
              alt="Κτήμα Ωρίων"
              className="h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative dropdown-container">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`font-medium text-sm transition-all duration-300 hover:text-[hsl(var(--brand-main))] ${textColor} flex items-center gap-1`}
                    >
                      {isEnglish ? item.labelEn : item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-border z-[9999] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={isEnglish ? (subItem.hrefEn || subItem.href) : subItem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-[hsl(var(--brand-main))]/10 hover:text-[hsl(var(--brand-main))] transition-colors border-b border-border/50 last:border-0"
                            onClick={closeDropdown}
                          >
                            {isEnglish ? subItem.labelEn : subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={isEnglish ? (item.hrefEn || item.href) : item.href}
                    className={`font-medium text-sm transition-all duration-300 hover:text-[hsl(var(--brand-main))] ${textColor}`}
                  >
                    {isEnglish ? item.labelEn : item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side: CTA + Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to={isEnglish ? "/en/contact" : "/contact"}>
              <Button variant="outline" className="button button4">
                {isEnglish ? 'REQUEST' : 'ΖΗΤΗΣΗ'}
              </Button>
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-border">
              <Globe className={`w-4 h-4 ${textColor}`} />
              <button
                onClick={handleLanguageSwitch}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  !isEnglish 
                    ? 'bg-[hsl(var(--brand-main))] text-white shadow-sm' 
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                ΕΛ
              </button>
              <button
                onClick={handleLanguageSwitch}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  isEnglish 
                    ? 'bg-[hsl(var(--brand-main))] text-white shadow-sm' 
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} hover:bg-transparent`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden fixed inset-0 top-20 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="container-max py-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <div className="border-b border-border/30">
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full flex items-center justify-between px-4 py-4 text-foreground font-semibold text-lg hover:text-[hsl(var(--brand-main))] transition-colors"
                      >
                        <span>{isEnglish ? item.labelEn : item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="bg-muted/30 animate-in slide-in-from-top-2 duration-200">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={isEnglish ? (subItem.hrefEn || subItem.href) : subItem.href}
                              className="block px-8 py-4 text-base text-muted-foreground hover:text-[hsl(var(--brand-main))] hover:bg-[hsl(var(--brand-main))]/5 transition-all"
                              onClick={closeMenu}
                            >
                              {isEnglish ? subItem.labelEn : subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={isEnglish ? (item.hrefEn || item.href) : item.href}
                      className="block px-4 py-4 text-foreground font-semibold text-lg hover:text-[hsl(var(--brand-main))] transition-colors border-b border-border/30"
                      onClick={closeMenu}
                    >
                      {isEnglish ? item.labelEn : item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="pt-6 pb-4 px-4">
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <Globe className="w-5 h-5 text-foreground" />
                  <button
                    onClick={handleLanguageSwitch}
                    className={`px-6 py-2.5 text-base font-medium rounded-md transition-all duration-200 ${
                      !isEnglish 
                        ? 'bg-[hsl(var(--brand-main))] text-white shadow-md' 
                        : 'bg-background text-foreground border border-border'
                    }`}
                  >
                    ΕΛ
                  </button>
                  <button
                    onClick={handleLanguageSwitch}
                    className={`px-6 py-2.5 text-base font-medium rounded-md transition-all duration-200 ${
                      isEnglish 
                        ? 'bg-[hsl(var(--brand-main))] text-white shadow-md' 
                        : 'bg-background text-foreground border border-border'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-4 pt-4">
                <Link to={isEnglish ? "/en/contact" : "/contact"} className="block">
                  <Button className="w-full button button4 text-lg py-6">
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