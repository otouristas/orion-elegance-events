import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md animate-in slide-in-from-bottom-5 duration-500">
      <div className="card-elegant p-6 shadow-2xl border-2 border-brand-main/20">
        <button
          onClick={declineCookies}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-lg font-bold mb-3 text-gradient-brand pr-6">
          Χρήση Cookies
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στην ιστοσελίδα μας. 
          Συνεχίζοντας την περιήγησή σας, συμφωνείτε με τη χρήση cookies.
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="button button4 text-sm px-4 py-2 flex-1"
          >
            Αποδοχή
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
          >
            Απόρριψη
          </button>
        </div>
      </div>
    </div>
  );
};
