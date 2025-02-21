import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Header';
import Footer from './componants/Footer';
import PrinceIT from './componants/Heropage';
import CombinedSection from './componants/StatsSection';

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Navbar />  
      <PrinceIT />
      <CombinedSection />
      <Footer />
    </div>
  );
}

export default App;
