import { render, screen } from '@testing-library/react'
import Certifications from './Certifications'
import type { CertificationItem } from '../../types'

const mockCerts: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'Microsoft Certified: DevOps Engineer Expert',
    issuer: 'Microsoft',
    date: 'August 2023',
  },
  {
    id: 'cert-2',
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'March 2023',
  },
]

describe('Certifications', () => {
  it('renders the section heading', () => {
    render(<Certifications certifications={mockCerts} />)
    expect(screen.getByRole('heading', { name: 'Certifications' })).toBeInTheDocument()
  })

  it('renders all certification names', () => {
    render(<Certifications certifications={mockCerts} />)
    expect(screen.getByText('Microsoft Certified: DevOps Engineer Expert')).toBeInTheDocument()
    expect(screen.getByText('HashiCorp Certified: Terraform Associate')).toBeInTheDocument()
  })

  it('renders issuer labels', () => {
    render(<Certifications certifications={mockCerts} />)
    expect(screen.getByText('Microsoft')).toBeInTheDocument()
    expect(screen.getByText('HashiCorp')).toBeInTheDocument()
  })

  it('renders dates', () => {
    render(<Certifications certifications={mockCerts} />)
    expect(screen.getByText('August 2023')).toBeInTheDocument()
    expect(screen.getByText('March 2023')).toBeInTheDocument()
  })

  it('renders the correct number of items', () => {
    render(<Certifications certifications={mockCerts} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('has accessible section landmark', () => {
    render(<Certifications certifications={mockCerts} />)
    expect(screen.getByRole('region', { name: /certifications/i })).toBeInTheDocument()
  })
})
