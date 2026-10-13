function populateDocument() {
  var docId = '1qnvVbbU2-MpQWpckHYQPPEYAitGjPttMwq0y0fOfowo';
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  
  // Limpa o documento
  body.clear();
  
  // === ESTILOS ===
  var styleNormal = {};
  styleNormal[DocumentApp.Attribute.FONT_FAMILY] = 'Roboto';
  styleNormal[DocumentApp.Attribute.FONT_SIZE] = 11;
  styleNormal[DocumentApp.Attribute.BOLD] = false;
  styleNormal[DocumentApp.Attribute.ITALIC] = false;
  styleNormal[DocumentApp.Attribute.FOREGROUND_COLOR] = '#000000';
  
  var styleH1 = {};
  styleH1[DocumentApp.Attribute.FONT_FAMILY] = 'Roboto';
  styleH1[DocumentApp.Attribute.FONT_SIZE] = 18;
  styleH1[DocumentApp.Attribute.BOLD] = true; 
  
  var styleH2 = {};
  styleH2[DocumentApp.Attribute.FONT_FAMILY] = 'Roboto';
  styleH2[DocumentApp.Attribute.FONT_SIZE] = 16;
  styleH2[DocumentApp.Attribute.BOLD] = true;
  
  var styleH3 = {};
  styleH3[DocumentApp.Attribute.FONT_FAMILY] = 'Roboto';
  styleH3[DocumentApp.Attribute.FONT_SIZE] = 13;
  styleH3[DocumentApp.Attribute.BOLD] = true;
  
  var styleBold = {};
  styleBold[DocumentApp.Attribute.BOLD] = true;
  
  var styleCode = {};
  styleCode[DocumentApp.Attribute.FONT_FAMILY] = 'Roboto Mono';
  styleCode[DocumentApp.Attribute.FONT_SIZE] = 9;
  styleCode[DocumentApp.Attribute.BACKGROUND_COLOR] = '#f3f4f6';
  
  // === HELPER FUNCTIONS ===
  function addHeading1(text) {
    var p = body.appendParagraph(text);
    p.setHeading(DocumentApp.ParagraphHeading.HEADING1);
    p.setAttributes(styleH1);
    return p;
  }
  
  function addHeading2(text) {
    var p = body.appendParagraph(text);
    p.setHeading(DocumentApp.ParagraphHeading.HEADING2);
    p.setAttributes(styleH2);
    return p;
  }
  
  function addHeading3(text) {
    var p = body.appendParagraph(text);
    p.setHeading(DocumentApp.ParagraphHeading.HEADING3);
    p.setAttributes(styleH3);
    return p;
  }
  
  function addParagraph(text) {
    var p = body.appendParagraph(text);
    p.setAttributes(styleNormal);
    return p;
  }
  
  function addBoldParagraph(text) {
    var p = body.appendParagraph(text);
    p.setAttributes(styleNormal);
    p.setBold(true);
    return p;
  }
  
  function addBullet(text) {
    var item = body.appendListItem(text);
    item.setGlyphType(DocumentApp.GlyphType.BULLET);
    item.setAttributes(styleNormal);
    return item;
  }
  
  function addCodeBlock(lines) {
    for (var i = 0; i < lines.length; i++) {
      var p = body.appendParagraph(lines[i]);
      p.setAttributes(styleCode);
    }
  }
  
  function addTable(headers, rows) {
    var tableData = [headers].concat(rows);
    var table = body.appendTable(tableData);
    // Style header row bold
    var headerRow = table.getRow(0);
    for (var c = 0; c < headerRow.getNumCells(); c++) {
      headerRow.getCell(c).getChild(0).asParagraph().setBold(true);
    }
    // Style all cells
    for (var r = 0; r < table.getNumRows(); r++) {
      for (var c2 = 0; c2 < table.getRow(r).getNumCells(); c2++) {
        var cell = table.getRow(r).getCell(c2);
        cell.getChild(0).asParagraph().setAttributes(styleNormal);
      }
    }
    return table;
  }
  
  function addSpacer() {
    addParagraph('');
  }
  
  function addHR() {
    body.appendHorizontalRule();
  }
  
  function addImageRef(caption) {
    var p = body.appendParagraph('[Imagem: ' + caption + ']');
    p.setAttributes(styleNormal);
    p.setItalic(true);
    p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    return p;
  }
  
  // ============================================================
  // CAPA
  // ============================================================
  addSpacer();
  addSpacer();
  addSpacer();
  addSpacer();
  
  var p = body.appendParagraph('UNIFECAF');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  
  p = body.appendParagraph('GRADUAÇÃO EM IA E AUTOMAÇÃO DIGITAL');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  
  addSpacer();
  addSpacer();
  addSpacer();
  
  p = body.appendParagraph('ROBERT FERNANDO SCHWEPPE');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  
  addSpacer();
  addSpacer();
  addSpacer();
  
  p = body.appendParagraph('Meu Sistema Operacional Pessoal: Utilizando IA para Gerenciar Tempo, Comunicação e Produtividade');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  p.setFontSize(14);
  
  addSpacer();
  addSpacer();
  addSpacer();
  addSpacer();
  addSpacer();
  addSpacer();
  
  p = body.appendParagraph('Curitiba');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  
  p = body.appendParagraph('2026');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  
  body.appendPageBreak();
  
  // ============================================================
  // FOLHA DE ROSTO
  // ============================================================
  addSpacer();
  addSpacer();
  addSpacer();
  
  p = body.appendParagraph('ROBERT FERNANDO SCHWEPPE');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  
  addSpacer();
  addSpacer();
  
  p = body.appendParagraph('Meu Sistema Operacional Pessoal: Utilizando IA para Gerenciar Tempo, Comunicação e Produtividade');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  p.setFontSize(14);
  
  addSpacer();
  addSpacer();
  
  p = body.appendParagraph('Trabalho apresentado à disciplina Produtividade e Gestão do Tempo, como requisito parcial de avaliação da disciplina.');
  p.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  p.setAttributes(styleNormal);
  p.setIndentStart(200);
  
  addSpacer();
  addSpacer();
  addSpacer();
  addSpacer();
  addSpacer();
  
  p = body.appendParagraph('Curitiba');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  
  p = body.appendParagraph('2026');
  p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  p.setAttributes(styleNormal);
  p.setBold(true);
  
  body.appendPageBreak();
  
  // ============================================================
  // SUMÁRIO
  // ============================================================
  addHeading1('Sumário');
  addSpacer();
  addParagraph('1. Introdução');
  addParagraph('2. Parte Teórica');
  addParagraph('    2.1 Diagnóstico da rotina de um profissional de tecnologia');
  addParagraph('    2.2 Principais desafios de produtividade');
  addParagraph('    2.3 Métodos de produtividade: Pomodoro, Eisenhower e GTD');
  addParagraph('    2.4 Ferramentas escolhidas e justificativa');
  addParagraph('    2.5 Como a IA foi usada');
  addParagraph('    2.6 Estratégias de comunicação, procrastinação e saúde mental');
  addParagraph('3. Parte Prática — o case Zas Organizer');
  addParagraph('    3.1 Organização de tarefas e prioridades');
  addParagraph('    3.2 Planejamento semanal e mensal');
  addParagraph('    3.3 Gestão de compromissos');
  addParagraph('    3.4 Técnica de produtividade aplicada: Matriz de Eisenhower');
  addParagraph('    3.5 Ferramenta digital: GitCompany AI e integrações');
  addParagraph('    3.6 Uso de IA para automatizar, resumir, organizar e planejar');
  addParagraph('    3.7 Dashboard e painel de acompanhamento');
  addParagraph('    3.8 README do repositório centralizador');
  addParagraph('4. Arquitetura do sistema');
  addParagraph('5. Resultados e principais ganhos');
  addParagraph('6. Conclusão');
  addParagraph('Referências');
  addParagraph('Apêndice A — Repositórios, execução e segredos');
  
  body.appendPageBreak();
  
  // ============================================================
  // 1. INTRODUÇÃO
  // ============================================================
  addHeading1('1. Introdução');
  addSpacer();
  addParagraph('Este trabalho descreve a concepção e a implementação de um sistema operacional pessoal (POS) voltado à gestão de tempo, comunicação e produtividade de um profissional de tecnologia que concilia trabalho remoto, estudos de pós-graduação e consumo contínuo de informação técnica. O objetivo não é adotar mais uma ferramenta isolada, mas organizar um ecossistema no qual tarefas, compromissos, comunicação e aprendizado passam a ser coordenados por agentes de IA auditáveis.');
  addSpacer();
  addParagraph('A espinha dorsal do sistema é a biblioteca GitCompany AI (pacote gitcompany-ai, licença MIT), que adota o conceito de Business-as-a-Code (BaaC): a estrutura de uma organização — papéis, agentes, fluxo de trabalho e integrações — é descrita como código versionado e sincronizada com o GitHub. É importante registrar a ordem em que as coisas aconteceram: a GitCompany foi concebida e desenvolvida especificamente para atender a este trabalho — a necessidade concreta de um sistema operacional pessoal que coordenasse agenda, comunicação, resumos e notícias foi o problema que motivou a sua criação. Durante o desenvolvimento, porém, as decisões de projeto foram tomadas de forma deliberadamente agnóstica: a biblioteca não assume nada sobre o domínio "assistente pessoal", é independente de provedor de LLM (OpenAI, Anthropic, Google Gemini, Groq, Ollama, entre outros) e trata integrações concretas como extensões plugáveis, mantendo o núcleo genérico. Por servir a qualquer organização de agentes — e não apenas a este case —, fez sentido liberá-la como open source (MIT, publicada no npm), para que outras pessoas possam reutilizá-la em contextos completamente diferentes.');
  addSpacer();
  addParagraph('Sobre essa base foi construído o case Zas Organizer, um assistente pessoal composto por cinco agentes que integram Google Calendar, Gmail, Notion e Playwright, com acompanhamento via GitHub Projects v2. Ou seja: o trabalho entrega duas camadas complementares — a biblioteca genérica e reutilizável (GitCompany) e a aplicação específica dela ao desafio proposto (Zas Organizer).');
  addSpacer();
  addParagraph('O documento está dividido em uma Parte Teórica, que diagnostica a rotina e fundamenta as escolhas metodológicas, e uma Parte Prática, que demonstra o case em funcionamento, com evidências visuais referenciadas em assets/.');
  
  body.appendPageBreak();
  
  // ============================================================
  // 2. PARTE TEÓRICA
  // ============================================================
  addHeading1('2. Parte Teórica');
  addSpacer();
  
  addHeading2('2.1 Diagnóstico da rotina de um profissional de tecnologia');
  addSpacer();
  addParagraph('A rotina analisada é a de um profissional de tecnologia em regime de trabalho remoto, que acumula três frentes simultâneas: entregas profissionais, aulas ao vivo da pós-graduação e estudo autodirigido (incluindo trilhas longas de automação, como a sequência de aulas sobre n8n). Esse perfil concentra, em um único dia, atividades que competem pelo mesmo recurso escasso — a atenção.');
  addSpacer();
  addParagraph('Os sintomas observados são típicos do trabalho de conhecimento: a agenda de estudos chegava sobreposta, com aulas se encavalando; a comunicação ficava dispersa entre canais; e o volume de notícias e novidades de IA crescia mais rápido do que a capacidade de triagem. O POS nasce justamente para transformar esse caos de entradas em um fluxo previsível de blocos de foco, compromissos sem conflito e resumos consolidados.');
  addSpacer();
  
  addHeading2('2.2 Principais desafios de produtividade');
  addSpacer();
  addParagraph('A tabela a seguir liga cada desafio diagnosticado ao mecanismo do POS/Zas Organizer que o endereça.');
  addSpacer();
  addTable(
    ['Desafio', 'Como se manifesta na rotina', 'Como o POS/Zas Organizer endereça'],
    [
      ['Trabalho remoto sem fronteiras', 'Expediente e estudo se misturam, sem ritual de início/fim', 'Blocos de estudo encadeados e explícitos na agenda, com intervalos definidos'],
      ['Troca de contexto (context switching)', 'Pular entre e-mail, código, aulas e notícias degrada o foco', 'Agentes especializados assumem cada frente; o profissional recebe saídas consolidadas'],
      ['Excesso de ferramentas e informação', 'Google Calendar, Gmail, Notion, GitHub e portais de notícias competindo por atenção', 'Um orquestrador único coordena as integrações e entrega resumos padronizados'],
      ['Interrupções', 'Notificações fragmentam o dia', 'Coleta e resumo em lote (notícias diárias, resumo semanal) em vez de consumo contínuo'],
      ['Risco de procrastinação', 'Tarefas grandes e ambíguas são adiadas', 'Triagem por prioridade (Eisenhower) + quebra em issues rastreáveis'],
      ['Sobrecarga cognitiva', 'Sensação de "tudo urgente"', 'Matriz de Eisenhower separa urgente de importante; o coordenador faz a triagem']
    ]
  );
  addSpacer();
  
  addHeading2('2.3 Métodos de produtividade: Pomodoro, Eisenhower e GTD');
  addSpacer();
  addParagraph('Três métodos consolidados foram avaliados:');
  addBullet('Pomodoro — divide o trabalho em blocos cronometrados (tipicamente 25 minutos) com pausas curtas. Excelente para sustentar foco e combater procrastinação em tarefas de execução.');
  addBullet('GTD (Getting Things Done) — centraliza todas as pendências em um sistema confiável, com etapas de capturar, esclarecer, organizar, refletir e engajar. Forte para não perder entradas, porém exige disciplina de revisão.');
  addBullet('Matriz de Eisenhower — classifica tarefas em quatro quadrantes cruzando urgência e importância, orientando a decisão de fazer, agendar, delegar ou eliminar.');
  addSpacer();
  addBoldParagraph('Justificativa da escolha de Eisenhower como técnica central:');
  addParagraph('O case precisa, antes de tudo, decidir o que merece atenção e para quem vai cada tarefa, dado que parte do trabalho é delegada a agentes de IA. A Matriz de Eisenhower se materializa diretamente no sistema por meio de rótulos de prioridade e de um coordenador (CEO) que faz a triagem e roteia as issues. Pomodoro e GTD permanecem como práticas complementares: Pomodoro governa os blocos de foco dentro de cada compromisso de estudo, e o espírito de "capturar tudo em um sistema confiável" do GTD é cumprido pelas issues do GitHub e pelos resumos no Notion.');
  addSpacer();
  
  addHeading2('2.4 Ferramentas escolhidas e justificativa');
  addSpacer();
  addTable(
    ['Ferramenta', 'Papel no POS', 'Justificativa frente ao desafio'],
    [
      ['GitCompany AI (gitcompany-ai)', 'Orquestrador BaaC: define agentes, fluxo e integrações como código', 'Centraliza a coordenação e torna o sistema auditável e reproduzível'],
      ['Google Calendar', 'Agenda de estudos e compromissos', 'Resolve a sobreposição de aulas com blocos encadeados e intervalos'],
      ['Gmail', 'Comunicação e envio do resumo semanal', 'Consolida a comunicação dispersa em um único resumo acionável'],
      ['Notion', 'Base de conhecimento: resumos semanais e notícias diárias', 'Combate o excesso de informação com páginas padronizadas'],
      ['Playwright', 'Automação de navegador para coleta de notícias', 'Permite varredura de fontes especializadas sem consumo manual contínuo'],
      ['GitHub Projects v2', 'Kanban e rastreio de tarefas', 'Dá visibilidade e governança às tarefas delegadas aos agentes']
    ]
  );
  addSpacer();
  
  addHeading2('2.5 Como a IA foi usada');
  addSpacer();
  addParagraph('A IA entra como camada de orquestração, não como gadget pontual. O GitCompany AI usa LangChain.js de forma provider-agnostic: o mesmo agente pode rodar sobre Google Gemini, OpenAI, Anthropic, AWS Bedrock, Groq, Moonshot (Kimi), Ollama, um endpoint customizado compatível com OpenAI (URL + token, p. ex. NVIDIA NIM), o provider de CLI (Kiro) ou um modo local básico. Essa independência de provider evita lock-in e permite trocar de modelo sem reescrever os agentes.');
  addSpacer();
  addParagraph('O onboarding assistido por IA ajuda a desenhar a organização e importa um projeto existente a partir de um business.json modular. Em tempo de execução, o coordenador faz a triagem no espírito da Matriz de Eisenhower, e os agentes especializados executam tarefas repetitivas — coletar notícias, montar o resumo semanal, organizar a agenda — devolvendo saídas padronizadas.');
  addSpacer();
  
  addHeading2('2.6 Estratégias de comunicação, procrastinação e saúde mental');
  addSpacer();
  addBullet('Comunicação: em vez de notificações contínuas, um resumo semanal por e-mail consolida o que importa, reduzindo a ansiedade de "estar sempre online".');
  addBullet('Procrastinação: tarefas grandes viram issues pequenas e rastreáveis; blocos de foco no estilo Pomodoro dão um ponto de partida concreto para cada sessão de estudo.');
  addBullet('Saúde mental: a higiene de agenda (aulas encadeadas, nunca sobrepostas, com intervalos entre blocos) e o enquadramento diário das notícias em lote reduzem a sobrecarga cognitiva e preservam fronteiras no trabalho remoto.');
  
  body.appendPageBreak();
  
  // ============================================================
  // 3. PARTE PRÁTICA
  // ============================================================
  addHeading1('3. Parte Prática — o case Zas Organizer');
  addSpacer();
  addParagraph('O case Zas Organizer aplica os conceitos acima a uma rotina real de estudos e trabalho.');
  addSpacer();
  
  addHeading2('3.1 Organização de tarefas e prioridades');
  addSpacer();
  addParagraph('As tarefas são representadas como issues no GitHub, roteadas por rótulos de prioridade que seguem a Matriz de Eisenhower. O coordenador classifica cada entrada e a direciona ao quadrante correspondente, o que torna explícito o que será feito, agendado, delegado a um agente ou descartado.');
  addImageRef('Issues com rastreio e rótulos no GitHub (assets/07-github-issue-tracking.png)');
  addSpacer();
  
  addHeading2('3.2 Planejamento semanal e mensal');
  addSpacer();
  addParagraph('O planejamento de estudos foi reorganizado para que uma aula sempre ocorra após a outra, sem sobreposição, com duração mínima de 15 minutos por bloco e um intervalo entre agendas. O resultado é consolidado em um resumo semanal publicado no Notion, que serve de retrospecto e de base para o planejamento seguinte.');
  addImageRef('Resumo semanal no Notion (assets/08-notion-resumo-semanal.png)');
  addSpacer();
  
  addHeading2('3.3 Gestão de compromissos');
  addSpacer();
  addParagraph('Os compromissos vivem no Google Calendar, alimentado por um agente de agenda que usa uma extensão de CLI local (googleapis). A agenda reúne as aulas ao vivo da pós e a trilha de estudo autodirigido, mantendo os blocos encadeados e livres de conflito.');
  addImageRef('Agenda de estudos organizada no Google Calendar (assets/11-google-agenda-estudos.png)');
  addSpacer();
  
  addHeading2('3.4 Técnica de produtividade aplicada: Matriz de Eisenhower');
  addSpacer();
  addParagraph('A técnica central é a Matriz de Eisenhower, materializada por rótulos de prioridade e pelo coordenador que faz a triagem.');
  addSpacer();
  addTable(
    ['', 'Urgente', 'Não urgente'],
    [
      ['Importante', 'Fazer — resolver agora (ex.: entrega com prazo)', 'Agendar — reservar bloco na agenda (ex.: estudo da trilha)'],
      ['Não importante', 'Delegar — roteado a um agente (ex.: coletar notícias)', 'Eliminar — descartar ruído (ex.: notificação irrelevante)']
    ]
  );
  addSpacer();
  addParagraph('Os quadrantes se refletem no Kanban e nas issues, de modo que a prioridade de cada tarefa fica visível no board.');
  addImageRef('Kanban do GitCompany com as etapas do fluxo (assets/02-gitcompany-kanban.png)');
  addSpacer();
  
  addHeading2('3.5 Ferramenta digital: GitCompany AI e integrações');
  addSpacer();
  addParagraph('A ferramenta digital que sustenta o case é o GitCompany AI. O dashboard apresenta a visão geral da organização, e o editor de agentes expõe a configuração de cada agente, incluindo extensões (ferramentas de CLI e servidores MCP) e o contexto longo em Markdown.');
  addImageRef('Dashboard do GitCompany (assets/01-gitcompany-dashboard.png)');
  addImageRef('Lista e edição de agentes no GitCompany (assets/03-gitcompany-agentes.png)');
  addSpacer();
  
  addHeading2('3.6 Uso de IA para automatizar, resumir, organizar e planejar');
  addSpacer();
  addParagraph('Três agentes concentram a automação de informação:');
  addBullet('Agente de notícias — coleta diária de notícias de IA via Playwright, varrendo fontes especializadas, e publica a lista por data no Notion.');
  addBullet('Agente do Notion — monta o resumo semanal padronizado, combinando notícias e semana de estudos.');
  addBullet('Agente de e-mail — envia o resumo semanal consolidado.');
  addSpacer();
  addParagraph('O contexto longo em Markdown de cada agente padroniza o template dos resumos: cada agente carrega uma descrição curta e um documento Markdown extenso (convenção agents/<id>.md) que define exatamente o que coletar e como estruturar a saída.');
  addImageRef('Notícias diárias no Notion (assets/09-notion-noticias-diarias.png)');
  addImageRef('E-mail de resumo semanal no Gmail (assets/10-gmail-resumo-email.png)');
  addSpacer();
  
  addHeading2('3.7 Dashboard e painel de acompanhamento');
  addSpacer();
  addParagraph('O acompanhamento ocorre em três camadas complementares: o Kanban do GitCompany, o GitHub Project v2 sincronizado e a página de auditoria, que registra as ações de cada agente.');
  addImageRef('Organograma da organização (assets/04-gitcompany-orgchart.png)');
  addImageRef('Auditoria por agente no GitCompany (assets/05-gitcompany-auditoria.png)');
  addImageRef('GitHub Project v2 (board do case) (assets/06-github-project-board.png)');
  addSpacer();
  
  addHeading2('3.8 README do repositório centralizador');
  addSpacer();
  addParagraph('Todo o conteúdo produzido é centralizado em um repositório específico do trabalho, cujo README.md reúne a descrição da biblioteca, o case, a arquitetura e as evidências visuais. Esse README é o entregável descrito no documento README deste pacote.');
  
  body.appendPageBreak();
  
  // ============================================================
  // 4. ARQUITETURA DO SISTEMA
  // ============================================================
  addHeading1('4. Arquitetura do sistema');
  addSpacer();
  addParagraph('O Zas Organizer é composto por cinco agentes coordenados:');
  addSpacer();
  addCodeBlock([
    '                        +---------------------------+',
    '                        |   Coordenador (CEO)       |',
    '                        |   triagem Eisenhower      |',
    '                        +------------+--------------+',
    '                                     |',
    '         +-------------------+-------+-------+-------------------+',
    '         |                   |               |                   |',
    ' +-------v------+   +--------v-----+  +------v-------+   +-------v--------+',
    ' | Agente       |   | Agente       |  | Agente       |   | Agente         |',
    ' | Agenda       |   | E-mail       |  | Notion       |   | Notícias       |',
    ' | (Calendar)   |   | (Gmail)      |  | (resumos)    |   | (Playwright)   |',
    ' +-------+------+   +--------+-----+  +------+-------+   +-------+--------+',
    '         |                   |               |                   |',
    '   Google Calendar        Gmail           Notion         Fontes de notícias',
    '         \\___________________\\______________|__________________/',
    '                                     |',
    '                        +------------v--------------+',
    '                        |  GitHub Projects v2 (sync)|',
    '                        |  Kanban + auditoria       |',
    '                        +---------------------------+'
  ]);
  addSpacer();
  addParagraph('Pontos de arquitetura relevantes:');
  addBullet('Extensões viajam no modelo. Cada agente serializa suas extensões — ferramentas de CLI, servidores MCP e arquivos de contexto — em sua configuração (cliTools, mcpServers, contextFiles, contextMarkdown). Assim, ao carregar a organização em outra máquina, fica explícito que a extensão precisa ser carregada também.');
  addBullet('Segredos write-only. Credenciais são gravadas mas nunca lidas de volta; a aplicação as interpola em tempo de execução. Nenhum valor real aparece nesta documentação — apenas placeholders {{SECRET_NAME}} (ver Apêndice A).');
  addBullet('Kanban sincronizado com o GitHub (5 etapas). O fluxo padrão tem as etapas Backlog, Em Progresso, Revisão, Ação Manual e Concluído, espelhadas no campo de status single-select do GitHub Project v2.');
  addSpacer();
  addCodeBlock([
    '{',
    '  "workflow_stages": ["Backlog", "Em Progresso", "Revisão", "Ação Manual", "Concluído"],',
    '  "issueLifecycle": {',
    '    "completionPatterns": ["[TAREFA_CONCLUÍDA]", "[TASK_COMPLETED]"],',
    '    "completionColumn": "Concluído",',
    '    "autoClose": true,',
    '    "defaultColumn": "Backlog"',
    '  }',
    '}'
  ]);
  
  body.appendPageBreak();
  
  // ============================================================
  // 5. RESULTADOS E PRINCIPAIS GANHOS
  // ============================================================
  addHeading1('5. Resultados e principais ganhos');
  addSpacer();
  addBullet('Agenda sem sobreposição: as aulas passaram a ocorrer em sequência, com intervalo entre blocos e duração mínima por sessão, eliminando os conflitos iniciais.');
  addBullet('Foco: blocos de estudo explícitos e resumos em lote reduzem a troca de contexto e as interrupções.');
  addBullet('Resumo único: o resumo semanal por e-mail e as páginas padronizadas no Notion consolidam a comunicação e a informação.');
  addBullet('Triagem automática: o coordenador aplica a Matriz de Eisenhower e roteia tarefas, com rastreio completo no GitHub.');
  addBullet('Reprodutibilidade e governança: por ser BaaC, toda a organização é versionada e auditável, e a independência de provider de LLM evita lock-in.');
  
  body.appendPageBreak();
  
  // ============================================================
  // 6. CONCLUSÃO
  // ============================================================
  addHeading1('6. Conclusão');
  addSpacer();
  addParagraph('O POS demonstra que ganhos de produtividade reais vêm menos de adotar ferramentas novas e mais de coordenar as existentes sob uma lógica única. Ao apoiar o sistema na biblioteca GitCompany AI e aplicar a Matriz de Eisenhower como critério central de priorização, o case Zas Organizer transformou uma rotina sobrecarregada — agenda encavalada, comunicação dispersa e excesso de notícias — em um fluxo previsível de blocos de foco, resumos consolidados e tarefas rastreáveis. A arquitetura baseada em agentes auditáveis, segredos write-only e sincronização com o GitHub torna o resultado reproduzível e sustentável no tempo.');
  
  body.appendPageBreak();
  
  // ============================================================
  // REFERÊNCIAS
  // ============================================================
  addHeading1('Referências');
  addSpacer();
  addBullet('Biblioteca GitCompany AI (open source, MIT): https://github.com/zastrich/git-company');
  addBullet('Case Zas Organizer (organização do assistente pessoal): https://github.com/zastrich/zas-organizer-org');
  addBullet('GitHub Project v2 (board do case): https://github.com/users/zastrich/projects/7');
  addBullet('Pacote npm: gitcompany-ai (versão 0.2.4, licença MIT)');
  addBullet('Documentação do projeto: README.md do repositório da biblioteca');
  addBullet('Métodos de produtividade: Matriz de Eisenhower; Técnica Pomodoro; GTD (Getting Things Done)');
  
  body.appendPageBreak();
  
  // ============================================================
  // APÊNDICE A
  // ============================================================
  addHeading1('Apêndice A — Repositórios, execução e segredos');
  addSpacer();
  
  addBoldParagraph('Como executar (resumo):');
  addCodeBlock([
    '# sobe a aplicação e cria o banco SQLite em ~/.gitcompany/main.db',
    'npx gitcompany-ai deploy',
    '',
    '# comandos auxiliares',
    'npx gitcompany-ai start      # sobe o servidor sem abrir o navegador',
    'npx gitcompany-ai doctor     # diagnóstico (banco, modo, standalone)',
    'npx gitcompany-ai db:reset   # recria o banco local'
  ]);
  addSpacer();
  
  addBoldParagraph('Segredos (apenas placeholders — nunca valores reais):');
  addCodeBlock([
    'GOOGLE_OAUTH_CREDENTIALS={{GOOGLE_OAUTH_CREDENTIALS}}',
    'GMAIL_OAUTH_CREDENTIALS={{GMAIL_OAUTH_CREDENTIALS}}',
    'GOOGLE_IMPERSONATE_SUBJECT={{GOOGLE_IMPERSONATE_SUBJECT}}',
    'NOTION_TOKEN={{NOTION_TOKEN}}',
    'GEMINI_API_KEY={{GEMINI_API_KEY}}'
  ]);
  addSpacer();
  addParagraph('Os segredos são gravados de forma write-only no sistema (tabela de segredos da empresa) e interpolados em tempo de execução via a sintaxe {{SECRET_NAME}}; não são lidos de volta nem versionados.');
  
  Logger.log('Documento populado com sucesso!');
}
