import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetail.css";

const serviceData = {
  "aadhar-card": {
    title: "Aadhar Card Services",
    description: "Apply for a new Aadhar card, update details, and biometric verification.",
    documents: ["Aadhar Form", "Proof of Identity", "Proof of Address"],
    processingTime: "7-10 days",
    fee: "₹150 - ₹200"
  },
  "pan-card": {
    title: "PAN Card Services",
    description: "New PAN card application and corrections.",
    documents: ["Aadhar Card", "Passport-size Photo"],
    processingTime: "2 Hour Only",
    fee: "₹200"
  },
  "voter-id": {
    title: "Voter ID Services",
    description: "New Voter ID registration, corrections, and duplicate Voter ID issuance.",
    documents: ["Voter ID Form", "Proof of Address"],
    processingTime: "3 days",
    fee: "₹150"
  },
  "driving-license": {
    title: "Driving License Services",
    description: "Apply for a new driving license, renewal, and other RTO services.",
    documents: ["Driving License Form", "Medical Certificate"],
    processingTime: "1 Hour",
    fee: "₹200"
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  return (
    <div className="service-detail-container">
      {service ? (
        <>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <h3>Required Documents:</h3>
          <ul>
            {service.documents.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
          <p><strong>Processing Time:</strong> {service.processingTime}</p>
          <p><strong>Fee:</strong> {service.fee}</p>
          <div className="button-container">
          <Link to={'/services'} className="button">Go Back</Link>
          <Link to={'/contact#contact-form'} className="button">Contact Us</Link>
</div>
        </>
        
      ) : (
        <p>Service not found!</p>
      )}
    </div>
  );
};

export default ServiceDetailPage;
