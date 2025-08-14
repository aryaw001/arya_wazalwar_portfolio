import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Switch location={location}>
          <Route path="/" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // match transition duration

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <LoadingOverlay isLoading={isLoading} />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;