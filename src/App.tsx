import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { maintenanceConfig } from "@/config/maintenance";
import { useEffect } from "react";
import Index from "./pages/Index";
import Protocol from "./pages/Protocol";
import Stack from "./pages/Stack";
import Science from "./pages/Science";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Check for maintenance mode
  useEffect(() => {
    if (maintenanceConfig.enabled) {
      window.location.href = maintenanceConfig.redirectPath;
    }
  }, []);

  // Don't render anything if maintenance mode is enabled
  if (maintenanceConfig.enabled) {
    return null;
  }

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/protocol" element={<Protocol />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/science" element={<Science />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
