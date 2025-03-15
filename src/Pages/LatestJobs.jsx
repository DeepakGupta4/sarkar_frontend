import React from "react";
import "./LatestJobs.css"; // Ensure this file exists
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const jobs = [
  {
    title: "Junior Engineer",
    department: "Public Works Department (PWD)",
    deadline: "March 25, 2025",
    description: "Government job for diploma holders in civil engineering.",
    documents: ["Aadhar Card", "Educational Certificates", "Passport Size Photo"],
    link: "#"
  },
  {
    title: "Clerk",
    department: "State Revenue Department",
    deadline: "April 10, 2025",
    description: "Entry-level clerical government job with good salary package.",
    documents: ["PAN Card", "10th Marksheet", "Domicile Certificate"],
    link: "#"
  },
  {
    title: "Data Entry Operator",
    department: "E-Governance Department",
    deadline: "April 5, 2025",
    description: "Required computer knowledge and good typing speed.",
    documents: ["Aadhar Card", "Computer Certificate", "Passport Size Photo"],
    link: "#"
  },
  {
    title: "Data Entry Operator",
    department: "E-Governance Department",
    deadline: "April 5, 2025",
    description: "Required computer knowledge and good typing speed.",
    documents: ["Aadhar Card", "Computer Certificate", "Passport Size Photo"],
    link: "#"
  },
  {
    title: "Data Entry Operator",
    department: "E-Governance Department",
    deadline: "April 5, 2025",
    description: "Required computer knowledge and good typing speed.",
    documents: ["Aadhar Card", "Computer Certificate", "Passport Size Photo"],
    link: "#"
  }
];

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-department">{job.department}</p>
      <p className="job-deadline">Deadline: <span>{job.deadline}</span></p>
      <p className="job-description">{job.description}</p>
      <div className="job-documents">
        <h3>Important Documents:</h3>
        <ul>
          {job.documents.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>
      <a href={job.link} target="_blank" rel="noopener noreferrer">
        <button className="apply-button">Apply Now</button>
      </a>
    </div>
  );
};

const LatestJobs = () => {
  return (
    <>
      <Navbar />
    <div className="job-container">
      {/* Intro Section */}
      <div className="job-intro">
        <h1 className="job-section-title">Find the Latest Government Jobs</h1>
        <p>
          Welcome to the **Sarkar CSC Center Job Portal**! We provide the latest 
          government job updates, exam notifications, and application details. 
          Stay informed and apply for **your dream job today**!
        </p>
      </div>

      {/* Job Listings */}
      <div className="job-list">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default LatestJobs;
