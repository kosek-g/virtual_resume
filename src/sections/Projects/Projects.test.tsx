import { render, screen } from '@testing-library/react'
import Projects from './Projects'
import type { ProjectItem } from '../../types'

const mockProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    name: 'Alpha',
    description: 'A great project.',
    technologies: ['Go', 'Kafka'],
    github: 'https://github.com/user/alpha',
  },
  {
    id: 'proj-2',
    name: 'Beta',
    description: 'Another project.',
    technologies: ['React'],
    link: 'https://beta.example.com',
    github: 'https://github.com/user/beta',
  },
]

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
  })

  it('renders all project names', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByRole('heading', { name: 'Alpha' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Beta' })).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByText('A great project.')).toBeInTheDocument()
    expect(screen.getByText('Another project.')).toBeInTheDocument()
  })

  it('renders technologies', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByText('Go')).toBeInTheDocument()
    expect(screen.getByText('Kafka')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('renders GitHub link for projects with github', () => {
    render(<Projects projects={mockProjects} />)
    const ghLinks = screen.getAllByRole('link', { name: /github repository/i })
    expect(ghLinks).toHaveLength(2)
    expect(ghLinks[0]).toHaveAttribute('href', 'https://github.com/user/alpha')
  })

  it('renders live link only when provided', () => {
    render(<Projects projects={mockProjects} />)
    const liveLinks = screen.getAllByRole('link', { name: /live demo/i })
    expect(liveLinks).toHaveLength(1)
    expect(liveLinks[0]).toHaveAttribute('href', 'https://beta.example.com')
  })

  it('external links open in new tab with security attributes', () => {
    render(<Projects projects={mockProjects} />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
