import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders copyright text with the provided name', () => {
    render(<Footer name="Jane Doe" />)
    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument()
  })

  it('renders the current year', () => {
    render(<Footer name="Jane Doe" />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders React and Vite links', () => {
    render(<Footer name="Jane Doe" />)
    expect(screen.getByRole('link', { name: 'React' })).toHaveAttribute('href', 'https://react.dev')
    expect(screen.getByRole('link', { name: 'Vite' })).toHaveAttribute('href', 'https://vitejs.dev')
  })

  it('has footer role', () => {
    render(<Footer name="Jane Doe" />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
