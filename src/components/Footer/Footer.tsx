interface FooterProps {
  name: string
}

import styles from './Footer.module.css'

export default function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {year} {name}. All rights reserved.
        </p>
        <p className={styles.built}>
          Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>{' '}
          &amp;{' '}
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            Vite
          </a>
        </p>
      </div>
    </footer>
  )
}
