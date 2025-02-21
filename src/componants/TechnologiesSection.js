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

const TechnologiesSection = () => {
    const [hoveredTech, setHoveredTech] = useState(null);
  
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
  
    const handleMouseEnter = (tech) => {
      setHoveredTech(tech);
    };
  
    const handleMouseLeave = () => {
      setHoveredTech(null);
    };
  
    return (
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
    );
  };
  
  export default TechnologiesSection;