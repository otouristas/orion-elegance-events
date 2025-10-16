import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Greek pages
import Ekklisies from "./pages/greek/Ekklisies";
import Parti from "./pages/greek/Parti";
import Vaptisi from "./pages/greek/Vaptisi";
import Gamos from "./pages/greek/Gamos";
import DiorganotisGamon from "./pages/greek/DiorganotisGamon";
import Emeis from "./pages/greek/Emeis";
import Request from "./pages/greek/Request";
import Reviews from "./pages/greek/Reviews";
import EterikesEkdiloseis from "./pages/greek/EterikesEkdiloseis";
import OHoros from "./pages/greek/OHoros";
import Fotografos from "./pages/greek/Fotografos";
import Dexiosi from "./pages/greek/Dexiosi";
import Ypiresies from "./pages/greek/Ypiresies";
import Epikoinonia from "./pages/greek/Epikoinonia";
import Gallery from "./pages/greek/Gallery";
import DjMousiki from "./pages/greek/DjMousiki";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Greek Routes */}
          <Route path="/ekklisies" element={<Ekklisies />} />
          <Route path="/parti" element={<Parti />} />
          <Route path="/vaptisi" element={<Vaptisi />} />
          <Route path="/gamos" element={<Gamos />} />
          <Route path="/diorganotis-gamon" element={<DiorganotisGamon />} />
          <Route path="/emeis" element={<Emeis />} />
          <Route path="/request" element={<Request />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/eterikes-ekdiloseis" element={<EterikesEkdiloseis />} />
          <Route path="/o-horos" element={<OHoros />} />
          <Route path="/fotografos" element={<Fotografos />} />
          <Route path="/dj-mousiki" element={<DjMousiki />} />
          <Route path="/dexiosi" element={<Dexiosi />} />
          <Route path="/ypiresies" element={<Ypiresies />} />
          <Route path="/contact" element={<Epikoinonia />} />
          <Route path="/epikoinonia" element={<Epikoinonia />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
