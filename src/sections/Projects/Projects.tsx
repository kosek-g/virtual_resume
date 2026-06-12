import type { ProjectItem } from '../../types'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './Projects.module.css'

interface ProjectsProps {
  projects: ProjectItem[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className={styles.section} aria-label="Projects">
      <div className={styles.inner}>
        <SectionTitle index="03" title="Projects" />
        <ul className={styles.grid} role="list">
          {projects.map((project) => (
            <li key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      className={styles.linkIcon}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                    >
                      gh
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      className={styles.linkIcon}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo`}
                    >
                      live
                    </a>
                  )}
                </div>
              </div>

              <p className={styles.description}>{project.description}</p>

              <ul className={styles.techList} aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <li key={tech} className={styles.techTag}>
                    {tech}
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
