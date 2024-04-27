import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from '../src/components/Navbar/Navbar'
import HomePage from '../src/components/HomePage/HomePage'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Navbar/>
     <HomePage/>
     <Footer/>
  </React.StrictMode>,
)
