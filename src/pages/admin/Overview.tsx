import { Building2, UserCheck, Activity, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CursoStatusBadge, DonationBadge } from "@/components/admin/StatusBadge";
import { cursos, doacaoDeIes, findConsultor, findIes, ies } from "@/data/admin-mock";

const Kpi = ({ icon: Icon, label, value, tone }: { icon: any; label: string; value: number; tone: string }) => (
  <Card className="p-5 flex items-center gap-4">
    <div className={`h-11 w-11 rounded-lg flex items-center justify-center ${tone}`}>
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  </Card>
);

const Overview = () => {
  const aguardandoDoacao = ies.filter((i) => {
    const d = doacaoDeIes(i.id);
    return !d || d.status === "sem" || d.status === "expirada";
  }).length;
  const comConsultor = ies.filter((i) => i.consultorId).length;
  const emAndamento = cursos.filter((c) => ["Em Avaliação", "Consultor Atribuído", "Ajustes"].includes(c.status)).length;
  const atrasadas = cursos.filter((c) => new Date(c.prazo) < new Date("2026-05-01") && c.progresso < 100).length;

  const linhas = ies.map((i) => {
    const d = doacaoDeIes(i.id);
    const consultor = findConsultor(i.consultorId);
    const cs = cursos.filter((c) => c.iesId === i.id);
    const pendentes = cs.filter((c) => c.progresso < 100).length;
    const principal = cs[0];
    return { ies: i, d, consultor, pendentes, principal };
  });

  return (
    <div className="p-6 space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-2xl font-semibold">Visão Geral</h1>
        <p className="text-sm text-muted-foreground">Operação consolidada das auto-avaliações.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Kpi icon={Building2} label="IES aguardando doação" value={aguardandoDoacao} tone="bg-warning-soft text-warning" />
        <Kpi icon={UserCheck} label="IES com consultor ativo" value={comConsultor} tone="bg-success-soft text-success" />
        <Kpi icon={Activity} label="Avaliações em andamento" value={emAndamento} tone="bg-info-soft text-info" />
        <Kpi icon={AlertTriangle} label="Avaliações atrasadas" value={atrasadas} tone="bg-destructive/10 text-destructive" />
      </div>

      <Card>
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <div>
            <div className="font-semibold">Tabela operacional</div>
            <div className="text-xs text-muted-foreground">IES · consultor · doação · progresso</div>
          </div>
          <Button variant="outline" size="sm">Exportar</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>IES</TableHead>
              <TableHead>Consultor</TableHead>
              <TableHead>Cursos pendentes</TableHead>
              <TableHead>Doação</TableHead>
              <TableHead>Etapa</TableHead>
              <TableHead className="w-[180px]">Progresso</TableHead>
              <TableHead>Prazo</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {linhas.map(({ ies: i, d, consultor, pendentes, principal }) => (
              <TableRow key={i.id}>
                <TableCell>
                  <div className="font-medium">{i.sigla}</div>
                  <div className="text-xs text-muted-foreground">{i.nome}</div>
                </TableCell>
                <TableCell className="text-sm">{consultor?.nome ?? <span className="text-muted-foreground">—</span>}</TableCell>
                <TableCell>{pendentes}</TableCell>
                <TableCell><DonationBadge status={d?.status ?? "sem"} /></TableCell>
                <TableCell>{principal ? <CursoStatusBadge status={principal.status} /> : <span className="text-muted-foreground">—</span>}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={principal?.progresso ?? 0} className="h-2" />
                    <span className="text-xs text-muted-foreground w-10">{principal?.progresso ?? 0}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{principal?.prazo ?? "—"}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">Abrir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Overview;
