import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/admin/StatusBadge";
import { consultores, cursosDeConsultor, iesDeConsultor } from "@/data/admin-mock";

const Consultores = () => (
  <div className="p-6 space-y-6 max-w-[1400px]">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Consultores</h1>
        <p className="text-sm text-muted-foreground">Carga de trabalho e atribuições por consultor.</p>
      </div>
      <Button>Novo consultor</Button>
    </div>
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Consultor</TableHead>
            <TableHead>IES atribuídas</TableHead>
            <TableHead>Cursos pendentes</TableHead>
            <TableHead>Atrasos</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {consultores.map((c) => {
            const iesList = iesDeConsultor(c.id);
            const cs = cursosDeConsultor(c.id);
            const pendentes = cs.filter((x) => x.progresso < 100).length;
            const atrasos = cs.filter((x) => new Date(x.prazo) < new Date("2026-05-01") && x.progresso < 100).length;
            return (
              <TableRow key={c.id}>
                <TableCell>
                  <div className="font-medium">{c.nome}</div>
                  <div className="text-xs text-muted-foreground">{c.email}</div>
                </TableCell>
                <TableCell>{iesList.length} / {c.limiteIes}</TableCell>
                <TableCell>{pendentes}</TableCell>
                <TableCell>
                  {atrasos > 0 ? <Pill tone="destructive">{atrasos}</Pill> : <span className="text-muted-foreground">0</span>}
                </TableCell>
                <TableCell><Pill tone={c.ativo ? "success" : "neutral"}>{c.ativo ? "Activo" : "Inactivo"}</Pill></TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">Editar</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  </div>
);

export default Consultores;
