import { cn } from "@/lib/utils";
import type { DonationStatus, CursoStatus } from "@/data/admin-mock";
import { cursoStatusTone, donationLabel } from "@/data/admin-mock";

const toneClass: Record<string, string> = {
  neutral: "bg-neutralSoft text-muted-foreground",
  info: "bg-info-soft text-info",
  warning: "bg-warning-soft text-warning",
  success: "bg-success-soft text-success",
  primary: "bg-primary-soft text-primary",
  destructive: "bg-destructive/10 text-destructive",
};

export const Pill = ({ tone, children }: { tone: keyof typeof toneClass; children: React.ReactNode }) => (
  <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", toneClass[tone])}>
    {children}
  </span>
);

export const DonationBadge = ({ status }: { status: DonationStatus }) => {
  const tone =
    status === "ativa" ? "success" : status === "parcial" ? "warning" : status === "expirada" ? "destructive" : "neutral";
  return <Pill tone={tone}>{donationLabel[status]}</Pill>;
};

export const CursoStatusBadge = ({ status }: { status: CursoStatus }) => (
  <Pill tone={cursoStatusTone[status]}>{status}</Pill>
);
