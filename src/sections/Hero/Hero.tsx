import type { PersonalInfo } from '../../types'
import styles from './Hero.module.css'

interface HeroProps {
  personal: PersonalInfo
}

export default function Hero({ personal }: HeroProps) {
  const { firstName, lastName, title, tagline, github, linkedin } = personal

  return (
    <section id="hero" className={styles.section} aria-label="Introduction">
      <div className={styles.inner}>
        <p className={styles.label}>// hello, world</p>

        <h1>
          <span className={styles.greeting}>{firstName}</span>
          <span className={styles.name}>{lastName}</span>
        </h1>

        <p className={styles.title}>{title}</p>
        <p className={styles.tagline}>{tagline}</p>

        <div className={styles.actions}>
          <a href="#experience" className={styles.btnPrimary}>
            View my experience
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get in Touch
          </a>
          {github && (
            <a
              href={github}
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          )}
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollLine} />
          <span>scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
