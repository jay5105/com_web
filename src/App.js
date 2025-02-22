import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Header';
import Footer from './componants/Footer';
import PrinceIT from './componants/Heropage';
import CombinedSection from './componants/StatsSection';
import TechnologiesSection from './componants/TechnologiesSection';
import BenefitsSection from './componants/BenefitsSection';
import ServiceSection from './componants/ServiceSection';
import IndustriesSection from './componants/IndustriesSection';

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Navbar />  
      <PrinceIT />
      <CombinedSection />
      <TechnologiesSection />
      <BenefitsSection />
      <ServiceSection />
      <IndustriesSection />
      <Footer />
    </div>
  );
}

export default App;
