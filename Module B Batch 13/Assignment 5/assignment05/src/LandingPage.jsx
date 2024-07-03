import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <header className="header">
          <div className="brand-logo">
            <div className="logo-shape"></div>
            <span className="brand-name">BRAND NAME</span>
          </div>
          <nav className="nav">
            <a href="#about-us">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#search" className="search-icon">&#128269;</a>
          </nav>
        </header>
        <div className="main-content">
          <h1 className="title">Creative. Landing Page</h1>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisc</p>
          <div className="extra-info">
            <span>4K</span>
            <span>-</span>
            <span>Layout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
