<div align="center">

**UNIFECAF**

**GRADUAÇÃO EM IA E AUTOMAÇÃO DIGITAL**

**ROBERT FERNANDO SCHWEPPE**

<br><br><br><br>

# Meu Sistema Operacional Pessoal: Utilizando IA para Gerenciar Tempo, Comunicação e Produtividade

<br><br><br><br><br><br>

**Curitiba**

**2026**

</div>

---

<div align="center">

**ROBERT FERNANDO SCHWEPPE**

<br><br>

# Meu Sistema Operacional Pessoal: Utilizando IA para Gerenciar Tempo, Comunicação e Produtividade

<br><br><br>

</div>

Trabalho apresentado à disciplina Produtividade e Gestão do Tempo, como requisito parcial de avaliação da disciplina.

<br><br>

<div align="center">

**Curitiba**

**2026**

</div>

---

## Sumário

- [1. Introdução](#1-introdução)
- [2. Parte Teórica](#2-parte-teórica)
  - [2.1 Diagnóstico da rotina de um profissional de tecnologia](#21-diagnóstico-da-rotina-de-um-profissional-de-tecnologia)
  - [2.2 Principais desafios de produtividade](#22-principais-desafios-de-produtividade)
  - [2.3 Métodos de produtividade: Pomodoro, Eisenhower e GTD](#23-métodos-de-produtividade-pomodoro-eisenhower-e-gtd)
  - [2.4 Ferramentas escolhidas e justificativa](#24-ferramentas-escolhidas-e-justificativa)
  - [2.5 Como a IA foi usada](#25-como-a-ia-foi-usada)
  - [2.6 Estratégias de comunicação, procrastinação e saúde mental](#26-estratégias-de-comunicação-procrastinação-e-saúde-mental)
- [3. Parte Prática — o case Zas Organizer](#3-parte-prática--o-case-zas-organizer)
  - [3.1 Organização de tarefas e prioridades](#31-organização-de-tarefas-e-prioridades)
  - [3.2 Planejamento semanal e mensal](#32-planejamento-semanal-e-mensal)
  - [3.3 Gestão de compromissos](#33-gestão-de-compromissos)
  - [3.4 Técnica de produtividade aplicada: Matriz de Eisenhower](#34-técnica-de-produtividade-aplicada-matriz-de-eisenhower)
  - [3.5 Ferramenta digital: GitCompany AI e integrações](#35-ferramenta-digital-gitcompany-ai-e-integrações)
  - [3.6 Uso de IA para automatizar, resumir, organizar e planejar](#36-uso-de-ia-para-automatizar-resumir-organizar-e-planejar)
  - [3.7 Dashboard e painel de acompanhamento](#37-dashboard-e-painel-de-acompanhamento)
  - [3.8 README do repositório centralizador](#38-readme-do-repositório-centralizador)
- [4. Arquitetura do sistema](#4-arquitetura-do-sistema)
- [5. Resultados e principais ganhos](#5-resultados-e-principais-ganhos)
- [6. Conclusão](#6-conclusão)
- [Referências](#referências)
- [Apêndice A — Repositórios, execução e segredos](#apêndice-a--repositórios-execução-e-segredos)

---

## 1. Introdução

Este trabalho descreve a concepção e a implementação de um sistema operacional pessoal (POS) voltado à gestão de tempo, comunicação e produtividade de um profissional de tecnologia que concilia trabalho remoto, estudos de pós-graduação e consumo contínuo de informação técnica. O objetivo não é adotar mais uma ferramenta isolada, mas organizar um ecossistema no qual tarefas, compromissos, comunicação e aprendizado passam a ser coordenados por agentes de IA auditáveis.

A espinha dorsal do sistema é a biblioteca **GitCompany AI** (pacote `gitcompany-ai`, licença MIT), que adota o conceito de *Business-as-a-Code* (BaaC): a estrutura de uma organização — papéis, agentes, fluxo de trabalho e integrações — é descrita como código versionado e sincronizada com o GitHub. É importante registrar a ordem em que as coisas aconteceram: a GitCompany foi concebida e desenvolvida **especificamente para atender a este trabalho** — a necessidade concreta de um sistema operacional pessoal que coordenasse agenda, comunicação, resumos e notícias foi o problema que motivou a sua criação. Durante o desenvolvimento, porém, as decisões de projeto foram tomadas de forma deliberadamente **agnóstica**: a biblioteca não assume nada sobre o domínio "assistente pessoal", é independente de provedor de LLM (OpenAI, Anthropic, Google Gemini, Groq, Ollama, entre outros) e trata integrações concretas como extensões plugáveis, mantendo o núcleo genérico. Por servir a qualquer organização de agentes — e não apenas a este case —, fez sentido liberá-la como **open source** (MIT, publicada no npm), para que outras pessoas possam reutilizá-la em contextos completamente diferentes.

Sobre essa base foi construído o case **Zas Organizer**, um assistente pessoal composto por cinco agentes que integram Google Calendar, Gmail, Notion e Playwright, com acompanhamento via GitHub Projects v2. Ou seja: o trabalho entrega duas camadas complementares — a biblioteca genérica e reutilizável (GitCompany) e a aplicação específica dela ao desafio proposto (Zas Organizer).

O documento está dividido em uma Parte Teórica, que diagnostica a rotina e fundamenta as escolhas metodológicas, e uma Parte Prática, que demonstra o case em funcionamento, com evidências visuais referenciadas em `assets/`.

---

## 2. Parte Teórica

### 2.1 Diagnóstico da rotina de um profissional de tecnologia

A rotina analisada é a de um profissional de tecnologia em regime de **trabalho remoto**, que acumula três frentes simultâneas: entregas profissionais, aulas ao vivo da pós-graduação e estudo autodirigido (incluindo trilhas longas de automação, como a sequência de aulas sobre n8n). Esse perfil concentra, em um único dia, atividades que competem pelo mesmo recurso escasso — a atenção.

Os sintomas observados são típicos do trabalho de conhecimento: a agenda de estudos chegava sobreposta, com aulas se encavalando; a comunicação ficava dispersa entre canais; e o volume de notícias e novidades de IA crescia mais rápido do que a capacidade de triagem. O POS nasce justamente para transformar esse caos de entradas em um fluxo previsível de blocos de foco, compromissos sem conflito e resumos consolidados.

### 2.2 Principais desafios de produtividade

A tabela a seguir liga cada desafio diagnosticado ao mecanismo do POS/Zas Organizer que o endereça.

| Desafio | Como se manifesta na rotina | Como o POS/Zas Organizer endereça |
|---|---|---|
| **Trabalho remoto sem fronteiras** | Expediente e estudo se misturam, sem ritual de início/fim | Blocos de estudo encadeados e explícitos na agenda, com intervalos definidos |
| **Troca de contexto (context switching)** | Pular entre e-mail, código, aulas e notícias degrada o foco | Agentes especializados assumem cada frente; o profissional recebe saídas consolidadas |
| **Excesso de ferramentas e informação** | Google Calendar, Gmail, Notion, GitHub e portais de notícias competindo por atenção | Um orquestrador único coordena as integrações e entrega resumos padronizados |
| **Interrupções** | Notificações fragmentam o dia | Coleta e resumo em lote (notícias diárias, resumo semanal) em vez de consumo contínuo |
| **Risco de procrastinação** | Tarefas grandes e ambíguas são adiadas | Triagem por prioridade (Eisenhower) + quebra em issues rastreáveis |
| **Sobrecarga cognitiva** | Sensação de "tudo urgente" | Matriz de Eisenhower separa urgente de importante; o coordenador faz a triagem |

### 2.3 Métodos de produtividade: Pomodoro, Eisenhower e GTD

Três métodos consolidados foram avaliados:

- **Pomodoro** — divide o trabalho em blocos cronometrados (tipicamente 25 minutos) com pausas curtas. Excelente para sustentar foco e combater procrastinação em tarefas de execução.
- **GTD (Getting Things Done)** — centraliza todas as pendências em um sistema confiável, com etapas de capturar, esclarecer, organizar, refletir e engajar. Forte para não perder entradas, porém exige disciplina de revisão.
- **Matriz de Eisenhower** — classifica tarefas em quatro quadrantes cruzando urgência e importância, orientando a decisão de fazer, agendar, delegar ou eliminar.

**Justificativa da escolha de Eisenhower como técnica central:** o case precisa, antes de tudo, decidir *o que* merece atenção e *para quem* vai cada tarefa, dado que parte do trabalho é delegada a agentes de IA. A Matriz de Eisenhower se materializa diretamente no sistema por meio de rótulos de prioridade e de um coordenador (CEO) que faz a triagem e roteia as issues. Pomodoro e GTD permanecem como práticas complementares: Pomodoro governa os blocos de foco dentro de cada compromisso de estudo, e o espírito de "capturar tudo em um sistema confiável" do GTD é cumprido pelas issues do GitHub e pelos resumos no Notion.

### 2.4 Ferramentas escolhidas e justificativa

| Ferramenta | Papel no POS | Justificativa frente ao desafio |
|---|---|---|
| **GitCompany AI** (`gitcompany-ai`) | Orquestrador BaaC: define agentes, fluxo e integrações como código | Centraliza a coordenação e torna o sistema auditável e reproduzível |
| **Google Calendar** | Agenda de estudos e compromissos | Resolve a sobreposição de aulas com blocos encadeados e intervalos |
| **Gmail** | Comunicação e envio do resumo semanal | Consolida a comunicação dispersa em um único resumo acionável |
| **Notion** | Base de conhecimento: resumos semanais e notícias diárias | Combate o excesso de informação com páginas padronizadas |
| **Playwright** | Automação de navegador para coleta de notícias | Permite varredura de fontes especializadas sem consumo manual contínuo |
| **GitHub Projects v2** | Kanban e rastreio de tarefas | Dá visibilidade e governança às tarefas delegadas aos agentes |

### 2.5 Como a IA foi usada

A IA entra como camada de orquestração, não como gadget pontual. O GitCompany AI usa **LangChain.js** de forma *provider-agnostic*: o mesmo agente pode rodar sobre Google Gemini, OpenAI, Anthropic, AWS Bedrock, Groq, Moonshot (Kimi), Ollama, um endpoint customizado compatível com OpenAI (URL + token, p. ex. NVIDIA NIM), o provider de CLI (Kiro) ou um modo local básico. Essa independência de provider evita *lock-in* e permite trocar de modelo sem reescrever os agentes.

O **onboarding assistido por IA** ajuda a desenhar a organização e importa um projeto existente a partir de um `business.json` modular. Em tempo de execução, o coordenador faz a triagem no espírito da Matriz de Eisenhower, e os agentes especializados executam tarefas repetitivas — coletar notícias, montar o resumo semanal, organizar a agenda — devolvendo saídas padronizadas.

### 2.6 Estratégias de comunicação, procrastinação e saúde mental

- **Comunicação:** em vez de notificações contínuas, um **resumo semanal por e-mail** consolida o que importa, reduzindo a ansiedade de "estar sempre online".
- **Procrastinação:** tarefas grandes viram issues pequenas e rastreáveis; blocos de foco no estilo Pomodoro dão um ponto de partida concreto para cada sessão de estudo.
- **Saúde mental:** a higiene de agenda (aulas encadeadas, nunca sobrepostas, com intervalos entre blocos) e o enquadramento diário das notícias em lote reduzem a sobrecarga cognitiva e preservam fronteiras no trabalho remoto.

---

## 3. Parte Prática — o case Zas Organizer

O case **Zas Organizer** aplica os conceitos acima a uma rotina real de estudos e trabalho.

### 3.1 Organização de tarefas e prioridades

As tarefas são representadas como issues no GitHub, roteadas por rótulos de prioridade que seguem a Matriz de Eisenhower. O coordenador classifica cada entrada e a direciona ao quadrante correspondente, o que torna explícito o que será feito, agendado, delegado a um agente ou descartado.

![Issues com rastreio e rótulos no GitHub](assets/07-github-issue-tracking.png)

### 3.2 Planejamento semanal e mensal

O planejamento de estudos foi reorganizado para que **uma aula sempre ocorra após a outra**, sem sobreposição, com duração mínima de 15 minutos por bloco e um intervalo entre agendas. O resultado é consolidado em um resumo semanal publicado no Notion, que serve de retrospecto e de base para o planejamento seguinte.

![Resumo semanal no Notion](assets/08-notion-resumo-semanal.png)

### 3.3 Gestão de compromissos

Os compromissos vivem no Google Calendar, alimentado por um agente de agenda que usa uma extensão de CLI local (googleapis). A agenda reúne as aulas ao vivo da pós e a trilha de estudo autodirigido, mantendo os blocos encadeados e livres de conflito.

![Agenda de estudos organizada no Google Calendar](assets/11-google-agenda-estudos.png)

### 3.4 Técnica de produtividade aplicada: Matriz de Eisenhower

A técnica central é a Matriz de Eisenhower, materializada por rótulos de prioridade e pelo coordenador que faz a triagem.

| | **Urgente** | **Não urgente** |
|---|---|---|
| **Importante** | **Fazer** — resolver agora (ex.: entrega com prazo) | **Agendar** — reservar bloco na agenda (ex.: estudo da trilha) |
| **Não importante** | **Delegar** — roteado a um agente (ex.: coletar notícias) | **Eliminar** — descartar ruído (ex.: notificação irrelevante) |

Os quadrantes se refletem no Kanban e nas issues, de modo que a prioridade de cada tarefa fica visível no board.

![Kanban do GitCompany com as etapas do fluxo](assets/02-gitcompany-kanban.png)

### 3.5 Ferramenta digital: GitCompany AI e integrações

A ferramenta digital que sustenta o case é o GitCompany AI. O dashboard apresenta a visão geral da organização, e o editor de agentes expõe a configuração de cada agente, incluindo extensões (ferramentas de CLI e servidores MCP) e o contexto longo em Markdown.

![Dashboard do GitCompany](assets/01-gitcompany-dashboard.png)

![Lista e edição de agentes no GitCompany](assets/03-gitcompany-agentes.png)

### 3.6 Uso de IA para automatizar, resumir, organizar e planejar

Três agentes concentram a automação de informação:

- **Agente de notícias** — coleta diária de notícias de IA via Playwright, varrendo fontes especializadas, e publica a lista por data no Notion.
- **Agente do Notion** — monta o resumo semanal padronizado, combinando notícias e semana de estudos.
- **Agente de e-mail** — envia o resumo semanal consolidado.

O **contexto longo em Markdown** de cada agente padroniza o template dos resumos: cada agente carrega uma descrição curta e um documento Markdown extenso (convenção `agents/<id>.md`) que define exatamente o que coletar e como estruturar a saída.

![Notícias diárias no Notion](assets/09-notion-noticias-diarias.png)

![E-mail de resumo semanal no Gmail](assets/10-gmail-resumo-email.png)

### 3.7 Dashboard e painel de acompanhamento

O acompanhamento ocorre em três camadas complementares: o Kanban do GitCompany, o GitHub Project v2 sincronizado e a página de auditoria, que registra as ações de cada agente.

![Organograma da organização](assets/04-gitcompany-orgchart.png)

![Auditoria por agente no GitCompany](assets/05-gitcompany-auditoria.png)

![GitHub Project v2 (board do case)](assets/06-github-project-board.png)

### 3.8 README do repositório centralizador

Todo o conteúdo produzido é centralizado em um repositório específico do trabalho, cujo `README.md` reúne a descrição da biblioteca, o case, a arquitetura e as evidências visuais. Esse README é o entregável descrito no [documento README deste pacote](README.md).

---

## 4. Arquitetura do sistema

O Zas Organizer é composto por cinco agentes coordenados:

```text
                        +---------------------------+
                        |   Coordenador (CEO)       |
                        |   triagem Eisenhower      |
                        +------------+--------------+
                                     |
         +-------------------+-------+-------+-------------------+
         |                   |               |                   |
 +-------v------+   +--------v-----+  +------v-------+   +-------v--------+
 | Agente       |   | Agente       |  | Agente       |   | Agente         |
 | Agenda       |   | E-mail       |  | Notion       |   | Notícias       |
 | (Calendar)   |   | (Gmail)      |  | (resumos)    |   | (Playwright)   |
 +-------+------+   +--------+-----+  +------+-------+   +-------+--------+
         |                   |               |                   |
   Google Calendar        Gmail           Notion         Fontes de notícias
         \___________________\______________|__________________/
                                     |
                        +------------v--------------+
                        |  GitHub Projects v2 (sync)|
                        |  Kanban + auditoria       |
                        +---------------------------+
```

Pontos de arquitetura relevantes:

- **Extensões viajam no modelo.** Cada agente serializa suas extensões — ferramentas de CLI, servidores MCP e arquivos de contexto — em sua configuração (`cliTools`, `mcpServers`, `contextFiles`, `contextMarkdown`). Assim, ao carregar a organização em outra máquina, fica explícito que a extensão precisa ser carregada também.
- **Segredos write-only.** Credenciais são gravadas mas nunca lidas de volta; a aplicação as interpola em tempo de execução. Nenhum valor real aparece nesta documentação — apenas placeholders `{{SECRET_NAME}}` (ver [Apêndice A](#apêndice-a--repositórios-execução-e-segredos)).
- **Kanban sincronizado com o GitHub (5 etapas).** O fluxo padrão tem as etapas `Backlog`, `Em Progresso`, `Revisão`, `Ação Manual` e `Concluído`, espelhadas no campo de status single-select do GitHub Project v2.

```json
{
  "workflow_stages": ["Backlog", "Em Progresso", "Revisão", "Ação Manual", "Concluído"],
  "issueLifecycle": {
    "completionPatterns": ["[TAREFA_CONCLUÍDA]", "[TASK_COMPLETED]"],
    "completionColumn": "Concluído",
    "autoClose": true,
    "defaultColumn": "Backlog"
  }
}
```

---

## 5. Resultados e principais ganhos

- **Agenda sem sobreposição:** as aulas passaram a ocorrer em sequência, com intervalo entre blocos e duração mínima por sessão, eliminando os conflitos iniciais.
- **Foco:** blocos de estudo explícitos e resumos em lote reduzem a troca de contexto e as interrupções.
- **Resumo único:** o resumo semanal por e-mail e as páginas padronizadas no Notion consolidam a comunicação e a informação.
- **Triagem automática:** o coordenador aplica a Matriz de Eisenhower e roteia tarefas, com rastreio completo no GitHub.
- **Reprodutibilidade e governança:** por ser BaaC, toda a organização é versionada e auditável, e a independência de provider de LLM evita *lock-in*.

---

## 6. Conclusão

O POS demonstra que ganhos de produtividade reais vêm menos de adotar ferramentas novas e mais de coordenar as existentes sob uma lógica única. Ao apoiar o sistema na biblioteca GitCompany AI e aplicar a Matriz de Eisenhower como critério central de priorização, o case Zas Organizer transformou uma rotina sobrecarregada — agenda encavalada, comunicação dispersa e excesso de notícias — em um fluxo previsível de blocos de foco, resumos consolidados e tarefas rastreáveis. A arquitetura baseada em agentes auditáveis, segredos write-only e sincronização com o GitHub torna o resultado reproduzível e sustentável no tempo.

---

## Referências

- Biblioteca GitCompany AI (open source, MIT): <https://github.com/zastrich/git-company>
- Case Zas Organizer (organização do assistente pessoal): <https://github.com/zastrich/zas-organizer-org>
- GitHub Project v2 (board do case): <https://github.com/users/zastrich/projects/7>
- Pacote npm: `gitcompany-ai` (versão 0.2.4, licença MIT)
- Documentação do projeto: `README.md` do repositório da biblioteca
- Métodos de produtividade: Matriz de Eisenhower; Técnica Pomodoro; GTD (Getting Things Done)

---

## Apêndice A — Repositórios, execução e segredos

**Como executar (resumo):**

```bash
# sobe a aplicação e cria o banco SQLite em ~/.gitcompany/main.db
npx gitcompany-ai deploy

# comandos auxiliares
npx gitcompany-ai start      # sobe o servidor sem abrir o navegador
npx gitcompany-ai doctor     # diagnóstico (banco, modo, standalone)
npx gitcompany-ai db:reset   # recria o banco local
```

**Segredos (apenas placeholders — nunca valores reais):**

```bash
GOOGLE_OAUTH_CREDENTIALS={{GOOGLE_OAUTH_CREDENTIALS}}
GMAIL_OAUTH_CREDENTIALS={{GMAIL_OAUTH_CREDENTIALS}}
GOOGLE_IMPERSONATE_SUBJECT={{GOOGLE_IMPERSONATE_SUBJECT}}
NOTION_TOKEN={{NOTION_TOKEN}}
GEMINI_API_KEY={{GEMINI_API_KEY}}
```

Os segredos são gravados de forma write-only no sistema (tabela de segredos da empresa) e interpolados em tempo de execução via a sintaxe `{{SECRET_NAME}}`; não são lidos de volta nem versionados.
