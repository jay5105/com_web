import React from 'react';
import './ServiceSection.css';
import WebDevelopment from './img/service-web-development.webp';
import UIDesign from './img/service-ui-ux-design.webp';
import DigitalMarketing from './img/service-digital-marketing.webp';
import MobileApp from './img/service-mobile-app.webp';
import WorkplaceIllustration from './img/ourservices/5.png';

const ServiceCard = ({ title, description, image }) => (
  <div className="service-card">
    <div className="service-icon">
      <img src={image} alt={`${title} icon`} />
    </div>
    <h3>{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const ServiceSection = () => {
  return (
    <div className="service-section">
      {/* Our Services Section */}
      <div className="services-header">
        <h2>OUR SERVICES</h2>
        <p>Delivering tailored technology solutions to empower your business.</p>
      </div>
      <div className="services-grid">
        <ServiceCard
          title="Web Development"
          description="Our team of seasoned professionals..."
          image={WebDevelopment}
        />
        <ServiceCard
          title="UI/UX Design"
          description="We offer customized IT solutions..."
          image={UIDesign}
        />
        <ServiceCard
          title="Digital Marketing"
          description="We specialize in crafting custom, responsive websites and web applications that enhance your online presence. Our expert team delivers innovative and scalable solutions tailored to your business needs."
          image={DigitalMarketing}
        />
        <ServiceCard
          title="Mobile App Development"
          description="We believe in building long term..."
          image={MobileApp}
        />
      </div>

      {/* We Do As an Enterprise Software Company Section */}
      <div className="enterprise-section">
        <div className="enterprise-image">
          <img
            src={WorkplaceIllustration}
            alt="Professional working at desk"
            width="630"
            height="419"
          />
        </div>
        <div className="enterprise-content">
          <h2>We Do As an Enterprise Software Company</h2>
          <h3>
            Prince IT Solution – An Enterprise Software Company, has expertise in
            key technological domains. Over the decade, we have been servicing
            our clients in a very significant area of many business models.
          </h3>
          <p className="phone-number">630-419.9</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;