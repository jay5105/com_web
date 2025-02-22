import React from 'react';
import './IndustriesSection.css';

import Banking from './img/Industries/Banking-Finance 1.svg';
import Hotel from './img/Industries/hotel.svg';
import Retail from './img/Industries/e-commerce 1.svg';
import Media from './img/Industries/media 1.svg';
import Logistic from './img/Industries/logistic.svg';
import Manufacturing from './img/Industries/Manufacturing.svg';
import Energy from './img/Industries/Energy.svg';
import Lifestyle from './img/Industries/Lifestyle Industry.svg';
import RealEstate from './img/Industries/Real-Estate 1.svg';
import Education from './img/Industries/Education 1.svg';
import Fitness from './img/Industries/fitness 1.svg';
import Travel from './img/Industries/Travel 1.svg';
import Sport from './img/Industries/Sport 1.svg';
import Healthcare from './img/Industries/health-care 1.svg';

const IndustriesSection = () => {
  return (
    <div className="industries-section">
      <header className="section-header">
        <h1>We Serve All Industries</h1>
        <p>Our services cater to diverse industries, ensuring comprehensive support for businesses across the board.</p>
      </header>
      <div className="industries-grid">
        <div className="industry-card banking-finance">
          <img src={Banking} alt="Banking & Finance" className="industry-icon" />
          <p>Banking & Finance</p>
        </div>
        <div className="industry-card hotel-restaurants">
          <img src={Hotel} alt="Hotel & Restaurants" className="industry-icon" />
          <p>Hotel & Restaurants</p>
        </div>
        <div className="industry-card retail-ecommerce">
          <img src={Retail} alt="Retail & E-commerce" className="industry-icon" />
          <p>Retail & E-commerce</p>
        </div>
        <div className="industry-card media-entertainment">
          <img src={Media} alt="Media & Entertainment" className="industry-icon" />
          <p>Media & Entertainment</p>
        </div>
        <div className="industry-card logistic">
          <img src={Logistic} alt="Logistic" className="industry-icon" />
          <p>Logistic</p>
        </div>
        <div className="industry-card manufacturing">
          <img src={Manufacturing} alt="Manufacturing" className="industry-icon" />
          <p>Manufacturing</p>
        </div>
        <div className="industry-card energy">
          <img src={Energy} alt="Energy" className="industry-icon" />
          <p>Energy</p>
        </div>
        <div className="industry-card lifestyle-industry">
          <img src={Lifestyle} alt="Lifestyle Industry" className="industry-icon" />
          <p>Lifestyle Industry</p>
        </div>
        <div className="industry-card real-estate">
          <img src={RealEstate} alt="Real Estate" className="industry-icon" />
          <p>Real Estate</p>
        </div>
        <div className="industry-card education">
          <img src={Education} alt="Education" className="industry-icon" />
          <p>Education</p>
        </div>
        <div className="industry-card fitness">
          <img src={Fitness} alt="Fitness" className="industry-icon" />
          <p>Fitness</p>
        </div>
        <div className="industry-card travel-tourism">
          <img src={Travel} alt="Travel & Tourism" className="industry-icon" />
          <p>Travel & Tourism</p>
        </div>
        <div className="industry-card sport">
          <img src={Sport} alt="Sport" className="industry-icon" />
          <p>Sport</p>
        </div>
        <div className="industry-card healthcare">
          <img src={Healthcare} alt="Healthcare" className="industry-icon" />
          <p>Healthcare</p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;