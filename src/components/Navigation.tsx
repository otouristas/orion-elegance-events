import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logoDark from '@/assets/logo-dark.png';
import logoWhite from '@/assets/logo-white.png';

interface NavigationProps {
  isScrolled?: boolean;
  isTransparent?: boolean;
}

export const Navigation = ({ isScrolled = false, isTransparent = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { label: 'Αρχική', href: '/' },
    { label: 'Εμείς', href: '/emeis' },
    { 
      label: 'Δεξίωση', 
      href: '/dexiosi',
      submenu: [
        { label: 'Γάμος', href: '/gamos' },
        { label: 'Βάπτιση', href: '/vaptisi' },
        { label: 'Εταιρικές Εκδηλώσεις', href: '/eterikes-ekdiloseis' },
        { label: 'Πάρτι', href: '/parti' }
      ]
    },
    { label: 'Ο Χώρος', href: '/o-horos' },
    { label: 'Εκκλησίες', href: '/ekklisies' },
    { 
      label: 'Υπηρεσίες', 
      href: '/ypiresies',
      submenu: [
        { label: 'Διοργανωτής Γάμων', href: '/diorganotis-gamon' },
        { label: 'Φωτογράφος', href: '/fotografos' }
      ]
    },
    { label: 'Κριτικές', href: '/reviews' },
    { label: 'Επικοινωνία', href: '/contact' },
  ];

  const bgClass = isTransparent && !isScrolled
    ? 'bg-transparent'
    : 'bg-background/95 backdrop-blur-md border-b border-border';

  const logoSrc = (isTransparent && !isScrolled) ? logoWhite : logoDark;
  const textColor = (isTransparent && !isScrolled) ? 'text-white' : 'text-foreground';

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo - More to the right on mobile */}
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
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center space-x-1 font-medium transition-all duration-300 hover:text-brand-main ${textColor}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border z-50">
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm text-foreground hover:bg-brand-main/10 hover:text-brand-main transition-colors"
                              onClick={closeDropdown}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-all duration-300 hover:text-brand-main ${textColor}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" className="button button4">
              ΖΗΤΗΣΗ
            </Button>
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
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full font-medium text-foreground hover:text-brand-main transition-colors py-1"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-brand-main transition-colors py-0.5"
                              onClick={() => {
                                setIsMenuOpen(false);
                                closeDropdown();
                              }}
                            >
                              • {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block font-medium text-foreground hover:text-brand-main transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-3 border-t border-border">
                <Button className="w-full button button4">
                  ΖΗΤΗΣΗ
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};