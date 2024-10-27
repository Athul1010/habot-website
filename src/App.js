import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Opportunity from './Components/Opportunity';
import Requirements from './Components/Requirements';
import Verify from './Components/Verify';
import Work from './Components/Work';
import Footer from './Components/Footer';

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS on component update
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Opportunity />
      <Requirements />
      <Verify />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
