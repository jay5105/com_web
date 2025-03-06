import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaSkype, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBehance, FaDribbble } from 'react-icons/fa';
import './Footer.css';
import footlogo from "./img/comlogo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <img className="footlogo" src={footlogo} alt="Prince IT Solution Logo" />
          <h3>Get into Touch</h3>
          <p><FaPhoneAlt className="icon" /> +91 90237 96107</p>
          <p><FaMapMarkerAlt className="icon" /> 325, Silver Trade Center, VIP Circle, Near Oxygen Garden, Mota Varachha, Surat, Gujarat 394105</p>
          <h4>Email Us</h4>
          <p><FaEnvelope className="icon" /> info@princeitsolution.com</p>
          <p><FaEnvelope className="icon" /> hr.princeitsolution@gmail.com</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about.php">About Us</a></li>
            <li><a href="/services/web-development.php">Services</a></li>
            <li><a href="/contact.php">Contact Us</a></li>
          </ul>
        </div>

        <div className="services">
          <h3>Services</h3>
          <ul>
            <li><a href="/services/web-development.php">Web Development</a></li>
            <li><a href="/services/app-development.php">App Development</a></li>
            <li><a href="/services/ui-ux-design.php">UI/UX Design</a></li>
            <li><a href="/services/support.php">Support & Maintenance</a></li>
            <li><a href="/services/digital-marketing.php">Digital Marketing / SEO</a></li>
            <li><a href="/services/qa-testing.php">QA & Testing</a></li>
            <li><a href="/services/cloud-devops.php">Cloud & DevOps</a></li>
          </ul>
        </div>

        <div className="other-links">
          <h3>Other Link</h3>
          <ul>
            <li><a href="/upwork.php">Upwork Profile</a></li>
            <li><a href="/linkedin.php">LinkedIn Profile</a></li>
            <li><a href="/freelance.php">Freelance Profile</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">Copyright © 2024 Prince IT Solution. All rights reserved.</p>
        <div className="social-icons">
          <FaSkype className="social-icon" />
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaBehance className="social-icon" />
          <FaDribbble className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;