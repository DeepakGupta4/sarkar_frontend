import React from "react";
import "./Contectus.css";  // Ensure this file exists
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Connect = () => {
  return (
    <>
      <Navbar />
      <div className="connect-container">
        <div className="connect-header">
          <h1>Let's Contact with <span>Sarkar CSC Center</span></h1>
          <p>
            We are here to assist you with all your digital and government services.
            Whether you have queries, need support, or want to collaborate, feel free to reach out!
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <div className="contact-card">
            <h3>📍 Visit Us</h3>
            <p>Sarkar CSC Center, Navjeewan Road, Parherwa Kushinagar, 274401</p>
          </div>
          <div className="contact-card">
            <h3>📞 Call Us</h3>
            <p>+91 7565 9686 70</p>
          </div>
          <div className="contact-card">
            <h3>📧 Email Us</h3>
            <p>sarkarcscpatherwa@gmail.com</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <h2>Find Us on Google Maps</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.868570602993!2d84.09475077521608!3d26.684685576783803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993971211c5237b%3A0x59259efcd890a76f!2sSARKAR%20CSC%20PATHERWA!5e0!3m2!1sen!2sin!4v1742025209580!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}  // Fixed this
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="phone" placeholder="Your Mobile Number" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Connect;
