import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import GraphicDesign from "@/pages/services/GraphicDesign";
import WebDevelopment from "@/pages/services/WebDevelopment";
import AICreation from "@/pages/services/AICreation";
import Photography from "@/pages/services/Photography";
import backgroundImage from "@assets/stock_images/abstract_purple_grad_aa2a46ef.jpg";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/graphic-design" component={GraphicDesign} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/ai-creation" component={AICreation} />
      <Route path="/services/photography" component={Photography} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          {/* Background for non-home pages */}
          <div className="fixed inset-0 z-0">
            <img
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80 dark:bg-background/90 transition-colors duration-500" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>

          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
