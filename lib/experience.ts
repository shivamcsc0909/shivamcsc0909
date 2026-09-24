export interface SkillItem {
  name: string;
  level: number; // 0-100 (realistic & genuine)
  badge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Core Languages & Runtime',
    description: 'Strong foundation in typed, scripting and query languages',
    skills: [
      { name: 'TypeScript', level: 90, badge: 'Proficient' },
      { name: 'JavaScript (ES6+)', level: 92, badge: 'Lead' },
      { name: 'SQL & Query Optimization', level: 85, badge: 'Advanced' },
      { name: 'Python (FastAPI / Data)', level: 82, badge: 'Proficient' },
      { name: 'Dart / Java', level: 78, badge: 'Practical' },
      { name: 'HTML5 & Modern CSS3', level: 93, badge: 'Expert' },
    ],
  },
  {
    category: 'Frontend & UI/UX Animation',
    description: 'Delivering 60fps responsive interfaces and interactive WebGL experiences',
    skills: [
      { name: 'React.js & Next.js 14/15', level: 91, badge: 'Advanced' },
      { name: 'Three.js / WebGL / R3F', level: 86, badge: 'Specialist' },
      { name: 'GSAP & Framer Motion', level: 88, badge: 'Specialist' },
      { name: 'Tailwind CSS & Shadcn UI', level: 92, badge: 'Expert' },
      { name: 'Redux Toolkit & Zustand', level: 87, badge: 'Advanced' },
      { name: 'Core Web Vitals & Optimization', level: 89, badge: 'Advanced' },
    ],
  },
  {
    category: 'Backend & API Engineering',
    description: 'Architecting scalable microservices, WebSocket streams & auth',
    skills: [
      { name: 'Node.js & Express.js', level: 90, badge: 'Lead' },
      { name: 'RESTful API Architecture', level: 92, badge: 'Expert' },
      { name: 'WebSocket & Socket.IO (Real-Time)', level: 88, badge: 'Specialist' },
      { name: 'GraphQL & Apollo', level: 80, badge: 'Proficient' },
      { name: 'JWT, OAuth & RBAC Security', level: 86, badge: 'Advanced' },
      { name: 'Puppeteer & Web Automation', level: 84, badge: 'Advanced' },
    ],
  },
  {
    category: 'Mobile & Cross-Platform',
    description: 'Android & cross-platform apps with Play Store lifecycle releases',
    skills: [
      { name: 'React Native & Expo', level: 89, badge: 'Specialist' },
      { name: 'Flutter & Dart (Android/iOS)', level: 76, badge: 'Proficient' },
      { name: 'Google Play Console & Deployment', level: 88, badge: 'Production' },
      { name: 'Mobile Push Notifications (FCM)', level: 84, badge: 'Advanced' },
      { name: 'Progressive Web Apps (PWA)', level: 86, badge: 'Advanced' },
    ],
  },
  {
    category: 'Databases & Time-Series Data',
    description: 'High-throughput time-series, relational and document stores',
    skills: [
      { name: 'PostgreSQL & TimescaleDB', level: 88, badge: 'Specialist' },
      { name: 'Real-Time OHLCV Streams & Aggregation', level: 87, badge: 'Specialist' },
      { name: 'MongoDB & Mongoose', level: 89, badge: 'Advanced' },
      { name: 'Redis Caching & Pub/Sub', level: 82, badge: 'Proficient' },
      { name: 'Firebase Firestore / Auth', level: 86, badge: 'Advanced' },
      { name: 'MySQL & Relational DBs', level: 84, badge: 'Proficient' },
    ],
  },
  {
    category: 'DevOps, Cloud & Production Deployment',
    description: 'Zero-downtime CI/CD, containerization and cloud orchestration',
    skills: [
      { name: 'Docker & Containerization', level: 85, badge: 'Advanced' },
      { name: 'AWS (EC2, S3, Lambda, CloudFront)', level: 84, badge: 'AWS Certified' },
      { name: 'GitHub Actions & CI/CD Pipelines', level: 87, badge: 'Advanced' },
      { name: 'Nginx, Reverse Proxy & Linux', level: 83, badge: 'Proficient' },
      { name: 'Vercel, Netlify & Edge Deploy', level: 92, badge: 'Expert' },
      { name: 'Technical SEO & Structured Schema', level: 89, badge: 'Specialist' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'rj-urbanpower',
    role: 'Full Stack & Mobile App Developer',
    company: 'RJ UrbanPower Pvt. Ltd.',
    location: 'Delhi NCR, India',
    period: 'Jun 2026 – Present',
    type: 'Full-time',
    description:
      'Spearheading end-to-end mobile and web application engineering from conception to production deployment. Owning responsive UI architecture, REST API microservices, database schemas, and Google Play Store releases.',
    highlights: [
      'Architected scalable full-stack web and mobile application suite from ground up.',
      'Developed low-latency RESTful APIs in Node.js/Express with secure JWT authentication and role-based access.',
      'Handled complete cloud provisioning, Docker containerization, and production deployment on AWS.',
      'Successfully published and maintain the live mobile application on the Google Play Store with 99.8% crash-free sessions.',
    ],
    techStack: ['React Native', 'React.js', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Docker', 'Google Play Console'],
  },
  {
    id: 'digilik',
    role: 'Software Development Engineer',
    company: 'Digilik',
    location: 'Delhi NCR, India',
    period: 'Jan 2025 – May 2026',
    type: 'Full-time',
    description:
      'Engineered high-performance web applications, interactive 3D client portals, and automated business workflows. Optimized Core Web Vitals and built automated data synchronization pipelines.',
    highlights: [
      'Engineered high-performance client websites with 95+ Google Lighthouse scores and sub-2-second load times.',
      'Built custom Three.js and GSAP fluid interactive components for agency showcases and interactive brand portals.',
      'Implemented automated CI/CD deployment pipelines using GitHub Actions to Vercel and AWS S3/CloudFront.',
      'Collaborated closely with UI/UX designers in Figma to translate complex design systems into modular React codebases.',
    ],
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS', 'GitHub Actions', 'Figma'],
  },
  {
    id: 'rankriseusa',
    role: 'Full-Stack Developer & Growth Engineer',
    company: 'RankRiseUSA',
    location: 'Remote (US Client)',
    period: 'Aug 2024 – Dec 2024',
    type: 'Contract',
    description:
      'Designed and developed the core digital web platform for a US-based digital marketing agency. Implemented high-converting lead funnels, technical SEO architecture, and interactive client case studies.',
    highlights: [
      'Engineered full-stack responsive web platform with modern headless architecture.',
      'Implemented structured JSON-LD schema markup, canonical configurations, and OpenGraph metadata resulting in a 35% boost in inbound lead conversion.',
      'Optimized asset delivery, critical rendering path, and font loading to achieve 98+ PageSpeed performance.',
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Technical SEO', 'Vercel'],
  },
  {
    id: 'exl-services',
    role: 'Full Stack Web Development Trainee',
    company: 'EXL Services (Corporate Training)',
    location: 'Noida, India',
    period: 'Jan 2024 – Jun 2024',
    type: 'Internship / Training',
    description:
      'Completed intensive enterprise software development training covering full-stack web architecture, relational database design, data structures, and enterprise Agile development.',
    highlights: [
      'Mastered full-stack enterprise web development principles using Node.js, Express, React, and PostgreSQL.',
      'Built multi-tier CRUD web applications with JWT token-based authentication and role-based access control.',
      'Designed normalized relational database schemas and optimized complex SQL queries for reporting.',
    ],
    techStack: ['JavaScript', 'Node.js', 'Express', 'React', 'PostgreSQL', 'SQL', 'Git', 'Agile/Scrum'],
  },
  {
    id: 'admark',
    role: 'Junior Frontend Developer',
    company: 'Admark Advertising & Media',
    location: 'Delhi, India',
    period: 'Jul 2023 – Dec 2023',
    type: 'Full-time',
    description:
      'Developed responsive marketing campaign websites, landing pages with micro-animations, and interactive product catalogs for retail and educational clients.',
    highlights: [
      'Developed 12+ mobile-first responsive landing pages with cross-browser compatibility across Chrome, Safari, and Firefox.',
      'Integrated contact forms with email dispatch and lead capturing backends.',
      'Maintained 100% adherence to WCAG accessibility guidelines and responsive design principles.',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'Responsive Design'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Swami Vivekanand Subharti University',
    location: 'Meerut, Uttar Pradesh, India',
    period: '2023 – 2026',
    status: 'Graduated / Final Year',
    grade: 'First Division',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (C++/Java)',
      'Database Management Systems (DBMS)',
      'Operating Systems & Linux Architecture',
      'Computer Networks & Protocols',
      'Software Engineering & System Design',
      'Web Technologies & Mobile App Dev',
    ],
  },
  {
    degree: 'Intermediate / Senior Secondary (Class XII - PCM)',
    institution: 'UP Board (Science Stream)',
    location: 'Uttar Pradesh, India',
    period: '2021 – 2023',
    grade: 'First Division (Mathematics & Physics)',
  },
];

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2026',
    credentialId: 'AWS-CCP-VERIFIED',
    link: 'https://aws.amazon.com/verification',
    skills: ['AWS EC2', 'S3', 'CloudFront', 'IAM', 'VPC', 'Serverless Lambda'],
  },
  {
    title: 'Full Stack Web Development Certification',
    issuer: 'EXL Services Corporate Training',
    date: '2024',
    skills: ['Node.js', 'React.js', 'PostgreSQL', 'REST API Architecture', 'Agile/Scrum'],
  },
  {
    title: 'Docker & Kubernetes: Cloud Native Applications',
    issuer: 'Coursera / Linux Foundation',
    date: '2026',
    skills: ['Docker Compose', 'Container Security', 'Kubernetes Pods', 'CI/CD Pipelines'],
  },
  {
    title: 'Meta Front-End Developer Specialization',
    issuer: 'Meta (Coursera)',
    date: '2025',
    skills: ['React', 'JavaScript (ES6+)', 'UX/UI Principles', 'Version Control with Git'],
  },
  {
    title: 'Python for Data Science & AI',
    issuer: 'IBM (Coursera)',
    date: '2025',
    skills: ['Python', 'Data Analysis', 'FastAPI', 'spaCy NER Models', 'Pandas'],
  },
  {
    title: 'Mastering Data Structures & Algorithms',
    issuer: 'Udemy',
    date: '2024',
    skills: ['Time & Space Complexity', 'Trees & Graphs', 'Dynamic Programming', 'System Design'],
  },
];

export const achievements = [
  {
    metric: '25+',
    label: 'Verified Production Projects',
    detail: 'Deployed across Web, Android Play Store, 3D WebGL, and Cloud backends.',
  },
  {
    metric: '120+',
    label: 'GitHub Repositories',
    detail: 'Active commits, clean architecture, and open-source contributions.',
  },
  {
    metric: '99.8%',
    label: 'Crash-Free Mobile Sessions',
    detail: 'Achieved on Urban Power Android app published on Google Play Store.',
  },
  {
    metric: '60 FPS',
    label: 'Fluid 3D & UI Velocity',
    detail: 'GPU-accelerated WebGL shaders and smooth GSAP micro-interactions.',
  },
];
