import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://sarkar-backend-cks3.onrender.com/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="service-grid">
        {services.map((service) => (
          <Link to={`/service/${service._id}`} key={service._id} className="service-box">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
