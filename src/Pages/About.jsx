import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <h1>Welcome to <span>SARKAR CSC CENTER</span></h1>
        <p>Your trusted partner for government and digital services.</p>
      </div>

      {/* About Content Section */}
      <div className="about-content">
        <div className="about-image">
          <img src="https://cdn.pixabay.com/photo/2020/01/30/21/24/shop-4806610_1280.jpg" alt="CSC Center" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Sarkar CSC Center is dedicated to providing essential **government and digital services** 
            to the public. We aim to bridge the gap between technology and people by offering 
            hassle-free and efficient solutions.
          </p>
          <h2>Our Services</h2>
          <ul>
            <li>📜 Aadhar & PAN Card Registration</li>
            <li>📄 Birth & Death Certificate Processing</li>
            <li>🏦 Banking & Insurance Services</li>
            <li>📡 Online Form Filling (Govt. Exams, Tenders)</li>
            <li>💻 Digital Payment & e-Governance Support</li>
            <li>📃 Property Registration & Legal Documentation</li>
          </ul>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="about-mission">
        <h2>Our Mission & Vision</h2>
        <p>
          We strive to make **government services more accessible, efficient, and transparent** 
          for everyone. Our goal is to empower citizens by providing **affordable, fast, and secure** 
          digital services at their doorstep.
        </p>
      </div>

      {/* CTA Section */}
      <div className="about-cta">
        <h2>Visit Us Today!</h2>
        <p>We are here to help you with all your government and digital needs.</p>
        <Link to={'/contact'} className="about-button">Contact Us</Link>
      </div>
    </div>
        <Footer />
    </div>
  )
}

export default About