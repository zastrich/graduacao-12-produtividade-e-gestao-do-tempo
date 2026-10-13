# Roteiro do Vídeo Pitch — Meu Sistema Operacional Pessoal

**Duração alvo:** ≤ 4 minutos
**Formato:** narração em voz + captura de tela (screencast)
**Autor:** Robert Fernando Schweppe — UniFECAF

Cada segmento traz o tempo cronometrado, a **narração falada** (o que dizer) e o **cue de tela** (o que mostrar). As telas correspondem aos screenshots em `assets/`.

---

## (0:00 – 0:30) O desafio de produtividade

**Narração:**
> "Trabalho remoto, aulas ao vivo da graduação, uma trilha longa de estudo e um fluxo infinito de notícias de IA. Tudo isso no mesmo dia. A agenda vivia encavalada, a comunicação espalhada em vários canais e a sensação de que tudo era urgente. Eu não precisava de mais uma ferramenta — precisava de um sistema que coordenasse as que eu já uso."

**Cue de tela:** rosto/câmera ou slide-título "Meu Sistema Operacional Pessoal". Pode piscar rapidamente a agenda bagunçada do "antes".

---

## (0:30 – 1:15) A ideia: uma biblioteca open-source reutilizável — GitCompany

**Narração:**
> "Para resolver isso, criei o GitCompany — uma biblioteca que descreve uma organização inteira como código: *Business-as-a-Code*. Ela nasceu especificamente para este trabalho, mas eu a projetei de forma agnóstica: independente de domínio, de provedor de IA, com integrações plugáveis. Como serve a qualquer organização de agentes, e não só ao meu caso, decidi abrir como open source. A jornada foi incremental: release inicial, onboarding com IA e Kanban, suporte multi-LLM, publicação open source com `npx`, o MCP e as ferramentas de CLI com extensões locais, e, por fim, a sincronização com o GitHub Projects v2."

**Cue de tela:** dashboard do GitCompany (`assets/01-gitcompany-dashboard.png`) e organograma (`assets/04-gitcompany-orgchart.png`). Linha do tempo em texto sobreposto marcando os marcos: *release inicial → onboarding/kanban/multi-LLM → open-source npx → MCP → CLI tools + extensões → sync Project v2*.

> Nota de gravação: a sequência de marcos acima descreve a evolução observada na arquitetura do repositório. A contagem exata de commits (~53) é aproximada e não foi medida nesta etapa.

---

## (1:15 – 2:30) O case: Zas Organizer

**Narração:**
> "Sobre essa base construí o case Zas Organizer — meu assistente pessoal. São cinco agentes: um coordenador, que é o CEO e faz a triagem; o agente de agenda, no Google Calendar; o agente de e-mail, no Gmail; o agente do Notion, que monta os resumos; e o agente de notícias, que usa o Playwright para coletar novidades de IA. A técnica central é a Matriz de Eisenhower: o coordenador classifica cada tarefa entre fazer, agendar, delegar ou eliminar. E são quatro integrações de verdade — Google Calendar, Gmail, Notion e Playwright — todas orquestradas pelo GitCompany e rastreadas no GitHub."

**Cue de tela:** editor de agentes (`assets/03-gitcompany-agentes.png`); sobrepor um quadro 2x2 da Matriz de Eisenhower com os quatro rótulos.

---

## (2:30 – 3:30) Demonstração — SHOT-LIST

**Narração:**
> "Na prática: o onboarding monta a empresa e o dashboard dá a visão geral. O Kanban espelha as cinco etapas do fluxo e sincroniza com o GitHub Project. Abrindo um card, dá para ver os comentários de acompanhamento que os agentes deixam. No Google Agenda, o plano de estudos aparece encadeado, sem sobreposição. O resumo da semana chega por e-mail e também fica registrado no Notion."

**SHOT-LIST (nesta ordem):**

1. Onboarding / dashboard — `assets/01-gitcompany-dashboard.png`
2. Kanban / Project com as 5 etapas — `assets/02-gitcompany-kanban.png` e `assets/06-github-project-board.png`
3. Um card com comentários de tracking — `assets/07-github-issue-tracking.png`
4. Google Agenda com o plano de estudos — `assets/11-google-agenda-estudos.png`
5. E-mail de resumo — `assets/10-gmail-resumo-email.png`
6. Resumo no Notion — `assets/08-notion-resumo-semanal.png` (e `assets/09-notion-noticias-diarias.png` para as notícias)

---

## (3:30 – 4:00) Principais ganhos e encerramento

**Narração:**
> "Os ganhos: reúso — o GitCompany serve a qualquer organização, não só à minha; auditabilidade — toda ação de agente fica registrada; independência de provider — troco de modelo de IA sem reescrever nada; e uma rotina semanal automatizada, com agenda limpa, foco e um resumo único. É um sistema que coordena as ferramentas que eu já tinha, em vez de somar mais uma. Obrigado!"

**Cue de tela:** página de auditoria (`assets/05-gitcompany-auditoria.png`); encerrar com slide de créditos e o link do vídeo/repositório — **(adicionar link do vídeo)**.

---

## Checklist de gravação

- [ ] Resolução mínima 1080p; esconder notificações e abas pessoais do navegador.
- [ ] Confirmar que todas as telas da SHOT-LIST estão logadas e carregadas antes de gravar.
- [ ] Nenhum segredo real visível em tela (tokens, e-mails privados, chaves). Usar apenas placeholders `{{SECRET_NAME}}` em qualquer config exibida.
- [ ] Cronometrar cada bloco; manter o total ≤ 4:00.
- [ ] Áudio limpo (microfone, sem ruído de fundo).
- [ ] Testar transições entre as 6 telas da demonstração.
- [ ] Preencher o placeholder do link do vídeo nos documentos ao publicar.

## Legendas sugeridas (lower-thirds)

- 0:00 — "O desafio: rotina remota, estudos e excesso de informação"
- 0:30 — "GitCompany AI — Business-as-a-Code (open source, MIT)"
- 1:15 — "Case Zas Organizer — 5 agentes + Matriz de Eisenhower"
- 2:30 — "Demonstração ao vivo"
- 3:30 — "Ganhos: reúso, auditabilidade, provider-agnóstico, automação"
