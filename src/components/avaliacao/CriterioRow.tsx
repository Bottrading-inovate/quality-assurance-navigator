import { useRef } from "react";
import { Paperclip, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { Criterio } from "@/data/indicadores";

export type Verificacao = "sim" | "nao" | "na" | null;

export type CriterioState = {
  verificacao: Verificacao;
  evidencias: string;
  comentarios: string;
  ficheiros: string[]; // só nomes (estado local)
};

type Props = {
  criterio: Criterio;
  state: CriterioState;
  onChange: (s: CriterioState) => void;
};

const opcoes: { value: Exclude<Verificacao, null>; label: string }[] = [
  { value: "sim", label: "Sim" },
  { value: "nao", label: "Não" },
  { value: "na", label: "N/A" },
];

export const CriterioRow = ({ criterio, state, onChange }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const update = (patch: Partial<CriterioState>) => onChange({ ...state, ...patch });

  return (
    <div className="rounded-lg border bg-card p-4 space-y-3">
      <div className="flex items-start gap-3">
        <span className="shrink-0 inline-flex items-center justify-center rounded-md bg-primary-soft text-primary text-xs font-semibold px-2 py-1 min-w-[3rem]">
          {criterio.id}
        </span>
        <p className="text-sm text-foreground leading-relaxed pt-1">{criterio.texto}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 pl-[3.75rem]">
        {opcoes.map((opt) => {
          const active = state.verificacao === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => update({ verificacao: opt.value })}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                active
                  ? opt.value === "sim"
                    ? "bg-success text-success-foreground border-success"
                    : opt.value === "nao"
                    ? "bg-destructive text-destructive-foreground border-destructive"
                    : "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground hover:bg-muted border-border"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 pl-[3.75rem] md:grid-cols-2">
        <Textarea
          placeholder="Evidências (referências, links, documentos…)"
          value={state.evidencias}
          onChange={(e) => update({ evidencias: e.target.value })}
          className="min-h-[80px] resize-none"
        />
        <Textarea
          placeholder="Comentários ou justificativa…"
          value={state.comentarios}
          onChange={(e) => update({ comentarios: e.target.value })}
          className="min-h-[80px] resize-none"
        />
      </div>

      <div className="pl-[3.75rem] flex items-center gap-2 flex-wrap">
        <input
          ref={fileRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            const novos = Array.from(e.target.files ?? []).map((f) => f.name);
            if (novos.length) update({ ficheiros: [...state.ficheiros, ...novos] });
            if (fileRef.current) fileRef.current.value = "";
          }}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => fileRef.current?.click()}
          className="gap-2"
        >
          <Paperclip className="h-4 w-4" />
          Anexar evidência
        </Button>
        {state.ficheiros.map((nome, i) => (
          <span
            key={`${nome}-${i}`}
            className="inline-flex items-center gap-1.5 text-xs bg-muted text-muted-foreground rounded-md pl-2 pr-1 py-1"
          >
            <FileText className="h-3 w-3" />
            {nome}
            <button
              type="button"
              onClick={() =>
                update({ ficheiros: state.ficheiros.filter((_, j) => j !== i) })
              }
              className="hover:bg-background rounded p-0.5"
              aria-label={`Remover ${nome}`}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
