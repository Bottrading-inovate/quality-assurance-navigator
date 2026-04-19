import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Inbox,
  ClipboardCheck,
  Users,
  Building2,
  Award,
  HandCoins,
  Shield,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/admin", end: true, label: "Visão Geral", icon: LayoutDashboard },
  { to: "/admin/solicitacoes", label: "Solicitações de Acesso", icon: Inbox },
  { to: "/admin/avaliacoes", label: "Avaliações", icon: ClipboardCheck },
  { to: "/admin/consultores", label: "Consultores", icon: Users },
  { to: "/admin/instituicoes", label: "Instituições", icon: Building2 },
  { to: "/admin/acreditacoes", label: "Acreditações", icon: Award },
  { to: "/admin/doacoes", label: "Doações", icon: HandCoins },
  { to: "/admin/permissoes", label: "Permissões", icon: Shield },
];

export const AdminLayout = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <aside className="w-[260px] shrink-0 border-r bg-card flex flex-col">
        <div className="px-6 py-5 border-b">
          <div className="text-xs text-muted-foreground tracking-widest">SNAAIES</div>
          <div className="font-semibold text-primary">Admin Console</div>
        </div>
        <nav className="flex-1 overflow-y-auto py-3">
          {items.map(({ to, end, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-5 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-primary-soft text-primary font-medium border-l-2 border-primary"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground border-l-2 border-transparent",
                )
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t px-5 py-4 text-xs text-muted-foreground">
          Protótipo · sem autenticação
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b bg-card flex items-center justify-between px-6">
          <div className="text-sm text-muted-foreground">Painel administrativo</div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md hover:bg-muted text-muted-foreground">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-destructive" />
            </button>
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
              AD
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
