import React from "react";
import { Link } from "react-router-dom";
import './MyServices.css'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const services = [
  { id: "aadhar-card", title: "Aadhar Card Services", description: "Update or apply for a new Aadhar card, biometric updates, and address changes.", icon: "📑" },
  { id: "pan-card", title: "PAN Card Services", description: "Apply for a new PAN card or update details in your existing one.", icon: "💳" },
  { id: "voter-id", title: "Voter ID Services", description: "New Voter ID registration, corrections, and duplicate Voter ID issuance.", icon: "🗳️" },
  { id: "driving-license", title: "Driving License", description: "Apply for a new driving license, renewal, and other RTO services.", icon: "🚗" },
  { id: "banking-services", title: "Banking Services", description: "Open new bank accounts, deposit/withdraw cash, and print passbooks.", icon: "🏦" },
  { id: "Train Ticket-services", title: "Train Ticket", description: "Open new bank accounts, deposit/withdraw cash, and print passbooks.", icon: "🏦" }
];

const MyServices = () => {
  return (
    <>
      <Navbar />
      <div className="services-container">
        <h1 className="services-title">Our CSC Services</h1>
        <p className="services-description">
          We provide a wide range of <strong>government and digital services</strong> to make your life easier. Visit <strong>Sarkar CSC Center</strong> for hassle-free service.
        </p>
        
        <div className="services-list">
          {services.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id} className="service-link">
              <div className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyServices;
