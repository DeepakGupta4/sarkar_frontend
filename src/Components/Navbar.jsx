import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>Sarkar <span>CSC</span></div>
        <div className='navmiddle'>
            <ul>
            <NavLink to="/" className={({ isActive }) => isActive ? 'li active' : 'li'}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'li active' : 'li'}>About</NavLink>
                <NavLink to="/latestjobs" className={({ isActive }) => isActive ? 'li active' : 'li'}>Latest Jobs</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? 'li active' : 'li'}>My Services</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'li active' : 'li'}>Contact Us</NavLink>

            </ul>
        </div>
    </div>
  )
}

export default Navbar