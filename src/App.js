import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Header';
import Footer from './componants/Footer';

import Hero from './componants/Hero';
import WhyPrinceIT from './componants/WhyPrinceIT';
import ServiceSection from './componants/ServiceSection';
import ApproachSection from './componants/ApproachSection';
import TechnologiesSection from './componants/TechnologiesSection';
import BlogAndContactSection from './componants/BlogAndContactSection';

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Navbar />  
      <Hero />
      <WhyPrinceIT />
      <ServiceSection />
      <ApproachSection />
      <TechnologiesSection />
      <BlogAndContactSection />
      <Footer />
    </div>
  );
}

export default App;
