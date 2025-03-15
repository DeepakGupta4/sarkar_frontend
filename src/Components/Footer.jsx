import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About CSC</h3>
          <p>Sarkar Jan Sva Kendra (CSC) provide digital services and government schemes to citizens efficiently.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/jobs">Latest Jobs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: sarkarcscpatherwa@gmail.com</p>
          <p>Phone: +91 7565968670</p>
          <p>Address: Near NIC Patherwa, Patherwa, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Sarkar CSC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
