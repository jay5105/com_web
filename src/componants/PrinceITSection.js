import React from 'react';
import './PrinceITSection.css';
import chatIcon from './img/cta-1.webp'; // Update with your image path
import emailIcon from './img/cta-2.webp'; // Update with your image path
import quoteIcon from './img/cta-3.webp'; // Update with your image path

const PrinceITSection = () => {
    return (
      <div className="prince-it-container">
        <div className="prince-it-header">
          <h1>Move Forward With Prince IT</h1>
          <p>Prince IT Solution has a plan for everyone. Choose the one that best fits your business needs.</p>
        </div>
        <div className="prince-it-cards">
          <div className="card-wrapper">
            <div className="card">
              <img src={chatIcon} alt="Chat Icon" className="card-icon" />
            </div>
            <button className="card-button">Chat With Us</button>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img src={emailIcon} alt="Email Icon" className="card-icon" />
            </div>
            <button className="card-button">Email Us</button>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img src={quoteIcon} alt="Quote Icon" className="card-icon" />
            </div>
            <button className="card-button">Get A Quote</button>
          </div>
        </div>
      </div>
    );
  };

export default PrinceITSection;