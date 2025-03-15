import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import About from "./Pages/About";
import LatestJobs from "./Pages/LatestJobs";
import Contactus from "./Pages/Contactus";
import MyServices from "./Pages/MyServices";
import ServiceDetailPage from "./Pages/ServiceDetailPage";
import Home from "./Pages/Home";



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/latestjobs" element={<LatestJobs />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<MyServices />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
