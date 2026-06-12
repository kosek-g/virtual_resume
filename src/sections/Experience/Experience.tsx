import type { ExperienceItem } from '../../types'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './Experience.module.css'

interface ExperienceProps {
  experience: ExperienceItem[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className={styles.section} aria-label="Experience">
      <div className={styles.inner}>
        <SectionTitle index="02" title="Experience" />
        <ul className={styles.list} role="list">
          {experience.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.company}>{item.company}</span>
                <span className={styles.period}>{item.period}</span>
                <span className={styles.location}>{item.location}</span>
              </div>

              <div className={styles.content}>
                <h3 className={styles.role}>{item.role}</h3>
                <ul className={styles.description} aria-label="Responsibilities">
                  {item.description.map((point, idx) => (
                    <li key={idx} className={styles.descItem}>
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className={styles.techList} aria-label="Technologies used">
                  {item.technologies.map((tech) => (
                    <li key={tech} className={styles.techTag}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
