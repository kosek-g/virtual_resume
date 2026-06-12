import { useState, useCallback } from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand} aria-label="Go to top">
          <img src="/logo2.png" alt="Logo" className={styles.logo} />
          <span className={styles.brandName}>resume.dev</span>
        </a>

        <Navigation isOpen={menuOpen} onClose={closeMenu} />

        <button
          data-testid="hamburger-btn"
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={toggleMenu}
        >
          <span className={styles.hamburgerLine} aria-hidden="true" />
          <span className={styles.hamburgerLine} aria-hidden="true" />
          <span className={styles.hamburgerLine} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
