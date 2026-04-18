import { CriterioRow, type CriterioState } from "./CriterioRow";
import type { Indicador } from "@/data/indicadores";

type Props = {
  indicador: Indicador;
  respostas: Record<string, CriterioState>;
  onChangeCriterio: (id: string, s: CriterioState) => void;
};

export const IndicadorPanel = ({ indicador, respostas, onChangeCriterio }: Props) => {
  return (
    <div className="space-y-8">
      {indicador.padroes.map((padrao) => (
        <section key={padrao.id} className="space-y-4">
          <header className="space-y-1.5 border-l-4 border-primary pl-4">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-foreground">{padrao.titulo}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{padrao.descricao}</p>
            {padrao.instrucao && (
              <p className="text-xs uppercase tracking-wide text-primary font-medium pt-1">
                {padrao.instrucao}
              </p>
            )}
          </header>

          <div className="space-y-3">
            {padrao.criterios.map((c) => (
              <CriterioRow
                key={c.id}
                criterio={c}
                state={
                  respostas[c.id] ?? {
                    verificacao: null,
                    evidencias: "",
                    comentarios: "",
                    ficheiros: [],
                  }
                }
                onChange={(s) => onChangeCriterio(c.id, s)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
