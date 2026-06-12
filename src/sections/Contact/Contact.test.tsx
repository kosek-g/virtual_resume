import { render, screen } from '@testing-library/react'
import Contact from './Contact'
import type { PersonalInfo } from '../../types'

const mockPersonal: PersonalInfo = {
  firstName: 'Jane',
  lastName: 'Doe',
  title: 'Engineer',
  tagline: 'Tagline',
  email: 'jane@example.com',
  github: 'https://github.com/janedoe',
  linkedin: 'https://linkedin.com/in/janedoe',
  location: 'Warsaw, Poland',
}

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact personal={mockPersonal} />)
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the email as a mailto link', () => {
    render(<Contact personal={mockPersonal} />)
    const link = screen.getByRole('link', { name: /jane@example.com/i })
    expect(link).toHaveAttribute('href', 'mailto:jane@example.com')
  })

  it('renders github link when provided', () => {
    render(<Contact personal={mockPersonal} />)
    const link = screen.getByRole('link', { name: /github.com\/janedoe/i })
    expect(link).toHaveAttribute('href', 'https://github.com/janedoe')
  })

  it('renders linkedin link when provided', () => {
    render(<Contact personal={mockPersonal} />)
    const link = screen.getByRole('link', { name: /linkedin.com/i })
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/janedoe')
  })

  it('renders location', () => {
    render(<Contact personal={mockPersonal} />)
    expect(screen.getByText('Warsaw, Poland')).toBeInTheDocument()
  })

  it('does not render github when not provided', () => {
    const noGithub = { ...mockPersonal, github: undefined }
    render(<Contact personal={noGithub} />)
    expect(screen.queryByRole('link', { name: /github/i })).toBeNull()
  })
})
