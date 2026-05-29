import angularIcon from '../assets/icons/angular.svg'
import codeIcon from '../assets/icons/code.svg'
import cssIcon from '../assets/icons/css.svg'
import databaseIcon from '../assets/icons/database.svg'
import djangoIcon from '../assets/icons/django.svg'
import dockerIcon from '../assets/icons/docker.svg'
import firebaseIcon from '../assets/icons/firebase.svg'
import gitIcon from '../assets/icons/git.svg'
import githubIcon from '../assets/icons/github.svg'
import globeIcon from '../assets/icons/globe.svg'
import ionicIcon from '../assets/icons/ionic.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import layersIcon from '../assets/icons/layers.svg'
import mongodbIcon from '../assets/icons/mongodb.svg'
import netlifyIcon from '../assets/icons/netlify.svg'
import nodeIcon from '../assets/icons/nodedotjs.svg'
import postgresqlIcon from '../assets/icons/postgresql.svg'
import pythonIcon from '../assets/icons/python.svg'
import reactIcon from '../assets/icons/react.svg'
import rocketIcon from '../assets/icons/rocket.svg'
import sassIcon from '../assets/icons/sass.svg'
import serverIcon from '../assets/icons/server.svg'
import shieldCheckIcon from '../assets/icons/shield-check.svg'
import smartphoneIcon from '../assets/icons/smartphone.svg'
import tailwindIcon from '../assets/icons/tailwindcss.svg'
import typescriptIcon from '../assets/icons/typescript.svg'
import viteIcon from '../assets/icons/vite.svg'
import workflowIcon from '../assets/icons/workflow.svg'
import zapIcon from '../assets/icons/zap.svg'

export const projects = [
  {
    index: '01',
    name: 'WOAW',
    type: 'Automotive Product Platform',
    role: 'Frontend Experience / Visual UI',
    stack: ['Ionic', 'Angular', 'Node.js', 'MongoDB'],
    summary:
      'Automotive application shaped into a premium product interface with dashboards, authentication, document workflows, multimedia uploads, and administration tools.',
    highlights: [
      'Authentication flows',
      'Dashboard experience',
      'Document management',
      'Media upload',
    ],
  },
  {
    index: '02',
    name: 'JOLIWEB',
    type: 'Corporate Web Platform',
    role: 'Frontend Development / Responsive UI',
    stack: ['React-ready UI', 'Responsive Design', 'Production'],
    summary:
      'Corporate experience built for a real company, focused on clean structure, polished presentation, responsive behavior, and production delivery.',
    highlights: [
      'Live production site',
      'Corporate visual system',
      'Optimized layouts',
      'Professional UX',
    ],
    url: 'https://joli.com.mx/',
  },
  {
    index: '03',
    name: 'CSTI',
    type: 'Scalable E-commerce System',
    role: 'Full Stack Development',
    stack: ['Django', 'PostgreSQL', 'REST APIs'],
    summary:
      'Commerce platform with catalog, cart, wishlist, admin tooling, backend logic, API integration, and a scalable data foundation.',
    highlights: [
      'Catalog logic',
      'Shopping cart',
      'Wishlist',
      'Admin panel',
    ],
  },
]

export const expertise = [
  {
    icon: codeIcon,
    title: 'Frontend Systems',
    text: 'Modern interfaces, responsive layouts, dashboards, PWAs, and visual systems built with product-level polish.',
  },
  {
    icon: serverIcon,
    title: 'Backend Architecture',
    text: 'APIs, authentication, database models, admin logic, and server-side foundations designed to support real workflows.',
  },
  {
    icon: layersIcon,
    title: 'Product Execution',
    text: 'From visual direction to implementation, optimization, deployment, and iteration with a clear premium standard.',
  },
]

export const skills = [
  ['Interface Engineering', codeIcon],
  ['Data Architecture', databaseIcon],
  ['Backend Systems', serverIcon],
  ['Mobile-first PWAs', smartphoneIcon],
  ['Web Platforms', globeIcon],
  ['Secure Workflows', shieldCheckIcon],
  ['CI/CD Pipelines', workflowIcon],
  ['Modular Architecture', layersIcon],
  ['Performance Polish', zapIcon],
  ['Product Launches', rocketIcon],
]

export const processSteps = [
  ['01', 'Understand the product', 'Translate business needs into clear flows, priorities, and technical decisions.'],
  ['02', 'Design the experience', 'Shape hierarchy, responsive behavior, and interactions with a premium visual standard.'],
  ['03', 'Build the system', 'Implement modular frontend and backend structures that stay maintainable.'],
  ['04', 'Polish the details', 'Refine motion, performance, responsiveness, and visual consistency before delivery.'],
]

export const stackGroups = [
  ['Frontend', 'React', 'TypeScript', 'Ionic', 'Angular', 'SCSS', 'Tailwind'],
  ['Backend', 'Node.js', 'Django', 'REST APIs', 'Authentication', 'Business Logic'],
  ['Data', 'MongoDB', 'PostgreSQL', 'Firebase', 'Scalable Models'],
  ['Delivery', 'GitHub', 'Azure DevOps', 'CI/CD', 'Netlify', 'Production'],
]

export const technologies = [
  ['Angular', angularIcon, '#dd0031', 'brightness(0) saturate(100%) invert(14%) sepia(99%) saturate(5573%) hue-rotate(337deg) brightness(91%) contrast(101%)'],
  ['Ionic', ionicIcon, '#3880ff', 'brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(2929%) hue-rotate(209deg) brightness(103%) contrast(101%)'],
  ['React', reactIcon, '#61dafb', 'brightness(0) saturate(100%) invert(86%) sepia(55%) saturate(929%) hue-rotate(158deg) brightness(101%) contrast(97%)'],
  ['JavaScript', javascriptIcon, '#f7df1e', 'brightness(0) saturate(100%) invert(87%) sepia(87%) saturate(766%) hue-rotate(339deg) brightness(103%) contrast(94%)'],
  ['TypeScript', typescriptIcon, '#3178c6', 'brightness(0) saturate(100%) invert(41%) sepia(61%) saturate(851%) hue-rotate(174deg) brightness(91%) contrast(92%)'],
  ['Node.js', nodeIcon, '#5fa04e', 'brightness(0) saturate(100%) invert(55%) sepia(18%) saturate(1174%) hue-rotate(63deg) brightness(94%) contrast(89%)'],
  ['Django', djangoIcon, '#44b78b', 'brightness(0) saturate(100%) invert(65%) sepia(39%) saturate(619%) hue-rotate(108deg) brightness(86%) contrast(87%)'],
  ['Python', pythonIcon, '#ffd43b', 'brightness(0) saturate(100%) invert(83%) sepia(87%) saturate(583%) hue-rotate(337deg) brightness(103%) contrast(101%)'],
  ['MongoDB', mongodbIcon, '#47a248', 'brightness(0) saturate(100%) invert(54%) sepia(14%) saturate(1887%) hue-rotate(71deg) brightness(92%) contrast(87%)'],
  ['PostgreSQL', postgresqlIcon, '#4169e1', 'brightness(0) saturate(100%) invert(40%) sepia(55%) saturate(2710%) hue-rotate(213deg) brightness(91%) contrast(93%)'],
  ['Firebase', firebaseIcon, '#ffca28', 'brightness(0) saturate(100%) invert(81%) sepia(87%) saturate(703%) hue-rotate(338deg) brightness(101%) contrast(101%)'],
  ['Tailwind CSS', tailwindIcon, '#06b6d4', 'brightness(0) saturate(100%) invert(58%) sepia(95%) saturate(1671%) hue-rotate(144deg) brightness(94%) contrast(95%)'],
  ['Sass', sassIcon, '#cc6699', 'brightness(0) saturate(100%) invert(54%) sepia(48%) saturate(591%) hue-rotate(288deg) brightness(87%) contrast(91%)'],
  ['CSS', cssIcon, '#663399', 'brightness(0) saturate(100%) invert(26%) sepia(53%) saturate(1436%) hue-rotate(244deg) brightness(91%) contrast(90%)'],
  ['Git', gitIcon, '#f05032', 'brightness(0) saturate(100%) invert(42%) sepia(88%) saturate(1940%) hue-rotate(340deg) brightness(103%) contrast(88%)'],
  ['GitHub', githubIcon, '#f5f5f5', 'brightness(0) saturate(100%) invert(99%) sepia(5%) saturate(0%) hue-rotate(194deg) brightness(114%) contrast(92%)'],
  ['Docker', dockerIcon, '#2496ed', 'brightness(0) saturate(100%) invert(53%) sepia(95%) saturate(2182%) hue-rotate(177deg) brightness(97%) contrast(91%)'],
  ['Netlify', netlifyIcon, '#00c7b7', 'brightness(0) saturate(100%) invert(56%) sepia(91%) saturate(1267%) hue-rotate(135deg) brightness(96%) contrast(101%)'],
  ['Vite', viteIcon, '#bd34fe', 'brightness(0) saturate(100%) invert(43%) sepia(87%) saturate(3025%) hue-rotate(252deg) brightness(101%) contrast(99%)'],
]
