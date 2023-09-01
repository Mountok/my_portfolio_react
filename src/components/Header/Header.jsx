import React from 'react'
import styles from './Header.module.css'
import { MdPolymer } from "react-icons/md"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header_logo}>
            <MdPolymer className={styles.item} />

            <p className='text-ms'>Islam Dashuev</p>
        </div>
        <nav className={styles.nav}>
          <a href="/">About</a>
          <a href="/work">Work</a>
          <a href="/work">Blog</a>
          <a href="/contact">Contact</a>
               
                
        </nav>
    </header>
  )
}

export default Header