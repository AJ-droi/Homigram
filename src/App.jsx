import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>    
      </Router>
    
    

    </>
  )
}

export default App
