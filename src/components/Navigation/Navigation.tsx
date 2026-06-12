import styles from './Navigation.module.css'

interface NavigationProps {
  isOpen: boolean
  onClose: () => void
}

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
] as const

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  return (
    <nav
      id="main-navigation"
      className={`${styles.nav}${isOpen ? ' ' + styles.open : ''}`}
      aria-label="Main navigation"
    >
      <ul className={styles.list} role="list">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={styles.link}
              onClick={onClose}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
