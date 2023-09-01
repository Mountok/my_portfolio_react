import React from 'react'
import About from './About/About.jsx'
import styles from './MainPage.module.css'
import Work from './Work/Work.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactPage from './Contact/ContactPage.jsx'
const MainPage = () => {
  return (
    <main className={styles.main}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<About />}/>
            <Route path='/work' element={<Work />}/>
            <Route path='/contact' element={<ContactPage />}/>
          </Routes>
        </BrowserRouter>
    </main>
  )
}

export default MainPage