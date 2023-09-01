import React from 'react'
import styles from './About.module.css'
import AboutSection_1 from './Section_1/AboutSection_1.jsx'
import AboutSection_2 from './Section_2/AboutSection_2.jsx'
import PageChanger from '../../PageChanger/PageChanger'

const About = () => {
  return (
    <section className={styles.about_page}>
        <AboutSection_1 />
        <AboutSection_2 />
        <PageChanger />
    </section>
  )
}

export default About