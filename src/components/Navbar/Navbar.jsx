import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Shoping Cart</h1>

      <div className="navbar-links">
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/cart'>Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar
