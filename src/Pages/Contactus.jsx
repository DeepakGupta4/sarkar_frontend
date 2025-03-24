import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./Contectus.css";  
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Connect = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for success/error message
  const [status, setStatus] = useState({ message: "", type: "" });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ message: "All fields are required!", type: "error" });
      return;
    }

    try {
      const response = await axios.post("https://sarkar-backend-cks3.onrender.com/api/contact/send-email", formData);

      if (response.data.success) {
        setStatus({ message: "Email sent successfully!", type: "success" });
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setStatus({ message: "Failed to send email. Try again!", type: "error" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({ message: "Server error. Try again later!", type: "error" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="connect-container">
        <div className="connect-header">
          <h1>Let's Contact with <span>Sarkar CSC Center</span></h1>
          <p>We are here to assist you with all your digital and government services.</p>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <div className="contact-card">
            <h3>📍 Visit Us</h3>
            <p>Sarkar CSC Center, Navjeewan Road, Parherwa Kushinagar, 274401</p>
          </div>
          <div className="contact-card">
            <h3>📞 Call Us</h3>
            <p><a href="tel:+917565968670" className="contact-link">+91 7565 9686 70</a></p>
          </div>
          <div className="contact-card">
            <h3>📧 Email Us</h3>
            <p><a href="mailto:sarkarcscpatherwa@gmail.com" className="contact-link">sarkarcscpatherwa@gmail.com</a></p>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <h2>Find Us on Google Maps</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.868570602993!2d84.09475077521608!3d26.684685576783803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993971211c5237b%3A0x59259efcd890a76f!2sSARKAR%20CSC%20PATHERWA!5e0!3m2!1sen!2sin!4v1742025209580!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          {status.message && (
            <p className={`status-message ${status.type}`}>{status.message}</p>
          )}
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="phone" name="phone" placeholder="Your Mobile Number" value={formData.phone} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Connect;
