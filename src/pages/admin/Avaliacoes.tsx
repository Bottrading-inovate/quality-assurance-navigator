import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CursoStatusBadge, DonationBadge } from "@/components/admin/StatusBadge";
import { cursos, doacaoDeIes, findConsultor, findIes } from "@/data/admin-mock";

const Avaliacoes = () => (
  <div className="p-6 space-y-6 max-w-[1400px]">
    <div>
      <h1 className="text-2xl font-semibold">Avaliações</h1>
      <p className="text-sm text-muted-foreground">Cursos submetidos e seu estado actual.</p>
    </div>
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Curso</TableHead>
            <TableHead>IES</TableHead>
            <TableHead>Consultor</TableHead>
            <TableHead>Doação</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[160px]">Progresso</TableHead>
            <TableHead>Prazo</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cursos.map((c) => {
            const i = findIes(c.iesId)!;
            const consultor = findConsultor(i.consultorId);
            const d = doacaoDeIes(i.id);
            return (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.nome}</TableCell>
                <TableCell>{i.sigla}</TableCell>
                <TableCell className="text-sm">{consultor?.nome ?? "—"}</TableCell>
                <TableCell><DonationBadge status={d?.status ?? "sem"} /></TableCell>
                <TableCell><CursoStatusBadge status={c.status} /></TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={c.progresso} className="h-2" />
                    <span className="text-xs text-muted-foreground w-10">{c.progresso}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{c.prazo}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">Resetar</Button>
                  <Button size="sm" variant="ghost">Liberar</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  </div>
);

export default Avaliacoes;
