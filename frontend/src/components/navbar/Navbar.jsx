import React, { useState } from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState("");

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => setMenu("home")}><img src={assets.biher_logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/'><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li></Link>
        <Link to='/student'><li onClick={() => setMenu("student")} className={menu === "student" ? "active" : ""}>Student</li></Link>
        <Link to='/'>
          <li onClick={() => setMenu("staff")} className={menu === "staff" ? "active" : ""}>Staff
            <div className="dropdown-menu">
              <ul>
                <Link to='/attendance'><li>Attendance</li></Link>
                <Link to='/'><li>Student List</li></Link>
              </ul>
            </div>
          </li>
        </Link>
        <Link to='/'><li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</li></Link>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar