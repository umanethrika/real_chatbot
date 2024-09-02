import React from 'react';
import './styles/App.css';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ContactForm from './components/ContactForm';
import DescriptionSection from './components/DescriptionSection';

function App() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <HeroSection scrollToFeatures={scrollToFeatures} />
      <FeaturesSection id="features-section" />
      <DescriptionSection />
      <ContactForm />
    </div>
  );
}

export default App;
