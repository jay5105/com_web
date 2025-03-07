import React from 'react';
import './PurposeAndFutureSection.css';

// Image imports - ensure these paths are correct
import worldMapImage from './img/world.png'; // Verify this path
import yearsExcellenceIcon from './img/PurposeAndFutureSection/1.png'; // Verify this path
import itExpertIcon from './img/PurposeAndFutureSection/2.png'; // Verify this path
import happyClientsIcon from './img/PurposeAndFutureSection/3.png'; // Verify this path
import projectsDeliveredIcon from './img/PurposeAndFutureSection/4.png'; // Verify this path
import visionIcon from './img/PurposeAndFutureSection/5.png'; // Verify this path
import missionIcon from './img/PurposeAndFutureSection/6.png'; // Verify this path
import commitmentIcon from './img/PurposeAndFutureSection/7.png'; // Verify this path
import coreValuesIcon from './img/PurposeAndFutureSection/8.png'; // Verify this path

const StatCard = ({ icon, title, value }) => (
  <div className="stat-card">
    <img src={icon} alt={title} className="stat-icon" />
    <h3>{value}</h3>
    <p>{title}</p>
  </div>
);

const ValueItem = ({ icon, title }) => (
  <div className="value-item">
    <img src={icon} alt={title} className="value-icon" />
    <h4>{title}</h4>
  </div>
);

const PurposeAndFutureSection = () => {
  return (
    <div className="container">
      <section className="purpose-section">
        <h1>Our purpose is to assist your company in redefining success.</h1>
        <p className="subtext">
          Boost conversions effortlessly—turn clicks into purchases with our expert web and app development services!
        </p>
        <button className="get-in-touch-btn">
          Get In Touch <span className="arrow">➔</span>
        </button>
    
      </section>

      <section className="future-section">
        <div className="world-map-wrapper">
          <img src={worldMapImage} alt="World Map" className="world-map" />
        </div>
        <h2>We Are Shaping The Future Of IT</h2>
        <p className="future-description">
          A journey is never measured by the miles you have traveled or the path you have taken, but by the marks that you left behind while walking toward the destination. Here are the proud marks we left:
        </p>
        <div className="stats-grid">
          <StatCard
            icon={yearsExcellenceIcon}
            title="Years of Excellence"
            value="2+"
          />
          <StatCard
            icon={itExpertIcon}
            title="IT Expert"
            value="10+"
          />
          <StatCard
            icon={happyClientsIcon}
            title="Happy Clients"
            value="100+"
          />
          <StatCard
            icon={projectsDeliveredIcon}
            title="Project Delivered"
            value="150+"
          />
        </div>
      </section>

      <section className="values-section">
        <div className="values-left">
          <ValueItem icon={visionIcon} title="Our Vision" />
          <ValueItem icon={missionIcon} title="Our Mission" />
          <ValueItem icon={commitmentIcon} title="Our Commitment" />
          <ValueItem icon={coreValuesIcon} title="Core Values" />
        </div>
        <div className="values-right">
          <ul>
            <li>
              <strong>Our Vision</strong>
              <p>
                To be a leading force in the IT industry, transforming organizations with innovative solutions and great service. We foresee a future in which technology smoothly integrates into everyday life, allowing businesses to realize their full potential.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PurposeAndFutureSection;