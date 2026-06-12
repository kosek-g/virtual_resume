import { render, screen } from '@testing-library/react'
import Hero from './Hero'
import type { PersonalInfo } from '../../types'

const mockPersonal: PersonalInfo = {
  firstName: 'Jane',
  lastName: 'Doe',
  title: 'Software Engineer',
  tagline: 'Building great software.',
  email: 'jane@example.com',
  github: 'https://github.com/janedoe',
  linkedin: 'https://linkedin.com/in/janedoe',
  location: 'Warsaw, Poland',
}

describe('Hero', () => {
  it('renders the first and last name', () => {
    render(<Hero personal={mockPersonal} />)
    expect(screen.getByText('Jane')).toBeInTheDocument()
    expect(screen.getByText('Doe')).toBeInTheDocument()
  })

  it('renders the job title', () => {
    render(<Hero personal={mockPersonal} />)
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero personal={mockPersonal} />)
    expect(screen.getByText('Building great software.')).toBeInTheDocument()
  })

  it('renders View my experience link pointing to #experience', () => {
    render(<Hero personal={mockPersonal} />)
    const link = screen.getByRole('link', { name: /view my experience/i })
    expect(link).toHaveAttribute('href', '#experience')
  })

  it('renders GitHub link when provided', () => {
    render(<Hero personal={mockPersonal} />)
    const link = screen.getByRole('link', { name: /github profile/i })
    expect(link).toHaveAttribute('href', 'https://github.com/janedoe')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not render GitHub link when not provided', () => {
    const noGithub = { ...mockPersonal, github: undefined }
    render(<Hero personal={noGithub} />)
    expect(screen.queryByRole('link', { name: /github profile/i })).toBeNull()
  })

  it('renders as a section landmark', () => {
    render(<Hero personal={mockPersonal} />)
    expect(screen.getByRole('region', { name: /introduction/i })).toBeInTheDocument()
  })
})
