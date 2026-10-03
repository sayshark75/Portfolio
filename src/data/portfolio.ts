export const PERSON = {
  name: 'Sharuk Sayyed',
  first: 'SHARUK',
  last: 'SAYYED',
  role: 'SOFTWARE ENGINEER',
  subrole: 'AI / FULL STACK',
  tagline: 'Building products across the interface, backend and AI layers.',
  focus: ['AI SYSTEMS', 'RAG', 'LLMs', 'PYTHON', 'PRODUCT ENGINEERING'],
  email: 'sayyedsharuk75@gmail.com',
  linkedin: 'https://linkedin.com/in/sayyed-sharuk',
  github: 'https://github.com/sayshark75',
  resumeUrl: '#',
} as const

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  tags: string[]
  bullets: string[]
  color: string
}

export const EXPERIENCES: Experience[] = [
  {
    id: 've3',
    company: 'VE3 Global',
    role: 'Full Stack Developer',
    period: 'June 2025 — Present',
    color: '#00e5a0',
    tags: ['AI/data-quality SaaS', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Prisma', 'WebSockets', 'Redis', 'BullMQ'],
    bullets: [
      'Building AI/data-quality SaaS for cleansing, validation, matching and standardization of large datasets.',
      'Architecting multi-tenant systems with RBAC, tenant isolation, scheduled jobs and webhook integrations.',
      'Working across React / Next.js frontends, Node.js + Python services, and Excel-data heavy workflows.',
      'Real-time infrastructure with WebSockets, Redis and BullMQ for admin and support tooling.',
    ],
  },
  {
    id: 'topbar',
    company: 'TopBar Services',
    role: 'Software Developer',
    period: 'March 2023 — March 2025',
    color: '#3da9ff',
    tags: ['React', 'Next.js', 'TypeScript', 'Node', 'Express', 'Prisma', 'AWS', 'Shopify', 'Strapi', 'Razorpay'],
    bullets: [
      'Shipped production websites and applications end-to-end for clients across e-commerce and services.',
      'Built React / Next.js frontends with TypeScript and Node / Express backends on AWS.',
      'Integrated Shopify, Strapi CMS and Razorpay payment flows into live products.',
    ],
  },
  {
    id: 'masai',
    company: 'Masai School',
    role: 'Full Stack Web Development',
    period: 'August 2022 — February 2023',
    color: '#ffb347',
    tags: ['Full Stack', 'JavaScript', 'React', 'Node', 'DSA'],
    bullets: [
      'Intensive full-stack web development program with a focus on JavaScript, React, Node and DSA.',
      'Transitioned formally into web and product engineering from an embedded systems background.',
    ],
  },
  {
    id: 'autotron',
    company: 'AutoTron Technologies',
    role: 'Associate Web Developer',
    period: 'April 2020 — August 2022',
    color: '#ff6b3d',
    tags: ['C++', 'Arduino', 'Electronics', 'Embedded Systems', 'CNC', 'G-code', 'Web Development'],
    bullets: [
      'Worked at the intersection of hardware and software — C++, Arduino, electronics and embedded systems.',
      'Developed for CNC systems (G-code tooling) while also taking on web development work.',
      'An unusual engineering foundation: bits, volts and circuits before pixels and APIs.',
    ],
  },
  {
    id: 'pune',
    company: 'University of Pune',
    role: 'M.Sc. Electronics',
    period: '2018 — 2020',
    color: '#7c5cff',
    tags: ['Electronics', 'Arduino', 'Raspberry Pi', 'C++', 'Embedded C', 'Circuits', 'Binary', 'Hex', 'TTL', 'G-code'],
    bullets: [
      'Studied electronics at the systems level — circuits, microcontrollers, embedded C, binary/hex logic.',
      'Hands-on work with Arduino, Raspberry Pi, TTL logic and G-code-controlled hardware.',
    ],
  },
]

export type Project = {
  slug: string
  title: string
  category: 'FEATURED' | 'PROFESSIONAL' | 'PERSONAL'
  description: string
  stack: string[]
  role: string
  status: string
  image: string
  live?: string
  github?: string
  year?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'devboard',
    title: 'DevBoard',
    category: 'FEATURED',
    description: 'Developer productivity platform. A unified panel for developer workflow tools, built for personal use and evolved into a product-style surface.',
    stack: ['React', 'Next.js', 'TypeScript', 'Prisma', 'MongoDB', 'Chakra UI', 'NextAuth'],
    role: 'Design, engineering, product',
    status: 'LIVE',
    image: '/assets/projects/devboard.png',
    live: 'https://developmentpanel.vercel.app/',
    year: '2024',
  },
  {
    slug: 'applebury',
    title: 'AppleBury B.A.',
    category: 'PROFESSIONAL',
    description: 'Client site / application built during tenure at TopBar.',
    stack: ['Next.js', 'React', 'CMS'],
    role: 'Developer',
    status: 'SHIPPED',
    image: '/assets/projects/applebury.webp',
    live: 'https://appleburyba.com/',
    year: '2024',
  },
  {
    slug: 'equitree',
    title: 'Equitree Capital',
    category: 'PROFESSIONAL',
    description: 'Professional services website for a capital firm.',
    stack: ['Next.js', 'React', 'Tailwind'],
    role: 'Developer',
    status: 'SHIPPED',
    image: '/assets/projects/equitree.webp',
    live: 'https://equitreecapital.com/',
    year: '2024',
  },
  {
    slug: 'modula',
    title: 'Modula Kitchen',
    category: 'PROFESSIONAL',
    description: 'Custom kitchens e-commerce / marketing site.',
    stack: ['Next.js', 'React', 'Shopify'],
    role: 'Developer',
    status: 'SHIPPED',
    image: '/assets/projects/modula.webp',
    live: 'https://modulakitchens.in/',
    year: '2024',
  },
  {
    slug: 'equations',
    title: 'Equations LLC',
    category: 'PROFESSIONAL',
    description: 'Professional website build for Equations LLC.',
    stack: ['Next.js', 'React'],
    role: 'Developer',
    status: 'SHIPPED',
    image: '/assets/projects/equations.webp',
    live: 'https://equationsllc.com/',
    year: '2024',
  },
  {
    slug: 'trupti',
    title: 'Trupti',
    category: 'PROFESSIONAL',
    description: 'Client site build — food / hospitality vertical.',
    stack: ['Next.js', 'React'],
    role: 'Developer',
    status: 'SHIPPED',
    image: '/assets/projects/trupti.webp',
    live: 'https://truptiinternational.com/',
    year: '2023',
  },
  {
    slug: 'terractive',
    title: 'Terractive',
    category: 'PROFESSIONAL',
    description: 'Product / marketing site for Terractive.',
    stack: ['Next.js', 'React'],
    role: 'Developer',
    status: 'SHIPPED',
    image: '/assets/projects/terractive.webp',
    live: 'https://terractive.com/',
    year: '2023',
  },
  {
    slug: 'diogo',
    title: 'Diogo Louis',
    category: 'PROFESSIONAL',
    description: 'Portfolio / personal brand site for Diogo Louis.',
    stack: ['Next.js', 'React'],
    role: 'Developer',
    status: 'SHIPPED',
    image: '/assets/projects/diogolouis.webp',
    live: 'https://diogolouis.com/',
    year: '2023',
  },
  {
    slug: 'codebank',
    title: 'CodeBank',
    category: 'PERSONAL',
    description: 'Early personal project — code snippet management.',
    stack: ['React', 'Node', 'MongoDB'],
    role: 'Solo',
    status: 'ARCHIVED',
    image: '/assets/projects/code-bank.webp',
    year: '2022',
  },
  {
    slug: 'aprime',
    title: 'A-Prime',
    category: 'PERSONAL',
    description: 'Personal e-commerce experiment.',
    stack: ['React', 'Node'],
    role: 'Solo',
    status: 'ARCHIVED',
    image: '/assets/projects/aprime.webp',
    year: '2022',
  },
  {
    slug: 'koovs',
    title: 'KOOVS Clone',
    category: 'PERSONAL',
    description: 'Clone project for learning e-commerce flows.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Solo',
    status: 'ARCHIVED',
    image: '/assets/projects/koovs.webp',
    year: '2022',
  },
  {
    slug: 'gadget',
    title: 'Gadget360',
    category: 'PERSONAL',
    description: 'Tech review site clone project.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Solo',
    status: 'ARCHIVED',
    image: '/assets/projects/gadgetRambo.webp',
    year: '2022',
  },
  {
    slug: 'beautybebo',
    title: 'BeautyBebo',
    category: 'PERSONAL',
    description: 'E-commerce clone for learning frontend flows.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Solo',
    status: 'ARCHIVED',
    image: '/assets/projects/glamazon.webp',
    year: '2022',
  },
  {
    slug: 'indianexpress',
    title: 'IndianExpress Clone',
    category: 'PERSONAL',
    description: 'News layout clone project.',
    stack: ['HTML', 'CSS'],
    role: 'Solo',
    status: 'ARCHIVED',
    image: '/assets/projects/iexpress.webp',
    year: '2022',
  },
]

export type SkillLayer = {
  id: string
  label: string
  color: string
  items: string[]
}

export const SKILL_LAYERS: SkillLayer[] = [
  {
    id: 'frontend',
    label: 'INTERFACE',
    color: '#ffb347',
    items: ['React', 'Next.js', 'TypeScript', 'Vite', 'Redux', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 'backend',
    label: 'APPLICATION',
    color: '#00e5a0',
    items: ['Node.js', 'Express', 'FastAPI', 'Prisma', 'SQL', 'MongoDB', 'WebSockets'],
  },
  {
    id: 'ai',
    label: 'AI / DATA',
    color: '#7c5cff',
    items: ['Python', 'Pandas', 'RAG', 'LLMs', 'Embeddings', 'Vector Databases', 'Ollama', 'LangChain', 'LangGraph', 'Hugging Face'],
  },
  {
    id: 'infra',
    label: 'INFRASTRUCTURE',
    color: '#3da9ff',
    items: ['AWS', 'Docker', 'Vercel', 'Git', 'Linux'],
  },
  {
    id: 'foundations',
    label: 'FOUNDATIONS',
    color: '#ff6b3d',
    items: ['C++', 'Arduino', 'Raspberry Pi', 'Embedded C', 'Electronics', 'G-code'],
  },
]

export type TimelineNode = {
  year: string
  title: string
  items: string[]
}

export const TIMELINE_NODES: TimelineNode[] = [
  { year: '2018', title: 'ELECTRONICS', items: ['M.Sc. Electronics', 'Circuits', 'Binary logic', 'Microcontrollers'] },
  { year: '2020', title: 'EMBEDDED', items: ['C++', 'Arduino', 'Raspberry Pi', 'CNC / G-code'] },
  { year: '2022', title: 'WEB DEVELOPMENT', items: ['HTML / CSS / JS', 'React fundamentals', 'Masai School'] },
  { year: '2023', title: 'FULL STACK', items: ['Next.js', 'Node.js', 'Prisma', 'Production shipping'] },
  { year: '2025', title: 'PRODUCT ENGINEERING', items: ['Multi-tenant SaaS', 'Data pipelines', 'Systems design', 'Real-time'] },
  { year: '2026', title: 'AI SYSTEMS', items: ['RAG', 'LLMs', 'Python', 'Retrieval', 'Embeddings'] },
]

export const RAG_PIPELINE = [
  { id: 'docs', label: 'DOCUMENTS', detail: 'PDFs, docs, unstructured sources — the input mess.' },
  { id: 'extract', label: 'EXTRACTION', detail: 'Parse text, tables, structure from raw files.' },
  { id: 'chunk', label: 'CHUNKING', detail: 'Segment content into retrieval-sized units with overlap.' },
  { id: 'embed', label: 'EMBEDDINGS', detail: 'Project chunks into vector space via embedding models.' },
  { id: 'vectordb', label: 'VECTOR SEARCH', detail: 'ANN search over the vector store for nearest neighbors.' },
  { id: 'retrieval', label: 'RETRIEVAL', detail: 'Pull candidate passages relevant to the query.' },
  { id: 'rerank', label: 'RERANKING', detail: 'Re-score candidates with a cross-encoder (e.g. BGE).' },
  { id: 'context', label: 'CONTEXT', detail: 'Assemble a tight, grounded context window.' },
  { id: 'llm', label: 'LLM', detail: 'The model generates an answer conditioned on context.' },
  { id: 'answer', label: 'ANSWER', detail: 'Grounded, cited output. Evaluation sits on top.' },
] as const

export const SYSTEM_LAYERS = [
  { id: 'surface', label: 'SURFACE', tagline: 'what users see' },
  { id: 'application', label: 'APPLICATION', tagline: 'UI, state, interaction' },
  { id: 'backend', label: 'BACKEND', tagline: 'APIs, services, auth' },
  { id: 'data', label: 'DATA', tagline: 'streams, schemas, storage' },
  { id: 'retrieval', label: 'RETRIEVAL', tagline: 'search, embeddings, index' },
  { id: 'ai', label: 'AI', tagline: 'models, context, pipelines' },
  { id: 'system', label: 'SYSTEM', tagline: 'everything connected' },
] as const

export const PHILOSOPHY = [
  'Build systems, not demos.',
  'Understand the data before blaming the model.',
  'AI is a component, not the entire product.',
  'Good engineering makes complexity observable.',
  'Learn the layer underneath the abstraction.',
] as const

export const CONSTELLATION: { id: string; x: number; y: number; layer: 'ai' | 'backend' | 'frontend' | 'infra' | 'foundations'; connections: string[] }[] = [
  // AI layer (top center)
  { id: 'AI', x: 50, y: 10, layer: 'ai', connections: ['RAG', 'LLMs', 'LangGraph'] },
  { id: 'RAG', x: 38, y: 20, layer: 'ai', connections: ['Embeddings', 'LangChain'] },
  { id: 'LLMs', x: 62, y: 20, layer: 'ai', connections: ['Ollama', 'Hugging Face'] },
  { id: 'LangGraph', x: 50, y: 24, layer: 'ai', connections: ['LangChain', 'Python'] },
  { id: 'Embeddings', x: 30, y: 30, layer: 'ai', connections: ['Vector DB'] },
  { id: 'Ollama', x: 70, y: 30, layer: 'ai', connections: ['Python'] },
  { id: 'LangChain', x: 45, y: 34, layer: 'ai', connections: ['Python'] },
  { id: 'Hugging Face', x: 65, y: 38, layer: 'ai', connections: ['Python'] },
  { id: 'Vector DB', x: 32, y: 42, layer: 'ai', connections: ['Python'] },
  // Backend (middle)
  { id: 'Python', x: 42, y: 50, layer: 'backend', connections: ['FastAPI', 'Pandas'] },
  { id: 'FastAPI', x: 34, y: 58, layer: 'backend', connections: ['Backend'] },
  { id: 'Pandas', x: 52, y: 56, layer: 'ai', connections: ['Python'] },
  { id: 'Backend', x: 50, y: 66, layer: 'backend', connections: ['Node', 'SQL', 'MongoDB', 'Docker', 'AWS'] },
  { id: 'Node', x: 50, y: 74, layer: 'backend', connections: ['TypeScript', 'Express'] },
  { id: 'Express', x: 65, y: 76, layer: 'backend', connections: ['Backend'] },
  { id: 'SQL', x: 30, y: 76, layer: 'backend', connections: ['Backend', 'Prisma'] },
  { id: 'MongoDB', x: 72, y: 68, layer: 'backend', connections: ['Backend', 'Prisma'] },
  { id: 'Prisma', x: 22, y: 68, layer: 'backend', connections: ['Backend'] },
  // Frontend (lower)
  { id: 'TypeScript', x: 50, y: 82, layer: 'frontend', connections: ['React', 'Next.js'] },
  { id: 'React', x: 40, y: 90, layer: 'frontend', connections: ['Next.js', 'Vite', 'Tailwind', 'Framer Motion'] },
  { id: 'Next.js', x: 60, y: 90, layer: 'frontend', connections: ['Vercel'] },
  { id: 'Vite', x: 28, y: 92, layer: 'frontend', connections: ['React'] },
  { id: 'Redux', x: 18, y: 86, layer: 'frontend', connections: ['React'] },
  { id: 'Tailwind', x: 72, y: 94, layer: 'frontend', connections: ['React'] },
  { id: 'Framer Motion', x: 82, y: 86, layer: 'frontend', connections: ['React'] },
  // Infra (right side)
  { id: 'Docker', x: 84, y: 52, layer: 'infra', connections: ['Backend', 'AWS'] },
  { id: 'AWS', x: 90, y: 62, layer: 'infra', connections: ['Docker', 'Vercel'] },
  { id: 'Vercel', x: 78, y: 76, layer: 'infra', connections: ['Next.js'] },
  { id: 'Git', x: 12, y: 60, layer: 'infra', connections: ['Linux'] },
  { id: 'Linux', x: 8, y: 72, layer: 'infra', connections: ['C++'] },
  // Foundations (lower left)
  { id: 'C++', x: 14, y: 86, layer: 'foundations', connections: ['Embedded C', 'Arduino'] },
  { id: 'Embedded C', x: 6, y: 92, layer: 'foundations', connections: ['Arduino', 'Electronics'] },
  { id: 'Arduino', x: 22, y: 96, layer: 'foundations', connections: ['Raspberry Pi', 'G-code'] },
  { id: 'Raspberry Pi', x: 36, y: 98, layer: 'foundations', connections: ['Electronics'] },
  { id: 'Electronics', x: 10, y: 100, layer: 'foundations', connections: [] },
  { id: 'G-code', x: 50, y: 100, layer: 'foundations', connections: [] },
]
