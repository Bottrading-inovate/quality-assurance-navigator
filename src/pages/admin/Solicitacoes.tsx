import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/admin/StatusBadge";
import { solicitacoes } from "@/data/admin-mock";

const tone = (s: string) => (s === "aprovada" ? "success" : s === "rejeitada" ? "destructive" : "warning") as any;

const Solicitacoes = () => (
  <div className="p-6 space-y-6 max-w-[1400px]">
    <div>
      <h1 className="text-2xl font-semibold">Solicitações de Acesso</h1>
      <p className="text-sm text-muted-foreground">IES que pediram para se cadastrar no SNAAIES.</p>
    </div>
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>IES</TableHead>
            <TableHead>Responsável</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {solicitacoes.map((s) => (
            <TableRow key={s.id}>
              <TableCell className="font-medium">{s.iesNome}</TableCell>
              <TableCell>{s.responsavel}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{s.email}</TableCell>
              <TableCell className="text-sm">{s.data}</TableCell>
              <TableCell><Pill tone={tone(s.status)}>{s.status}</Pill></TableCell>
              <TableCell className="text-right space-x-2">
                {s.status === "pendente" && (
                  <>
                    <Button size="sm" variant="outline">Rejeitar</Button>
                    <Button size="sm">Aprovar e gerar credenciais</Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  </div>
);

export default Solicitacoes;
