import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaSkype, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import footlogo from "./img/footlogo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <img className="footlogo" src={footlogo} alt="Logo" />
          <h3>Get into Touch</h3>
          <p><FaPhoneAlt /> +91 90237 96107</p>
          <p><FaMapMarkerAlt /> 325, Silver Trade Center, VIP Circle, Near Oxygen Garden, Mota Varachha, Surat, Gujarat 394105</p>
          <h4>Email Us</h4>
          <p><FaEnvelope /> info@princeitsolution.com</p>
          <p><FaEnvelope /> hr.princeitsolution@gmail.com</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Link</h3>
          <a href="/">Home</a>
          <a href="/about.php">About Us</a>
          <a href="/services/web-development.php">Services</a>
          <a href="/contact.php">Contact Us</a>
        </div>

        <div className="services">
          <h3>Services</h3>
          <a href="/services/web-development.php">Web Development</a>
          <a href="/services/app-development.php">App Development</a>
          <a href="/services/ui-ux-design.php">UI/UX Design</a>
          <a href="/services/support.php">Support & Maintenance</a>
          <a href="/services/digital-marketing.php">Digital Marketing / SEO</a>
          <a href="/services/qa-testing.php">QA & Testing</a>
          <a href="/services/cloud-devops.php">Cloud & DevOps</a>
        </div>

        <div className="other-links">
          <h3>Other Link</h3>
          <a href="/upwork.php">Upwork Profile</a>
          <a href="/linkedin.php">LinkedIn Profile</a>
        </div>
      </div>

      <div className="social-icons">
      <p className="copyright">Copyright © 2024 Prince IT Solution. All rights reserved.</p>  
        <FaSkype />
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>

    </footer>
  );
};

export default Footer;
