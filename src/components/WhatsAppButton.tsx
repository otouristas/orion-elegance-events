import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const WhatsAppButton = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  const phoneNumber = '306981889560'; // Format: country code + phone without +
  const message = isEnglish 
    ? 'Hello! I would like information about Ktima Orion...'
    : 'Γεια σας! Θα ήθελα πληροφορίες για το Κτήμα Ωρίων...';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group animate-in fade-in slide-in-from-bottom-4"
      aria-label={isEnglish ? "Contact us on WhatsApp" : "Επικοινωνήστε μαζί μας στο WhatsApp"}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {isEnglish ? 'Chat with us' : 'Στείλτε μήνυμα'}
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </a>
  );
};
