import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './ServiceDetailPage.css'

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/services/${id}`);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service:", error);
        setError("Failed to load service details");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <h2>Loading service detail...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="service-page">
      <div className="service-detail-container">
      <h1 className="h1">{service.name}</h1>
      <p className="p"><strong>Price:</strong> ₹{service.price}</p>
      <p className="p"><strong>Description:</strong> {service.description}</p>
      <p className="p"><strong>Important Documents:</strong> {service.documents || "Not Available"}</p>

      <div className="service-buttons">
        <button className="go-back" onClick={() => navigate(-1)}>🔙 Go Back</button>
        <button className="contact-us" onClick={() => alert("Contact Us: +91 7565968670")}>📞 Contact Us</button>
      </div>
    </div>
    </div>
  );
};

export default ServiceDetail;
