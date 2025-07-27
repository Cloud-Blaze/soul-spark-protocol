import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Protocol from "./pages/Protocol";
import ClarityReset from "./pages/ClarityReset";
import { ChooseClarity } from "./pages/ChooseClarity";
import KidsProtocol from "./pages/KidsProtocol";
import Stack from "./pages/Stack";
import Science from "./pages/Science";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import FoggedGeneration from "./pages/blog/FoggedGeneration";
import NervousSystemRenaissance from "./pages/blog/NervousSystemRenaissance";
import CourtOrderedClarity from "./pages/blog/CourtOrderedClarity";
import AlcoholBanRipple from "./pages/blog/AlcoholBanRipple";
import ArtworkReturns from "./pages/blog/ArtworkReturns";
import ClosetAnxiety from "./pages/blog/ClosetAnxiety";
import EndOfPsycheGatekeeping from "./pages/blog/EndOfPsycheGatekeeping";
import FunWithoutNumbing from "./pages/blog/FunWithoutNumbing";
import InfiniteScrollZombification from "./pages/blog/InfiniteScrollZombification";
import JesusAndTheHolocene from "./pages/blog/JesusAndTheHolocene";
import PoliticsAndCompassion from "./pages/blog/PoliticsAndCompassion";
import PreDigitalMemoryReawakening from "./pages/blog/PreDigitalMemoryReawakening";
import ReducedDeaths from "./pages/blog/ReducedDeaths";
import TrueMarriageHealing from "./pages/blog/TrueMarriageHealing";
import YoureNotFailing from "./pages/blog/YoureNotFailing";
import OrbitingTheFog from "./pages/blog/OrbitingTheFog";
import FogAndReturn from "./pages/blog/FogAndReturn";

import BeforeTheCoffee from "./pages/blog/BeforeTheCoffee";
import MarriageHealing from "./pages/blog/MarriageHealing";
import UnblockedProductivity from "./pages/blog/UnblockedProductivity";
import SystemsThatFailedUs from "./pages/blog/SystemsThatFailedUs";
import EarthCanBreathe from "./pages/blog/EarthCanBreathe";
import CrossFunctionalDoctors from "./pages/blog/CrossFunctionalDoctors";
import HolyReset from "./pages/blog/HolyReset";
import BluePillLoop from "./pages/blog/BluePillLoop";
import StressDrainage from "./pages/blog/StressDrainage";
import NotCrazyWakingUp from "./pages/blog/NotCrazyWakingUp";
import DoctorGap from "./pages/blog/DoctorGap";
import CholesterolConnection from "./pages/blog/CholesterolConnection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/clarity-reset" element={<ClarityReset />} />
            <Route path="/choose-clarity" element={<ChooseClarity />} />
            <Route path="/kids-protocol" element={<KidsProtocol />} />
            <Route path="/stack" element={<Stack />} />
          <Route path="/science" element={<Science />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/youre-not-failing" element={<YoureNotFailing />} />
          <Route path="/blog/orbiting-the-fog" element={<OrbitingTheFog />} />
          <Route path="/blog/fog-and-return" element={<FogAndReturn />} />
          
          <Route path="/blog/before-the-coffee" element={<BeforeTheCoffee />} />
          <Route path="/blog/systems-that-failed-us" element={<SystemsThatFailedUs />} />
          <Route path="/blog/earth-can-breathe" element={<EarthCanBreathe />} />
          <Route path="/blog/fogged-generation" element={<FoggedGeneration />} />
          <Route path="/blog/nervous-system-renaissance" element={<NervousSystemRenaissance />} />
          <Route path="/blog/court-ordered-clarity" element={<CourtOrderedClarity />} />
          <Route path="/blog/alcohol-ban-ripple" element={<AlcoholBanRipple />} />
          <Route path="/blog/artwork-returns" element={<ArtworkReturns />} />
          <Route path="/blog/closet-anxiety" element={<ClosetAnxiety />} />
          <Route path="/blog/end-of-psyche-gatekeeping" element={<EndOfPsycheGatekeeping />} />
          <Route path="/blog/fun-without-numbing" element={<FunWithoutNumbing />} />
          <Route path="/blog/infinite-scroll-zombification" element={<InfiniteScrollZombification />} />
          <Route path="/blog/jesus-and-the-holocene" element={<JesusAndTheHolocene />} />
          <Route path="/blog/politics-and-compassion" element={<PoliticsAndCompassion />} />
          <Route path="/blog/pre-digital-memory-reawakening" element={<PreDigitalMemoryReawakening />} />
          <Route path="/blog/reduced-deaths" element={<ReducedDeaths />} />
          <Route path="/blog/marriage-healing" element={<MarriageHealing />} />
          <Route path="/blog/true-marriage-healing" element={<TrueMarriageHealing />} />
          <Route path="/blog/unblocked-productivity" element={<UnblockedProductivity />} />
          <Route path="/blog/cross-functional-doctors" element={<CrossFunctionalDoctors />} />
          <Route path="/blog/holy-reset" element={<HolyReset />} />
          <Route path="/blog/blue-pill-loop" element={<BluePillLoop />} />
          <Route path="/blog/stress-drainage" element={<StressDrainage />} />
          <Route path="/blog/not-crazy-waking-up" element={<NotCrazyWakingUp />} />
          <Route path="/blog/doctor-gap" element={<DoctorGap />} />
          <Route path="/blog/cholesterol-connection" element={<CholesterolConnection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
