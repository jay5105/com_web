
import React from 'react';
import { FaStar } from 'react-icons/fa'; // For the star ratings
import './Hero.css';

// Import your images
import phoneImage from './img/Group 1410144744.png'; // Single static phone image

// Client logos
import nextPerimeterLogo from './img/1.png';
import dashceLogo from './img/2.png';
import itaFitnessLogo from './img/3.png';
import seniorOneLogo from './img/4.png';
import flipsyLogo from './img/5.png';
import proLogo from './img/6.png';
import steerEducationLogo from './img/7.png';
import dependableSolutionsLogo from './img/8.png';
import eventryLogo from './img/9.png';
import chaosLogo from './img/10.png';
import trueTalentLogo from './img/11.png';
import vigexLogo from './img/12.png';
import trustlyLogo from './img/13.png';
import belimoLogo from './img/14.png';

const Hero = () => {
  const clientLogos = [
    nextPerimeterLogo, dashceLogo, itaFitnessLogo, seniorOneLogo, flipsyLogo,
    proLogo, steerEducationLogo, dependableSolutionsLogo, eventryLogo, chaosLogo,
    trueTalentLogo, vigexLogo, trustlyLogo, belimoLogo,
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left Side: Text and Button */}
          <div className="hero-text">
            <h1>Convert Clicks into Purchases with Our Web/App Development Services</h1>
            <p className="subheading">
              <span>Boost conversions effortlessly</span>—turn clicks into purchases with our expert web and app development services!
            </p>
            <a href="/contact.php" className="consult-btn">
              Consult Prince IT <span className="arrow">→</span>
            </a>

            {/* Trusted by Clients Section */}
            <div className="trusted-clients">
              <div className="trusted-text">
                <span className="icon">👥</span> Trusted by our Clients
              </div>
              <div className="rating">
                <span>Excellent</span>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
            </div>
            <p className="description">
              We help leaders, from Startups to Fortune 500, deliver technology on time and within budget
            </p>
          </div>

          {/* Right Side: Single Static Phone Image */}
          <div className="hero-image">
            <div className="phone-container">
              <img src={phoneImage} alt="Phones" className="phone" />
            </div>
            {/* Decorative Circles */}
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
          </div>
        </div>

        {/* Client Logos (Static) */}
        <div className="client-logos">
          {clientLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;