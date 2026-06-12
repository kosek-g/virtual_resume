import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the brand logo with alt text', () => {
    render(<Header />)
    const logo = screen.getByRole('img', { name: /logo/i })
    expect(logo).toBeInTheDocument()
  })

  it('renders the brand name', () => {
    render(<Header />)
    expect(screen.getByText('resume.dev')).toBeInTheDocument()
  })

  it('renders the hamburger button in the DOM (CSS-hidden on desktop, visible on mobile)', () => {
    render(<Header />)
    // The hamburger is always in the DOM; CSS hides it on desktop and shows it on mobile.
    // We query by data-testid because CSS display:none prevents accessible-role queries.
    const btn = screen.getByTestId('hamburger-btn')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('aria-label', 'Open menu')
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles aria-expanded and aria-label when hamburger is clicked', () => {
    render(<Header />)
    const btn = screen.getByTestId('hamburger-btn')
    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    expect(btn).toHaveAttribute('aria-label', 'Close menu')
    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    expect(btn).toHaveAttribute('aria-label', 'Open menu')
  })

  it('has a link that goes to #hero', () => {
    render(<Header />)
    const brandLink = screen.getByRole('link', { name: /go to top/i })
    expect(brandLink).toHaveAttribute('href', '#hero')
  })
})
