export const profile = {
  name: 'Ingrid Natalia',
  lastName: 'Rodríguez Ovalle',
  shortName: 'Inna',
  role: 'Backend Engineer',
  tagline: ['Python', 'APIs', 'Architecture', 'Fintech', 'Retail'],
  location: 'Bogotá, Colombia',
  email: 'innarov@hotmail.com',
  github: 'https://github.com/innacroft',
  linkedin: 'https://www.linkedin.com/in/ingrid-natalia-rodríguez-ovalle-661709120/',
  summary: [
    'Backend Engineer with 5+ years of experience building scalable APIs and optimizing critical systems in retail and fintech, using Python and TypeScript.',
    'Experienced in cloud-native architectures, asynchronous processing, API integrations, relational and NoSQL databases, containerized environments and DevOps practices. Strong background in software architecture and system design for retail, logistics and fintech.',
    'Specialist in asynchronous processing and critical system optimization for retail and fintech, focused on reducing operational load and ensuring high availability. I use AI-driven workflows (Claude, Cursor) to accelerate architecture, documentation and debugging.',
  ],
}

export const stats = [
  { value: '18,500+', label: 'Packages/year automated through carrier APIs' },
  { value: '40%', label: 'Fewer manual errors after the integration' },
  { value: '45,000+', label: 'Cart additions in a year via the 3D planner' },
]

// Casos con impacto medible. Las cifras vienen del CV en inglés (versión larga).
export const cases = [
  {
    metric: '18,500+',
    unit: 'packages / year',
    title: 'Carrier API integration lead',
    tone: 'cyan',
    body: 'Led the API integration of logistics providers across México and Brasil — FedEx, Estafeta, J&T Express and others — behind a single internal interface. Label generation, tracking and pickup stopped being manual work.',
    impact: [
      '40% fewer manual errors',
      '≈ 420 manual work hours/month cut in Brasil (first six months)',
      'Carriers for México and Brasil behind one internal interface',
    ],
    tags: ['Python', 'FastAPI', 'REST APIs', 'Celery', 'RabbitMQ'],
  },
  {
    metric: '45,000+',
    unit: 'cart additions / year',
    title: '3D planner for e-commerce',
    tone: 'magenta',
    body: 'Backend for a 3D space planner integrated with Planner Studio, letting customers lay out a room before buying.',
    impact: [
      '45,000+ cart additions in a year',
      'Live and converting within 13 days of launch',
    ],
    tags: ['Python', 'REST APIs', 'PostgreSQL'],
  },
  {
    metric: '33,000+',
    unit: 'new users / year',
    title: 'Auth at scale & internal tooling',
    tone: 'violet',
    body: 'Helped build a scalable authentication system and an internal reviews manager, plus performance work on high-traffic APIs during peak events like Buen Fin.',
    impact: [
      '33,000+ new users/year through the auth system',
      'Internal reviews manager replaced recurring manual work',
    ],
    tags: ['FastAPI', 'Flask', 'Kubernetes', 'Grafana', 'Prometheus'],
  },
]


export const stages = [
  {
    id: 'core',
    stage: 'Core backend',
    tone: 'magenta',
    note: 'Languages & frameworks',
    skills: ['Python', 'TypeScript', 'FastAPI', 'Flask', 'Django', 'Django REST Framework', 'Frappe', 'REST APIs', 'GraphQL', 'Microservices', 'Software Architecture', 'Distributed Systems'],
  },
  {
    id: 'data',
    stage: 'Data & storage',
    tone: 'cyan',
    note: 'Pipelines & databases',
    skills: ['Palantir Foundry', 'Data Pipelines', 'Datasets', 'PostgreSQL', 'MariaDB', 'MongoDB', 'MySQL', 'SQLite', 'SQL', 'SQLAlchemy', 'Redis'],
  },
  {
    id: 'cloud',
    stage: 'Cloud & DevOps',
    tone: 'violet',
    note: 'Ship & scale',
    skills: ['Docker', 'Kubernetes', 'ArgoCD', 'AWS Lambda', 'Amazon S3', 'Amazon SQS', 'DynamoDB', 'RabbitMQ', 'Celery', 'Linux'],
  },
  {
    id: 'ops',
    stage: 'Quality & observability',
    tone: 'acid',
    note: 'Testing, monitoring, AI tooling',
    skills: ['Grafana', 'Prometheus', 'Loki', 'Pytest', 'Jest', 'Unit & Integration Testing', 'BDD', 'Cursor AI', 'Claude', 'GitHub Copilot', 'Prompt Engineering'],
  },
]

export const experience = [
  {
    company: 'Zebrands',
    role: 'Backend Engineer',
    period: 'Oct 2021 — Present',
    year: '2021',
    place: 'Remote',
    current: true,
    tags: ['Python', 'FastAPI', 'TypeScript', 'Kubernetes', 'Palantir Foundry'],
    bullets: [
      'Logistics integration lead: led the API integration of carriers for México and Brasil (FedEx, Estafeta, J&T Express and others), automating 18,500+ packages/year, cutting manual errors by 40% and removing ≈ 420 manual work hours/month in Brasil during the first six months.',
      'E-commerce innovation: developed a 3D planner integrated with Planner Studio, live and converting within 13 days of launch and reaching 45,000+ cart additions in a year.',
      'System stability: helped build a scalable authentication system (33,000+ new users/year) and an internal reviews manager that replaced recurring manual work.',
      'Performance: optimized high-traffic APIs with FastAPI and Flask, using Celery and RabbitMQ for heavy asynchronous workloads during peak events like Buen Fin.',
      'AI-enhanced workflow: integrated Claude into the engineering cycle for rapid prototyping, automated documentation (ADRs) and system design, reducing planning time and accelerating delivery.',
      'Designed and optimized PostgreSQL, MariaDB and MongoDB databases; containerized services with Docker and deployed through Kubernetes and ArgoCD.',
      'Improved observability with Grafana, Prometheus and Loki, and built automated tests with Pytest and Jest.',
      'Designed data pipelines, datasets and business logic in Palantir Foundry to support B2B operations.',
    ],
  },
  {
    company: 'MO Credit Management Platform',
    role: 'Backend Engineer',
    period: 'Feb 2021 — Oct 2021',
    year: '2021',
    place: 'Colombia',
    tags: ['Django', 'AWS', 'Fintech', 'BEES · AB InBev'],
    bullets: [
      'Developed backend features for BEES (AB InBev), focusing on credit processing and financial operations for small businesses.',
      'Implemented core business logic for credit verification and internal financial reporting.',
      'Ensured system reliability through unit testing and reproducible Docker environments.',
      'Worked with AWS Lambda, Amazon S3, Amazon SQS and DynamoDB; managed PostgreSQL databases.',
    ],
  },
  {
    company: 'A&A Soluciones TIC',
    role: 'Python Engineer',
    period: 'Jun 2020 — Feb 2021',
    year: '2020',
    place: 'Colombia',
    tags: ['Django', 'DRF', 'Fintech', 'Healthcare'],
    bullets: [
      'Built backend functionality with Django and Django REST Framework for fintech and healthcare (Watoko).',
      'Winner of Avaya’s CPaaS Hackathon with a virtual wallet solution.',
      'Implemented asynchronous processing with Celery and RabbitMQ, and maintained PostgreSQL databases.',
    ],
  },
  {
    company: 'Robotec Colombia',
    role: 'Embedded Developer',
    period: 'Jan 2018 — Dec 2019',
    year: '2018',
    place: 'Colombia',
    tags: ['C++', 'C#', 'Embedded', 'Biometrics'],
    bullets: [
      'Developed firmware in C++ and C# for biometric devices used by government entities (IGAC, Council of State).',
      'Integrated HID SDKs for secure identity validation and hardware-software synchronization.',
      'Produced technical documentation and worked with SQL and SQLite databases.',
    ],
  },
]

export const brands = [
  { name: 'Luuna', niche: 'Retail', country: 'México', url: 'https://luuna.mx', logo: './logos/luuna.svg' },
  { name: 'Luuna', niche: 'Retail', country: 'Brasil', url: 'https://www.luuna.com.br', logo: './logos/luuna.svg' },
  { name: 'Nooz', niche: 'Retail', country: 'México', url: 'https://nooz.mx', logo: './logos/nooz.png' },
  { name: 'Mappa', niche: 'Retail', country: 'México', url: 'https://mappa.mx', logo: './logos/mappa.png' },
  { name: 'Mo', niche: 'Fintech', country: 'Colombia', url: 'https://www.wearemo.com', logo: './logos/mo.svg' },
  { name: 'Aiatic', niche: 'Custom software development', country: 'Colombia', url: 'https://aiatic.solutions', logo: './logos/aiatic.png' },
]

// Integraciones con paqueterías. El link va al portal de desarrolladores cuando existe.
export const apis = [
  { name: 'FedEx', note: 'Logistics · México · Brasil', url: 'https://developer.fedex.com', logo: './logos/fedex.png', linkLabel: 'Developer portal' },
  { name: 'Estafeta', note: 'Logistics · México', url: 'https://wscatalogportal.estafeta.com/', logo: './logos/estafeta.svg', linkLabel: 'API docs' },
  { name: 'Platinum Log', note: 'Logistics · Brasil', url: 'https://www.tpl.com.br/', logo: './logos/platinum.png', linkLabel: 'Official site' },
  { name: 'J&T Express', note: 'Logistics · México · Brasil', url: 'https://www.jtexpress.mx/', wordmark: 'J&T Express', linkLabel: 'Official site' },
  { name: 'Yotpo', note: 'Reviews & loyalty', url: 'https://apidocs.yotpo.com/', logo: './logos/yotpo.svg', linkLabel: 'API docs' },
  { name: 'Twilio', note: 'Messaging', url: 'https://www.twilio.com/docs', logo: './logos/twilio.svg', linkLabel: 'Developer docs' },
  // Pandi Web usa su nombre en texto como logo, no tiene wordmark en imagen.
  { name: 'Pandi Web', note: '3D configurators · Dinamarca', url: 'https://pandiweb.dk/', wordmark: 'Pandi Web', linkLabel: 'Official site' },
]

export const education = [
  { title: 'Software Architecture Diploma', org: 'Universidad de La Sabana', year: 'Nov 2025' },
  { title: "Bachelor's Degree in Mechatronics Engineering", org: 'Universidad Piloto de Colombia', year: '2012 — 2017' },
]

export const certifications = [
  { title: 'Winner — Avaya CPaaS Hackathon (virtual wallet solution)', org: 'Avaya' },
  { title: 'Using Python to Interact with the Operating System', org: 'Google' },
  { title: 'Crash Course on Python', org: 'Google' },
]

export const languages = [
  { name: 'Spanish', level: 'Native', value: 100 },
  { name: 'English', level: 'Professional Working Proficiency (B1)', value: 65 },
]

export const marquee = [
  'Python', 'FastAPI', 'Microservices', 'Kubernetes', 'PostgreSQL', 'Celery',
  'RabbitMQ', 'Docker', 'TypeScript', 'Palantir Foundry', 'Grafana', 'ArgoCD',
  'Clean Architecture', 'AI-Assisted Development',
]
