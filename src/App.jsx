import React from 'react'
import './App.css'
import Header  from './components/Header/Header.jsx'
import {Routes,Route} from 'react-router-dom'
import About from './components/Main/About/About.jsx'
import Work from './components/Main/Work/Work.jsx'
import ContactPage from './components/Main/Contact/ContactPage.jsx'
import Error404 from './components/ErrorPages/Error404'

function App() {

  return (
    <>
      <Header />
      <div className="main">
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/work' element={<Work />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
      </div>
    </>
  )
}

export default App



