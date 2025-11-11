import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const ContactFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const phoneNumber = '+306981889560';
  const whatsappUrl = `https://wa.me/306981889560?text=${encodeURIComponent(
    isEnglish 
      ? 'Hello! I would like information about Ktima Orion...'
      : 'Γεια σας! Θα ήθελα πληροφορίες για το Κτήμα Ωρίων...'
  )}`;
  const viberUrl = `viber://chat?number=${encodeURIComponent(phoneNumber)}`;

  return (
    <div className="fixed bottom-24 right-6 z-[51] flex flex-col items-end gap-3">
      {/* WhatsApp & Viber Options - Show when open */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            aria-label={isEnglish ? "Contact us on WhatsApp" : "Επικοινωνήστε μαζί μας στο WhatsApp"}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-medium pr-2">WhatsApp</span>
          </a>

          <a
            href={viberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#665CAC] hover:bg-[#59519A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            aria-label={isEnglish ? "Contact us on Viber" : "Επικοινωνήστε μαζί μας στο Viber"}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-medium pr-2">Viber</span>
          </a>
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-brand-main hover:bg-brand-dark text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label={isEnglish ? "Contact us" : "Επικοινωνήστε μαζί μας"}
      >
        {isOpen ? (
          <X className="w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:rotate-90" />
        ) : (
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        )}
        
        {/* Tooltip - only show when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {isEnglish ? 'Contact Us' : 'Επικοινωνία'}
          </span>
        )}
        
        {/* Pulse animation - only when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-brand-main animate-ping opacity-20"></span>
        )}
      </button>
    </div>
  );
};
