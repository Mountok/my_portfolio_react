
import React from 'react'
import './App.css'

import HeaderPage from './Components/HeaderPage/HeaderPage.jsx'
import {Routes,Route} from 'react-router-dom'
import WorkPage from './Components/MainPage/WorkPage/WorkPage'

function App() {

  return (
    <>
      <HeaderPage/>
      <Routes>
        <Route path='/' element={<WorkPage/>}/>
      </Routes>
    </>
  )
}

export default App



