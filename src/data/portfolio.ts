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
  ['Angular', angularIcon],
  ['Ionic', ionicIcon],
  ['React', reactIcon],
  ['JavaScript', javascriptIcon],
  ['TypeScript', typescriptIcon],
  ['Node.js', nodeIcon],
  ['Django', djangoIcon],
  ['Python', pythonIcon],
  ['MongoDB', mongodbIcon],
  ['PostgreSQL', postgresqlIcon],
  ['Firebase', firebaseIcon],
  ['Tailwind CSS', tailwindIcon],
  ['Sass', sassIcon],
  ['CSS', cssIcon],
  ['Git', gitIcon],
  ['GitHub', githubIcon],
  ['Docker', dockerIcon],
  ['Netlify', netlifyIcon],
  ['Vite', viteIcon],
]
