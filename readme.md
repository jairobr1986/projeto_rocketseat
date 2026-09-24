# JBR1986 — Desenvolvimento web

Site institucional de página única, desenvolvido com Astro estático, TypeScript estrito e CSS próprio. Apresenta a marca, serviços, projetos de estudo e contato comercial pelo WhatsApp.

A identidade usa a paleta azul monocromática: `#439CF9` como cor principal, marinho `#0B3A6F`, royal `#1D64B5`, azul claro `#89BEFA` e branco azulado `#D4E7FE`. Textos pequenos usam tons com maior contraste. A abertura prioriza a apresentação no celular, com CTA e ícones sociais acessíveis por toque. O conteúdo público apresenta somente a marca JBR1986; nomes de usuário permanecem nas URLs das redes originais.

## Executar

Requer Node compatível com o Astro registrado em `package-lock.json`. Validado com Node 26.7.0.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

No PowerShell com execução de scripts bloqueada, use `npm.cmd` em vez de `npm`, sem alterar a política do sistema. Desenvolvimento em `http://localhost:4321`. Build estático em `dist/`.

## Arquitetura e manutenção

```text
public/                 favicon e imagem de compartilhamento
src/
  components/           Header, Hero, Services, Projects, About, FAQ, Contact, Footer, SEO e Icon
  config/site.ts        marca, telefone, WhatsApp e redes sociais
  content/services.ts   serviços e descrições
  content/projects.ts   projetos, descrições e links
  content/partners.ts   parceiros, links e indicação de autoria
  content/faq.ts        perguntas e respostas
  i18n/                 traduções pt-BR, pt-PT, en, es e regras de idioma
  layouts/Layout.astro  HTML, estilos e preferência de tema
  pages/                início, 404, robots.txt e sitemap.xml
  styles/tokens.css     cores, tipografia, espaçamentos e tokens
  styles/global.css     layout responsivo e ilustrações de interfaces
 tests/                 testes de navegador e acessibilidade
```

As ilustrações são HTML/CSS, sem carregamento de imagens ou fontes externas. O card Anna Bella usa a foto de `src/assets/anna-bella.webp` com `astro:assets`, carregamento tardio e versões responsivas WebP. A foto foi obtida do [projeto Anna Bella](https://projeto-anna-bella-curso-udemy.pages.dev/assets/img/capa.webp) e corresponde à imagem fornecida pelo usuário. A regra `.editorial-photo` em `src/styles/global.css` define `opacity: 0.5`, preenchimento com `object-fit: cover` e enquadramento à direita; os textos ficam em uma camada independente, sem transparência. Por ser decorativa e estar dentro de um link já identificado, usa `alt` vazio. As capas dos projetos continuam sendo composições ilustrativas.

Para substituir outras capas por capturas reais, edite `Projects.astro`, coloque imagens em `src/assets/` e use `Image` de `astro:assets`, com descrição e dimensões. Imagem de compartilhamento: `public/social-card.png`; fonte vetorial: `public/social-card.svg`.

## Parceiros

A seção `#parceiros`, incluída no menu de todos os idiomas, divulga [Sítio Canto da Siriema](https://sitiocantodasiriema.com/), [LÉO CONSTRUÇÕES](https://leoconstrucoes.com.br/) e [Nuprinter](https://nuprinter.com.br/). Os dois primeiros foram desenvolvidos pelo responsável pela JBR1986, conforme informado pelo usuário, e recebem o crédito de desenvolvimento. A Nuprinter é apresentada apenas como empresa parceira: seu site não é atribuído à JBR1986. Os vínculos familiares não são expostos na página.

Nomes, URLs, ícones e autoria ficam em `src/content/partners.ts`. Textos e categorias ficam nos quatro arquivos de `src/i18n/`. As descrições de serviços foram conferidas nos sites indicados. `Partners.astro` renderiza os cartões, com três colunas no desktop e uma no celular. A troca de idioma preserva `#parceiros`.

Os antigos `index.html`, `style.css` e `script.js` foram substituídos pelo Astro; a versão anterior continua no histórico Git. `assets/` contém os arquivos antigos e não é incluído automaticamente no novo build.

## Decisões de conteúdo

- Objetivo: apresentar a JBR1986 como marca de desenvolvimento web e receber solicitações de orçamento.
- Ação principal: Solicitar orçamento. Telefone em `src/config/site.ts`; mensagem traduzida em `src/i18n/` (`whatsappMessage`).
- Navegação por âncoras, menu móvel nativo, FAQ com `details` e contato por telefone.
- WhatsApp, Instagram, LinkedIn, GitHub e os três links de projetos preservados do site original.
- Museu Nacional, Anna Bella e Lucky Number apresentados como estudos, sem atribuir clientes ou resultados.
- Sem preços, prazos, avaliações, métricas comerciais, endereço ou equipe inventados.
- Sem formulário, backend, rastreadores ou cookies. Tema e idioma escolhido salvos em `localStorage`; conteúdo, menu, FAQ, seletor de idiomas e contatos funcionam sem JavaScript.
- Links externos abrem em nova aba com `noopener noreferrer`. Não há envio automático de mensagens.

## Publicação e domínio

Configure a variável de ambiente `SITE_URL` com o domínio real antes do build de produção. A configuração lê a variável do processo; um arquivo `.env` sozinho não substitui a configuração no ambiente da hospedagem.

```powershell
$env:SITE_URL = 'https://SEU-DOMINIO-REAL'
npm.cmd run build
```

O endereço acima é um marcador a substituir. Sem `SITE_URL`, não são gerados canonical, URLs absolutas Open Graph ou entradas no sitemap. `robots.txt` não referencia o sitemap enquanto o domínio estiver pendente. A página 404 tem `noindex`.

Para hospedagem em subdiretório, configure também `BASE_PATH` (o caminho do repositório no GitHub Pages). Publique **o conteúdo de `dist/`**, não os arquivos da raiz. Cloudflare Pages, Netlify ou Vercel: comando `npm run build`, saída `dist`. No GitHub Pages, use um workflow que construa e publique `dist`; a publicação direta da raiz antiga precisa ser reconfigurada.

SEO: título, descrição, idioma, Open Graph, Twitter Cards, favicon e JSON-LD `Organization` com dados fornecidos. Não usa SEO local sem região confirmada. Referências: [estrutura do Astro](https://docs.astro.build/en/basics/project-structure/) e [configuração](https://docs.astro.build/en/reference/configuration-reference/).

## Idiomas

| Versão                | URL       |
| --------------------- | --------- |
| Português do Brasil   | `/`       |
| Português de Portugal | `/pt-pt/` |
| Inglês                | `/en/`    |
| Espanhol              | `/es/`    |

Cada versão é HTML estático, com conteúdo completo, navegação, acessibilidade, metadados e mensagem de WhatsApp traduzidos. O português europeu adapta termos como telemóvel, ecrã, contacto e portefólio. Nomes próprios dos projetos e seus links originais permanecem iguais; os sites externos não são traduzidos por este projeto. A página global 404 continua em português do Brasil e oferece o seletor para voltar ao início em outro idioma.

O seletor no cabeçalho usa links nativos, sem bandeiras, e funciona sem JavaScript. Com JavaScript, mantém a seção atual e salva a escolha em `jbr-language`. Ao acessar a raiz `/`, uma sugestão não bloqueante oferece o idioma escolhido anteriormente ou o primeiro idioma compatível de `navigator.languages`. Não há redirecionamento automático: o visitante confirma a troca. URLs específicas sempre prevalecem sobre a sugestão. Dispensar a sugestão mantém o idioma atual; a dispensa também fica em `sessionStorage`. Se o armazenamento estiver bloqueado, os links e a detecção continuam funcionando, mas a preferência pode não persistir.

A detecção considera o idioma do navegador, **não o país/IP**. Um brasileiro nos Estados Unidos pode continuar preferindo português. `en-*` usa inglês; `es-*` usa espanhol; `pt-PT` usa português europeu; outros `pt-*` usam português brasileiro. Sem idioma compatível, o padrão é pt-BR. Não há API externa, geolocalização ou serviço pago.

Textos: `src/i18n/pt-br.ts`, `pt-pt.ts`, `en.ts`, `es.ts`. As traduções têm a mesma estrutura tipada. O pt-BR reutiliza o conteúdo de `src/content/`; pt-PT reaproveita os textos comuns e substitui os regionalizados. Ao alterar serviços ou perguntas, revise os quatro idiomas. O número de telefone e as redes continuam centralizados em `src/config/site.ts`.

Com `SITE_URL` definido, cada versão gera canonical próprio e referências `hreflang` recíprocas, incluindo `x-default`; as quatro URLs entram no sitemap. As imagens Open Graph também têm versões por idioma. Para recriá-las após mudar a abertura, execute `node scripts/generate-social-cards.mjs` com `npm run dev` ativo em `http://127.0.0.1:4321`, e depois gere o build. O script aceita `PREVIEW_URL` para outra origem local.

Referências: [idiomas do navegador (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages), [sites multilíngues (Google)](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) e [hreflang (Google)](https://developers.google.com/search/docs/specialty/international/localized-versions).

## Validação

```sh
npm run check
npm run build
npx playwright install chromium
npm test
```

Os testes usam `dist/`; reconstrua após mudanças. Cobrem contatos e âncoras, metadados, oito configurações de tela entre 320 e 1440 px, incluindo orientação horizontal, menu, teclado, tema persistente, FAQ, uso sem JavaScript, 404 e axe nos temas claro/escuro. A análise automatizada não substitui auditoria completa de acessibilidade. Não há pontuação Lighthouse ou métricas reais de Core Web Vitals declaradas.

Os testes de idiomas verificam as quatro traduções, sugestão, preferência persistente, preservação da seção, URLs diretas, armazenamento bloqueado, seletor móvel e acessibilidade. Um build isolado em `test-results/i18n-build/` usa um domínio reservado `.test` e subdiretório para validar canonical, hreflang e sitemap, sem alterar o build de entrega em `dist/`.

Dependências: Astro (geração estática), TypeScript e `@astrojs/check` (tipagem); Playwright e axe (testes); Prettier e plugin Astro (formatação). Nenhum framework de interface ou biblioteca de ícones é enviado ao visitante.

## Informações pendentes

| Informação                           | Estado   | Impacto                                          |
| ------------------------------------ | -------- | ------------------------------------------------ |
| Domínio definitivo e hospedagem      | PENDENTE | Configurar `SITE_URL` e publicar `dist/`         |
| Cidade e região de atendimento       | PENDENTE | Necessárias apenas para SEO local                |
| E-mail comercial                     | PENDENTE | Contato atual por WhatsApp e telefone            |
| Horários                             | PENDENTE | Não exibidos                                     |
| Logotipo oficial / manual de marca   | PENDENTE | Identidade tipográfica criada para esta proposta |
| Fotos e cases comerciais autorizados | PENDENTE | Projetos existentes apresentados como estudos    |

Não é necessário preencher dados opcionais para visualizar ou utilizar a página.
