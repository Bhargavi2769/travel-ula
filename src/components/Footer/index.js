import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Travel Ula</h2>
          <p>Discover unforgettable adventures with us.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#herosection">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#packages">Packages</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@travelula.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: Nairobi, Kenya</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
              <button onClick={() => alert("Coming soon!")}>
                <FaFacebookF />
              </button>
              <button onClick={() => alert("Coming soon!")}>
                <FaTwitter />
              </button>
              <button onClick={() => alert("Coming soon!")}>
                <FaInstagram />
              </button>
              <button onClick={() => alert("Coming soon!")}>
                <FaYoutube />
              </button>

              

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Travel Ula. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
