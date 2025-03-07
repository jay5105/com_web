// TechnologiesSection.js
import React, { useState } from 'react';
import './TechnologiesSection.css';

// Import your icon images (adjust paths based on your project structure)
import iosIcon from './img/mobile-1.webp';
import androidIcon from './img/mobile-2.webp';
import flutterIcon from './img/mobile-3.webp';
import reactNativeIcon from './img/mobile-4.webp';
import htmlIcon from './img/front-1.webp';
import cssIcon from './img/front-2.webp';
import reactIcon from './img/front-3.webp';
import vueIcon from './img/front-4.webp';
import nextjsIcon from './img/front-5.webp';
import nuxtjsIcon from './img/front-6.webp';
import nodeIcon from './img/backend-1.webp';
import laravelIcon from './img/backend-2.webp';
import pythonIcon from './img/backend-3.webp';
import railsIcon from './img/backend-4.webp';
import wordpressIcon from './img/backend-5.webp';
import quesarIcon from './img/backend-6.webp';
import figmaIcon from './img/ui-1.webp';
import photoshopIcon from './img/ui-2.webp';
import illustratorIcon from './img/ui-3.webp';
import afterEffectsIcon from './img/ui-4.webp';
import sketchIcon from './img/ui-5.webp';
import canvaIcon from './img/ui-6.webp';

// Import the map image
import mapBackground from './img/Page-1.png'; // Adjust the path to your map image

// Import client images
import clientImage1 from './img/alexander-hipp-iEEBWgY_6lA-unsplash.png'; // Adjust paths
import clientImage2 from './img/alexander-hipp-iEEBWgY_6lA-unsplash.png';
import clientImage3 from './img/alexander-hipp-iEEBWgY_6lA-unsplash.png';

// Import journey section icons
import trophyIcon from './img/Mask1.png'; // Adjust paths
import itExpertIcon from './img/Mask2.png';
import happyClientsIcon from './img/Mask3.png';
import projectDeliveredIcon from './img/Mask4.png';

const TechnologiesSection = () => {
    const [hoveredTech, setHoveredTech] = useState(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
    // Data for technologies with image paths
    const technologies = {
      Mobile: [
        { name: 'iOS', icon: iosIcon },
        { name: 'Android', icon: androidIcon },
        { name: 'Flutter', icon: flutterIcon },
        { name: 'React Native', icon: reactNativeIcon },
      ],
      Frontend: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Vue', icon: vueIcon },
        { name: 'Next.js', icon: nextjsIcon },
        { name: 'Nuxt.js', icon: nuxtjsIcon },
      ],
      Backend: [
        { name: 'Node.js', icon: nodeIcon },
        { name: 'Laravel', icon: laravelIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'Rails', icon: railsIcon },
        { name: 'WordPress', icon: wordpressIcon },
        { name: 'Quesar', icon: quesarIcon },
      ],
      'UI Design': [
        { name: 'Figma', icon: figmaIcon },
        { name: 'Photoshop', icon: photoshopIcon },
        { name: 'Illustrator', icon: illustratorIcon },
        { name: 'After Effects', icon: afterEffectsIcon },
        { name: 'Sketch', icon: sketchIcon },
        { name: 'Canva', icon: canvaIcon },
      ],
    };
  
    // Testimonials data
    const testimonials = [
      {
        image: clientImage1,
        text: "Great developer and understanding and very honest person to work with, he will make sure you are happy before taking your money. Worth giving a try to this man, would work again.",
        name: "Lorem Ipsum",
        title: "Canada",
      },
      {
        image: clientImage2,
        text: "Amazing service! The team was professional and delivered beyond my expectations. Highly recommend!",
        name: "Jane Doe",
        title: "USA",
      },
      {
        image: clientImage3,
        text: "Excellent communication and top-notch quality. Will definitely hire again for future projects.",
        name: "John Smith",
        title: "UK",
      },
    ];
  
    const handleMouseEnter = (tech) => {
      setHoveredTech(tech);
    };
  
    const handleMouseLeave = () => {
      setHoveredTech(null);
    };
  
    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
    return (
      <div>
        {/* Technologies Section */}
        <div className="technologies-section">
          <h1 className="section-title">Technologies We Work With</h1>
          <p className="section-description">
            Our skilled development team uses the newest technology to turn your concepts into amazing apps and software.
          </p>
          
          <div className="tech-categories">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="tech-category">
                <h2 className="category-title">{category}</h2>
                <div className="tech-icons">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="tech-icon"
                      onMouseEnter={() => handleMouseEnter(tech)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img src={tech.icon} alt={tech.name} className="tech-image" />
                      {hoveredTech && hoveredTech.name === tech.name && (
                        <div className="tooltip">
                          {tech.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Journey Section with Full Map Background */}
        <div 
          className="journey-section" 
          style={{ backgroundImage: `url(${mapBackground})` }}
        >
          <h1 className="journey-title">Our Journey</h1>
          <p className="journey-description">
            A journey is never measured by the miles you have traveled or the path you have taken, but by the marks that you left behind while walking to the destination. Here are the proud marks we left.
          </p>
          <div className="journey-stats">
            <div className="stat-item">
              <img src={trophyIcon} alt="Years of Excellence" className="stat-icon" />
              <h2 className="stat-value">2+</h2>
              <p className="stat-label">Years of Excellence</p>
            </div>
            <div className="stat-item">
              <img src={itExpertIcon} alt="IT Expert" className="stat-icon" />
              <h2 className="stat-value">10+</h2>
              <p className="stat-label">IT Expert</p>
            </div>
            <div className="stat-item">
              <img src={happyClientsIcon} alt="Happy Clients" className="stat-icon" />
              <h2 className="stat-value">100+</h2>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <img src={projectDeliveredIcon} alt="Project Delivered" className="stat-icon" />
              <h2 className="stat-value">150+</h2>
              <p className="stat-label">Project Delivered</p>
            </div>
          </div>
        </div>

        {/* What Our Client Says Section with Slider */}
        <div className="testimonials-section">
          <h1 className="testimonials-title">What Our Client Says</h1>
          <p className="testimonials-description">
            Our clients send us bunch of smiles with our services and we love them
          </p>
          <div className="testimonial-carousel">
            <div className="carousel-arrow left-arrow" onClick={prevTestimonial}>⟵</div>
            <div className="testimonial-item">
              <img src={testimonials[currentTestimonial].image} alt="Client" className="client-image" />
              <p className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </p>
              <p className="client-name">{testimonials[currentTestimonial].name}</p>
              <p className="client-title">{testimonials[currentTestimonial].title}</p>
            </div>
            <div className="carousel-arrow right-arrow" onClick={nextTestimonial}>⟶</div>
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TechnologiesSection;