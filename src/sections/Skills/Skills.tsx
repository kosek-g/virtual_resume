import type { SkillCategory } from '../../types'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './Skills.module.css'

interface SkillsProps {
  skills: SkillCategory[]
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className={styles.section} aria-label="Skills">
      <div className={styles.inner}>
        <SectionTitle index="01" title="Skills" />
        <div className={styles.grid}>
          {skills.map(({ category, skills: items }) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.tags} role="list" aria-label={`${category} skills`}>
                {items.map((skill) => (
                  <li key={skill} className={styles.tag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
