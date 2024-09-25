import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-image">
          <img src="https://i.pinimg.com/236x/5f/35/82/5f358265c7a3e7c202194205c2026ac6.jpg" alt="Crafts" />
        </div>
        <div className="hero-text">
          <h2 className="hero-title">Welcome to Our Handmade Craft Marketplace</h2>
          <p className="hero-subtitle">Discover unique and beautiful handmade items crafted with love.</p>
          <div className="hero-buttons">
            <button className="login-button" onClick={() => navigateTo('/login')}>Login</button>
            <button className="signup-button" onClick={() => navigateTo('/signup')}>Sign Up</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
