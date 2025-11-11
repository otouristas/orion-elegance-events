import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
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
    <>
      {/* Backdrop when open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[48]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-[51] flex flex-col items-end gap-3">
      {/* WhatsApp & Viber Options - Show when open */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 relative z-[52]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            aria-label={isEnglish ? "Contact us on WhatsApp" : "Επικοινωνήστε μαζί μας στο WhatsApp"}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold pr-2">WhatsApp</span>
          </a>

          <a
            href={viberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#665CAC] hover:bg-[#59519A] text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
            aria-label={isEnglish ? "Contact us on Viber" : "Επικοινωνήστε μαζί μας στο Viber"}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold pr-2">Viber</span>
          </a>
        </div>
      )}

      {/* Main FAB Button with Phone Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-16 h-16 md:w-18 md:h-18 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group z-[52]"
        aria-label={isEnglish ? "Contact us" : "Επικοινωνήστε μαζί μας"}
      >
        {isOpen ? (
          <X className="w-8 h-8 md:w-9 md:h-9 transition-transform group-hover:rotate-90" />
        ) : (
          <Phone className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-110 transition-transform" />
        )}
        
        {/* Tooltip - only show when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 px-4 py-2.5 bg-foreground text-background text-sm font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
            {isEnglish ? 'Contact Us' : 'Επικοινωνία'}
          </span>
        )}
        
        {/* Pulse animation - only when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        )}
      </button>
    </div>
    </>
  );
};
