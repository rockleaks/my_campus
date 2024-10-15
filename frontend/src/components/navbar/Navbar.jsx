import React, { useState } from 'react';
import './Navbar.css';
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className='navbar'>
      {/* Logo Link */}
      <Link to='/' onClick={() => setMenu("home")}>
        <img src={assets.biher_logo} alt="" className='logo' />
      </Link>

      {/* Navbar Menu */}
      <ul className='navbar-menu'>
        {/* Home Link */}
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>
          <Link to='/'>Home</Link>
        </li>

        {/* Student Link */}
        <li className={menu === "student" ? "active" : ""} onClick={() => setMenu("student")}>
          <Link to='/student'>Student</Link>
        </li>

        {/* Staff Dropdown */}
        <li className={menu === "staff" ? "active" : ""} onClick={() => setMenu("staff")}>
          Staff
          <div className="dropdown-menu">
            <ul>
              {/* Attendance and Student List */}
              <li>
                <Link to='/attendance'>Attendance</Link>
              </li>
              <li>
                <Link to='/'>Student List</Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Contact Us Link */}
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>
          <Link to='/'>Contact Us</Link>
        </li>
      </ul>

      {/* Navbar Right Section */}
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
