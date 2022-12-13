import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

import HeroView from '../components/views/heroView'
// import SkillsView from '../components/views/skillsView'
// import ProjectsView from '../components/views/projectsView'
import ContactView from '../components/views/contactView'

import dynamic from 'next/dynamic'

const ProjectsView = dynamic(() => import('../components/views/projectsView'))

const SkillsView = dynamic(() => import('../components/views/skillsView'))

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Victor | Software Engineer | Web Developer</title>
          <meta name="description" content="Victor He's Portfolio Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={`${styles.main}`}>
          <HeroView />
          <SkillsView />
          <ProjectsView />
          <ContactView />
        </main>
      </div>
    </Layout>
  )
}
