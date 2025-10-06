import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
        { label: 'ΦΩΤΟΓΡΑΦΟΣ', href: '/fotografos' }
      ]
    },
    { label: 'ΚΡΙΤΙΚΕΣ', href: '/reviews' },
    { label: 'ΕΠΙΚΟΙΝΩΝΙΑ', href: '/contact' },
  ];

  const bgClass = isTransparent && !isScrolled
    ? 'bg-transparent'
    : 'bg-background/95 backdrop-blur-md border-b border-border';

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
          <Link to="/" className="flex items-center md:ml-0 ml-8">
            <img
              src={logoSrc}
              alt="Κτήμα Ωρίων"
              className="h-20 w-auto transition-all duration-300"
            />
          </Link>

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
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      if (item.submenu) {
                        const newState = openDropdown === item.label ? null : item.label;
                        setOpenDropdown(newState);
                      } else {
                        window.location.href = item.href;
                        closeMenu();
                      }
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.submenu) {
                        const newState = openDropdown === item.label ? null : item.label;
                        setOpenDropdown(newState);
                      } else {
                        window.location.href = item.href;
                        closeMenu();
                      }
                    }}
                    className="block font-medium text-foreground hover:text-brand-main transition-colors py-2 cursor-pointer select-none"
                  >
                    {item.label} {item.submenu ? '▼' : ''}
                  </div>
                  {item.submenu && openDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-1 bg-gray-50 rounded-md p-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block text-sm text-foreground hover:text-brand-main transition-colors py-2 px-2 rounded hover:bg-white"
                          onClick={closeMenu}
                        >
                          • {subItem.label}
                        </Link>
                      ))}
                    </div>
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