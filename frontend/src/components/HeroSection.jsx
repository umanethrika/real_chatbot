import React from 'react';
import './styles/HeroSection.css';
import { useNavigate } from 'react-router-dom'; // Importing navigation for sign-in

function HeroSection({ scrollToFeatures }) {
  const navigate = useNavigate(); // Hook for navigation

  const handleSignInClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Legal Advice Chatbot</h1>
        <p>Listen to your grievances, suggest solutions based on IPCs, and save chat history for future reference.</p>
        <div className="button-group">
          <button className="cta-button" onClick={scrollToFeatures}>
            Get Started
          </button>
          <button className="signin-button" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
