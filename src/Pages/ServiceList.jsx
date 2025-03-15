import React from "react";
// import "./ServiceList.css";
import { Link } from "react-router-dom";

const services = [
  { id: "aadhar-card", title: "Aadhar Card Services", description: "Apply, update, and verify Aadhar." },
  { id: "pan-card", title: "PAN Card Services", description: "New PAN applications and corrections." },
  { id: "ration-card", title: "Ration Card Services", description: "Apply for a new ration card or update details." }
];

const ServiceList = () => {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="service-grid">
        {services.map((service) => (
          <Link to={`/services/${service.id}`} key={service.id} className="service-box">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
