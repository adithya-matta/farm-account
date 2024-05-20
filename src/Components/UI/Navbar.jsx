import React from 'react'
import "../../Styles/navbar.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='title'>
            <h1>Farm account</h1>
        </div>
        <div className='headers'>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/help">HELP</NavLink>
        </div>
    </nav>
  )
}

export default Navbar