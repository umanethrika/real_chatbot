import React from 'react';
import '../styles/HeroSection.css';

function HeroSection({ scrollToFeatures }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Legal Advice Chatbot</h1>
        <p>Listen to your grievances, suggest solutions based on IPCs, and save chat history for future reference.</p>
        <button className="cta-button" onClick={scrollToFeatures}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
