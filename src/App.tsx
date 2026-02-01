import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Places from "./pages/Places";
import PlaceDetail from "./pages/PlaceDetail";
import Culture from "./pages/Culture";
import History from "./pages/History";
import Festivals from "./pages/Festivals";
import Stay from "./pages/Stay";
import Travel from "./pages/Travel";
import MapView from "./pages/MapView";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Research from "./pages/Research";
import Wishlist from "./pages/Wishlist";
import Itinerary from "./pages/Itinerary";
import Gallery from "./pages/Gallery";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:id" element={<PlaceDetail />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/history" element={<History />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/stay" element={<Stay />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/research" element={<Research />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
