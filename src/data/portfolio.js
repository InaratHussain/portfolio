export const meta = {
  name: 'Inarat Hussain',
  email: 'inarathussain.work@gmail.com',
  github: 'https://github.com/InaratHussain',
  linkedin: 'https://www.linkedin.com/in/inarat-hussain-612194270/',
  leetcode: 'https://leetcode.com/u/Inu_Minu/',
  paper: 'https://link.springer.com/chapter/10.1007/978-3-032-13714-2_12',
  resume: 'https://drive.google.com/drive/folders/1IlhQhRGFS0IVbZcNXHfClhmwyBHyUgSs?usp=sharing',
  gpa: '8.42',
  college: 'IIIT Vadodara',
  graduation: 'May 2026',
};

export const roles = ['SDE','AI Engineer'];

export const stats = [
  { num: '8.42', label: 'CPI' },
  { num: '1', label: 'PUBLICATION' },
  { num: '3', label: 'INTERNSHIPS' },
];

export const experience = [
  {
    id: 'purvca',
    type: 'sde',
    title: 'Software Development Intern',
    org: 'PURVCA Foundation — Guwahati, India',
    date: 'May 2025 – Jul 2025',
    bullets: [
      'Guwahati lacked centralized traffic-state aggregation; engineered a scheduled Node.js pipeline invoking Google Maps computeRoutes API, persisting route telemetry across dual MongoDB collections, sustaining 1,000+ daily updates and cutting planning time by ∼30%.',
      'Live congestion data was inaccessible without direct API access; built a RESTful Node.js middleware layer to ingest, normalize, and serve Google Maps travel-time responses, decoupling data acquisition from presentation across multiple Guwahati corridors.',
      'Route trends were opaque to planners and auditors; designed a filterable analytics dashboard rendering timeseries congestion graphs (by vehicle type, time range, route), transforming raw MongoDB documents into structured visual insights for data-driven routing decisions.',
    ],
    pubLink: null,
  },
  {
    id: 'iiitv',
    type: 'ai',
    title: 'Research Intern — Cryptography & Secure Systems',
    org: 'IIIT Vadodara — Vadodara, India',
    date: 'May 2025 – Jul 2025',
    bullets: [
      'Authored a paper presenting the DKCAE framework, which was accepted and published by Springer Nature Switzerland: Dynamic Key-Constant Aggregate Encryption (DKCAE) for Secure Data Sharing in Contemporary Computing.',
      'Existing aggregate encryption schemes lacked dynamic key management, so designed a Dynamic Key Constant Aggregate Encryption (DKCAE) system using the Pairing-Based Cryptography (PBC) library, validated across 500+ encryption/decryption operations with rigorous benchmarking.',
      'Most schemes had very expensive and inefficient overhead for key distribution, so developed a zero private key retransmission overhead during access change, using the properties of bilinear pairings.',
    ],
    pubLink: 'https://link.springer.com/chapter/10.1007/978-3-032-13714-2_12',
  },
];

export const projects = [
  {
    id: 'traffic',
    kind: 'sde',
    kindLabel: 'FULL STACK',
    title: 'Traffic Congestion Monitor',
    desc: "Built Guwahati city's first centralized real-time traffic visibility platform. Handles 1,000+ location updates/day with live route insights and government audit dashboards.",
    metrics: ['~30% faster routing', '1K+ updates/day'],
    metricType: 'sde',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Google Maps API'],
    github: 'https://github.com/InaratHussain/purvca-congestion-project',
  },
  // {
  //   id: 'dkcae',
  //   kind: 'ai',
  //   kindLabel: 'RESEARCH, CRYPTO',
  //   title: 'DKCAE — Dynamic Key Encryption',
  //   desc: 'Novel aggregate encryption scheme with zero private key retransmission overhead during access changes. Validated across 500+ operations using the PBC library.',
  //   metrics: ['Published: Springer Nature Switzerland', '500+ ops tested'],
  //   metricType: 'ai',
  //   stack: ['C', 'PBC Library', 'Bilinear Pairings', 'Cryptography'],
  //   github: 'https://link.springer.com/chapter/10.1007/978-3-032-13714-2_12',
  // },
  {
    id: 'privacy-ai',
    kind: 'ai',
    kindLabel: 'AI/ML',
    title: 'Privacy-Preserving AI Framework',
    desc: 'LLM chatbots risk leaking sensitive user data. Built a layered sanitization pipeline using GLiNER, Llama 3, Qwen 2.5, and DeepSeek-R1 achieving 97% intent preservation.',
    metrics: ['97% intent preserved', '82.3% recall', '1,200+ samples'],
    metricType: 'ai',
    stack: ['GLiNER', 'Llama 3', 'DeepSeek-R1', 'Groq API', 'sentence-transformers'],
    github: 'https://github.com/InaratHussain/Privacing-Preserving-Contextually-Aware-AI-Chatbot-Framework',
  },
  {
    id: 'autism',
    kind: 'both',
    kindLabel: 'AI/ML',
    title: 'Toddler Autism Prediction App',
    desc: 'Early autism risk detection via Bayesian ML on 1,000+ behavioral data points. Flask web interface with optimized preprocessing pipeline cutting runtime by 30%.',
    metrics: ['85% accuracy', '30% faster pipeline'],
    metricType: 'both',
    stack: ['Flask', 'Bayesian Classifier', 'NumPy', 'Pandas'],
    github: 'https://github.com/InaratHussain/Toddler_Autism_Prediction',
  },
];

export const skillGroups = [
  {
    label: 'LANGUAGES',
    skills: [
      { name: 'Python', hot: true },
      { name: 'JavaScript, TypeScript', hot: true },
      { name: 'C / C++', hot: true },
    ],
  },
  {
    label: 'FULL STACK',
    skills: [
      { name: 'React.js', hot: true },
      { name: 'Node.js, Express', hot: true },
      { name: 'MongoDB, PostgreSQL', hot: true },
      { name: 'Prisma', hot: true },
      { name: 'Flask', hot: true },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'PyTorch, TensorFlow', hot: true },
      { name: 'LLM Pipelines', hot: true },
      { name: 'Sentence-Transformers', hot: true },
      { name: 'NumPy, Pandas', hot: true },
      { name: 'Deep Learning', hot: true },
    ],
  },
  {
    label: 'DEVOPS / TOOLS',
    skills: [
      { name: 'Git, Github', hot: true },
      { name: 'Docker', hot: true},
      { name: 'Postman', hot: true },
      { name: 'Google Colab', hot: true },
    ],
  },
  // {
  //   label: 'COURSEWORK',
  //   skills: [
  //     { name: 'DSA + OOPs', hot: true },
  //     { name: 'AI/ML + Deep Learning', hot: true },
  //     { name: 'DBMS', hot: true },
  //     { name: 'Quantum ML', hot: true },
  //     { name: 'Cryptography', hot: true },
  //   ],
  // },
  
];

export const certifications = [
  {
    id: 'nptel-llm',
    title: 'Introduction to Large Language Models (LLMs)',
    issuer: 'NPTEL',
    issuerType: 'nptel',
    year: '2025',
    credentialLink: 'https://drive.google.com/file/d/1nZQFBuKGkAMvyCWA1RuFUO2b2cAHuAvQ/view?usp=sharing',
    skills: ['LLM Architecture', 'Transformers', 'Prompt Engineering'],
  },
  {
    id: 'nvidia-dl',
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    issuerType: 'nvidia',
    year: '2024',
    credentialLink: 'https://learn.nvidia.com/certificates?id=OYC3KMcYQUa4c2bvlV5HiA',
    skills: ['Neural Networks', 'CNNs', 'GPU Computing', 'PyTorch'],
  },
];
