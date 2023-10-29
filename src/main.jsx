import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/fonts/Phudu/Phudu-VariableFont_wght.ttf';
import './assets/fonts/Raleway/Raleway-VariableFont_wght.ttf';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
