import { ptBR, type Messages } from './pt-br';

export const ptPT: Messages = {
  ...ptBR,
  title: 'JBR1986 — Websites que dão presença ao seu negócio',
  description:
    'Criação de websites empresariais e landing pages com design responsivo, clareza e desempenho. Conheça a JBR1986 e fale sobre o seu projeto.',
  whatsappMessage:
    'Olá! Conheci a JBR1986 através do vosso website e gostaria de pedir um orçamento para o meu projeto.',
  nav: ['Serviços', 'Projetos', 'Parceiros', 'Sobre', 'Contacto'],
  partnersEyebrow: '03 / LIGAÇÕES QUE CRESCEM',
  partnersTitle: 'Conheça quem faz parte\nda nossa rede.',
  partnersIntro: 'Negócios que apoiamos e que vale a pena conhecer.',
  partnerDeveloped: 'Website desenvolvido pela JBR1986',
  partnerPromoted: 'Empresa parceira',
  partnerVisit: 'Visitar website',
  partnersContent: [
    {
      category: 'Vida no campo',
      description:
        'Memórias em família e água de coco natural, diretamente do Sítio Canto da Siriema.',
    },
    {
      category: 'Construção e remodelações',
      description:
        'Construção, remodelações e pequenas reparações em Limeira e arredores. Das fundações aos acabamentos.',
    },
    {
      category: 'Soluções de impressão',
      description:
        'Venda e manutenção de plotters, tintas e peças para profissionais de impressão.',
    },
  ],
  quote: 'Pedir orçamento',
  explore: 'Ver projetos',
  talk: 'Vamos falar',
  talkAbout: 'Falar sobre',
  social: 'Redes sociais',
  follow: 'Siga a JBR1986 nas redes sociais',
  connect: 'Ligue-se à JBR1986',
  chat: 'Falar com a JBR1986 pelo WhatsApp',
  heroTitle: ['O seu negócio.', 'O próximo', 'passo digital.'],
  heroDescription:
    'Websites profissionais que aliam design e tecnologia para ligar a sua empresa a novos clientes.',
  artLabel:
    'Conceito de uma interface digital da JBR1986 adaptada para computador e telemóvel',
  artKicker: 'A SUA EMPRESA, LIGADA AO MUNDO.',
  artStart: 'Comece o seu projeto',
  artTiles: ['Responsivo', 'Design próprio', 'Foco no negócio'],
  artPhoneCaption: 'O SEU NEGÓCIO EM CADA ECRÃ',
  artPhoneTitle: ['Digital.', 'Simples.', 'Seu.'],
  artBadge: 'Pensado para o telemóvel',
  principlesIntro: 'Tecnologia ao serviço do seu negócio',
  principles: [
    'Experiência em cada ecrã',
    'Design com identidade',
    'Contacto a um toque',
  ],
  servicesTitle: 'O próximo passo\ncomeça com um bom website.',
  servicesIntro:
    'Cada negócio tem uma história.\nO seu website precisa de saber contá-la.',
  services: [
    {
      number: '01',
      icon: 'window',
      title: 'Websites empresariais',
      description:
        'Um espaço próprio para apresentar a sua empresa, explicar os seus serviços e facilitar o contacto.',
      tags: ['Presença digital', 'Credibilidade'],
    },
    {
      number: '02',
      icon: 'target',
      title: 'Landing pages',
      description:
        'Uma página com um objetivo claro: apresentar a sua oferta e convidar o visitante a iniciar uma conversa.',
      tags: ['Mensagem focada', 'Contacto direto'],
    },
    {
      number: '03',
      icon: 'spark',
      title: 'Redesign de websites',
      description:
        'Uma nova apresentação para o seu negócio, com conteúdos organizados e uma experiência pensada para o telemóvel.',
      tags: ['Nova identidade', 'Design responsivo'],
    },
  ],
  projectsIntro:
    'Uma seleção de projetos de aprendizagem.\nDiferentes propostas, a mesma vontade de criar.',
  newTab: 'num novo separador',
  studyProject: 'Projeto de aprendizagem',
  modelCaption: 'PORTEFÓLIO / MODELO',
  projects: ptBR.projects.map((project, index) => ({
    ...project,
    category: [
      'Website cultural',
      'Website de apresentação',
      'Experiência interativa',
    ][index],
    description: [
      'Estudo de desenvolvimento de um website para apresentação de conteúdos culturais.',
      'Projeto de curso centrado na apresentação do portefólio de uma modelo.',
      'Jogo de adivinhas desenvolvido como estudo de interação com JavaScript.',
    ][index],
  })),
  aboutTitle: 'Tecnologia com\num olhar para\no seu negócio.',
  aboutParagraphs: [
    'A JBR1986 desenvolve websites que aliam design e tecnologia para apresentar empresas com clareza. Da estrutura à experiência no telemóvel, cada detalhe tem um propósito: ligar o seu negócio às pessoas.',
    'O ponto de partida é compreender o que faz e o que precisa de comunicar. A partir daí, o design e o desenvolvimento dão forma à sua presença digital.',
  ],
  aboutLink: 'Vamos falar sobre a sua ideia',
  faqIntro: 'Para dar o próximo passo\ncom mais confiança.',
  questions: [
    {
      question: 'Que tipo de website faz sentido para o meu negócio?',
      answer:
        'Um website empresarial organiza a apresentação da empresa e dos serviços. Uma landing page concentra a mensagem numa oferta ou objetivo. Diga-nos o que precisa para falarmos sobre o formato.',
    },
    {
      question: 'Quanto custa criar um website?',
      answer:
        'O orçamento depende dos conteúdos, do número de páginas e das funcionalidades do projeto. Envie uma mensagem pelo WhatsApp com a sua ideia para pedir uma proposta.',
    },
    {
      question: 'O website funciona no telemóvel?',
      answer:
        'O desenvolvimento tem em conta telemóveis, tablets e computadores, com conteúdos legíveis e navegação adaptada a cada tamanho de ecrã.',
    },
    {
      question: 'Já tenho um website. Posso renovar a apresentação?',
      answer:
        'Sim. Envie o endereço do seu website e diga-nos o que gostaria de melhorar. Essa conversa ajuda a definir o âmbito do redesign.',
    },
  ],
  contactEyebrow: 'O SEU PRÓXIMO CAPÍTULO COMEÇA AQUI',
  contactTitle: 'Vamos dar presença\nà sua próxima ideia',
  contactIntro:
    'Conte-nos sobre o seu negócio. Vamos falar sobre o seu website.',
  footerMotto: 'Ideias bem apresentadas.\nNegócios bem ligados.',
  top: 'Voltar ao topo',
  errorDescription:
    'O endereço pode ter mudado. Volte ao início para conhecer a JBR1986.',
};
