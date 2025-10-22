import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logoDark from '@/assets/logo-dark.png';
import logoWhite from '@/assets/logo-white.png';

interface NavigationProps {
  isScrolled?: boolean;
  isTransparent?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  submenu?: Array<{ label: string; href: string }>;
}

export const Navigation = ({ isScrolled = false, isTransparent = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const navItems: NavItem[] = [
    { label: 'ΑΡΧΙΚΗ', href: '/' },
    { label: 'ΕΜΕΙΣ', href: '/emeis' },
    { 
      label: 'ΔΕΞΙΩΣΗ', 
      href: '/dexiosi',
      submenu: [
        { label: 'ΓΑΜΟΣ', href: '/gamos' },
        { label: 'ΒΑΠΤΙΣΗ', href: '/vaptisi' },
        { label: 'ΕΤΑΙΡΙΚΕΣ ΕΚΔΗΛΩΣΕΙΣ', href: '/eterikes-ekdiloseis' },
        { label: 'ΠΑΡΤΙ', href: '/parti' }
      ]
    },
    { label: 'Ο ΧΩΡΟΣ', href: '/o-horos' },
    { label: 'ΕΚΚΛΗΣΙΕΣ', href: '/ekklisies' },
    { 
      label: 'ΥΠΗΡΕΣΙΕΣ', 
      href: '/ypiresies',
      submenu: [
        { label: 'ΔΙΟΡΓΑΝΩΤΗΣ ΓΑΜΩΝ', href: '/diorganotis-gamon' },
        { label: 'ΦΩΤΟΓΡΑΦΟΣ', href: '/fotografos' },
        { label: 'DJ - ΜΟΥΣΙΚΗ', href: '/dj-mousiki' }
      ]
    },
    { label: 'ΚΡΙΤΙΚΕΣ', href: '/reviews' },
    { label: 'ΕΠΙΚΟΙΝΩΝΙΑ', href: '/contact' },
  ];

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.relative')) {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={isEnglish ? "/en" : "/"} className="flex items-center md:ml-0 ml-8">
            <img
              src={logoSrc}
              alt="Κτήμα Ωρίων"
              className="h-20 w-auto transition-all duration-300"
            />
          </Link>
          
          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <Globe className={`w-5 h-5 ${textColor}`} />
            <Link 
              to="/" 
              className={`px-3 py-1 rounded transition-colors ${!isEnglish ? 'bg-brand-main text-white' : textColor + ' hover:text-brand-main'}`}
            >
              ΕΛ
            </Link>
            <Link 
              to="/en" 
              className={`px-3 py-1 rounded transition-colors ${isEnglish ? 'bg-brand-main text-white' : textColor + ' hover:text-brand-main'}`}
            >
              EN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.submenu) {
                      handleDropdownToggle(item.label);
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  className={`font-medium transition-all duration-300 hover:text-brand-main ${textColor}`}
                >
                  {item.label}
                </a>
                
                {/* Dropdown Menu */}
                {item.submenu && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-[9999]">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          onClick={closeDropdown}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="/contact">
              <Button variant="outline" className="button button4">
                ΖΗΤΗΣΗ
              </Button>
            </a>
          </div>

          {/* Language Switcher - Mobile */}
          <div className="flex md:hidden items-center gap-2 mr-2">
            <Globe className={`w-5 h-5 ${textColor}`} />
            <Link 
              to="/" 
              className={`px-2 py-1 text-sm rounded transition-colors ${!isEnglish ? 'bg-brand-main text-white' : textColor + ' hover:text-brand-main'}`}
            >
              ΕΛ
            </Link>
            <Link 
              to="/en" 
              className={`px-2 py-1 text-sm rounded transition-colors ${isEnglish ? 'bg-brand-main text-white' : textColor + ' hover:text-brand-main'}`}
            >
              EN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={textColor}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-md border-t shadow-2xl z-50">
            <div className="container-max py-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border/30 last:border-0">
                  {item.submenu ? (
                    <div>
                      <div className="flex items-center">
                        <a
                          href={item.href}
                          className="flex-1 px-4 py-4 text-foreground hover:text-brand-main transition-colors font-semibold text-base"
                          onClick={closeMenu}
                        >
                          {item.label}
                        </a>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="px-4 py-4 text-foreground hover:text-brand-main transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      {openDropdown === item.label && (
                        <div className="bg-muted/20 py-1 animate-in slide-in-from-top-2 duration-200">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-8 py-3 text-sm text-muted-foreground hover:text-brand-main hover:bg-brand-main/10 transition-all duration-200 min-h-[44px] flex items-center"
                              onClick={closeMenu}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-4 text-foreground hover:text-brand-main transition-colors font-semibold text-base min-h-[44px] flex items-center"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-3 border-t border-border">
                <a href="/contact" className="block">
                  <Button className="w-full button button4">
                    ΖΗΤΗΣΗ
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};