import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Router } from 'express'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Signup from './signup'



function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
   </Router>
  )
}

export default App
