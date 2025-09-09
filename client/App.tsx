import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-extrabold tracking-tight text-lg">
          許猷朗
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-foreground/70 hover:text-foreground">About</a>
          <a href="#skills" className="text-foreground/70 hover:text-foreground">Skills</a>
          <a href="#experience" className="text-foreground/70 hover:text-foreground">Experience</a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button size="sm">Get in touch</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/70">© {new Date().getFullYear()} 許猷朗 — All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#top" className="hover:text-primary">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div id="top" className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
