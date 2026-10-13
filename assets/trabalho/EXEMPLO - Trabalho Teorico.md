UniFECAF
GRADUACAO IA E AUTOMACAO DIGITAL

ROBERT FERNANDO SCHWEPPE

**Integracao de APIs**

CURITIBA
2026

ROBERT FERNANDO SCHWEPPE

**Integracao de APIs**

Trabalho apresentado a disciplina Integracao de APIs, como requisito parcial de avaliacao da disciplina.

CURITIBA
2026

# **Sumario**

[Contextualizacao do Problema](#contextualizacao-do-problema)

[Descricao da Solucao Desenvolvida](#descricao-da-solucao-desenvolvida)

[APIs Integradas e Fluxo de Dados](#apis-integradas-e-fluxo-de-dados)

[Arquitetura Tecnica e Decisoes de Projeto](#arquitetura-tecnica-e-decisoes-de-projeto)

[Algoritmo de Score de Risco](#algoritmo-de-score-de-risco)

[Governanca, Resiliencia e LGPD](#governanca-resiliencia-e-lgpd)

[Demonstracao da Interface No-Code (Supabase)](#demonstracao-da-interface-no-code)

[Conclusao](#conclusao)

[Apendice](#apendice)

---

# **Contextualizacao do Problema**

## Gastos Publicos com Viagens de Servidores

O governo federal brasileiro gasta dezenas de milhoes de reais por mes em viagens de servidores publicos. Esses gastos incluem diarias (hospedagem e alimentacao), passagens aereas e taxas de agenciamento. Os dados sao publicos e disponibilizados pela Controladoria-Geral da Uniao (CGU) atraves de APIs REST, porem estao dispersos em multiplos endpoints e exigem cruzamento manual para identificar anomalias.

## O Problema

Embora os dados sejam abertos, a analise cruzada de viagens, fornecedores e padroes de gastos e extremamente trabalhosa quando feita manualmente. Um auditor precisaria consultar milhares de registros, agregar por servidor, comparar com medias historicas e verificar a situacao cadastral dos fornecedores — tudo isso consultando APIs diferentes com formatos distintos.

## A Proposta

O **Sentinela Publico** e um sistema que automatiza a coleta, cruzamento e analise de risco de gastos de viagens de servidores publicos federais. Integra 4 APIs externas para criar uma visao unificada que destaca anomalias e padroes suspeitos, como:
- Servidores com gastos muito acima da media
- Alto percentual de viagens urgentes (que burlam controles)
- Fornecedores com capital social incompativel com valores recebidos
- Concentracao de gastos em periodos especificos

---

# **Descricao da Solucao Desenvolvida**

## Visao Geral

O Sentinela Publico e uma aplicacao web full-stack que permite importar dados de viagens e despesas do governo federal, calcular scores de risco automaticamente e visualizar os resultados em dashboards interativos.

## Stack Tecnologica

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Backend | Node.js + TypeScript (KoaJS) | Tipagem forte, assincronismo eficiente para consumo paralelo de APIs |
| Frontend | React 19 + TypeScript (Vite + Tailwind CSS v4) | Interface reativa, compilacao rapida, design utilitario |
| Banco de Dados | Supabase Cloud (PostgreSQL) | Banco relacional com interface No-Code (Table Editor) |
| Graficos | Recharts | Graficos interativos clicaveis |
| Mapas | Leaflet + OpenStreetMap | Geolocalizacao gratuita sem API key |
| Icones | Lucide React | Consistencia visual |

## Funcionalidades Principais

**Importacao de Dados:**
- Varredura automatica de viagens dos 14 orgaos federais por mes
- Varredura de despesas (empenhos) dia a dia com identificacao de CNPJs
- Sistema de jobs assincronos com progresso em tempo real
- Controle de rate limit com interrupcao graceful

**Analise e Visualizacao:**
- Ranking top 10 (beneficiarios, orgaos, meses) com cache
- Detalhamento por orgao/mes com grafico de evolucao clicavel
- Visao por beneficiario (servidor) com historico mensal
- Visao por motivo com lista de beneficiarios envolvidos
- Visao por CNPJ de fornecedor com dados cadastrais e mapa

**Enriquecimento:**
- Consulta em tempo real da BrasilAPI para dados do CNPJ
- Capital social, porte, CNAE, socios, endereco
- Geolocalizacao via CEP com mapa interativo
- Alertas automaticos de inconsistencias cadastrais

**Alertas por Email (Resend):**
- Cron mensal automatico (1o dia do mes, 9h — configuravel via variavel de ambiente)
- Disparo manual pelo usuario a qualquer momento
- Relatorio HTML com compilado: top beneficiarios, top orgaos, top fornecedores
- Gestao de destinatarios (adicionar, remover, ativar/desativar)
- Historico de envios com status e IDs de confirmacao
- Sem tracking/webhook — apenas garantia de envio ao Resend

---

# **APIs Integradas e Fluxo de Dados**

## 1. CGU - API de Viagens

**Endpoint:** `GET /api-de-dados/viagens`
**Base URL:** `https://api.portaldatransparencia.gov.br/api-de-dados`
**Autenticacao:** Header `chave-api-dados` (cadastro gratuito)
**Dados disponíveis desde:** Janeiro de 2014

**Dados obtidos por viagem:**
- ID unico da viagem
- Beneficiario (nome, CPF mascarado, cargo, funcao)
- Orgao pagador (codigo SIAFI, sigla, CNPJ)
- Motivo e justificativa da viagem
- Tipo (Nacional/Internacional)
- Datas de inicio e fim do afastamento
- Valores: diarias, passagens, total, devolucoes
- Flag de urgencia e justificativa

**Limitacoes:**
- Periodo maximo de 1 mes por consulta
- Requer codigo do orgao (SIAFI)
- Paginacao de 15 resultados por pagina
- Rate limit (CloudFront bloqueia com 403 apos excesso de chamadas)

## 2. CGU - API de Despesas (Empenhos)

**Endpoint:** `GET /api-de-dados/despesas/documentos`
**Autenticacao:** Mesma chave da API de viagens

**Dados obtidos por documento:**
- Data de emissao
- Numero do documento (NE)
- CNPJ e nome do favorecido (fornecedor)
- UF do favorecido
- Valor do empenho
- Elemento de despesa (33=Passagens, 39=Servicos PJ)
- Unidade Gestora emissora
- Orgao vinculado
- Observacao do documento

**Limitacoes:**
- Requer data especifica (DD/MM/AAAA) — nao aceita intervalo
- Requer Unidade Gestora (UG) especifica
- Mesmo rate limit da API de viagens
- Delay de 600ms necessario entre chamadas

## 3. BrasilAPI - CNPJ + CEP

**Endpoints:**
- `GET /cnpj/v1/{cnpj}` — Dados cadastrais completos
- `GET /cep/v2/{cep}` — Coordenadas geograficas

**Autenticacao:** Nenhuma (API publica)

**Dados obtidos do CNPJ:**
- Razao social e nome fantasia
- Capital social
- Porte (MEI, ME, EPP, Demais)
- Data de inicio de atividade
- Situacao cadastral (Ativa, Suspensa, Inapta)
- CNAE principal e secundarios
- Natureza juridica
- Endereco completo
- Telefones e email
- Quadro societario (nome, qualificacao, data entrada)

**Dados obtidos do CEP:**
- Latitude e longitude (para mapa)

## 4. Resend - API de Email

**Endpoint:** `POST /emails`
**Base URL:** `https://api.resend.com`
**Autenticacao:** Bearer token (API Key)

**Funcao no sistema:**
- Envio de email informativo mensal com compilado de gastos
- Cron configuravel (padrao: 1o dia do mes as 9h, fuso America/Sao_Paulo)
- Disparo manual pelo usuario a qualquer momento
- Relatorio inclui: top 5 beneficiarios, top 5 orgaos, top 5 fornecedores
- Lista de destinatarios gerenciada via Supabase (CRUD completo)
- Historico de envios com status e IDs de confirmacao do Resend

**Dados enviados por email:**
- Total de viagens e valor no mes
- Total de despesas e valor no mes
- Top 5 servidores que mais gastaram
- Top 5 orgaos com maiores gastos combinados
- Top 5 fornecedores que mais receberam

**Limitacoes:**
- Sem tracking de abertura/leitura (apenas confirmacao de envio)
- Requer dominio verificado para email remetente (ou usa onboarding@resend.dev para testes)

## Fluxo de Cruzamento

```
CGU Viagens (orgao/mes)
    |
    +--> Armazena viagens individuais (531K+ registros)
    +--> Agrega por beneficiario/motivo/orgao
    +--> Calcula score de risco
    |
CGU Despesas (UG/dia)
    |
    +--> Identifica CNPJs de fornecedores
    +--> Agrega por CNPJ
    |
BrasilAPI (CNPJ)
    |
    +--> Enriquece com dados cadastrais
    +--> Gera alertas automaticos
    +--> Geolocalizacao no mapa
    |
Resend (Email)
    |
    +--> Compila relatorio mensal (viagens + despesas)
    +--> Envia para lista de destinatarios (Supabase)
    +--> Cron automatico + disparo manual
```

---

# **Arquitetura Tecnica e Decisoes de Projeto**

## Backend

- **KoaJS** como framework HTTP (leve, middleware-based)
- **HttpClient** customizado com retry/exponential backoff
- **Sistema de Jobs** em memoria para processamento assincrono
- **Cache** do ranking com TTL de 30 minutos por combinacao de filtros
- Tratamento de rate limit (403/429) com interrupcao graceful

## Frontend

- **React Router** com 7 paginas (Ranking, Viagens, Despesas, Importacao, Receber Alertas, Beneficiario, CNPJ)
- **QueryString** para persistencia de filtros entre navegacoes
- **Recharts** com graficos clicaveis que filtram dados
- **Leaflet/OpenStreetMap** para mapa na tela de fornecedor
- **Polling** a cada 3s para progresso de importacoes

## Banco de Dados

6 tabelas no Supabase com Row Level Security:
- `viagens_detalhes` (531K+ registros) — cada viagem individual
- `despesas_documentos` — empenhos com CNPJ do fornecedor
- `analises_risco` — resumo agregado por orgao/mes
- `varreduras` — controle de importacao de viagens
- `varreduras_despesas` — controle de importacao de despesas
- `logs_execucao` — auditoria interna
- `alertas_destinatarios` — emails que recebem o informativo mensal
- `alertas_envios` — historico de disparos (tipo, status, IDs Resend)

---

# **Algoritmo de Score de Risco**

## Score de Beneficiarios (0 a 100)

O score identifica servidores com padroes anomalos de gastos:

| Fator | Peso | Logica |
|-------|------|--------|
| Valor vs media | 30% | Razao entre gasto do servidor e media do grupo. >3x = 30pts, >2x = 20pts |
| Frequencia | 25% | Quantidade de viagens. >30 = 25pts, >20 = 15pts, >10 = 10pts |
| Urgencias | 30% | % de viagens urgentes. >50% = 30pts, >30% = 20pts, >3 urgentes = 10pts |
| Valor absoluto | 15% | Total em diarias. >R$100K = 15pts, >R$50K = 10pts |

**Justificativa:** Urgencias recorrentes sao o principal indicador porque permitem burlar prazos de aprovacao previa, reduzindo o controle institucional sobre o gasto.

## Score de Fornecedores (0 a 100)

| Fator | Logica |
|-------|--------|
| Valor total recebido | >R$500K = 40pts, >R$100K = 25pts |
| Quantidade de empenhos | >50 = 30pts, >20 = 20pts |
| Valor medio por documento | >R$50K = 30pts, >R$20K = 15pts |

**Alertas adicionais (BrasilAPI):**
- Capital social < R$10.000
- Empresa com < 2 anos
- Porte MEI/Micro recebendo valores altos do governo
- Situacao cadastral nao-ativa

---

# **Governanca, Resiliencia e LGPD**

## Resiliencia

- **Retry com exponential backoff** (ate 3 tentativas)
- **Rate limit handling:** Detecta 403/429, espera 10s e retenta
- **Delay de 600ms** entre chamadas na varredura de despesas
- **Interrupcao graceful:** Se rate limit persistir, salva progresso parcial com status "erro"
- **Jobs assincronos:** Processamento em background, nao bloqueia HTTP
- **Cache do ranking:** 30min TTL por combinacao de filtros
- **Cron de alertas:** node-cron com schedule configuravel (CRON_SCHEDULE), timezone America/Sao_Paulo
- **Envio de email tolerante a falhas:** Envia individualmente para cada destinatario, registra erros parciais sem interromper o fluxo

## LGPD e Privacidade

- CPFs de servidores sao recebidos mascarados da API (`***.XXX.XXX-**`)
- Agregacao por nome (nao CPF) para evitar duplicatas de mascaras
- Mascaras LGPD disponiveis em `utils/mask.ts`
- Dados publicos conforme Lei de Acesso a Informacao (LAI)

## Seguranca (Row Level Security)

- Frontend (`anon`) so pode **ler** dados
- Backend (`service_role`) pode inserir, atualizar e deletar
- Todas as 6 tabelas possuem RLS habilitado

---

# **Demonstracao da Interface No-Code**

O Supabase fornece o **Table Editor** como interface visual (No-Code) para gerenciamento dos dados, permitindo:
- Visualizar e editar registros diretamente
- Criar filtros e ordenacoes
- Exportar dados em CSV
- Gerenciar policies de acesso
- Monitorar tamanho das tabelas

Prints do Table Editor e das Policies RLS estao incluidos na pasta `/assets/prints/` (imagens 08 a 14).

---

# **Conclusao**

O Sentinela Publico demonstra como a integracao de APIs publicas pode transformar dados dispersos em inteligencia acionavel. O cruzamento de 4 fontes de dados (viagens, despesas, dados cadastrais de fornecedores e envio de alertas por email) permite identificar padroes que seriam impossiveis de detectar manualmente, como servidores com gastos desproporcionais, urgencias recorrentes e fornecedores com perfil incompativel.

O projeto atende aos requisitos da disciplina de Integracao de APIs ao demonstrar:
- Consumo de 4 APIs externas distintas com autenticacao e tratamento de erros
- Armazenamento em banco de dados com interface No-Code (Supabase)
- Cruzamento de dados entre fontes diferentes
- Dashboard interativo com visualizacoes graficas
- Envio automatizado de alertas por email (cron + disparo manual)
- Resiliencia, cache e tratamento de rate limit

---

# **Apendice**

**Repositorio do projeto:**
(link do GitHub)

**APIs utilizadas:**
- Portal da Transparencia: https://api.portaldatransparencia.gov.br/swagger-ui/index.html
- BrasilAPI: https://brasilapi.com.br/docs
- Resend: https://resend.com/docs/api-reference/emails/send-email

**Screenshots:**
Disponíveis em `/assets/prints/` (13 imagens: 6 do sistema + 7 do Supabase)

**Como executar:**
```bash
# Backend (porta 3001)
cd src/backend && npm install && npm run dev

# Frontend (porta 5173)
cd src/frontend && npm install && npm run dev

# Importar dados: acessar http://localhost:5173/importacao
```

**Variaveis de ambiente necessarias:**
```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx
CGU_API_KEY=xxx (cadastro gratuito em portaldatransparencia.gov.br)
RESEND_API_KEY=xxx (cadastro em resend.com)
ALERT_FROM_EMAIL=Sentinela Público <onboarding@resend.dev>
CRON_SCHEDULE=0 9 1 * * (primeiro dia do mes as 9h)
```
