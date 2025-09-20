import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Κτήμα Ωρίων - Μαγευτικός χώρος για εκδηλώσεις"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Κτήμα <span className="text-gradient-brand">Ωρίων</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          Διοργάνωση Εκδηλώσεων - Κερατέα
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
          Ένας υπέροχος καταπράσινος χώρος, όπου η πολυτέλεια συναντά το φυσικό περιβάλλον. 
          Δημιουργήστε αξέχαστες αναμνήσεις για τον γάμο ή τη βάπτιση σας σε έναν μαγευτικό χώρο 
          που συνδυάζει κομψότητα και φυσική ομορφιά.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="btn-elegant text-lg px-10 py-4">
            Εξερεύνηση Υπηρεσιών
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-10 py-4">
            Επικοινωνία
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/70 w-8 h-8" />
      </div>
    </section>
  );
};