import { render, screen } from '@testing-library/react'
import SectionTitle from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the section index label', () => {
    render(<SectionTitle index="01" title="Skills" />)
    expect(screen.getByText(/01/)).toBeInTheDocument()
  })

  it('renders the title text', () => {
    render(<SectionTitle index="01" title="Skills" />)
    expect(screen.getByRole('heading', { level: 2, name: 'Skills' })).toBeInTheDocument()
  })

  it('renders a divider', () => {
    const { container } = render(<SectionTitle index="01" title="Skills" />)
    expect(container.querySelector('hr')).toBeInTheDocument()
  })
})
