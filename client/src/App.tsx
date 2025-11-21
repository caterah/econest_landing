import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Custom hook to handle GitHub Pages base path
function useHashLocation(): [string, (path: string) => void] {
  const [location, setLocation] = useLocation();
  
  // For GitHub Pages, we need to use hash-based routing
  const hashLocation = location.startsWith('/econest_landing/') 
    ? location.replace('/econest_landing/', '/')
    : location;

  return [hashLocation, setLocation];
}

function Router() {
  const [location] = useHashLocation();
  
  return (
    <Switch location={location}>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

