import React from 'react'

import styles from './HeaderPage.module.css'

const HeaderPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>The Mountok prod.</p>
      </div>
      <nav className={styles.nav}>
        <a href="#">Works</a>
        <a href="#aboutscroll">About</a>
        <a href="#">Contacts</a>
      </nav>
    </header>
  )
}

export default HeaderPage