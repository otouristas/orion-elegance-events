import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoDark from '@/assets/logo-dark.png';
import logoWhite from '@/assets/logo-white.png';

interface NavigationProps {
  isScrolled?: boolean;
  isTransparent?: boolean;
}

export const Navigation = ({ isScrolled = false, isTransparent = false }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Αρχική', href: '#home' },
    { label: 'Υπηρεσίες', href: '#services' },
    { label: 'Εμείς', href: '#about' },
    { label: 'Εκκλησίες', href: '#churches' },
    { label: 'Επικοινωνία', href: '#contact' },
  ];

  const bgClass = isTransparent && !isScrolled 
    ? 'bg-transparent' 
    : 'bg-background/95 backdrop-blur-md border-b border-border';

  const logoSrc = (isTransparent && !isScrolled) ? logoWhite : logoDark;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoSrc} 
              alt="Κτήμα Ωρίων" 
              className="h-12 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:text-brand-main ${
                  isTransparent && !isScrolled 
                    ? 'text-white hover:text-brand-main' 
                    : 'text-foreground hover:text-brand-main'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" className="btn-elegant">
              Κλείστε Ραντεβού
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isTransparent && !isScrolled ? 'text-white' : 'text-foreground'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block font-medium text-foreground hover:text-brand-main transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full btn-elegant">
                Κλείστε Ραντεβού
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};