import React from 'react';
import './ServiceSection.css';
import WebDevelopment from './img/service-web-development.webp';
import UIUX from './img/service-ui-ux-design.webp';
import DigitalMarketing from './img/service-digital-marketing.webp';
import AppDevelopment from './img/service-mobile-app.webp';
import DigitalWorld from './img/digital-world.webp';

const ServiceSection = () => {
  return (
    <div className="service-section">
      <header className="section-header">
        <h1>Our Services</h1>
        <p>Delivering tailored technology solutions to empower your business.</p>
      </header>
      <div className="services-grid">
        <div className="service-card">
          <img src={WebDevelopment} alt="Web Development" className="service-icon" />
          <h3>Web Development</h3>
          <p>Our team of experienced web developers creates fast, scalable, and SEO-friendly websites tailored to meet your business goals. We ensure responsive design, clean code, and optimal user experience.</p>
        </div>
        <div className="service-card">
          <img src={UIUX} alt="UI/UX Design" className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>We provide innovative UI/UX design solutions with our expert team here to help. Let’s take the next step together and make your vision a reality.</p>
        </div>
        <div className="service-card">
          <img src={DigitalMarketing} alt="Digital Marketing" className="service-icon" />
          <h3>Digital Marketing</h3>
          <p>Boost your online presence with our comprehensive digital marketing solutions. We specialize in SEO, PPC, social media marketing, content marketing, and increase conversions.</p>
        </div>
        <div className="service-card">
          <img src={AppDevelopment} alt="App Development" className="service-icon" />
          <h3>App Development</h3>
          <p>We develop high-performance apps tailored to your needs, ensuring a seamless and engaging user experience.</p>
        </div>
      </div>
      <div className="call-to-action">
        <div className="cta-content">
          <h2>Ready To Transform Your Digital World?</h2>
          <p>At Prince IT Solution, we are committed to driving your business forward with innovative technology solutions. Whether you're looking to enhance your website, develop a new app, or improve your digital marketing strategy, our expert team is here to help. Let’s take the next step together and make your vision a reality.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
        <img src={DigitalWorld} alt="Digital Transformation Illustration" className="illustration" />
      </div>
    </div>
  );
};

export default ServiceSection;