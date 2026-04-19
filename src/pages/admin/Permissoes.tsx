import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pill } from "@/components/admin/StatusBadge";

const roles = [
  { role: "Admin", desc: "Acesso total · gere IES, consultores, doações", users: 2 },
  { role: "Consultor", desc: "Avalia cursos das IES atribuídas", users: 4 },
  { role: "IES", desc: "Submete cursos e responde a critérios", users: 6 },
];

const Permissoes = () => (
  <div className="p-6 space-y-6 max-w-[1400px]">
    <div>
      <h1 className="text-2xl font-semibold">Permissões</h1>
      <p className="text-sm text-muted-foreground">Papéis e número de utilizadores por papel (protótipo).</p>
    </div>
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Papel</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Utilizadores</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((r) => (
            <TableRow key={r.role}>
              <TableCell className="font-medium">{r.role}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{r.desc}</TableCell>
              <TableCell>{r.users}</TableCell>
              <TableCell><Pill tone="success">Activo</Pill></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  </div>
);

export default Permissoes;
