import React from 'react'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App