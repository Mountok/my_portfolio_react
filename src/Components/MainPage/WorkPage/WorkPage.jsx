import React from 'react'
import '../../../assets/fonts/Phudu/Phudu-VariableFont_wght.ttf';
import '../../../assets/fonts/Raleway/Raleway-VariableFont_wght.ttf';
import styles from './WorkPage.module.css'
import Typewriter from 'typewriter-effect'
import AboutMe from './AboutMePage/AboutMe';
const WorkPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.item_0}>
          <p>I create</p>
        </div>
        <div className={styles.item_1}>
          <p>amazing</p>
        </div>
        <div className={styles.item_2}>
          interface
            {/* <Typewriter 
              options={{
                strings: ['Web App`s','interface','diseing'],
                autoStart: true,
                cursor: ' ',
                loop: true,
                delay: 200,

              }}
            /> */}
        </div>
        <div className={styles.item_0}>
          <p>and</p>
        </div>
        <div className={styles.item_3}>
          <p>
            <span className={styles.item_3_letter_1}>W</span>
            <span className={styles.item_3_letter_2}>e</span>
            <span className={styles.item_3_letter_3}>b</span>
            -
            <span className={styles.item_3_letter_4}>A</span>
            <span className={styles.item_3_letter_5}>p</span>
            <span className={styles.item_3_letter_6}>p</span></p>
        </div>
      </section>
      <AboutMe/>
      
    </main>
  )
}

export default WorkPage