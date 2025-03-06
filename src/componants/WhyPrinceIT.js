// WhyPrinceIT.js
import React from 'react';
import './WhyPrinceIT.css';


import qualifiedExpertsIcon from './img/whyprinceit/output-onlinegiftools.gif'; 
import customizedSolutionIcon from './img/whyprinceit/output-onlinegiftools (1).gif';
import cuttingEdgeTechIcon from './img/whyprinceit/output-onlinegiftools (2).gif';
import ongoingSupportIcon from './img/whyprinceit/output-onlinegiftools (3).gif';
import businessEthicsGraphic from './img/whyprinceit/Group 1410144632.png'; 

const WhyPrinceIT = () => {
  const features = [
    {
      icon: qualifiedExpertsIcon,
      heading: 'Qualified Experts',
      description:
        'Our team of seasoned professionals brings a wealth of experience in IT consulting, development, and support. We work collaboratively to understand your needs and implement solutions that empower your business.',
    },
    {
      icon: customizedSolutionIcon,
      heading: 'Customized Solution',
      description:
        'We offer customized IT solutions that align with your unique business goals. From software development to IT services, we ensure our offerings are designed to meet your specific requirements.',
    },
    {
      icon: cuttingEdgeTechIcon,
      heading: 'Cutting Edge Technology',
      description:
        'Our team of seasoned professionals brings a wealth of experience in IT consulting, development, and support. We work collaboratively to understand your needs and implement solutions.',
    },
    {
      icon: ongoingSupportIcon,
      heading: 'Ongoing Support',
      description:
        'We believe in building long-term relationships with our clients. Our ongoing support ensures that your systems run smoothly and efficiently, giving you peace of mind to focus on your core business activities.',
    },
  ];

  return (
    <section className="why-prince-it">
      <div className="container">
        {/* Heading and Subheading */}
        <div className="section-header">
          <h2 className="section-heading">Why Prince IT?</h2>
          <p className="section-subheading">
            At Prince IT Solution, we are dedicated to providing cutting-edge software solutions that are tailored to meet your specific business needs. Our innovative approach ensures that your digital projects are handled with precision and excellence, from web development to app creation.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.heading} />
              </div>
              <h3 className="feature-heading">{feature.heading}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Business Ethics Section */}
        <div className="business-ethics">
          <div className="ethics-graphic">
            <img src={businessEthicsGraphic} alt="Business Ethics" />
          </div>
          <div className="ethics-text">
            <h3 className="ethics-heading">Innovative Approaches</h3>
            <p className="ethics-description">
              With a team of talented professionals, cutting-edge technology, and a customer-centric approach, We, as an IT solutions provider, are dedicated to delivering exceptional results and empowering our clients’ success. Our Solutions Innovator designation signifies our role as a trusted partner in fostering growth and uncovering fresh possibilities for our clients, encompassing revolutionary product design, process optimization, and enhanced operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrinceIT;