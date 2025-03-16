import { useState } from "react"; 
import { NavLink } from "react-router-dom"; 
import "./Navbar.css"; 

const Navbar = () => { 
  const [menuOpen, setMenuOpen] = useState(false);  

  return ( 
    <div className="navbar"> 
      <div className="logo">Sarkar <span>CSC</span></div> 

      {/* Hamburger Menu Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}> 
        {menuOpen ? "✖" : "☰"} 
      </div> 

      {/* Navigation Menu */}
      <div className={`navmiddle ${menuOpen ? "active" : ""}`}> 
        <ul> 
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/latestjobs" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              Latest Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              My Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              Contact Us
            </NavLink>
          </li>
        </ul> 
      </div> 
    </div> 
  ); 
};  

export default Navbar;
