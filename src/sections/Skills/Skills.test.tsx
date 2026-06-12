import { render, screen } from '@testing-library/react'
import Skills from './Skills'
import type { SkillCategory } from '../../types'

const mockSkills: SkillCategory[] = [
  { category: 'Languages', skills: ['TypeScript', 'Python'] },
  { category: 'Frontend', skills: ['React', 'CSS'] },
]

describe('Skills', () => {
  it('renders all skill categories', () => {
    render(<Skills skills={mockSkills} />)
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('renders all skill items', () => {
    render(<Skills skills={mockSkills} />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Skills skills={mockSkills} />)
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
  })

  it('has accessible list labels per category', () => {
    render(<Skills skills={mockSkills} />)
    expect(screen.getByRole('list', { name: 'Languages skills' })).toBeInTheDocument()
    expect(screen.getByRole('list', { name: 'Frontend skills' })).toBeInTheDocument()
  })

  it('renders the correct number of skill items', () => {
    render(<Skills skills={mockSkills} />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(4)
  })
})
