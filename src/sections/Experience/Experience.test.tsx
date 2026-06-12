import { render, screen } from '@testing-library/react'
import Experience from './Experience'
import type { ExperienceItem } from '../../types'

const mockExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Acme Corp',
    role: 'Senior Engineer',
    period: '2022 — Present',
    location: 'Remote',
    description: ['Led feature development', 'Mentored junior devs'],
    technologies: ['TypeScript', 'React'],
  },
]

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
  })

  it('renders company name', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
  })

  it('renders role title', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByRole('heading', { name: 'Senior Engineer' })).toBeInTheDocument()
  })

  it('renders period and location', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('2022 — Present')).toBeInTheDocument()
    expect(screen.getByText('Remote')).toBeInTheDocument()
  })

  it('renders all description points', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('Led feature development')).toBeInTheDocument()
    expect(screen.getByText('Mentored junior devs')).toBeInTheDocument()
  })

  it('renders all technologies', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })
})
