import React from 'react';
import { FaAngleDown, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaHeadset, FaBullhorn, FaCheckSquare, FaCloud } from 'react-icons/fa'; // Icons for dropdown items
import './Navbar.css';
import footlogo from "./img/comlogo.webp";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={footlogo} alt="Prince IT Solution Logo" className="nav-logo" />
        </div>

        <div className="menu-right">
          <ul className="nav-links">
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about.php">About</a></li>
            <li className="dropdown">
              <a href="/services/web-development.php" className="dropdown-toggle">
                Services <FaAngleDown className="dropdown-icon" />
              </a>
              {/* Dropdown menu (hidden by default, shown on hover) */}
              <ul className="dropdown-menu">
                <li>
                  <a href="/services/web-development.php">
                    <FaLaptopCode className="dropdown-item-icon" /> Web Development
                  </a>
                </li>
                <li>
                  <a href="/services/app-development.php">
                    <FaMobileAlt className="dropdown-item-icon" /> Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="/services/ui-ux-design.php">
                    <FaPaintBrush className="dropdown-item-icon" /> UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="/services/support.php">
                    <FaHeadset className="dropdown-item-icon" /> Support & Maintenance
                  </a>
                </li>
                <li>
                  <a href="/services/digital-marketing.php">
                    <FaBullhorn className="dropdown-item-icon" /> Digital Marketing & SEO
                  </a>
                </li>
                <li>
                  <a href="/services/qa-testing.php">
                    <FaCheckSquare className="dropdown-item-icon" /> QA & Testing
                  </a>
                </li>
                <li>
                  <a href="/services/cloud-devops.php">
                    <FaCloud className="dropdown-item-icon" /> Cloud & DevOps
                  </a>
                </li>
              </ul>
            </li>
            <li><a href="/blogs.php">Blogs</a></li>
          </ul>

          <div className="contact-button">
            <a href="/contact.php" className="btn">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;