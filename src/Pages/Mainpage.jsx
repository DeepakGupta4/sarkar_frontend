import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./Mainpage.css";
import Footer from "../Components/Footer";

// Import Images
import MyImage from "../assets/IMG-20250316-WA0002[1].jpg";
import MyImage2 from "../assets/WhatsApp Image 2025-03-16 at 14.24.45_d3098968.jpg";
import MyImage3 from "../assets/WhatsApp Image 2025-03-16 at 14.28.10_b66cc064.jpg";

const Mainpage = () => {
  
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("https://sarkar-backend-cks3.onrender.com/api/services");
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="homepage">
      {/* Image Slider */}
      <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 3000 }} loop className="slider">
        {[MyImage, MyImage2, MyImage3].map((img, index) => (
          <SwiperSlide key={index} className="img-slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Marquee Section */}
      <div id="page2">
        <div id="scroller">
          <div id="scroller-in">
            {Array(4).fill("SARKAR CSC CENTER - Digital Services for Everyone 🚀").map((text, index) => (
              <h4 key={index}>{text}</h4>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h1 className="welcome">Welcome to Sarkar CSC Center</h1>
        <p className="welcomenote">Providing the best digital and government services in your area.</p>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <h2>Our Key Services</h2>
        <div className="service-grid">
          {services.length > 0 ? (
            services.map((service) => (
              <Link key={service._id} to={`/service/${service._id}`} className="service-box">
                {service.name}
              </Link>
            ))
          ) : (
            <p>Loading services...</p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          {[
            { name: "Deepak Gupta", text: "Excellent service! Very professional and quick response.", img: "https://randomuser.me/api/portraits/men/1.jpg" },
            { name: "Arijeet Sharma", text: "Sarkar CSC Center helped me get my Aadhar updated in no time!", img: "https://randomuser.me/api/portraits/women/2.jpg" },
            { name: "Sagar Yadav", text: "Friendly staff and smooth process. Highly recommended!", img: "https://randomuser.me/api/portraits/men/3.jpg" }
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-box">
              <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Sarkar CSC Center?</h2>
        <div className="why-grid">
          {[
            { img: "https://cdn-icons-png.flaticon.com/512/190/190411.png", title: "Trusted Services", text: "We provide reliable and government-approved digital services." },
            { img: "https://cdn-icons-png.flaticon.com/512/681/681443.png", title: "Fast Processing", text: "Get your work done quickly with minimal waiting time." },
            { img: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png", title: "Affordable Prices", text: "Quality services at the best rates, with no hidden costs." },
            { img: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png", title: "24/7 Support", text: "Our team is available anytime to assist you with queries." }
          ].map((feature, index) => (
            <div key={index} className="why-box">
              <img src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Experience hassle-free digital services with Sarkar CSC Center.</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mainpage;
