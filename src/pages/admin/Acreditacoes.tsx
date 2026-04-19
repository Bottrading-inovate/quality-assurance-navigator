import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CursoStatusBadge } from "@/components/admin/StatusBadge";
import { cursos, findIes } from "@/data/admin-mock";

const Acreditacoes = () => {
  const concluidos = cursos.filter((c) => c.status === "Concluído" || c.status === "RAA gerado" || c.status === "Plano gerado");
  return (
    <div className="p-6 space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-2xl font-semibold">Acreditações</h1>
        <p className="text-sm text-muted-foreground">Cursos com avaliação concluída e RAA / Plano de Melhoria.</p>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Curso</TableHead>
              <TableHead>IES</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>RAA</TableHead>
              <TableHead>Plano de Melhoria</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {concluidos.length === 0 && (
              <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Sem registos.</TableCell></TableRow>
            )}
            {concluidos.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.nome}</TableCell>
                <TableCell>{findIes(c.iesId)?.sigla}</TableCell>
                <TableCell><CursoStatusBadge status={c.status} /></TableCell>
                <TableCell className="text-sm text-muted-foreground">{c.status === "RAA gerado" || c.status === "Plano gerado" ? "Gerado" : "Pendente"}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{c.status === "Plano gerado" ? "Gerado" : "Pendente"}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">Descarregar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Acreditacoes;
