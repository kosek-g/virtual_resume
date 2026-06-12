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
            <li key={item.id} className={styles.companyBlock}>
              <div className={styles.companyHeader}>
                <div className={styles.companyLeft}>
                  <h3 className={styles.companyName}>{item.company}</h3>
                  <ul className={styles.positions} aria-label={`Positions at ${item.company}`}>
                    {item.positions.map((pos) => (
                      <li key={pos} className={styles.positionEntry}>{pos}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.companyMeta}>
                  <span className={styles.companyPeriod}>{item.period}</span>
                  <span className={styles.companyLocation}>{item.location}</span>
                </div>
              </div>

              <ul className={styles.rolesList} aria-label={`Roles at ${item.company}`}>
                {item.roles.map((role, idx) => (
                  <li key={idx} className={styles.roleItem}>
                    <div className={styles.roleHeader}>
                      <span className={styles.roleBullet} aria-hidden="true">
                        role_{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.roleTitle}>{role.title}</span>
                      {role.context && (
                        <span className={styles.roleContext}>{role.context}</span>
                      )}
                      {role.period && (
                        <span className={styles.rolePeriod}>{role.period}</span>
                      )}
                    </div>

                    <ul
                      className={styles.description}
                      aria-label={`${role.title} responsibilities`}
                    >
                      {role.description.map((point, pIdx) => (
                        <li key={pIdx} className={styles.descItem}>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ul className={styles.techList} aria-label="Technologies">
                      {role.technologies.map((tech) => (
                        <li key={tech} className={styles.techTag}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
