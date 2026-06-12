import { resumeData } from './data/resumeData'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'
import Experience from './sections/Experience/Experience'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import styles from './App.module.css'

export default function App() {
  const { personal, skills, experience, projects } = resumeData

  return (
    <div className={styles.app}>
      <Header />
      <main id="main-content" className={styles.main}>
        <Hero personal={personal} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact personal={personal} />
      </main>
      <Footer name={`${personal.firstName} ${personal.lastName}`} />
    </div>
  )
}
