import React from 'react'
import styles from './AboutSection_1.module.css'
const AboutSection_1 = () => {
  return (
    <div className={styles.content}>
        <div className={styles.title}>
            <p>WEB DEVELOPER</p>
        </div>
        <div className={styles.subtitle}>
            <article>
                <p>
                Development of adaptive MPA, SPA websites and web applications. 
                Using the popular framework React.js
                </p>
            </article>
            <article>
                <p>
                I also own PostgreSQL, study backend development and game development on the Godot Engine using GDScript
                </p>
            </article>
        </div>
    </div>
  )
}

export default AboutSection_1