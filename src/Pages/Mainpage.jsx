import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Mainpage.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import MyImage from "../assets/IMG-20250316-WA0002[1].jpg";
import MyImage2 from "../assets/WhatsApp Image 2025-03-16 at 14.24.45_d3098968.jpg";
import MyImage3 from "../assets/WhatsApp Image 2025-03-16 at 14.28.10_b66cc064.jpg";


const Mainpage = () => {
  return (
    <div className="homepage">
      {/* Image Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="slider"
      >
        <SwiperSlide className="img-slide">
          <img src={MyImage} alt="My Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MyImage2} alt="Shop View 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MyImage3} alt="Shop View 3" />
        </SwiperSlide>
      </Swiper>

      {/* Marquee Section */}
      <div id="page2">
        <div id="scroller">
          <div id="scroller-in">
            <h4>SARKAR CSC CENTER - Digital Services for Everyone 🚀</h4>
            <h4>SARKAR CSC CENTER - Digital Services for Everyone 🚀</h4>
            <h4>SARKAR CSC CENTER - Digital Services for Everyone 🚀</h4>
            <h4>SARKAR CSC CENTER - Digital Services for Everyone 🚀</h4>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome">Welcome to Sarkar CSC Center</h1>
        <p className="welcomenote">Providing the best digital and government services in your area.</p>
      </div>

      {/*Featured section */}

      <div className="featured-services">
  <h2>Our Key Services</h2>
  <div className="service-grid">
  <Link to="http://localhost:5174/service/67dbb16157a52e6a88b55e98" className="service-box">
  Aadhar Card Services
</Link>
<Link to="http://localhost:5174/service/67dbb16157a52e6a88b55e99" className="service-box">
  PAN Card Services
</Link>
<Link to="http://localhost:5174/service/67dbb16157a52e6a88b55e9a" className="service-box">
  Voter ID Services
</Link>
<Link to="http://localhost:5174/service/67dbb16157a52e6a88b55e9b" className="service-box">
  Driving License
</Link>

  </div>
</div>


{/* Testimonial section */}

<div className="testimonials">
  <h2>What Our Customers Say</h2>
  <div className="testimonial-grid">
    <div className="testimonial-box">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Rahul Verma" className="testimonial-img" />
      <p>"Excellent service! Very professional and quick response."</p>
      <h4>Rahul Verma</h4>
    </div>
    <div className="testimonial-box">
      <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Priya Sharma" className="testimonial-img" />
      <p>"Sarkar CSC Center helped me get my Aadhar updated in no time!"</p>
      <h4>Priya Sharma</h4>
    </div>
    <div className="testimonial-box">
      <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Anil Kumar" className="testimonial-img" />
      <p>"Friendly staff and smooth process. Highly recommended!"</p>
      <h4>Anil Kumar</h4>
    </div>
  </div>
</div>


{/*why choose us  */}


<div className="why-choose-us">
  <h2>Why Choose Sarkar CSC Center?</h2>
  <div className="why-grid">
    <div className="why-box">
      <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Trusted Services" />
      <h3>Trusted Services</h3>
      <p>We provide reliable and government-approved digital services.</p>
    </div>
    <div className="why-box">
      <img src="https://cdn-icons-png.flaticon.com/512/681/681443.png" alt="Fast Processing" />
      <h3>Fast Processing</h3>
      <p>Get your work done quickly with minimal waiting time.</p>
    </div>
    <div className="why-box">
      <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Affordable Prices" />
      <h3>Affordable Prices</h3>
      <p>Quality services at the best rates, with no hidden costs.</p>
    </div>
    <div className="why-box">
      <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="24/7 Support" />
      <h3>24/7 Support</h3>
      <p>Our team is available anytime to assist you with queries.</p>
    </div>
  </div>
</div>


<div className="cta-section">
  <h2>Ready to Get Started?</h2>
  <p>Experience hassle-free digital services with Sarkar CSC Center.</p>
  <Link to="/contact" className="cta-button">Contact Us</Link>
</div>



      {/* <Footer /> */}
    </div>
  );
};

export default Mainpage;