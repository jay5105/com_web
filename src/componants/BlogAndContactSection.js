import React from 'react';
import './BlogAndContactSection.css';

// Replace these image imports with your actual image file paths or URLs
import whyChooseImage from './img/blog/image1.png'; // Update with your image path
import stayHealthyImage from './img/blog/image2.png'; // Update with your image path
import investWebsiteImage from './img/blog/image3.png'; // Update with your image path
import chatIconImage from './img/blog/1.png'; // Update with your chat icon image path
import locationIconImage from './img/blog/2.png'; // Update with your location icon image path
import callIconImage from './img/blog/3.png'; // Update with your call icon image path

const BlogCard = ({ title, description, date, imageUrl }) => (
  <div className="blog-card">
    <img src={imageUrl} alt={title} className="blog-image" />
    <div className="blog-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="date">{date}</p>
    </div>
  </div>
);

const ContactCard = ({ iconImage, title, content }) => (
  <div className="contact-card">
    <img src={iconImage} alt={title} className="contact-icon" />
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

const BlogAndContactSection = () => {
  return (
    <div className="container">
      <section className="blogs-section">
        <h2>Related Blogs & Articles✨</h2>
        <div className="blogs-grid">
          <BlogCard
            title="Why Choose Prince IT Solution?"
            description="Learn how to integrate OpenAI API into your app easy steps. Understand the costs, timelines, and benefits of AI integration for business."
            date="Dec 6, 2024"
            imageUrl={whyChooseImage}
          />
          <BlogCard
            title="Stay Healthy With Expert Care"
            description="Learn how to integrate OpenAI API into your app in easy steps. Understand the costs, timelines, and benefits of AI integration for business."
            date="Dec 6, 2024"
            imageUrl={stayHealthyImage}
          />
          <BlogCard
            title="Invest in a Strong Website to Jumpstart Your Internet Success"
            description="Learn how to integrate OpenAI API into your app in easy steps. Understand the costs, timelines, and benefits of AI integration for business."
            date="Dec 6, 2024"
            imageUrl={investWebsiteImage}
          />
        </div>
      </section>

      <section className="empower-section">
        <h2>Empower Your Business With Prince IT</h2>
        <p>Prince IT Solution has a plan for everyone. Choose the one that best fits your business needs.</p>
        <div className="contact-grid">
          <ContactCard
            iconImage={chatIconImage}
            title="Chat To Support"
            content="We are here to support. Support@princeitsolution.com"
          />
          <ContactCard
            iconImage={locationIconImage}
            title="Visit us"
            content="Visit our office Prince IT Solution. View On Google Map"
          />
          <ContactCard
            iconImage={callIconImage}
            title="Call us"
            content="Mon-Fri from 9am to 6pm. +91 902376107"
          />
        </div>
      </section>
    </div>
  );
};

export default BlogAndContactSection;