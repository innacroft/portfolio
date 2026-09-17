// Contenido del portafolio. Todo string traducible es { en, es };
// lo demás (URLs, logos, nombres de tecnologías) es igual en ambos idiomas.

export const profile = {
  name: 'Ingrid Natalia',
  lastName: 'Rodríguez Ovalle',
  shortName: 'Inna',
  role: { en: 'Backend Engineer', es: 'Backend Engineer' },
  tagline: {
    en: ['Python', 'APIs', 'Architecture', 'Fintech', 'Retail'],
    es: ['Python', 'APIs', 'Arquitectura', 'Fintech', 'Retail'],
  },
  headline: {
    en: 'Backend Engineer — 5+ years building scalable APIs and optimizing critical systems for retail, logistics and fintech.',
    es: 'Backend Engineer — más de 5 años construyendo APIs escalables y optimizando sistemas críticos para retail, logística y fintech.',
  },
  location: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
  email: 'innarov@hotmail.com',
  github: 'https://github.com/innacroft',
  linkedin: 'https://www.linkedin.com/in/ingrid-natalia-rodríguez-ovalle-661709120/',
  summary: {
    en: [
      'I have spent five years in backend, but I started writing C++ firmware for biometric devices used by Colombian government entities. Coming from hardware left me a useful obsession: assume everything fails — the network, the provider, the device — and design for that.',
      'At Zebrands I build the services that move logistics for México and Brasil. My job is that a shipping label still gets created when FedEx takes eight seconds to answer, that a queue does not jam in the middle of Buen Fin, and that when something breaks it shows up on a dashboard before a customer reports it.',
      'I work in Python and TypeScript, and for the past year with Claude and Cursor inside the engineering cycle — not to write code for me, but to explore designs, document decisions as ADRs and debug faster. I would rather ship a simple architecture someone else can maintain than an elegant one only I understand.',
    ],
    es: [
      'Llevo cinco años en backend, pero empecé escribiendo firmware en C++ para dispositivos biométricos de entidades del Estado colombiano. Venir del hardware me dejó una obsesión útil: asumir que todo falla —la red, el proveedor, el dispositivo— y diseñar para eso.',
      'En Zebrands construyo los servicios que mueven la logística de México y Brasil. Mi trabajo es que una guía se genere aunque FedEx tarde ocho segundos en responder, que una cola no se atore en pleno Buen Fin y que cuando algo se rompe se vea en un tablero antes de que lo reporte un cliente.',
      'Trabajo con Python y TypeScript, y desde hace un año con Claude y Cursor dentro del ciclo de ingeniería: no para que escriban el código por mí, sino para explorar diseños, documentar decisiones en ADRs y depurar más rápido. Prefiero una arquitectura simple que otro pueda mantener antes que una elegante que sólo yo entienda.',
    ],
  },
}

export const stats = [
  {
    value: '18,500+',
    label: {
      en: 'Packages/year automated through carrier APIs',
      es: 'Paquetes/año automatizados vía APIs de paqueterías',
    },
  },
  {
    value: '40%',
    label: {
      en: 'Fewer manual errors after the integration',
      es: 'Menos errores manuales tras la integración',
    },
  },
  {
    value: '45,000+',
    label: {
      en: 'Cart additions in a year via the 3D planner',
      es: 'Adiciones al carrito en un año con el planificador 3D',
    },
  },
]

export const cases = [
  {
    metric: '18,500+',
    unit: { en: 'packages / year', es: 'paquetes / año' },
    title: { en: 'Carrier API integration lead', es: 'Líder de integración con paqueterías' },
    tone: 'cyan',
    body: {
      en: 'Led the API integration of logistics providers across México and Brasil — FedEx, Estafeta, J&T Express and others — behind a single internal interface. Label generation, tracking and pickup stopped being manual work.',
      es: 'Lideré la integración de las APIs de paqueterías en México y Brasil —FedEx, Estafeta, J&T Express y otras— detrás de una sola interfaz interna. La generación de guías, el rastreo y las recolecciones dejaron de ser trabajo manual.',
    },
    impact: {
      en: [
        '40% fewer manual errors',
        '≈ 420 manual work hours/month cut in Brasil (first six months)',
        'Carriers for México and Brasil behind one internal interface',
      ],
      es: [
        '40% menos errores manuales',
        '≈ 420 horas de trabajo manual/mes eliminadas en Brasil (primeros seis meses)',
        'Paqueterías de México y Brasil bajo una sola interfaz interna',
      ],
    },
    tags: ['Python', 'FastAPI', 'REST APIs', 'Celery', 'RabbitMQ'],
  },
  {
    metric: '45,000+',
    unit: { en: 'cart additions / year', es: 'adiciones al carrito / año' },
    title: { en: '3D planner for e-commerce', es: 'Planificador 3D para e-commerce' },
    tone: 'magenta',
    body: {
      en: 'Backend for a 3D space planner integrated with Planner Studio, letting customers lay out a room before buying.',
      es: 'Backend de un planificador de espacios en 3D integrado con Planner Studio, que permite a los clientes distribuir una habitación antes de comprar.',
    },
    impact: {
      en: ['45,000+ cart additions in a year', 'Live and converting within 13 days of launch'],
      es: [
        '45,000+ adiciones al carrito en un año',
        'En producción y convirtiendo a los 13 días del lanzamiento',
      ],
    },
    tags: ['Python', 'REST APIs', 'PostgreSQL'],
  },
  {
    metric: '33,000+',
    unit: { en: 'new users / year', es: 'usuarios nuevos / año' },
    title: { en: 'Auth at scale & internal tooling', es: 'Autenticación a escala y herramientas internas' },
    tone: 'violet',
    body: {
      en: 'Helped build a scalable authentication system and an internal reviews manager, plus performance work on high-traffic APIs during peak events like Buen Fin.',
      es: 'Participé en un sistema de autenticación escalable y un gestor interno de reseñas, además de optimizar APIs de alto tráfico en picos como el Buen Fin.',
    },
    impact: {
      en: [
        '33,000+ new users/year through the auth system',
        'Internal reviews manager replaced recurring manual work',
      ],
      es: [
        '33,000+ usuarios nuevos/año por el sistema de autenticación',
        'El gestor de reseñas reemplazó trabajo manual recurrente',
      ],
    },
    tags: ['FastAPI', 'Flask', 'Kubernetes', 'Grafana', 'Prometheus'],
  },
]

export const stages = [
  {
    id: 'core',
    stage: { en: 'Core backend', es: 'Backend principal' },
    tone: 'magenta',
    note: { en: 'Languages & frameworks', es: 'Lenguajes y frameworks' },
    skills: ['Python', 'TypeScript', 'FastAPI', 'Flask', 'Django', 'Django REST Framework', 'Frappe', 'REST APIs', 'GraphQL', 'Microservices', 'Software Architecture', 'Distributed Systems'],
  },
  {
    id: 'data',
    stage: { en: 'Data & storage', es: 'Datos y almacenamiento' },
    tone: 'cyan',
    note: { en: 'Pipelines & databases', es: 'Pipelines y bases de datos' },
    skills: ['Palantir Foundry', 'Data Pipelines', 'Datasets', 'PostgreSQL', 'MariaDB', 'MongoDB', 'MySQL', 'SQLite', 'SQL', 'SQLAlchemy', 'Redis'],
  },
  {
    id: 'cloud',
    stage: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    tone: 'violet',
    note: { en: 'Ship & scale', es: 'Desplegar y escalar' },
    skills: ['Docker', 'Kubernetes', 'ArgoCD', 'AWS Lambda', 'Amazon S3', 'Amazon SQS', 'DynamoDB', 'RabbitMQ', 'Celery', 'Linux'],
  },
  {
    id: 'ops',
    stage: { en: 'Quality & observability', es: 'Calidad y observabilidad' },
    tone: 'acid',
    note: { en: 'Testing, monitoring, AI tooling', es: 'Pruebas, monitoreo, herramientas de IA' },
    skills: ['Grafana', 'Prometheus', 'Loki', 'Pytest', 'Jest', 'Unit & Integration Testing', 'BDD', 'Cursor AI', 'Claude', 'GitHub Copilot', 'Prompt Engineering'],
  },
]

export const experience = [
  {
    company: 'Zebrands',
    role: { en: 'Backend Engineer', es: 'Backend Engineer' },
    period: { en: 'Oct 2021 — Present', es: 'Oct 2021 — Actualidad' },
    year: '2021',
    current: true,
    tags: ['Python', 'FastAPI', 'TypeScript', 'Kubernetes', 'Palantir Foundry'],
    bullets: {
      en: [
        'Logistics integration lead: led the API integration of carriers for México and Brasil (FedEx, Estafeta, J&T Express and others), automating 18,500+ packages/year, cutting manual errors by 40% and removing ≈ 420 manual work hours/month in Brasil during the first six months.',
        'E-commerce innovation: developed a 3D planner integrated with Planner Studio, live and converting within 13 days of launch and reaching 45,000+ cart additions in a year.',
        'System stability: helped build a scalable authentication system (33,000+ new users/year) and an internal reviews manager that replaced recurring manual work.',
        'Performance: optimized high-traffic APIs with FastAPI and Flask, using Celery and RabbitMQ for heavy asynchronous workloads during peak events like Buen Fin.',
        'AI-enhanced workflow: integrated Claude into the engineering cycle for rapid prototyping, automated documentation (ADRs) and system design, reducing planning time and accelerating delivery.',
        'Designed and optimized PostgreSQL, MariaDB and MongoDB databases; containerized services with Docker and deployed through Kubernetes and ArgoCD.',
        'Improved observability with Grafana, Prometheus and Loki, and built automated tests with Pytest and Jest.',
        'Designed data pipelines, datasets and business logic in Palantir Foundry to support B2B operations.',
      ],
      es: [
        'Líder de integración logística: dirigí la integración de las APIs de paqueterías para México y Brasil (FedEx, Estafeta, J&T Express y otras), automatizando más de 18,500 paquetes/año, reduciendo 40% los errores manuales y eliminando ≈ 420 horas de trabajo manual/mes en Brasil durante los primeros seis meses.',
        'Innovación en e-commerce: desarrollé un planificador 3D integrado con Planner Studio, en producción y convirtiendo a los 13 días del lanzamiento, con más de 45,000 adiciones al carrito en un año.',
        'Estabilidad del sistema: participé en un sistema de autenticación escalable (33,000+ usuarios nuevos/año) y en un gestor interno de reseñas que reemplazó trabajo manual recurrente.',
        'Rendimiento: optimicé APIs de alto tráfico con FastAPI y Flask, usando Celery y RabbitMQ para cargas asíncronas pesadas en picos como el Buen Fin.',
        'Flujo asistido por IA: integré Claude al ciclo de ingeniería para prototipado rápido, documentación automatizada (ADRs) y diseño de sistemas, reduciendo el tiempo de planeación y acelerando la entrega.',
        'Diseñé y optimicé bases de datos PostgreSQL, MariaDB y MongoDB; contenericé servicios con Docker y desplegué con Kubernetes y ArgoCD.',
        'Mejoré la observabilidad con Grafana, Prometheus y Loki, y construí pruebas automatizadas con Pytest y Jest.',
        'Diseñé pipelines de datos, datasets y lógica de negocio en Palantir Foundry para soportar operaciones B2B.',
      ],
    },
  },
  {
    company: 'MO Credit Management Platform',
    role: { en: 'Backend Engineer', es: 'Backend Engineer' },
    period: { en: 'Feb 2021 — Oct 2021', es: 'Feb 2021 — Oct 2021' },
    year: '2021',
    tags: ['Django', 'AWS', 'Fintech', 'BEES · AB InBev'],
    bullets: {
      en: [
        'Developed backend features for BEES (AB InBev), focusing on credit processing and financial operations for small businesses.',
        'Implemented core business logic for credit verification and internal financial reporting.',
        'Ensured system reliability through unit testing and reproducible Docker environments.',
        'Worked with AWS Lambda, Amazon S3, Amazon SQS and DynamoDB; managed PostgreSQL databases.',
      ],
      es: [
        'Desarrollé funcionalidades backend para BEES (AB InBev), enfocadas en procesamiento de crédito y operaciones financieras para pequeños negocios.',
        'Implementé la lógica de negocio para verificación de crédito y reportes financieros internos.',
        'Garanticé la confiabilidad del sistema con pruebas unitarias y entornos Docker reproducibles.',
        'Trabajé con AWS Lambda, Amazon S3, Amazon SQS y DynamoDB; administré bases de datos PostgreSQL.',
      ],
    },
  },
  {
    company: 'A&A Soluciones TIC',
    role: { en: 'Python Engineer', es: 'Ingeniera Python' },
    period: { en: 'Jun 2020 — Feb 2021', es: 'Jun 2020 — Feb 2021' },
    year: '2020',
    tags: ['Django', 'DRF', 'Fintech', 'Healthcare'],
    bullets: {
      en: [
        'Built backend functionality with Django and Django REST Framework for fintech and healthcare (Watoko).',
        'Winner of Avaya’s CPaaS Hackathon with a virtual wallet solution.',
        'Implemented asynchronous processing with Celery and RabbitMQ, and maintained PostgreSQL databases.',
      ],
      es: [
        'Construí funcionalidad backend con Django y Django REST Framework para fintech y salud (Watoko).',
        'Ganadora del Hackathon CPaaS de Avaya con una solución de billetera virtual.',
        'Implementé procesamiento asíncrono con Celery y RabbitMQ, y mantuve bases de datos PostgreSQL.',
      ],
    },
  },
  {
    company: 'Robotec Colombia',
    role: { en: 'Embedded Developer', es: 'Desarrolladora de sistemas embebidos' },
    period: { en: 'Jan 2018 — Dec 2019', es: 'Ene 2018 — Dic 2019' },
    year: '2018',
    tags: ['C++', 'C#', 'Embedded', 'Biometrics'],
    bullets: {
      en: [
        'Developed firmware in C++ and C# for biometric devices used by government entities (IGAC, Council of State).',
        'Integrated HID SDKs for secure identity validation and hardware-software synchronization.',
        'Produced technical documentation and worked with SQL and SQLite databases.',
      ],
      es: [
        'Desarrollé firmware en C++ y C# para dispositivos biométricos usados por entidades del Estado (IGAC, Consejo de Estado).',
        'Integré SDKs de HID para validación segura de identidad y sincronización hardware-software.',
        'Elaboré documentación técnica y trabajé con bases de datos SQL y SQLite.',
      ],
    },
  },
]

export const brands = [
  { name: 'Luuna', niche: { en: 'Retail', es: 'Retail' }, country: { en: 'Mexico', es: 'México' }, url: 'https://luuna.mx', logo: './logos/luuna.svg' },
  { name: 'Luuna', niche: { en: 'Retail', es: 'Retail' }, country: { en: 'Brazil', es: 'Brasil' }, url: 'https://www.luuna.com.br', logo: './logos/luuna.svg' },
  { name: 'Nooz', niche: { en: 'Retail', es: 'Retail' }, country: { en: 'Mexico', es: 'México' }, url: 'https://nooz.mx', logo: './logos/nooz.png' },
  { name: 'Mappa', niche: { en: 'Retail', es: 'Retail' }, country: { en: 'Mexico', es: 'México' }, url: 'https://mappa.mx', logo: './logos/mappa.png' },
  { name: 'Mo', niche: { en: 'Fintech', es: 'Fintech' }, country: { en: 'Colombia', es: 'Colombia' }, url: 'https://www.wearemo.com', logo: './logos/mo.svg' },
  { name: 'Aiatic', niche: { en: 'Custom software development', es: 'Software a la medida' }, country: { en: 'Colombia', es: 'Colombia' }, url: 'https://aiatic.solutions', logo: './logos/aiatic.png' },
]

export const apis = [
  { name: 'FedEx', url: 'https://developer.fedex.com', logo: './logos/fedex.png', linkLabel: { en: 'Developer portal', es: 'Portal de desarrolladores' } },
  { name: 'Estafeta', url: 'https://wscatalogportal.estafeta.com/', logo: './logos/estafeta.svg', linkLabel: { en: 'API docs', es: 'Documentación de API' } },
  { name: 'Platinum Log', url: 'https://www.tpl.com.br/', logo: './logos/platinum.png', linkLabel: { en: 'Official site', es: 'Sitio oficial' } },
  { name: 'J&T Express', url: 'https://www.jtexpress.mx/', wordmark: 'J&T Express', linkLabel: { en: 'Official site', es: 'Sitio oficial' } },
  { name: 'Yotpo', url: 'https://apidocs.yotpo.com/', logo: './logos/yotpo.svg', linkLabel: { en: 'API docs', es: 'Documentación de API' } },
  { name: 'Twilio', url: 'https://www.twilio.com/docs', logo: './logos/twilio.svg', linkLabel: { en: 'Developer docs', es: 'Documentación técnica' } },
  { name: 'Pandi Web', url: 'https://pandiweb.dk/', wordmark: 'Pandi Web', linkLabel: { en: 'Official site', es: 'Sitio oficial' } },
]

export const education = [
  {
    title: { en: 'Software Architecture Diploma', es: 'Diplomado en Arquitectura de Software' },
    org: 'Universidad de La Sabana',
    year: { en: 'Nov 2025', es: 'Nov 2025' },
  },
  {
    title: { en: "Bachelor's Degree in Mechatronics Engineering", es: 'Ingeniería Mecatrónica' },
    org: 'Universidad Piloto de Colombia',
    year: { en: '2012 — 2017', es: '2012 — 2017' },
  },
]

export const certifications = [
  {
    title: {
      en: 'Winner — Avaya CPaaS Hackathon (virtual wallet solution)',
      es: 'Ganadora — Hackathon CPaaS de Avaya (billetera virtual)',
    },
    org: 'Avaya',
  },
  {
    title: {
      en: 'Using Python to Interact with the Operating System',
      es: 'Using Python to Interact with the Operating System',
    },
    org: 'Google',
  },
  {
    title: { en: 'Crash Course on Python', es: 'Crash Course on Python' },
    org: 'Google',
  },
]

export const languages = [
  {
    name: { en: 'Spanish', es: 'Español' },
    level: { en: 'Native', es: 'Nativo' },
    value: 100,
  },
  {
    name: { en: 'English', es: 'Inglés' },
    level: {
      en: 'Professional working proficiency (B1)',
      es: 'Competencia profesional (B1)',
    },
    value: 65,
  },
]

export const marquee = [
  'Python', 'FastAPI', 'Microservices', 'Kubernetes', 'PostgreSQL', 'Celery',
  'RabbitMQ', 'Docker', 'TypeScript', 'Palantir Foundry', 'Grafana', 'ArgoCD',
  'Clean Architecture', 'AI-Assisted Development',
]
