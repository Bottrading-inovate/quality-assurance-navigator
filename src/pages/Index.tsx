import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Send, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { INDICADORES, totalCriterios } from "@/data/indicadores";
import { IndicadorPanel } from "@/components/avaliacao/IndicadorPanel";
import type { CriterioState } from "@/components/avaliacao/CriterioRow";

const CURSO = "Engenharia Informática";

const Index = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, CriterioState>>({});

  const indicador = INDICADORES[activeIdx];

  const totals = useMemo(() => {
    const total = INDICADORES.reduce((acc, i) => acc + totalCriterios(i), 0);
    const preenchidos = Object.values(respostas).filter((r) => r.verificacao !== null).length;
    return { total, preenchidos, percent: total ? (preenchidos / total) * 100 : 0 };
  }, [respostas]);

  const indTotals = useMemo(() => {
    const t = totalCriterios(indicador);
    const p = indicador.padroes
      .flatMap((pad) => pad.criterios)
      .filter((c) => respostas[c.id]?.verificacao != null).length;
    return { total: t, preenchidos: p };
  }, [indicador, respostas]);

  const onChangeCriterio = (id: string, s: CriterioState) =>
    setRespostas((prev) => ({ ...prev, [id]: s }));

  const isIndicadorCompleto = (idx: number) => {
    const ind = INDICADORES[idx];
    return ind.padroes
      .flatMap((p) => p.criterios)
      .every((c) => respostas[c.id]?.verificacao != null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] h-screen flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 border-b bg-card">
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              {indicador.numero}. {indicador.titulo}
            </h1>
            <p className="text-xs text-muted-foreground">
              Indicador {indicador.numero} de {INDICADORES.length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
              disabled={activeIdx === 0}
              aria-label="Indicador anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setActiveIdx((i) => Math.min(INDICADORES.length - 1, i + 1))}
              disabled={activeIdx === INDICADORES.length - 1}
              aria-label="Próximo indicador"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Fechar">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-[300px] shrink-0 border-r bg-card flex flex-col">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-foreground">Auto-Avaliação</h2>
              <p className="text-sm text-primary font-medium mt-0.5">{CURSO}</p>
              <div className="mt-5 space-y-1.5">
                <div className="flex justify-between text-xs uppercase tracking-wide text-muted-foreground font-medium">
                  <span>Progresso</span>
                  <span>{Math.round(totals.percent)}%</span>
                </div>
                <Progress value={totals.percent} className="h-1.5" />
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-3 space-y-1">
              {INDICADORES.map((ind, idx) => {
                const active = idx === activeIdx;
                const completo = isIndicadorCompleto(idx);
                return (
                  <button
                    key={ind.numero}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                        active
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {ind.numero}
                    </span>
                    <span className="text-sm font-medium truncate flex-1">{ind.titulo}</span>
                    {completo && (
                      <CheckCircle2
                        className={`h-4 w-4 shrink-0 ${
                          active ? "text-primary-foreground" : "text-success"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-8 py-8">
              <IndicadorPanel
                indicador={indicador}
                respostas={respostas}
                onChangeCriterio={onChangeCriterio}
              />
              <div className="h-12" />
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between px-6 py-3 border-t bg-card">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{indTotals.preenchidos}</span> de{" "}
            {indTotals.total} critérios preenchidos neste indicador ·{" "}
            <span className="font-medium text-foreground">{totals.preenchidos}</span> de{" "}
            {totals.total} no total
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline">Cancelar</Button>
            <Button
              className="gap-2"
              onClick={() =>
                toast({
                  title: "Revisão final",
                  description: `${totals.preenchidos} de ${totals.total} critérios preenchidos.`,
                })
              }
            >
              <Send className="h-4 w-4" />
              Revisar Final
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
