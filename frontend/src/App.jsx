import React from 'react'
// import './App.css';
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Student from './pages/Student/Student'
import CitySelector from './pages/CitySelector/CitySelector'
import Attendance from './pages/Attendance/Attendance'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/student' element={<Student />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/city' element={<CitySelector />} />
      </Routes>
    </div>
  )
}

export default App