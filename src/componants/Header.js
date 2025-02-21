import React, { useState, useEffect } from "react";
import comlogo from "./img/comlogo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down (or up), and make the navbar sticky
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 0); // Make navbar sticky when scroll position is greater than 0
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src={comlogo} alt="Prince IT Solution" className="logo" />
        </a>

        {/* Navbar Items */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-links active">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-links">About</a>
          </li>

          {/* Services Dropdown */}
          <li className="navbar-item dropdown">
            <a href="/services" className="navbar-links">
              Services <span className="dropdown-icon">▾</span> {/* Thinner down arrow */}
            </a>
            <ul className="dropdown-menu">
              <li><a href="/services/web">Web Development</a></li>
              <li><a href="/services/app">App Development</a></li>
              <li><a href="/services/design">UI/UX Design</a></li>
            </ul>
          </li>

          {/* Contact Us Button */}
          <li className="navbar-item">
            <a href="/contact" className="contact-btn">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;