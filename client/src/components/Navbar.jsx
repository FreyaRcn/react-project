import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            RecipeApp
        </div>
        <ul className='navbar-menu'>
            <li><Link to="Home">Home</Link></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact Us!</a></li>
            <li><Link to="Login">Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar