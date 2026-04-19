import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { DonationBadge } from "@/components/admin/StatusBadge";
import { cursosDeIes, doacaoDeIes, findConsultor, ies } from "@/data/admin-mock";

const Instituicoes = () => (
  <div className="p-6 space-y-6 max-w-[1400px]">
    <div>
      <h1 className="text-2xl font-semibold">Instituições</h1>
      <p className="text-sm text-muted-foreground">Cadastro e estado de cada IES.</p>
    </div>
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Instituição</TableHead>
            <TableHead>Consultor</TableHead>
            <TableHead>Status doação</TableHead>
            <TableHead>Cursos submetidos</TableHead>
            <TableHead>Avaliações</TableHead>
            <TableHead className="w-[160px]">Progresso médio</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ies.map((i) => {
            const cs = cursosDeIes(i.id);
            const submetidos = cs.length;
            const avaliacoes = cs.filter((c) => c.progresso > 0).length;
            const media = cs.length ? Math.round(cs.reduce((a, c) => a + c.progresso, 0) / cs.length) : 0;
            const consultor = findConsultor(i.consultorId);
            return (
              <TableRow key={i.id}>
                <TableCell>
                  <div className="font-medium">{i.sigla}{i.bloqueada && <span className="ml-2 text-xs text-destructive">(bloqueada)</span>}</div>
                  <div className="text-xs text-muted-foreground">{i.nome} · {i.cidade}</div>
                </TableCell>
                <TableCell className="text-sm">{consultor?.nome ?? "—"}</TableCell>
                <TableCell><DonationBadge status={doacaoDeIes(i.id)?.status ?? "sem"} /></TableCell>
                <TableCell>{submetidos}</TableCell>
                <TableCell>{avaliacoes}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={media} className="h-2" />
                    <span className="text-xs text-muted-foreground w-10">{media}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right space-x-1">
                  <Button size="sm" variant="ghost">Atribuir</Button>
                  <Button size="sm" variant="ghost">{i.bloqueada ? "Desbloquear" : "Bloquear"}</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  </div>
);

export default Instituicoes;
