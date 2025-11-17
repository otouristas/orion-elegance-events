import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// English pages
import IndexEn from "./pages/english/IndexEn";
import WeddingsEn from "./pages/english/WeddingsEn";
import ChurchesEn from "./pages/english/ChurchesEn";
import BaptismEn from "./pages/english/BaptismEn";
import PartyEn from "./pages/english/PartyEn";
import CorporateEventsEn from "./pages/english/CorporateEventsEn";
import ContactEn from "./pages/english/ContactEn";
import AboutEn from "./pages/english/AboutEn";
import PhotographerEn from "./pages/english/PhotographerEn";
import DjMusicEn from "./pages/english/DjMusicEn";
import VenueEn from "./pages/english/VenueEn";
import ReviewsEn from "./pages/english/ReviewsEn";
import ReceptionEn from "./pages/english/ReceptionEn";
import ServicesEn from "./pages/english/ServicesEn";

// Greek pages
import Ekklisies from "./pages/greek/Ekklisies";
import Parti from "./pages/greek/Parti";
import Vaptisi from "./pages/greek/Vaptisi";
import Gamos from "./pages/greek/Gamos";
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
import Blog from "./pages/greek/Blog";
import BlogPost from "./pages/greek/BlogPost";
import BlogEn from "./pages/english/BlogEn";
import BlogPostEn from "./pages/english/BlogPostEn";

// SEO Greek pages
import KtimaGamouAthina from "./pages/greek/seo/KtimaGamouAthina";
import KtimataVaptisisAthina from "./pages/greek/seo/KtimataVaptisisAthina";
import EkklisiakiDiplaStThalassa from "./pages/greek/seo/EkklisiakiDiplaStThalassa";
import KtimaGamouAthensRiviera from "./pages/greek/seo/KtimaGamouAthensRiviera";
import AgiosAlexandrosDaskaleio from "./pages/greek/seo/churches/AgiosAlexandrosDaskaleio";
import ProfitisIliasThoriko from "./pages/greek/seo/churches/ProfitisIliasThoriko";
import AgiosPanteleimonasKeratea from "./pages/greek/seo/churches/AgiosPanteleimonasKeratea";
import PanagiaGkarika from "./pages/greek/seo/churches/PanagiaGkarika";

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
          
          {/* English Routes */}
          <Route path="/en" element={<IndexEn />} />
          <Route path="/en/about" element={<AboutEn />} />
          <Route path="/en/reception" element={<ReceptionEn />} />
          <Route path="/en/weddings" element={<WeddingsEn />} />
          <Route path="/en/baptism" element={<BaptismEn />} />
          <Route path="/en/corporate-events" element={<CorporateEventsEn />} />
          <Route path="/en/party" element={<PartyEn />} />
          <Route path="/en/venue" element={<VenueEn />} />
          <Route path="/en/churches" element={<ChurchesEn />} />
          <Route path="/en/services" element={<ServicesEn />} />
          <Route path="/en/photographer" element={<PhotographerEn />} />
          <Route path="/en/dj-music" element={<DjMusicEn />} />
          <Route path="/en/reviews" element={<ReviewsEn />} />
          <Route path="/en/contact" element={<ContactEn />} />
          <Route path="/en/blog" element={<BlogEn />} />
          <Route path="/en/blog/:slug" element={<BlogPostEn />} />
          
          {/* Redirect wedding planner to homepage */}
          <Route path="/en/wedding-planner" element={<IndexEn />} />
          
          {/* Greek Routes */}
          <Route path="/ekklisies" element={<Ekklisies />} />
          <Route path="/parti" element={<Parti />} />
          <Route path="/vaptisi" element={<Vaptisi />} />
          <Route path="/gamos" element={<Gamos />} />
          <Route path="/emeis" element={<Emeis />} />
          <Route path="/request" element={<Request />} />
          <Route path="/reviews" element={<Reviews />} />
          
          {/* Redirect wedding planner to homepage */}
          <Route path="/diorganotis-gamon" element={<Index />} />
          <Route path="/eterikes-ekdiloseis" element={<EterikesEkdiloseis />} />
          <Route path="/o-horos" element={<OHoros />} />
          <Route path="/fotografos" element={<Fotografos />} />
          <Route path="/dj-mousiki" element={<DjMousiki />} />
          <Route path="/dexiosi" element={<Dexiosi />} />
          <Route path="/ypiresies" element={<Ypiresies />} />
          <Route path="/contact" element={<Epikoinonia />} />
          <Route path="/epikoinonia" element={<Epikoinonia />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* SEO Greek Routes */}
          <Route path="/el/ktima-gamou-athina" element={<KtimaGamouAthina />} />
          <Route path="/el/ktimata-vaptisis-athina" element={<KtimataVaptisisAthina />} />
          <Route path="/el/ekklisiaki-dipla-sti-thalassa" element={<EkklisiakiDiplaStThalassa />} />
          <Route path="/el/ktima-gamou-athens-riviera" element={<KtimaGamouAthensRiviera />} />
          <Route path="/el/ekklisies/agios-alexandros-daskaleio" element={<AgiosAlexandrosDaskaleio />} />
          <Route path="/el/ekklisies/profitis-ilias-thoriko" element={<ProfitisIliasThoriko />} />
          <Route path="/el/ekklisies/agios-panteleimonas-keratea" element={<AgiosPanteleimonasKeratea />} />
          <Route path="/el/ekklisies/panagia-gkarika" element={<PanagiaGkarika />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
