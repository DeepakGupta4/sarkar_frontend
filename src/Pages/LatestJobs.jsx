import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import './LatestJobs.css';

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/jobs"); // Make sure backend includes `applicationLink`
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs(); // Load jobs initially
    const interval = setInterval(fetchJobs, 5000); // ✅ Auto-refresh every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <Navbar />
      <div className="job-container">
        <h1>Latest Government Jobs</h1>
        <div className="job-list">
          {jobs.length === 0 ? (
            <p>No jobs available</p>
          ) : (
            jobs.map((job) => (
              <div key={job._id} className="job-card">
                <h2>{job.jobTitle}</h2>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> ₹{job.salary}</p>
                <p>{job.description}</p>
                <p><strong>Documents Required:</strong> {job.documents}</p>
                <p><strong>Service Price:</strong> ₹{job.price}</p>

                {/* Apply Now Button */}
                <button 
  className="apply-button"
  onClick={() => {
    if (job.applicationLink) {
      const fixedLink = job.applicationLink.startsWith("http") 
        ? job.applicationLink 
        : `https://${job.applicationLink}`; // ✅ Ensure full URL

      window.open(fixedLink, "_blank"); // ✅ Open in new tab
    } else {
      alert("Application link not available!");
    }
  }}
>
  Apply Now
</button>

              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LatestJobs;
