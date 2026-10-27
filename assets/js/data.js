/**
 * ============================================================
 * CONTEÚDO DO SITE — Lucas Heliodorio
 * ============================================================
 * Este é o ÚNICO arquivo que você precisa editar para mudar
 * textos, links, cases, experiências e certificações. O HTML,
 * o CSS e o main.js só montam a página a partir destes dados.
 *
 * - Foto: substitua assets/img/foto-perfil.jpg (ou mude links.fotoPerfil)
 * - Currículo: substitua assets/curriculo/curriculo-lucas-heliodorio.pdf
 * - Imagem real de um case: coloque o arquivo em assets/img/projetos/ e
 *   preencha `imagem` no case (ex.: "./assets/img/projetos/case-1.webp").
 *   Enquanto `imagem` for null, o site mostra uma capa gráfica própria.
 * - Botão "Ver credencial": preencha `credencial` com o link do certificado
 *   (enquanto for null, o botão não aparece).
 * ============================================================
 */

const CONFIG = {

  links: {
    linkedin: "https://www.linkedin.com/in/lucasheliodorio",
    linkedinCertificacoes: "https://www.linkedin.com/in/lucasheliodorio/details/certifications/",
    whatsappNumero: "5511943825958",
    whatsappMensagem: "Olá, Lucas! Vi seu portfólio e gostaria de conversar.",
    email: "lucas.ranu@gmail.com",
    curriculo: "./assets/curriculo/curriculo-lucas-heliodorio.pdf",
    fotoPerfil: "./assets/img/foto-perfil.jpg",
    fotoPerfilAlt: "Foto de Lucas Heliodorio, profissional de Recursos Humanos",
  },

  perfil: {
    nome: "Lucas Heliodorio",
    eyebrow: "Recursos Humanos · Dados · Estratégia",
    headline: "HR Business Partner | People Analytics | Talent Acquisition | Automação com IA",
    fraseApoio:
      "Conecto pessoas, dados e estratégia para apoiar lideranças e transformar desafios de negócio em decisões de RH.",
    linhaApoio: "RH · Dados · Automação com IA (Claude e ChatGPT)",
    sobre: [
      "Sou profissional de Recursos Humanos com atuação generalista e forte orientação a dados. Minha trajetória reúne experiências em Departamento Pessoal, Talent Acquisition, People Analytics e Business Partner, conectando a gestão de pessoas às necessidades e aos objetivos do negócio.",
      "Atualmente, atuo como HRBP das áreas Comercial, Backoffice, Operações e Diretoria na Plusoft, apoiando lideranças com análises e informações estratégicas para a tomada de decisão. Também sou responsável por atividades de Facilities e utilizo ferramentas como Claude, ChatGPT e Power Automate para desenvolver automações, criar agentes de IA e otimizar processos de RH.",
      "Tenho especial interesse em transformar desafios de Recursos Humanos em soluções mais simples, eficientes e escaláveis, combinando visão de negócio, análise de dados e tecnologia.",
    ],
  },

  // Cartão ao lado do "Quem é Lucas"
  resumo: {
    titulo: "Em resumo",
    itens: [
      { rotulo: "Atuação atual", valor: "HRBP na Plusoft, empresa de tecnologia" },
      { rotulo: "Áreas que apoio", valor: "Comercial, Backoffice, Operações e Diretoria" },
      { rotulo: "IA e automação", valor: "Claude, ChatGPT e Power Automate" },
      { rotulo: "Certificação principal", valor: "C-Pro R (ANBIMA), aprovado no exame" },
      { rotulo: "Formação", valor: "Administração (em andamento) e Gestão Financeira" },
      { rotulo: "Base", valor: "São Paulo, SP" },
    ],
  },

  destaques: [
    { valor: "+5 anos", rotulo: "de experiência em RH" },
    { valor: "4 áreas", rotulo: "apoiadas como HRBP" },
    { valor: "35 → 20–25 dias", rotulo: "redução do tempo de fechamento", principal: true },
    { valor: "312 cargos", rotulo: "analisados em estudo salarial" },
  ],

  atuacaoIntro:
    "Apoio áreas de negócio, lideranças e projetos estratégicos de Recursos Humanos.",
  atuacao: [
    {
      titulo: "HRBP",
      descricao:
        "Parceria com lideranças de Comercial, Backoffice, Operações e Diretoria em estrutura, performance, desenvolvimento, movimentações e decisões de pessoas.",
      icone: "handshake",
    },
    {
      titulo: "Automação & IA no RH",
      descricao:
        "Automação de fluxos de trabalho e agentes de IA com Claude e ChatGPT, triagem com IA e alertas com Power Automate para dar escala ao RH.",
      icone: "spark",
      selo: "IA",
    },
    {
      titulo: "People Analytics",
      descricao:
        "Indicadores e apresentações utilizados pela diretoria, com análises que apoiam decisões da liderança.",
      icone: "chart",
    },
    {
      titulo: "Talent Acquisition",
      descricao:
        "Recrutamento end-to-end, hunting, seleção em tecnologia e otimização do processo com dados e Inteligência Artificial.",
      icone: "search",
    },
    {
      titulo: "Desempenho, Carreira & Remuneração",
      descricao:
        "Avaliação de desempenho para todos os colaboradores e líderes, plano de carreira, cargos e salários e pesquisa de mercado.",
      icone: "award",
    },
    {
      titulo: "Facilities & rotinas de RH",
      descricao:
        "Gestão do budget de Facilities e dos custos operacionais, onboarding e comunicação interna.",
      icone: "building",
    },
  ],

  // Cases. Campos opcionais (só aparecem se preenchidos): comoFoi, aprendizados,
  // etiqueta (selo no card), nota (substitui o aviso de confidencialidade),
  // imagem (capa) e imagens (galeria extra dentro do case).
  // "capa": capa gráfica usada quando não há imagem
  // ("presenca" | "salarios" | "recrutamento" | "mobilidade").
  projetos: [
    {
      capa: "presenca",
      imagem: null,
      indicador: "2 → 3 dias",
      titulo: "Presença das lideranças",
      resumo:
        "Indicador de presença que mostrou o descompasso entre percepção e realidade e apoiou uma decisão concreta.",
      contexto:
        "A organização tinha uma política de duas idas presenciais por semana, e a percepção das lideranças sobre a presença era diferente do que acontecia na prática.",
      desafio:
        "Mostrar de forma objetiva o descompasso entre a percepção e a realidade, sem ter autoridade formal sobre as lideranças.",
      atuacao:
        "Consolidação dos dados e construção de um indicador de presença dos colaboradores. Apresentação da leitura à gestão e à diretoria, com explicação da metodologia para que as lideranças entendessem o cenário.",
      comoFoi:
        "A análise mostrou que, em alguns casos, a frequência real estava abaixo do esperado. O dado foi traduzido para o negócio e levado às lideranças.",
      resultado:
        "Uma das ações foi aumentar a presença das lideranças de dois para três dias presenciais por semana, para aproximá-las dos times e melhorar o acompanhamento.",
      aprendizados:
        "Influência sem autoridade formal: dados, metodologia clara e credibilidade geraram uma mudança concreta na forma de acompanhamento, sem depender de posição hierárquica.",
      competencias: [
        "People Analytics",
        "Indicadores",
        "Business Partnering",
        "Data storytelling",
        "Influência sem autoridade",
      ],
    },
    {
      capa: "automacao",
      imagem: null,
      indicador: "Automação + IA",
      titulo: "Automações e IA no RH",
      resumo:
        "Alertas automáticos, controles e agentes de IA para dar escala às rotinas do RH.",
      contexto:
        "Rotinas operacionais do RH, como renovação de contratos, controle de férias, triagem de candidatos e retorno a candidatos.",
      desafio:
        "Ganhar escala e evitar vencimentos esquecidos nessas rotinas, liberando tempo para uma atuação mais analítica e consultiva.",
      atuacao:
        "Alertas automáticos de renovação de contratos com Power Automate e SharePoint. Controle de férias em Excel com cálculo automático dos períodos aquisitivo e concessivo e alertas de vencimento. Automação de fluxos de trabalho com o Claude. Configuração do agente de triagem com IA da plataforma de recrutamento e criação de agentes de IA com ChatGPT e Claude para transcrição e resumo de entrevistas, retornos humanizados a candidatos, análises de dados e planilhas.",
      resultado:
        "Rotinas e fluxos de trabalho com alertas automáticos e agentes de IA incorporados ao dia a dia do RH.",
      competencias: [
        "Automação de RH",
        "Automação de fluxos de trabalho com Claude",
        "Agentes de IA",
        "Power Automate",
        "SharePoint",
        "Agentes de IA",
        "IA generativa",
        "Excel avançado",
      ],
    },
    {
      capa: "mobilidade",
      imagem: null,
      indicador: "Mobilidade interna",
      titulo: "CresciPlus",
      resumo:
        "Atuação consultiva no programa de recrutamento interno, conectando necessidades dos gestores a talentos da casa.",
      contexto:
        "Programa de recrutamento interno da organização. A participação nos processos seletivos e a proximidade com várias áreas dão conhecimento tanto dos perfis dos colaboradores quanto das necessidades das equipes.",
      desafio:
        "Entender o problema que o gestor quer resolver, e não apenas executar a abertura da vaga.",
      atuacao:
        "Quando um gestor abre uma necessidade, entendimento do problema antes da vaga. Quando há aderência, identificação de profissionais internos que podem atender e apresentação dessas alternativas à liderança, com discussão de perfil, estrutura e movimentação.",
      resultado:
        "Em um dos casos, a transferência de um colaborador para uma área mais aderente ao seu perfil resultou em retenção e evolução expressiva de desempenho.",
      aprendizados:
        "Conhecer pessoas e áreas permite levar ao gestor uma visão que vai além do recrutamento operacional.",
      competencias: [
        "HR Business Partner",
        "Mobilidade interna",
        "Retenção",
        "Estrutura organizacional",
        "Atuação consultiva",
      ],
    },
    {
      capa: "recrutamento",
      imagem: null,
      indicador: "35 → 20–25 dias",
      titulo: "Recrutamento em tecnologia",
      resumo:
        "Funil estruturado com indicadores e redução do tempo de fechamento em uma operação de ~25 vagas por mês.",
      contexto:
        "Processo de recrutamento bastante manual e com pouca visibilidade de dados, em uma operação com cerca de 25 vagas mensais e forte presença de posições de tecnologia.",
      desafio:
        "O SLA médio em algumas vagas de tecnologia ficava próximo de 35 dias, e não era possível identificar claramente onde estava o gargalo.",
      atuacao:
        "Estruturação dos indicadores do funil, organização das etapas e acompanhamento do SLA, com atuação end-to-end: alinhamento de perfil, hunting, triagem, entrevistas e acompanhamento com gestores.",
      comoFoi:
        "Os dados mostraram que um dos principais gargalos não estava dentro do RH, mas no tempo de retorno das lideranças. Foi alinhado com os gestores um prazo de até dois dias úteis para retorno de shortlist e disponibilidade para entrevistas.",
      resultado:
        "SLA de aproximadamente 35 para 20 a 25 dias, conforme a complexidade da posição.",
      aprendizados:
        "O dado pode mudar a percepção sobre um problema e gerar uma ação concreta.",
      competencias: [
        "Talent Acquisition",
        "Hunting",
        "Recrutamento Tech",
        "Indicadores de R&S",
        "Gestão de SLA",
        "Inteligência Artificial aplicada ao recrutamento",
      ],
    },
    {
      capa: "desempenho",
      imagem: null,
      indicador: "Ciclo em jan/2027",
      titulo: "Avaliação de Desempenho",
      resumo:
        "Avaliação para todos os colaboradores e líderes, da escolha da plataforma ao acompanhamento do dia a dia.",
      contexto:
        "Parte do projeto de implantação do plano de carreira da organização. Todos os colaboradores e líderes da empresa são avaliados.",
      desafio:
        "Escolher a plataforma mais adequada entre as opções do mercado e implantar a avaliação de desempenho para todos os colaboradores e líderes da empresa.",
      atuacao:
        "Atuação em todas as etapas: escolha da plataforma entre as opções do mercado, implantação da ferramenta e acompanhamento do dia a dia.",
      comoFoi:
        "A plataforma escolhida foi a ImpulseUp. O ciclo de avaliação começa efetivamente em janeiro de 2027.",
      resultado:
        "Plataforma escolhida e implantação conduzida, com o ciclo de avaliação começando em janeiro de 2027.",
      competencias: [
        "Avaliação de Desempenho",
        "Gestão de performance",
        "Escolha de plataformas",
        "Implantação de sistemas",
        "Plano de Carreira",
        "Business Partnering",
      ],
    },
    {
      capa: "salarios",
      imagem: null,
      indicador: "312 cargos",
      titulo: "Cargos & Salários",
      resumo:
        "Pesquisa de mercado de 312 cargos em 35 áreas e nova tabela salarial por grades.",
      contexto:
        "Projeto de estruturação e revisão de cargos e salários, parte da implantação do plano de carreira da organização.",
      desafio:
        "Consolidar uma grande quantidade de cargos, referências salariais e estruturas de diferentes áreas em uma base padronizada.",
      atuacao:
        "Pesquisa de mercado: benchmarking de 312 cargos em 35 áreas, checagem de pisos das convenções coletivas e nova tabela salarial por grades. Também a padronização dos descritivos de cargos e materiais para validação com as áreas.",
      resultado:
        "312 cargos analisados na pesquisa de mercado, com a nova tabela salarial por grades em implantação.",
      competencias: [
        "Cargos & Salários",
        "Pesquisa salarial",
        "Plano de Carreira",
        "People Analytics",
        "Estrutura organizacional",
      ],
    },
    {
      imagem: "./assets/img/projetos/organograma-1.webp",
      imagemAlt: "Tela do organograma interativo com a visão geral de uma empresa fictícia",
      imagens: [
        {
          src: "./assets/img/projetos/organograma-2.webp",
          alt: "Organograma interativo em zoom reduzido, mostrando a estrutura completa da empresa fictícia",
          legenda: "Visão completa da estrutura, com zoom reduzido.",
        },
      ],
      indicador: "Protótipo com IA",
      etiqueta: "Protótipo · dados fictícios",
      titulo: "Organograma interativo",
      resumo:
        "Protótipo criado com apoio de IA para navegar pela hierarquia de uma empresa de forma interativa.",
      contexto:
        "Protótipo desenvolvido para demonstrar como a IA pode apoiar a criação de ferramentas de RH, aplicado a uma empresa fictícia.",
      desafio:
        "Transformar uma base de colaboradores e gestores em uma visão navegável da estrutura organizacional.",
      atuacao:
        "Definição da lógica e das funcionalidades e construção do protótipo com apoio de IA generativa (Claude).",
      comoFoi:
        "A ferramenta permite buscar por nome ou cargo, filtrar por diretoria, expandir e recolher níveis, aproximar e afastar a visualização, exportar e usar um modo apresentação. Mostra indicadores como total de colaboradores, gestores com subordinados e tamanho de cada equipe.",
      resultado:
        "Protótipo funcional que demonstra o uso de IA para criar ferramentas de RH e apresentações executivas.",
      nota:
        "Empresa, nomes e números fictícios, criados apenas para demonstração. Nenhum dado real de empresa.",
      competencias: [
        "IA aplicada ao RH",
        "IA generativa",
        "Estrutura organizacional",
        "Visualização de dados",
        "Apresentações executivas",
      ],
    },
  ],

  avisoConfidencialidade:
    "Dados apresentados de forma agregada e/ou anonimizada para preservação da confidencialidade.",

  competencias: {
    areas: [
      "HR Business Partner",
      "People Analytics",
      "Talent Acquisition",
      "Automação de RH",
      "Fluxos de trabalho com Claude",
      "Agentes de IA",
      "Inteligência Artificial aplicada ao RH",
      "Plano de Carreira",
      "Avaliação de Desempenho",
      "Cargos & Salários",
      "Gestão de Indicadores",
      "Apresentações Executivas",
      "Recrutamento Tech",
      "Data Storytelling",
      "Employee Experience",
      "Gestão de Facilities",
      "Criação de sites",
    ],
    ferramentas: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "Microsoft Copilot",
      "Power Automate",
      "SharePoint",
      "Excel",
      "Power BI",
      "LinkedIn Recruiter",
      "InHire",
      "Recrutei",
      "InPass",
      "Único People",
      "Nimbi",
      "Movtech",
      "Apdata",
      "Elofy",
      "ImpulseUp",
      "Jira",
      "Microsoft Forms",
      "Google Forms",
      "Canva",
      "Gamma",
      "Mailchimp",
    ],
  },

  experiencias: [
    {
      empresa: "Plusoft Informática S/A",
      cargo: "Analista de RH Jr | HRBP",
      periodo: "fev/2026 — presente",
      descricao:
        "Atuação como HRBP apoiando áreas de negócio e liderança, com responsabilidade por People Analytics, Talent Acquisition e projetos estruturantes de RH. Construção e análise dos indicadores e das apresentações utilizados pela diretoria, condução de processos seletivos end-to-end, atuação no projeto de implantação do plano de carreira (avaliação de desempenho e cargos e salários), gestão de Facilities e automação de tarefas e fluxos de trabalho com apoio de Inteligência Artificial (Claude e ChatGPT).",
      tags: ["HRBP", "People Analytics", "Talent Acquisition", "Automação com IA", "Plano de Carreira", "Avaliação de Desempenho", "Cargos & Salários", "Facilities"],
    },
    {
      empresa: "Plusoft Informática S/A",
      cargo: "Estagiário em People Analytics e Talent Acquisition",
      periodo: "out/2024 — fev/2026",
      compacta: true,
    },
    {
      empresa: "Apdata do Brasil",
      cargo: "Assistente de Departamento Pessoal Jr",
      periodo: "fev/2023 — out/2024",
      compacta: true,
    },
    {
      empresa: "Apdata do Brasil",
      cargo: "Jovem Aprendiz em RH",
      periodo: "ago/2021 — fev/2023",
      compacta: true,
    },
  ],

  formacao: [
    {
      curso: "Bacharelado em Administração",
      instituicao: "Centro Universitário FMU | FIAM-FAAM",
      periodo: "jun/2024 — dez/2026 (em andamento)",
    },
    {
      curso: "Graduação em Gestão Financeira",
      instituicao: "Universidade Cidade de São Paulo (Unicid)",
      periodo: "Concluída em dez/2023",
    },
  ],

  // "ano" é o texto de status do card. Quando a certificação for emitida, troque por "nov/2026"
  // e preencha "credencial" com o link para exibir o botão "Ver credencial".
  certificacoes: [
    { nome: "C-Pro R", instituicao: "ANBIMA", ano: "Aprovado no exame · emissão em nov/2026", credencial: null, destaque: true },
    { nome: "CPA (ANBIMA)", instituicao: "ANBIMA", ano: "Aprovado no exame · emissão em nov/2026", credencial: null, destaque: false },
  ],

  outrasCertificacoes: [
    "Criação de Agentes de IA no RH (Alura, 16 h)",
    "Comunicação para Líderes (Alura, 44 h)",
    "Negociação (Alura, 30 h)",
    "Marca Pessoal 360° (Santander Open Academy)",
    "Gestão em Tempos de Mudança (FGV)",
    "Gestão de Pessoas: Conceitos e Processos (IFRO)",
    "Proteção de Dados e Segurança da Informação (Be Compliance)",
    "Trilha ANBIMA: ESG, Compliance, Mentalidade Ética e Gestão de Riscos",
  ],

  curriculoCta: {
    titulo: "Conheça minha trajetória completa",
    texto:
      "Meu currículo reúne experiências, formação, projetos e competências de forma detalhada. Baixe para conhecer o panorama completo da minha atuação profissional.",
  },

  servicos: {
    eyebrow: "Carreira & Posicionamento",
    titulo: "Carreira, currículo e LinkedIn",
    descricao:
      "Além da minha atuação corporativa em Recursos Humanos, desenvolvo projetos independentes de carreira, com análise e desenvolvimento de currículos e otimização estratégica de LinkedIn.",
    aviso:
      "Serviço particular, prestado nas horas vagas e aos fins de semana, de forma independente da minha atuação na empresa.",
    textoBotao: "Conhecer meus serviços",
    url: "https://www.lucasheliodorio.com.br/",
  },

  contato: {
    titulo: "Vamos conversar?",
    texto:
      "Aberto a conversar sobre oportunidades em Recursos Humanos, HR Business Partner, People Analytics, automação com IA e projetos de transformação de RH.",
  },
};
