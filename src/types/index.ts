export interface SkillCategory {
  category: string
  skills: string[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
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
  github?: string
  linkedin?: string
  location: string
}

export interface ResumeData {
  personal: PersonalInfo
  skills: SkillCategory[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
}
