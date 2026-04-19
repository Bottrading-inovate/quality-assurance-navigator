import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { AdminLayout } from "./components/admin/AdminLayout";
import Overview from "./pages/admin/Overview";
import Solicitacoes from "./pages/admin/Solicitacoes";
import Avaliacoes from "./pages/admin/Avaliacoes";
import Consultores from "./pages/admin/Consultores";
import Instituicoes from "./pages/admin/Instituicoes";
import Acreditacoes from "./pages/admin/Acreditacoes";
import Doacoes from "./pages/admin/Doacoes";
import Permissoes from "./pages/admin/Permissoes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Overview />} />
            <Route path="solicitacoes" element={<Solicitacoes />} />
            <Route path="avaliacoes" element={<Avaliacoes />} />
            <Route path="consultores" element={<Consultores />} />
            <Route path="instituicoes" element={<Instituicoes />} />
            <Route path="acreditacoes" element={<Acreditacoes />} />
            <Route path="doacoes" element={<Doacoes />} />
            <Route path="permissoes" element={<Permissoes />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
