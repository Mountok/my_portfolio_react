import React from 'react'
import styles from './AboutSection_2.module.css'
import {FaGithub, FaTelegram} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import { FcGlobe} from 'react-icons/fc'

const AboutSection_2 = () => {
  return (
    <div className={styles.content}>
        <div className={styles.decorate_item}>
            <p className='text-ms'>Hello <FcGlobe />, My name is Islam, I am a Frontend web-developer. <br /> 
            I have been studying web programming since 2020. <br />
            I have such skills as <span>HTML</span>, <span>CSS (SASS,SCSS)</span>, <span>JavaScirpt</span>, 
            <span>React.js</span>, <span>Node.js</span>.  <br />
            And there is also minimal experience with <span>Electron.js</span>, <span>Godot Engine</span> and much more </p>
            <FaGithub className={styles.icon_1} />
            <AiFillInstagram className={styles.icon_2}/>
            <FaTelegram className={styles.icon_3}/>

        </div>
    </div>
  )
}

export default AboutSection_2