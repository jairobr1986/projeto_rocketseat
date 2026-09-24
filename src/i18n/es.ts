import type { Messages } from './pt-br';
import { projects } from '../content/projects';

export const es: Messages = {
  title: 'JBR1986 — Sitios web que dan presencia a tu negocio',
  description:
    'Creación de sitios web corporativos y landing pages con diseño adaptable, claridad y rendimiento. Conoce JBR1986 y cuéntanos tu proyecto.',
  whatsappMessage:
    '¡Hola! He conocido JBR1986 a través de vuestra web y me gustaría solicitar un presupuesto para mi proyecto.',
  brandSubtitle: 'DESARROLLO WEB',
  home: 'inicio',
  skip: 'Saltar al contenido',
  navigation: 'Navegación principal',
  mobileNavigation: 'Navegación móvil',
  menu: 'Menú',
  nav: ['Servicios', 'Proyectos', 'Colaboradores', 'Nosotros', 'Contacto'],
  darkTheme: 'Activar tema oscuro',
  lightTheme: 'Activar tema claro',
  language: 'Elegir idioma',
  quote: 'Pedir presupuesto',
  explore: 'Ver proyectos',
  talk: 'Hablemos',
  talkAbout: 'Hablar sobre',
  social: 'Redes sociales',
  follow: 'Sigue a JBR1986 en las redes',
  connect: 'Conecta con JBR1986',
  chat: 'Hablar con JBR1986 por WhatsApp',
  heroEyebrow: 'DESARROLLO WEB PARA EMPRESAS',
  heroTitle: ['Tu negocio.', 'Tu siguiente', 'paso digital.'],
  heroDescription:
    'Sitios web profesionales que unen diseño y tecnología para conectar tu empresa con nuevos clientes.',
  artLabel:
    'Concepto de una interfaz digital de JBR1986 adaptada a ordenador y móvil',
  artNav: 'Diseño. Código. Conexión.',
  artKicker: 'TU EMPRESA, CONECTADA.',
  artTitle: ['Una idea.', 'Infinitas', 'posibilidades.'],
  artStart: 'Empieza tu proyecto',
  artTiles: ['Adaptable', 'Diseño propio', 'Enfoque comercial'],
  artPhoneCaption: 'TU NEGOCIO EN CADA PANTALLA',
  artPhoneTitle: ['Digital.', 'Sencillo.', 'Tuyo.'],
  artBadge: 'Pensado para el móvil',
  artCaption: 'CONCEPTO DE INTERFAZ',
  principlesIntro: 'Tecnología al servicio de tu negocio',
  principles: [
    'Una experiencia en cada pantalla',
    'Diseño con identidad',
    'Contacto a un toque',
  ],
  servicesEyebrow: '01 / QUÉ HACEMOS',
  servicesTitle: 'Tu siguiente paso\nempieza con una buena web.',
  servicesIntro:
    'Cada negocio tiene una historia.\nTu web necesita saber contarla.',
  services: [
    {
      number: '01',
      icon: 'window',
      title: 'Sitios web corporativos',
      description:
        'Un espacio propio para presentar tu empresa, explicar tus servicios y facilitar el contacto.',
      tags: ['Presencia digital', 'Credibilidad'],
    },
    {
      number: '02',
      icon: 'target',
      title: 'Landing pages',
      description:
        'Una página con un objetivo claro: presentar tu oferta e invitar al visitante a iniciar una conversación.',
      tags: ['Mensaje enfocado', 'Contacto directo'],
    },
    {
      number: '03',
      icon: 'spark',
      title: 'Rediseño web',
      description:
        'Una nueva imagen para tu negocio, con contenido organizado y una experiencia pensada para el móvil.',
      tags: ['Nueva identidad', 'Diseño adaptable'],
    },
  ],
  projectsEyebrow: '02 / IDEAS EN ACCIÓN',
  projectsTitle: 'Del código\na la experiencia.',
  projectsIntro:
    'Una selección de proyectos de aprendizaje.\nDistintas propuestas, las mismas ganas de crear.',
  openProject: 'Abrir proyecto',
  newTab: 'en una pestaña nueva',
  study: 'ESTUDIO',
  studyProject: 'Proyecto de aprendizaje',
  museumCaption: 'ARTE. MEMORIA. CULTURA.',
  modelCaption: 'PORTAFOLIO / MODELO',
  modelNote: 'UN ESTUDIO DE PRESENTACIÓN',
  gameCaption: 'ELIGE. PRUEBA. DESCUBRE.',
  play: 'JUGAR',
  cover: 'PORTADA ILUSTRATIVA',
  projects: projects.map((project, index) => ({
    ...project,
    category: [
      'Sitio web cultural',
      'Web de presentación',
      'Experiencia interactiva',
    ][index],
    description: [
      'Estudio de desarrollo de un sitio web para presentar contenido cultural.',
      'Proyecto de curso centrado en la presentación del portafolio de una modelo.',
      'Juego de adivinanzas desarrollado para explorar la interacción con JavaScript.',
    ][index],
  })),
  aboutVisual: 'ESTRATEGIA + DISEÑO + DESARROLLO',
  aboutMotto: 'Presencia digital\ncon propósito.',
  partnersEyebrow: '03 / CONEXIONES QUE CRECEN',
  partnersTitle: 'Conoce los negocios\nde nuestra red.',
  partnersIntro: 'Negocios que apoyamos y que merece la pena conocer.',
  partnerDeveloped: 'Web desarrollada por JBR1986',
  partnerPromoted: 'Empresa colaboradora',
  partnerVisit: 'Visitar web',
  partnersContent: [
    {
      category: 'Vida en el campo',
      description:
        'Recuerdos en familia y agua de coco natural, directamente de Sítio Canto da Siriema.',
    },
    {
      category: 'Construcción y reformas',
      description:
        'Construcción, reformas y pequeñas reparaciones en Limeira y alrededores. Desde los cimientos hasta los acabados.',
    },
    {
      category: 'Soluciones de impresión',
      description:
        'Venta y mantenimiento de plóteres, tintas y repuestos para profesionales de la impresión.',
    },
  ],
  aboutEyebrow: '04 / SOBRE JBR1986',
  aboutTitle: 'Tecnología que\npiensa en\ntu negocio.',
  aboutParagraphs: [
    'JBR1986 desarrolla sitios web que unen diseño y tecnología para presentar empresas con claridad. Desde la estructura hasta la experiencia móvil, cada detalle tiene un propósito: conectar tu negocio con las personas.',
    'El punto de partida es entender qué haces y qué necesitas comunicar. A partir de ahí, el diseño y el desarrollo dan forma a tu presencia digital.',
  ],
  aboutLink: 'Hablemos de tu idea',
  faqEyebrow: '05 / ANTES DE EMPEZAR',
  faqTitle: 'Buenas preguntas.\nRespuestas claras.',
  faqIntro: 'Para dar el siguiente paso\ncon más confianza.',
  questions: [
    {
      question: '¿Qué tipo de web necesita mi negocio?',
      answer:
        'Una web corporativa organiza la presentación de la empresa y sus servicios. Una landing page concentra el mensaje en una oferta u objetivo. Cuéntanos qué necesitas para hablar del formato más adecuado.',
    },
    {
      question: '¿Cuánto cuesta crear un sitio web?',
      answer:
        'El presupuesto depende del contenido, el número de páginas y las funcionalidades del proyecto. Envíanos un mensaje por WhatsApp con tu idea para solicitar una propuesta.',
    },
    {
      question: '¿La web funciona en el móvil?',
      answer:
        'El desarrollo tiene en cuenta móviles, tabletas y ordenadores, con contenido legible y navegación adaptada a cada tamaño de pantalla.',
    },
    {
      question: 'Ya tengo una web. ¿Puedo renovarla?',
      answer:
        'Sí. Envíanos la dirección de tu web y cuéntanos qué te gustaría mejorar. Esa conversación ayuda a definir el alcance del rediseño.',
    },
  ],
  contactEyebrow: 'TU PRÓXIMO CAPÍTULO EMPIEZA AQUÍ',
  contactTitle: '¿Damos presencia\na tu próxima idea',
  contactIntro: 'Cuéntanos sobre tu negocio. Hablemos de tu web.',
  footerMotto: 'Ideas bien presentadas.\nNegocios bien conectados.',
  rights: 'Todos los derechos reservados.',
  top: 'Volver arriba',
  footerNote: 'Diseño y código con propósito.',
  errorTitle: 'Página no encontrada — JBR1986',
  errorLabel: 'ERROR 404',
  errorHeading: 'Esta página\nse quedó en una idea.',
  errorDescription:
    'Puede que la dirección haya cambiado. Vuelve al inicio para conocer JBR1986.',
  errorBack: 'Volver al inicio',
};
