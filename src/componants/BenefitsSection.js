// BenefitsSection.js
import React, { useState } from 'react';
import './BenefitsSection.css';

// Import your icon images (adjust paths based on your project structure)
// Placeholder imports; replace with actual image paths
import qualifiedExpertsIcon from './img/idea.gif';
import customizedSolutionIcon from './img/coding.gif';
import cuttingEdgeIcon from './img/solution.gif';
import ongoingSupportIcon from './img/24-hours-support.gif';

const BenefitsSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
  
    const benefits = [
      {
        title: 'Qualified Experts',
        description: 'Our team of seasoned professionals brings a wealth of experience in IT consulting, development, and support. We work collaboratively to understand your needs and implement solutions that empower your business.',
        icon: qualifiedExpertsIcon,
      },
      {
        title: 'Customized Solutions',
        description: 'We offer customized IT solutions that align with your unique business goals. From software development to cloud services, we ensure our offerings meet your specific requirements.',
        icon: customizedSolutionIcon,
      },
      {
        title: 'Cutting Edge Technology',
        description: 'At Prince IT Solutions, we leverage the latest technologies to provide state-of-the-art solutions that keep you ahead of the competition. Our focus on innovation ensures that you benefit from the most advanced tools and platforms available.',
        icon: cuttingEdgeIcon,
      },
      {
        title: 'Ongoing Support',
        description: 'We believe in building long-term relationships with our clients. Our ongoing support ensures that your systems run smoothly and efficiently, giving you peace of mind to focus on your core business activities.',
        icon: ongoingSupportIcon,
      },
    ];
  
    const handleMouseEnter = (index) => {
      setHoveredCard(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredCard(null);
    };
  
    return (
      <div className="benefits-section">
        <h1 className="section-title">Benefits of Choosing Prince IT Solution</h1>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-card ${hoveredCard === index ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
              <h2 className="benefit-title">{benefit.title}</h2>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BenefitsSection;   