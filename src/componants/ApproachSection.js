// import React from 'react';
// import './ApproachSection.css';
// import Analysis from './img/approch/Mask group.png';
// import Strategizing from './img/approch/1.png';
// import Design from './img/approch/2.png';
// import AgileDevelopment from './img/approch/3.png';
// import RigorousTesting from './img/approch/4.png';
// import Maintenance from './img/approch/5.png';
// import Ecommerce from './img/approch/E commerce.png';
// import Education from './img/approch/Education.png';
// import Healthcare from './img/approch/Healthcare.png';
// import Logistics from './img/approch/logistics.png';

// const ApproachCard = ({ number, title, description, image }) => (
//   <div className="approach-card">
//     <div className="approach-number">{number}</div>
//     <div className="approach-icon">
//       <img src={image} alt={`${title} icon`} />
//     </div>
//     <h3>{title}</h3>
//     <p>{description}</p>
//   </div>
// );

// const IndustryCard = ({ title, image }) => (
//   <div className="industry-card">
//     <div className="industry-image">
//       <img src={image} alt={`${title} illustration`} />
//       <div className="overlay">
//       </div>
//     </div>
//     <h4>{title}</h4>
//   </div>
// );

// const ApproachSection = () => {
//   return (
//     <div className="approach-section">
//       {/* Our Approach Section */}
//       <div className="approach-header">
//         <h2>Our Approach</h2>
//         <p>Delivering tailored technology solutions to empower your business.</p>
//       </div>
//       <div className="approach-grid">
//         <ApproachCard
//           number="1"
//           title="Analysis"
//           description="Analysis of clients' unique requirements and objectives. Conduct detailed discussions and gather specific information about their business needs and target audience."
//           image={Analysis}
//         />
//         <ApproachCard
//           number="2"
//           title="Strategizing"
//           description="Formulate a comprehensive plan and strategy for efficient project execution. Define project milestones, establish timelines, and allocate necessary resources."
//           image={Strategizing}
//         />
//         <ApproachCard
//           number="3"
//           title="Design"
//           description="By conducting thorough research on the target audience, their preferences, and industry trends, we craft visually appealing and highly functional interfaces to provide a seamless user experience."
//           image={Design}
//         />
//         <ApproachCard
//           number="4"
//           title="Agile Development"
//           description="We employ an agile development methodology, utilizing smaller iterations, regular reviews, and feedback sessions to adapt to changing requirements, ensuring flexibility, collaboration, and faster delivery."
//           image={AgileDevelopment}
//         />
//         <ApproachCard
//           number="5"
//           title="Rigorous Testing"
//           description="Ensure high-quality and reliable final product through comprehensive testing, addressing bugs, and optimizing performance across platforms for security and optimal functionality."
//           image={RigorousTesting}
//         />
//         <ApproachCard
//           number="6"
//           title="Maintenance"
//           description="Assist with the smooth deployment of the solution. Provide ongoing technical support and maintenance services for the projects' long-term success."
//           image={Maintenance}
//         />
//       </div>

//       {/* Diverse Industry Experience Section */}
//       <div className="industry-section">
//         <div className="industry-header">
//           <h2>Diverse Industry Experience To Accelerate Your Business Outcomes</h2>
//           <p>
//             Diversity unlocks innovation and drives market growth. You'll be able to create programs, projects, and public spaces that better meet the community's interests and needs.
//           </p>
//         </div>
//         <div className="industry-grid">
//           <IndustryCard title="Ecommerce" image={Ecommerce} />
//           <IndustryCard title="Education" image={Education} />
//           <IndustryCard title="Healthcare" image={Healthcare} />
//           <IndustryCard title="Logistics" image={Logistics} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApproachSection;


import React, { useState } from 'react';
import './ApproachSection.css';
import Analysis from './img/approch/Mask group.png';
import Strategizing from './img/approch/1.png';
import Design from './img/approch/2.png';
import AgileDevelopment from './img/approch/3.png';
import RigorousTesting from './img/approch/4.png';
import Maintenance from './img/approch/5.png';
import Industry1 from './img/approch/E commerce.png'; // Replace with actual image paths
import Industry2 from './img/approch/Education.png';
import Industry3 from './img/approch/Fintech.png';
import Industry4 from './img/approch/Fitness.png';
import Industry5 from './img/approch/Healthcare.png';
import Industry6 from './img/approch/Hospitality & Travel.png';
import Industry7 from './img/approch/Lifestyle.png';
import Industry8 from './img/approch/Manufacturing.png';
import Industry9 from './img/approch/Real Estate.png';
import Industry10 from './img/approch/Media & Entertainment.png';
import Industry11 from './img/approch/logistics.png';
import Industry12 from './img/approch/Sport.png';



const ApproachCard = ({ number, title, description, image }) => (
  <div className="approach-card">
    <div className="approach-number">{number}</div>
    <div className="approach-icon">
      <img src={image} alt={`${title} icon`} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const IndustryCard = ({ title, image }) => (
  <div className="industry-card">
    <div className="industry-image">
      <img src={image} alt={`${title} illustration`} />
    </div>
    <h4>{title}</h4>
  </div>
);

const ApproachSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const industries = [
    { title: "Industry 1", image: Industry1 },
    { title: "Industry 2", image: Industry2 },
    { title: "Industry 3", image: Industry3 },
    { title: "Industry 4", image: Industry4 },
    { title: "Industry 5", image: Industry5 },
    { title: "Industry 6", image: Industry6 },
    { title: "Industry 7", image: Industry7 },
    { title: "Industry 8", image: Industry8 },
    { title: "Industry 9", image: Industry9 },
    { title: "Industry 10", image: Industry10 },
    { title: "Industry 11", image: Industry11 },
    { title: "Industry 12", image: Industry12 },
  ];
  const slidesToShow = 4; // Explicitly set to 4 images at a time
  const totalSlides = Math.ceil(industries.length / slidesToShow); // 12 / 4 = 3 slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="approach-section">
      {/* Our Approach Section */}
      <div className="approach-header">
        <h2>Our Approach</h2>
        <p>Delivering tailored technology solutions to empower your business.</p>
      </div>
      <div className="approach-grid">
        <ApproachCard
          number="1"
          title="Analysis"
          description="Analysis of clients' unique requirements and objectives. Conduct detailed discussions and gather specific information about their business needs and target audience."
          image={Analysis}
        />
        <ApproachCard
          number="2"
          title="Strategizing"
          description="Formulate a comprehensive plan and strategy for efficient project execution. Define project milestones, establish timelines, and allocate necessary resources."
          image={Strategizing}
        />
        <ApproachCard
          number="3"
          title="Design"
          description="By conducting thorough research on the target audience, their preferences, and industry trends, we craft visually appealing and highly functional interfaces to provide a seamless user experience."
          image={Design}
        />
        <ApproachCard
          number="4"
          title="Agile Development"
          description="We employ an agile development methodology, utilizing smaller iterations, regular reviews, and feedback sessions to adapt to changing requirements, ensuring flexibility, collaboration, and faster delivery."
          image={AgileDevelopment}
        />
        <ApproachCard
          number="5"
          title="Rigorous Testing"
          description="Ensure high-quality and reliable final product through comprehensive testing, addressing bugs, and optimizing performance across platforms for security and optimal functionality."
          image={RigorousTesting}
        />
        <ApproachCard
          number="6"
          title="Maintenance"
          description="Assist with the smooth deployment of the solution. Provide ongoing technical support and maintenance services for the projects' long-term success."
          image={Maintenance}
        />
      </div>

      {/* Diverse Industry Experience Section */}
      <div className="industry-section">
        <div className="industry-header">
          <h2>Diverse Industry Experience To Accelerate Your Business Outcomes</h2>
          <p>
            Diversity unlocks innovation and drives market growth. You'll be able to create programs, projects, and public spaces that better meet the community's interests and needs.
          </p>
        </div>
        <div className="slider-container">
          <button className="slider-button prev" onClick={prevSlide}>
            ❮
          </button>
          <div className="industry-slider">
            <div
              className="industry-slide"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {industries.map((industry, index) => (
                <IndustryCard key={index}  image={industry.image} />
              ))}
            </div>
          </div>
          <button className="slider-button next" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;