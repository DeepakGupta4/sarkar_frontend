import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader"; // ✅ Import Loader component
import "./LatestJobs.css";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://sarkar-backend-cks3.onrender.com/api/jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false); // ✅ Stop loading after fetching data
    }
  };

  useEffect(() => {
    fetchJobs();
    const interval = setInterval(fetchJobs, 5000); // ✅ Auto-refresh every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <Navbar />
      <div className="job-container">
        <h1>Latest Government Jobs</h1>

        {/* ✅ Show Loader while fetching jobs */}
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default LatestJobs;
