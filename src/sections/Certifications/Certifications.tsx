import type { CertificationItem } from '../../types'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './Certifications.module.css'

interface CertificationsProps {
  certifications: CertificationItem[]
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className={styles.section} aria-label="Certifications">
      <div className={styles.inner}>
        <SectionTitle index="03" title="Certifications" />
        <ul className={styles.list} role="list">
          {certifications.map((cert) => (
            <li key={cert.id} className={styles.item}>
              <span className={styles.issuer} aria-label={`Issued by ${cert.issuer}`}>
                {cert.issuer}
              </span>
              <div className={styles.content}>
                <span className={styles.name}>{cert.name}</span>
                <span className={styles.date}>{cert.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
