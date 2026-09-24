import type { Messages } from './pt-br';
import { projects } from '../content/projects';

export const en: Messages = {
  title: 'JBR1986 — Websites that give your business a voice',
  description:
    'Business websites and landing pages built with responsive design, clarity, and performance. Discover JBR1986 and tell us about your project.',
  whatsappMessage:
    'Hello! I found JBR1986 through your website and would like to request a quote for my project.',
  brandSubtitle: 'WEB DEVELOPMENT',
  home: 'home',
  skip: 'Skip to content',
  navigation: 'Main navigation',
  mobileNavigation: 'Mobile navigation',
  menu: 'Menu',
  nav: ['Services', 'Projects', 'Partners', 'About', 'Contact'],
  darkTheme: 'Switch to dark mode',
  lightTheme: 'Switch to light mode',
  language: 'Choose language',
  quote: 'Request a quote',
  explore: 'Explore projects',
  talk: 'Let’s talk',
  talkAbout: 'Talk about',
  social: 'Social media',
  follow: 'Follow JBR1986 on social media',
  connect: 'Connect with JBR1986',
  chat: 'Chat with JBR1986 on WhatsApp',
  heroEyebrow: 'WEB DEVELOPMENT FOR BUSINESSES',
  heroTitle: ['Your business.', 'Your next', 'digital chapter.'],
  heroDescription:
    'Professional websites that bring design and technology together to connect your business with new customers.',
  artLabel:
    'A JBR1986 digital interface concept adapted for desktop and mobile',
  artNav: 'Design. Code. Connection.',
  artKicker: 'YOUR BUSINESS, CONNECTED.',
  artTitle: ['One idea.', 'Endless', 'possibilities.'],
  artStart: 'Start your project',
  artTiles: ['Responsive', 'Custom design', 'Business focus'],
  artPhoneCaption: 'YOUR BUSINESS ON EVERY SCREEN',
  artPhoneTitle: ['Digital.', 'Simple.', 'Yours.'],
  artBadge: 'Built with mobile in mind',
  artCaption: 'INTERFACE CONCEPT',
  principlesIntro: 'Technology that works for your business',
  principles: [
    'A great experience on every screen',
    'Design with identity',
    'One tap to connect',
  ],
  servicesEyebrow: '01 / WHAT WE DO',
  servicesTitle: 'Your next step\nstarts with a great website.',
  servicesIntro: 'Every business has a story.\nYour website should tell yours.',
  services: [
    {
      number: '01',
      icon: 'window',
      title: 'Business websites',
      description:
        'Your own space to introduce your business, explain your services, and make it easy to get in touch.',
      tags: ['Digital presence', 'Credibility'],
    },
    {
      number: '02',
      icon: 'target',
      title: 'Landing pages',
      description:
        'One page with a clear goal: present your offer and encourage visitors to start a conversation.',
      tags: ['A focused message', 'Direct contact'],
    },
    {
      number: '03',
      icon: 'spark',
      title: 'Website redesign',
      description:
        'A fresh look for your business, with organized content and an experience designed for mobile.',
      tags: ['Fresh identity', 'Responsive design'],
    },
  ],
  projectsEyebrow: '02 / IDEAS IN ACTION',
  projectsTitle: 'From code\nto experience.',
  projectsIntro:
    'A selection of learning projects.\nDifferent concepts, the same drive to create.',
  openProject: 'Open project',
  newTab: 'in a new tab',
  study: 'STUDY',
  studyProject: 'Learning project',
  museumCaption: 'ART. MEMORY. CULTURE.',
  modelCaption: 'MODEL / PORTFOLIO',
  modelNote: 'A PRESENTATION STUDY',
  gameCaption: 'CHOOSE. TRY. DISCOVER.',
  play: 'PLAY',
  cover: 'ILLUSTRATIVE COVER',
  projects: projects.map((project, index) => ({
    ...project,
    category: [
      'Cultural website',
      'Presentation website',
      'Interactive experience',
    ][index],
    description: [
      'A website development study focused on presenting cultural content.',
      'A course project focused on presenting a model’s portfolio.',
      'A guessing game built to explore interaction with JavaScript.',
    ][index],
  })),
  aboutVisual: 'STRATEGY + DESIGN + DEVELOPMENT',
  aboutMotto: 'Digital presence\nwith purpose.',
  partnersEyebrow: '03 / GROWING CONNECTIONS',
  partnersTitle: 'Meet the businesses\nin our network.',
  partnersIntro: 'Businesses we support and invite you to discover.',
  partnerDeveloped: 'Website developed by JBR1986',
  partnerPromoted: 'Partner business',
  partnerVisit: 'Visit website',
  partnersContent: [
    {
      category: 'Country life',
      description:
        'Family memories and natural coconut water, straight from Sítio Canto da Siriema.',
    },
    {
      category: 'Construction and renovation',
      description:
        'Construction, renovation, and small repairs in Limeira and the surrounding area. From foundations to finishing touches.',
    },
    {
      category: 'Printing solutions',
      description:
        'Plotter sales and maintenance, inks, and replacement parts for printing professionals.',
    },
  ],
  aboutEyebrow: '04 / ABOUT JBR1986',
  aboutTitle: 'Technology with\nyour business\nin mind.',
  aboutParagraphs: [
    'JBR1986 builds websites that combine design and technology to present businesses clearly. From the structure to the mobile experience, every detail has a purpose: connecting your business with people.',
    'It starts with understanding what you do and what you need to communicate. From there, design and development shape your digital presence.',
  ],
  aboutLink: 'Let’s talk about your idea',
  faqEyebrow: '05 / BEFORE WE START',
  faqTitle: 'Good questions.\nClear answers.',
  faqIntro: 'Take your next step\nwith more confidence.',
  questions: [
    {
      question: 'What kind of website makes sense for my business?',
      answer:
        'A business website brings your company and services together in one place. A landing page focuses on a specific offer or goal. Tell us what you need so we can discuss the right format.',
    },
    {
      question: 'How much does a website cost?',
      answer:
        'The quote depends on the content, number of pages, and features your project needs. Send a WhatsApp message with your idea to request a proposal.',
    },
    {
      question: 'Will the website work on mobile?',
      answer:
        'The development approach considers phones, tablets, and computers, with readable content and navigation adapted to each screen size.',
    },
    {
      question: 'I already have a website. Can it be redesigned?',
      answer:
        'Yes. Send your website address and tell us what you would like to improve. That conversation helps define the scope of the redesign.',
    },
  ],
  contactEyebrow: 'YOUR NEXT CHAPTER STARTS HERE',
  contactTitle: 'Ready to bring your\nnext idea online',
  contactIntro: 'Tell us about your business. Let’s talk about your website.',
  footerMotto: 'Ideas clearly presented.\nBusinesses well connected.',
  rights: 'All rights reserved.',
  top: 'Back to top',
  footerNote: 'Design & code with purpose.',
  errorTitle: 'Page not found — JBR1986',
  errorLabel: 'ERROR 404',
  errorHeading: 'This page is\nstill just an idea.',
  errorDescription:
    'The address may have changed. Head back to the homepage to discover JBR1986.',
  errorBack: 'Back to home',
};
