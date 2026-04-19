// Mock data para o dashboard admin do SNAAIES (protótipo, sem backend).

export type DonationStatus = "sem" | "ativa" | "expirada" | "parcial";
export type DonationType = "por_curso" | "por_periodo" | "ilimitada";

export type CursoStatus =
  | "Draft"
  | "Submetido"
  | "Aguardando Avaliação"
  | "Consultor Atribuído"
  | "Em Avaliação"
  | "Ajustes"
  | "Concluído"
  | "RAA gerado"
  | "Plano gerado";

export type IES = {
  id: string;
  nome: string;
  sigla: string;
  cidade: string;
  consultorId: string | null;
  bloqueada: boolean;
};

export type Consultor = {
  id: string;
  nome: string;
  email: string;
  ativo: boolean;
  limiteIes: number; // máx 5
};

export type Doacao = {
  id: string;
  iesId: string;
  status: DonationStatus;
  tipo: DonationType;
  valor: number;
  data: string;
  validade: string;
  cursosPermitidos: number; // 0 = ilimitado
  cursosUsados: number;
};

export type Curso = {
  id: string;
  iesId: string;
  nome: string;
  status: CursoStatus;
  prazo: string;
  progresso: number; // 0-100
  submetidoEm?: string;
};

export type SolicitacaoAcesso = {
  id: string;
  iesNome: string;
  responsavel: string;
  email: string;
  data: string;
  status: "pendente" | "aprovada" | "rejeitada";
};

export const consultores: Consultor[] = [
  { id: "c1", nome: "Dr. Mateus Kassoma", email: "mateus@snaaies.ao", ativo: true, limiteIes: 5 },
  { id: "c2", nome: "Dra. Isabel Cardoso", email: "isabel@snaaies.ao", ativo: true, limiteIes: 5 },
  { id: "c3", nome: "Dr. João Mbala", email: "joao@snaaies.ao", ativo: true, limiteIes: 5 },
  { id: "c4", nome: "Dra. Teresa Lufuma", email: "teresa@snaaies.ao", ativo: false, limiteIes: 5 },
];

export const ies: IES[] = [
  { id: "i1", nome: "Universidade Privada de Angola", sigla: "UPRA", cidade: "Luanda", consultorId: "c1", bloqueada: false },
  { id: "i2", nome: "Instituto Superior Politécnico Tundavala", sigla: "ISPT", cidade: "Lubango", consultorId: "c2", bloqueada: false },
  { id: "i3", nome: "Universidade Católica de Angola", sigla: "UCAN", cidade: "Luanda", consultorId: null, bloqueada: false },
  { id: "i4", nome: "Universidade Mandume Ya Ndemufayo", sigla: "UMN", cidade: "Lubango", consultorId: "c1", bloqueada: false },
  { id: "i5", nome: "Instituto Superior de Ciências da Educação", sigla: "ISCED", cidade: "Huambo", consultorId: null, bloqueada: false },
  { id: "i6", nome: "Universidade Lueji A'Nkonde", sigla: "ULAN", cidade: "Dundo", consultorId: null, bloqueada: true },
];

export const doacoes: Doacao[] = [
  { id: "d1", iesId: "i1", status: "ativa", tipo: "por_curso", valor: 500000, data: "2025-09-12", validade: "2026-09-12", cursosPermitidos: 3, cursosUsados: 1 },
  { id: "d2", iesId: "i2", status: "ativa", tipo: "ilimitada", valor: 1500000, data: "2025-08-01", validade: "2026-08-01", cursosPermitidos: 0, cursosUsados: 4 },
  { id: "d3", iesId: "i3", status: "sem", tipo: "por_curso", valor: 0, data: "—", validade: "—", cursosPermitidos: 0, cursosUsados: 0 },
  { id: "d4", iesId: "i4", status: "parcial", tipo: "por_curso", valor: 300000, data: "2025-10-02", validade: "2026-04-02", cursosPermitidos: 2, cursosUsados: 2 },
  { id: "d5", iesId: "i5", status: "sem", tipo: "por_curso", valor: 0, data: "—", validade: "—", cursosPermitidos: 0, cursosUsados: 0 },
  { id: "d6", iesId: "i6", status: "expirada", tipo: "por_periodo", valor: 200000, data: "2024-11-10", validade: "2025-05-10", cursosPermitidos: 1, cursosUsados: 1 },
];

export const cursos: Curso[] = [
  { id: "k1", iesId: "i1", nome: "Medicina", status: "Em Avaliação", prazo: "2026-05-30", progresso: 62, submetidoEm: "2026-02-10" },
  { id: "k2", iesId: "i1", nome: "Engenharia Informática", status: "Aguardando Avaliação", prazo: "2026-06-15", progresso: 0, submetidoEm: "2026-04-01" },
  { id: "k3", iesId: "i2", nome: "Direito", status: "Ajustes", prazo: "2026-04-28", progresso: 88 },
  { id: "k4", iesId: "i2", nome: "Economia", status: "Concluído", prazo: "2026-03-15", progresso: 100 },
  { id: "k5", iesId: "i3", nome: "Arquitectura", status: "Aguardando Avaliação", prazo: "2026-07-01", progresso: 0, submetidoEm: "2026-04-12" },
  { id: "k6", iesId: "i4", nome: "Enfermagem", status: "Consultor Atribuído", prazo: "2026-06-20", progresso: 12 },
  { id: "k7", iesId: "i4", nome: "Farmácia", status: "Em Avaliação", prazo: "2026-05-10", progresso: 45 },
  { id: "k8", iesId: "i5", nome: "Pedagogia", status: "Submetido", prazo: "2026-08-01", progresso: 0 },
  { id: "k9", iesId: "i6", nome: "Sociologia", status: "Aguardando Avaliação", prazo: "2026-09-01", progresso: 0 },
];

export const solicitacoes: SolicitacaoAcesso[] = [
  { id: "s1", iesNome: "Universidade Óscar Ribas", responsavel: "Mariana Sousa", email: "m.sousa@uor.ao", data: "2026-04-12", status: "pendente" },
  { id: "s2", iesNome: "Instituto Superior Maravilha", responsavel: "Carlos Neto", email: "c.neto@ism.ao", data: "2026-04-15", status: "pendente" },
  { id: "s3", iesNome: "Universidade Gregório Semedo", responsavel: "Ana Paula", email: "ana@ugs.ao", data: "2026-04-08", status: "aprovada" },
];

export const findIes = (id: string) => ies.find((i) => i.id === id);
export const findConsultor = (id: string | null) => (id ? consultores.find((c) => c.id === id) : null);
export const doacaoDeIes = (iesId: string) => doacoes.find((d) => d.iesId === iesId);
export const cursosDeIes = (iesId: string) => cursos.filter((c) => c.iesId === iesId);
export const cursosDeConsultor = (consultorId: string) => {
  const iesIds = ies.filter((i) => i.consultorId === consultorId).map((i) => i.id);
  return cursos.filter((c) => iesIds.includes(c.iesId));
};
export const iesDeConsultor = (consultorId: string) => ies.filter((i) => i.consultorId === consultorId);

export const donationLabel: Record<DonationStatus, string> = {
  sem: "Sem doação",
  ativa: "Doação ativa",
  expirada: "Doação expirada",
  parcial: "Doação parcial",
};

export const cursoStatusTone: Record<CursoStatus, "neutral" | "info" | "warning" | "success" | "primary"> = {
  Draft: "neutral",
  Submetido: "info",
  "Aguardando Avaliação": "warning",
  "Consultor Atribuído": "info",
  "Em Avaliação": "primary",
  Ajustes: "warning",
  Concluído: "success",
  "RAA gerado": "success",
  "Plano gerado": "success",
};
