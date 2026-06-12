import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  index: string
  title: string
}

export default function SectionTitle({ index, title }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{index} //</p>
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.divider} />
    </div>
  )
}
