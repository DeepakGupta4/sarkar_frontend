import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ServiceDetailPage.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      console.log("Fetching service for ID:", id); // ✅ Debugging

      try {
        const response = await axios.get(
          `https://sarkar-backend-cks3.onrender.com/api/services/${id}`
        );
        console.log("API Response:", response.data); // ✅ Debugging

        if (!response.data) {
          throw new Error("Service not found");
        }
        setService(response.data);
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("⚠️ Service details not found!");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <h2>⏳ Loading service details...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="service-page">
      <div className="service-detail-container">
        <h1 className="h1">{service?.name || "Service Name"}</h1>
        <p className="p">
          <strong>Price:</strong> ₹{service?.price || "N/A"}
        </p>
        <p className="p">
          <strong>Description:</strong> {service?.description || "N/A"}
        </p>
        <p className="p">
          <strong>Important Documents:</strong>{" "}
          {service?.documents ? service.documents.join(", ") : "Not Available"}
        </p>

        <div className="service-buttons">
          <button className="go-back" onClick={() => navigate(-1)}>
            🔙 Go Back
          </button>
          <button
            className="contact-us"
            onClick={() => alert("📞 Contact Us: +91 7565968670")}
          >
            📞 Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
