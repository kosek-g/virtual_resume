import { render, screen } from '@testing-library/react'
import Experience from './Experience'
import type { ExperienceItem } from '../../types'

const mockExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Acme Corp',
    period: '2022 \u2014 Present',
    location: 'Remote',
    positions: [
      'Senior Engineer  (2023 \u2014 Present)',
      'Engineer  (2022 \u2014 2023)',
    ],
    roles: [
      {
        title: 'Senior Engineer',
        period: '2023 \u2014 Present',
        description: ['Led feature development', 'Mentored junior devs'],
        technologies: ['TypeScript', 'React'],
      },
      {
        title: 'Engineer',
        context: 'Platform team',
        description: ['Built REST APIs'],
        technologies: ['Python'],
      },
    ],
  },
]

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
  })

  it('renders company name as a heading', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByRole('heading', { name: 'Acme Corp' })).toBeInTheDocument()
  })

  it('renders company period and location', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('2022 \u2014 Present')).toBeInTheDocument()
    expect(screen.getByText('Remote')).toBeInTheDocument()
  })

  it('renders all role titles', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
  })

  it('renders role context badge when provided', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('Platform team')).toBeInTheDocument()
  })

  it('renders role period when provided', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('2023 \u2014 Present')).toBeInTheDocument()
  })

  it('renders description bullet points', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('Led feature development')).toBeInTheDocument()
    expect(screen.getByText('Mentored junior devs')).toBeInTheDocument()
    expect(screen.getByText('Built REST APIs')).toBeInTheDocument()
  })

  it('renders all technologies', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('has an accessible roles list per company', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByRole('list', { name: 'Roles at Acme Corp' })).toBeInTheDocument()
  })

  it('renders position titles in the company header', () => {
    render(<Experience experience={mockExperience} />)
    expect(screen.getByText(/Senior Engineer.*2023/)).toBeInTheDocument()
    expect(screen.getByText(/Engineer.*2022/)).toBeInTheDocument()
  })
})
