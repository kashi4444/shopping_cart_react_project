import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import  {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
function App() {

  return (
    <div>
      <div className='navbar_container'>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
