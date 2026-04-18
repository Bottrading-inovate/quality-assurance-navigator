// Estrutura genérica dos 11 indicadores do SNAAIES, baseada no Mapa de
// Indicadores de Avaliação Externa de Cursos e/ou Programas. Os critérios
// foram redigidos de forma genérica para servirem qualquer curso/IES.

export type Criterio = {
  id: string; // ex: "1.1.1"
  texto: string;
};

export type Padrao = {
  id: string; // ex: "1.1"
  titulo: string;
  descricao: string;
  instrucao?: string; // ex: "Verifique se:"
  criterios: Criterio[];
};

export type Indicador = {
  numero: number;
  titulo: string;
  padroes: Padrao[];
};

export const INDICADORES: Indicador[] = [
  {
    numero: 1,
    titulo: "Missão e Plano de Desenvolvimento Institucional",
    padroes: [
      {
        id: "1.1",
        titulo: "Padrão 1.1 — Missão e PDI",
        descricao:
          "A missão e o PDI da IES/UO devem estar claramente expressos, ser relevantes, actuais, exequíveis, divulgados e relacionados com as estratégias de desenvolvimento institucional e do sector socioeconómico do país.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "1.1.1", texto: "Existe declaração de missão e PDI aprovados pelo órgão máximo." },
          { id: "1.1.2", texto: "A missão expressa claramente as intenções da UO." },
          { id: "1.1.3", texto: "A missão encontra-se divulgada na página Web." },
          { id: "1.1.4", texto: "A missão encontra-se divulgada no programa curricular." },
          { id: "1.1.5", texto: "A missão encontra-se divulgada em vitrinas ou outros locais públicos." },
          { id: "1.1.6", texto: "A missão é divulgada noutros locais (outdoors, redes sociais, etc.)." },
          { id: "1.1.7", texto: "Os estudantes conhecem a missão da UO." },
          { id: "1.1.8", texto: "Os docentes conhecem a missão da UO." },
          { id: "1.1.9", texto: "O PTA (Pessoal Técnico e Administrativo) conhece a missão da UO." },
          { id: "1.1.10", texto: "A missão da UO é revista periodicamente." },
          { id: "1.1.11", texto: "A missão articula-se com as estratégias de desenvolvimento institucional." },
        ],
      },
      {
        id: "1.2",
        titulo: "Padrão 1.2 — Objectivos Gerais da UO",
        descricao:
          "Os objectivos gerais da UO devem estar claramente definidos, ser relevantes, articularem-se com a missão e PDI e enfatizar as necessidades do sector profissional.",
        instrucao: "Verifique se os objectivos gerais da UO:",
        criterios: [
          { id: "1.2.1", texto: "Estão claramente definidos." },
          { id: "1.2.2", texto: "São relevantes." },
          { id: "1.2.3", texto: "Articulam-se com a missão da UO." },
          { id: "1.2.4", texto: "Os objectivos do curso/programa articulam-se com os objectivos gerais da UO." },
        ],
      },
    ],
  },
  {
    numero: 2,
    titulo: "Gestão Institucional e Sustentabilidade",
    padroes: [
      {
        id: "2.1",
        titulo: "Padrão 2.1 — Modelo curricular e gestão do curso",
        descricao:
          "A UO deve definir o modelo curricular e os métodos de ensino (publicados) e garantir uma gestão democrática, participativa e transparente dos cursos/programas.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "2.1.1", texto: "O modelo curricular está definido e aprovado." },
          { id: "2.1.2", texto: "Os métodos de ensino definidos são aplicados." },
          { id: "2.1.3", texto: "O curso/programa está publicado em Diário da República." },
          { id: "2.1.4", texto: "Existe estrutura organizacional adequada responsável pelo curso." },
          { id: "2.1.5", texto: "Existe um responsável/director de curso ou programa." },
          { id: "2.1.6", texto: "Existem mecanismos de participação da comunidade académica na gestão." },
        ],
      },
      {
        id: "2.2",
        titulo: "Padrão 2.2 — Sustentabilidade financeira",
        descricao:
          "A UO deve possuir recursos financeiros adequados e sustentáveis para o funcionamento do curso/programa.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "2.2.1", texto: "Plano orçamental específico do curso/programa." },
          { id: "2.2.2", texto: "Fontes de financiamento diversificadas e estáveis." },
          { id: "2.2.3", texto: "Mecanismos de prestação de contas." },
        ],
      },
    ],
  },
  {
    numero: 3,
    titulo: "Estrutura e Desenvolvimento Curricular",
    padroes: [
      {
        id: "3.1",
        titulo: "Padrão 3.1 — Estrutura curricular",
        descricao:
          "O currículo deve ter uma estrutura clara em conformidade com as normas curriculares, projecto educativo, projectos pedagógicos dos cursos, processos de ensino-aprendizagem e avaliação das aprendizagens.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "3.1.1", texto: "O Projecto Pedagógico do Curso (PPC) está aprovado e actualizado." },
          { id: "3.1.2", texto: "O plano de estudos está conforme as normas curriculares vigentes." },
          { id: "3.1.3", texto: "O curso/programa é reconhecido pelas ordens profissionais aplicáveis." },
          { id: "3.1.4", texto: "Existe alinhamento entre objectivos e competências definidos." },
          { id: "3.1.5", texto: "O perfil do graduado está definido de acordo com o quadro de qualificações." },
          { id: "3.1.6", texto: "Os processos de avaliação das aprendizagens estão definidos e aplicados." },
        ],
      },
      {
        id: "3.2",
        titulo: "Padrão 3.2 — Revisão e actualização curricular",
        descricao: "O currículo deve ser revisto e actualizado periodicamente.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "3.2.1", texto: "Existe periodicidade definida para revisão curricular." },
          { id: "3.2.2", texto: "As actualizações consideram a evolução científica e do mercado." },
          { id: "3.2.3", texto: "Existem actas/registos das revisões realizadas." },
        ],
      },
    ],
  },
  {
    numero: 4,
    titulo: "Desenvolvimento e Desempenho do Corpo Docente",
    padroes: [
      {
        id: "4.1",
        titulo: "Padrão 4.1 — Composição do corpo docente",
        descricao: "A UO deve possuir corpo docente em número e regime adequados ao curso/programa.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "4.1.1", texto: "Existe rácio docente/estudante adequado." },
          { id: "4.1.2", texto: "Existem docentes em regime de tempo integral." },
          { id: "4.1.3", texto: "A distribuição de carga horária está documentada." },
        ],
      },
      {
        id: "4.2",
        titulo: "Padrão 4.2 — Qualificação académica",
        descricao:
          "A UO deve possuir docentes em regime de tempo integral experientes, qualificados em termos académicos, com formação psicopedagógica e categorizados.",
        instrucao: "Verifique se o corpo docente possui qualificações académicas adequadas:",
        criterios: [
          { id: "4.2.1", texto: "Percentagem mínima de docentes com grau de Doutor (conforme decreto)." },
          { id: "4.2.2", texto: "Percentagem mínima de docentes com grau de Mestre (conforme decreto)." },
          { id: "4.2.3", texto: "Existe formação psicopedagógica dos docentes." },
          { id: "4.2.4", texto: "Existe plano de categorização e progressão na carreira." },
        ],
      },
      {
        id: "4.3",
        titulo: "Padrão 4.3 — Desempenho e desenvolvimento docente",
        descricao: "Devem existir mecanismos de avaliação de desempenho e desenvolvimento profissional.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "4.3.1", texto: "Sistema de avaliação de desempenho docente." },
          { id: "4.3.2", texto: "Plano de formação contínua." },
          { id: "4.3.3", texto: "Apoio à participação em eventos científicos." },
        ],
      },
    ],
  },
  {
    numero: 5,
    titulo: "Estudantes — Admissão, Registo e Apoio",
    padroes: [
      {
        id: "5.1",
        titulo: "Padrão 5.1 — Admissão",
        descricao: "A UO deve possuir critérios de admissão claros, públicos e aplicados de forma transparente.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "5.1.1", texto: "Os critérios de admissão estão definidos e publicados." },
          { id: "5.1.2", texto: "O guião do exame de acesso está disponível." },
          { id: "5.1.3", texto: "Os resultados de admissão são publicados." },
        ],
      },
      {
        id: "5.2",
        titulo: "Padrão 5.2 — Divulgação dos requisitos",
        descricao: "A UO deve possuir sistemas de divulgação dos requisitos de admissão.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "5.2.1", texto: "Divulgação na página Web institucional." },
          { id: "5.2.2", texto: "Divulgação em meios físicos (cartazes, brochuras)." },
          { id: "5.2.3", texto: "Sessões de esclarecimento a candidatos." },
        ],
      },
      {
        id: "5.3",
        titulo: "Padrão 5.3 — Registo documental dos estudantes",
        descricao: "A UO deve possuir um sistema de registo documental dos estudantes.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "5.3.1", texto: "Dados dos ingressos." },
          { id: "5.3.2", texto: "Informação pessoal completa." },
          { id: "5.3.3", texto: "Registo dos resultados das avaliações." },
          { id: "5.3.4", texto: "Sistema digital de gestão académica." },
        ],
      },
      {
        id: "5.4",
        titulo: "Padrão 5.4 — Apoio ao estudante",
        descricao: "Devem existir serviços de apoio académico, social e psicopedagógico aos estudantes.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "5.4.1", texto: "Tutoria académica." },
          { id: "5.4.2", texto: "Apoio social/bolsas." },
          { id: "5.4.3", texto: "Apoio psicopedagógico." },
        ],
      },
    ],
  },
  {
    numero: 6,
    titulo: "Pessoal Técnico e Administrativo (PTA)",
    padroes: [
      {
        id: "6.1",
        titulo: "Padrão 6.1 — Composição do PTA",
        descricao: "A UO deve dispor de PTA em número adequado às suas funções.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "6.1.1", texto: "O número de PTA é adequado à dimensão do curso." },
          { id: "6.1.2", texto: "Existe descrição de funções por posto de trabalho." },
        ],
      },
      {
        id: "6.2",
        titulo: "Padrão 6.2 — Condições de trabalho do PTA",
        descricao: "Devem existir condições adequadas de trabalho e direitos sociais garantidos.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "6.2.1", texto: "Contrato de trabalho formal." },
          { id: "6.2.2", texto: "Condições físicas adequadas (espaço, equipamento)." },
          { id: "6.2.3", texto: "Plano de formação do PTA." },
          { id: "6.2.4", texto: "Avaliação de desempenho." },
          { id: "6.2.5", texto: "Mecanismos de motivação e progressão." },
          { id: "6.2.6", texto: "Feedback de utentes e colegas." },
          { id: "6.2.7", texto: "Satisfação dos direitos sociais (segurança social, subsídios)." },
        ],
      },
      {
        id: "6.3",
        titulo: "Padrão 6.3 — Qualificação do PTA",
        descricao: "A UO deve ter PTA qualificado e com experiência para funcionar efectivamente.",
        instrucao: "Existem documentos no processo individual do PTA:",
        criterios: [
          { id: "6.3.1", texto: "Certificado de habilitações." },
          { id: "6.3.2", texto: "Curriculum Vitae." },
          { id: "6.3.3", texto: "Diploma de cursos de aperfeiçoamento profissional." },
        ],
      },
    ],
  },
  {
    numero: 7,
    titulo: "Pesquisa e Inovação",
    padroes: [
      {
        id: "7.1",
        titulo: "Padrão 7.1 — Actividades de investigação",
        descricao: "A UO deve promover actividades de investigação alinhadas com o curso/programa.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "7.1.1", texto: "Linhas de investigação definidas." },
          { id: "7.1.2", texto: "Projectos de investigação em curso." },
          { id: "7.1.3", texto: "Publicações científicas dos docentes." },
          { id: "7.1.4", texto: "Envolvimento de estudantes em investigação." },
        ],
      },
      {
        id: "7.2",
        titulo: "Padrão 7.2 — Recursos para investigação",
        descricao: "A UO deve possuir recursos financeiros, logísticos e humanos suficientes para a investigação.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "7.2.1", texto: "Financiamento específico para actividades de investigação." },
          { id: "7.2.2", texto: "Financiamento para investigação ligada ao curso." },
          { id: "7.2.3", texto: "Recursos logísticos para a investigação (laboratórios, equipamento)." },
          { id: "7.2.4", texto: "Recursos humanos dedicados à investigação." },
        ],
      },
    ],
  },
  {
    numero: 8,
    titulo: "Extensão e Relações Comunitárias",
    padroes: [
      {
        id: "8.1",
        titulo: "Padrão 8.1 — Actividades de extensão",
        descricao: "A UO deve realizar actividades de extensão à comunidade.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "8.1.1", texto: "Plano de actividades de extensão." },
          { id: "8.1.2", texto: "Projectos de extensão em curso." },
          { id: "8.1.3", texto: "Participação dos estudantes em extensão." },
          { id: "8.1.4", texto: "Avaliação do impacto das actividades." },
        ],
      },
      {
        id: "8.2",
        titulo: "Padrão 8.2 — Parcerias e cooperação",
        descricao: "A UO deve estabelecer parcerias com entidades públicas, privadas e comunitárias.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "8.2.1", texto: "Protocolos com instituições nacionais." },
          { id: "8.2.2", texto: "Protocolos com instituições internacionais." },
          { id: "8.2.3", texto: "Parcerias com o sector empregador." },
        ],
      },
    ],
  },
  {
    numero: 9,
    titulo: "Internacionalização",
    padroes: [
      {
        id: "9.1",
        titulo: "Padrão 9.1 — Mobilidade académica",
        descricao: "A UO deve promover a mobilidade de docentes e estudantes.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "9.1.1", texto: "Programas de mobilidade de estudantes." },
          { id: "9.1.2", texto: "Programas de mobilidade de docentes." },
          { id: "9.1.3", texto: "Acolhimento de estudantes/docentes estrangeiros." },
        ],
      },
      {
        id: "9.2",
        titulo: "Padrão 9.2 — Cooperação internacional",
        descricao: "A UO deve participar em redes e projectos internacionais.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "9.2.1", texto: "Adesão a redes académicas internacionais." },
          { id: "9.2.2", texto: "Projectos de investigação em cooperação internacional." },
          { id: "9.2.3", texto: "Publicações conjuntas com autores estrangeiros." },
        ],
      },
    ],
  },
  {
    numero: 10,
    titulo: "Infraestrutura e Equipamentos",
    padroes: [
      {
        id: "10.1",
        titulo: "Padrão 10.1 — Infra-estruturas gerais",
        descricao:
          "A UO deve possuir infra-estruturas adequadas às actividades de ensino, investigação e extensão e ao número de estudantes e PTA.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "10.1.1", texto: "Salas de aulas que correspondam à demanda." },
          { id: "10.1.2", texto: "Sala de reuniões e/ou conferências." },
          { id: "10.1.3", texto: "Laboratórios devidamente equipados de acordo com os cursos." },
          { id: "10.1.4", texto: "Biblioteca." },
          { id: "10.1.5", texto: "Sala de informática." },
          { id: "10.1.6", texto: "Instalações sanitárias adequadas." },
        ],
      },
      {
        id: "10.2",
        titulo: "Padrão 10.2 — Salas de aula",
        descricao: "As salas devem ter condições adequadas ao ensino.",
        instrucao: "Verifique se as salas possuem:",
        criterios: [
          { id: "10.2.1", texto: "Mobiliário adequado e suficiente." },
          { id: "10.2.2", texto: "Iluminação e ventilação adequadas." },
          { id: "10.2.3", texto: "Equipamento audiovisual." },
        ],
      },
      {
        id: "10.3",
        titulo: "Padrão 10.3 — Laboratórios",
        descricao: "Os laboratórios devem estar equipados conforme o curso.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "10.3.1", texto: "O equipamento corresponde ao plano de estudos." },
          { id: "10.3.2", texto: "Existem normas de segurança afixadas." },
          { id: "10.3.3", texto: "Existe técnico responsável pelo laboratório." },
        ],
      },
      {
        id: "10.4",
        titulo: "Padrão 10.4 — Acervo bibliográfico",
        descricao: "A biblioteca deve dispor de acervo actualizado e suficiente.",
        instrucao: "Verifique se existe:",
        criterios: [
          { id: "10.4.1", texto: "Bibliografia básica de cada disciplina." },
          { id: "10.4.2", texto: "Bibliografia complementar." },
          { id: "10.4.3", texto: "Acesso a bases de dados digitais." },
        ],
      },
      {
        id: "10.5",
        titulo: "Padrão 10.5 — Equipamento da biblioteca",
        descricao: "A biblioteca deve estar devidamente equipada e organizada.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "10.5.1", texto: "Iluminação adequada." },
          { id: "10.5.2", texto: "Ventilação adequada (janelas de rede, ar condicionado)." },
          { id: "10.5.3", texto: "Prateleiras suficientes para arrumar e organizar livros por área." },
          { id: "10.5.4", texto: "Armários para guardar livros e materiais com fechadura segura." },
          { id: "10.5.5", texto: "Mesas e cadeiras para leitura e estudo." },
          { id: "10.5.6", texto: "Sistema operacional de registo e catalogação de livros." },
        ],
      },
    ],
  },
  {
    numero: 11,
    titulo: "Processos Académicos e Garantia de Qualidade",
    padroes: [
      {
        id: "11.1",
        titulo: "Padrão 11.1 — Sistema de garantia de qualidade",
        descricao: "A UO deve possuir um sistema interno de garantia de qualidade.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "11.1.1", texto: "Política de qualidade aprovada." },
          { id: "11.1.2", texto: "Estrutura responsável pela qualidade." },
          { id: "11.1.3", texto: "Manual de procedimentos de qualidade." },
          { id: "11.1.4", texto: "Indicadores de qualidade monitorizados." },
        ],
      },
      {
        id: "11.2",
        titulo: "Padrão 11.2 — Auto-avaliação periódica",
        descricao: "A UO deve realizar processos regulares de auto-avaliação.",
        instrucao: "Verifique se:",
        criterios: [
          { id: "11.2.1", texto: "Existe periodicidade definida para auto-avaliação." },
          { id: "11.2.2", texto: "Os relatórios de auto-avaliação são públicos." },
          { id: "11.2.3", texto: "São implementados planos de melhoria." },
        ],
      },
      {
        id: "11.3",
        titulo: "Padrão 11.3 — Acompanhamento de graduados e empregabilidade",
        descricao: "Devem existir mecanismos de acompanhamento dos diplomados.",
        instrucao: "Verifique se existem:",
        criterios: [
          { id: "11.3.1", texto: "Base de dados de graduados." },
          { id: "11.3.2", texto: "Estudos de empregabilidade." },
          { id: "11.3.3", texto: "Feedback dos empregadores." },
        ],
      },
    ],
  },
];

export const totalCriterios = (ind: Indicador) =>
  ind.padroes.reduce((acc, p) => acc + p.criterios.length, 0);
