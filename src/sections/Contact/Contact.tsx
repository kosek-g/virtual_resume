import type { PersonalInfo } from '../../types'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './Contact.module.css'

interface ContactProps {
  personal: PersonalInfo
}

export default function Contact({ personal }: ContactProps) {
  const { email, github, linkedin, location } = personal

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={styles.inner}>
        <SectionTitle index="04" title="Contact" />
        <div className={styles.body}>
          <p className={styles.intro}>
            Open to interesting opportunities, collaborations and conversations.
            The best way to reach me is via email.
          </p>

          <ul className={styles.links} role="list">
            <li>
              <a href={`mailto:${email}`} className={styles.contactLink}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>{email}</span>
              </a>
            </li>
            {github && (
              <li>
                <a
                  href={github}
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.contactLabel}>GitHub</span>
                  <span className={styles.contactValue}>{github.replace('https://', '')}</span>
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a
                  href={linkedin}
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.contactLabel}>LinkedIn</span>
                  <span className={styles.contactValue}>{linkedin.replace('https://', '')}</span>
                </a>
              </li>
            )}
          </ul>

          <div className={styles.location}>
            <span className={styles.locationLabel}>Location</span>
            <span className={styles.locationValue}>{location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
