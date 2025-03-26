import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader"; // ✅ Import Loader
import "./MyServices.css";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  // 🔹 Fetch Services from Backend
  const fetchServices = async () => {
    try {
      const response = await axios.get("https://sarkar-backend-cks3.onrender.com/api/services");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false); // ✅ Stop loading after fetching data
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      <Navbar />
      <div className="services-container">
        <h1 className="services-title">Our CSC Services</h1>
        <p className="services-description">
          We provide a wide range of <strong>government and digital services</strong> to make your life easier.
        </p>

        {/* ✅ Show Loader while fetching services */}
        {loading ? (
          <Loader />
        ) : (
          <div className="services-list">
            {services.map((service) => (
              <Link to={`/service/${service._id}`} key={service._id} className="service-link">
                <div className="service-card">
                  <span className="service-icon">{service.icon}</span>
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <p className="service-price"><strong>₹{service.price}</strong></p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyServices;
