import type { ResumeData } from '../types'

export const resumeData: ResumeData = {
  personal: {
    firstName: 'GRZEGORZ',
    lastName: 'KOSEK',
    title: 'Senior Data Engineer',
    tagline: 'Building scalable systems and crafting clean, maintainable code.',
    email: 'kosek.grzegorzz@gmail.com',
    github: 'https://github.com/kosek-g',
    linkedin: 'https://linkedin.com/in/username',
    location: 'Katowice, Poland',
  },
  skills: [
    {
      category: 'Languages',
      skills: ['TypeScript', 'Python', 'Rust', 'Go', 'SQL'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'CSS / Sass', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
    },
  ],
  experience: [
    {
      id: 'exp-1',
      company: 'Company Name',
      role: 'Senior Software Engineer',
      period: '2022 — Present',
      location: 'Remote',
      description: [
        'Led development of core platform features serving 1M+ active users',
        'Designed and implemented event-driven microservices architecture',
        'Mentored junior engineers through code reviews and pair programming',
        'Reduced API response times by 35% via query optimization and caching',
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    },
    {
      id: 'exp-2',
      company: 'Another Company',
      role: 'Software Engineer',
      period: '2020 — 2022',
      location: 'Warsaw, Poland',
      description: [
        'Built RESTful APIs consumed by mobile and web clients',
        'Optimized database queries reducing average response time by 40%',
        'Contributed to internal open-source tooling adopted across the org',
      ],
      technologies: ['Python', 'FastAPI', 'Docker', 'Redis', 'PostgreSQL'],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'Project Alpha',
      description:
        'A high-performance distributed system for real-time data processing at scale.',
      technologies: ['Go', 'Kafka', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/username/project-alpha',
    },
    {
      id: 'proj-2',
      name: 'Project Beta',
      description:
        'Full-stack web application with a modern React frontend and Node.js backend API.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      link: 'https://example.com',
      github: 'https://github.com/username/project-beta',
    },
    {
      id: 'proj-3',
      name: 'Project Gamma',
      description:
        'CLI tool for automated deployment pipelines and infrastructure management.',
      technologies: ['Python', 'Terraform', 'AWS', 'GitHub Actions'],
      github: 'https://github.com/username/project-gamma',
    },
  ],
}
