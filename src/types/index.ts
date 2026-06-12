export interface SkillCategory {
  category: string
  skills: string[]
}

export interface RoleEntry {
  title: string
  period?: string
  context?: string
  description: string[]
  technologies: string[]
}

export interface ExperienceItem {
  id: string
  company: string
  period: string
  location: string
  positions: string[]
  roles: RoleEntry[]
}

export interface ProjectItem {
  id: string
  name: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

export interface PersonalInfo {
  firstName: string
  lastName: string
  title: string
  tagline: string
  email: string
  phone?: string
  github?: string
  linkedin?: string
  location: string
}

export interface CertificationItem {
  id: string
  name: string
  issuer: string
  date: string
}

export interface ResumeData {
  personal: PersonalInfo
  skills: SkillCategory[]
  certifications: CertificationItem[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
}
