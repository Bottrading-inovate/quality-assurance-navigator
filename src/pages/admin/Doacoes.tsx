import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DonationBadge } from "@/components/admin/StatusBadge";
import { doacoes, findIes } from "@/data/admin-mock";

const tipoLabel = { por_curso: "Por curso", por_periodo: "Por período", ilimitada: "Ilimitada" } as const;

const Doacoes = () => (
  <div className="p-6 space-y-6 max-w-[1400px]">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Doações</h1>
        <p className="text-sm text-muted-foreground">Sem doação activa, o sistema não atribui consultor.</p>
      </div>
      <Button>Registar doação</Button>
    </div>

    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>IES</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Cursos liberados</TableHead>
            <TableHead>Cursos usados</TableHead>
            <TableHead>Validade</TableHead>
            <TableHead>Última doação</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doacoes.map((d) => {
            const i = findIes(d.iesId)!;
            return (
              <TableRow key={d.id}>
                <TableCell>
                  <div className="font-medium">{i.sigla}</div>
                  <div className="text-xs text-muted-foreground">{i.nome}</div>
                </TableCell>
                <TableCell><DonationBadge status={d.status} /></TableCell>
                <TableCell className="text-sm">{tipoLabel[d.tipo]}</TableCell>
                <TableCell>{d.cursosPermitidos === 0 ? "Ilimitado" : d.cursosPermitidos}</TableCell>
                <TableCell>{d.cursosUsados}</TableCell>
                <TableCell className="text-sm">{d.validade}</TableCell>
                <TableCell className="text-sm">{d.data}</TableCell>
                <TableCell className="text-right space-x-1">
                  <Button size="sm" variant="ghost">Editar</Button>
                  <Button size="sm" variant="ghost">{d.status === "ativa" ? "Expirar" : "Activar"}</Button>
                  <Button size="sm" variant="ghost">Histórico</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  </div>
);

export default Doacoes;
