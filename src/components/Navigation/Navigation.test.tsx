import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
  const noop = () => {}

  it('renders all navigation links', () => {
    render(<Navigation isOpen={false} onClose={noop} />)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Certifications' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('links have correct href attributes', () => {
    render(<Navigation isOpen={false} onClose={noop} />)
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills')
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience')
    expect(screen.getByRole('link', { name: 'Certifications' })).toHaveAttribute('href', '#certifications')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('calls onClose when a link is clicked', () => {
    const onClose = vi.fn()
    render(<Navigation isOpen={true} onClose={onClose} />)
    fireEvent.click(screen.getByRole('link', { name: 'About' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('has accessible nav landmark', () => {
    render(<Navigation isOpen={false} onClose={noop} />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })
})
