import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the header', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders the main content area', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: /introduction/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /certifications/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /contact/i })).toBeInTheDocument()
  })
})
