import React from 'react';
import ReactDOM from 'react-dom';
import 'primereact/resources/themes/saga-blue/theme.css';  // PrimeReact theme
import 'primereact/resources/primereact.min.css';          // Core PrimeReact styles
import 'primeicons/primeicons.css';                        // PrimeIcons
import 'primeflex/primeflex.css';                          // PrimeFlex for layout
import './App1.css';  
import './App2.css'; 

                               
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutusSection';       // Fixed casing in filename
import ComiteSection from './components/ComiteSection'; 
import ExecutiveBoard from './components/ExecutiveBoard';  // Removed redundant ComiteComponent import
import JidChiffres from './components/JidChiffres';  


const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ComiteSection /> 
      <JidChiffres />
      <ExecutiveBoard />
     

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root')); // Ensured single quotes for consistency

export default App;
