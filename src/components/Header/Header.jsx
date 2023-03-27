import React from 'react'
import styles from './Header.module.css'
import { MdPolymer } from "react-icons/md"
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header_logo}>
            <MdPolymer className={styles.item} />

            <p className='text-ms'>Islam Dashuev</p>
        </div>
        <nav className={styles.nav}>
          <Link to='/'>About</Link>
          <Link to='/work'>Work</Link>
          <Link to='/contact'>Contact</Link>
          
                
        </nav>
    </header>
  )
}

export default Header