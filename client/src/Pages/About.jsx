import React from 'react';
import { Target, Award, Zap, Users, ShieldCheck, Globe } from 'lucide-react';
import './PageStyle.css'; // We will create this CSS file below

const About = () => {
  return (
    <div className="page-container">
      {/* HERO SECTION */}
      <div className="page-hero about-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">BEYOND THE LIMITS</h1>
          <p className="hero-subtitle">Redefining the way you discover, build, and experience dream cars.</p>
        </div>
      </div>

      <div className="page-content">
        {/* MISSION SECTION */}
        <div className="mission-section">
          <div className="mission-text">
            <h2 className="section-title"><Target className="text-gold" size={28} /> OUR MISSION</h2>
            <p>
              Born from a pure passion for automotive engineering, our platform was created to bridge the gap 
              between gearheads and their ultimate dream machines. Whether you are hunting for a rare vintage classic 
              or configuring a modern hypercar, we provide the most immersive, data-driven experience on the web.
            </p>
            <p>
              We pull real-time data, performance metrics, and historic archives to give you the keys to the world's 
              most exclusive garages.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat-card">
              <h3 className="text-cyan">500+</h3>
              <span>Cars in Database</span>
            </div>
            <div className="stat-card">
              <h3 className="text-gold">50+</h3>
              <span>Iconic Brands</span>
            </div>
            <div className="stat-card">
              <h3 className="text-purple">10k+</h3>
              <span>Custom Builds</span>
            </div>
          </div>
        </div>

        {/* CORE VALUES */}
        <h2 className="section-title center-title"><Award className="text-cyan" size={28} /> WHY CHOOSE US</h2>
        <div className="values-grid">
          <div className="value-card">
            <Zap size={32} className="text-gold mb-3" />
            <h4>Real-Time Configuration</h4>
            <p>Experience live visual updates and performance metric calculations as you build your dream car.</p>
          </div>
          <div className="value-card">
            <Globe size={32} className="text-cyan mb-3" />
            <h4>Global Database</h4>
            <p>From JDM legends to European exotics, our MongoDB-powered catalog spans the entire globe.</p>
          </div>
          <div className="value-card">
            <ShieldCheck size={32} className="text-purple mb-3" />
            <h4>Verified Specs</h4>
            <p>Every horsepower, 0-100 time, and top speed is meticulously verified for ultimate accuracy.</p>
          </div>
          <div className="value-card">
            <Users size={32} className="text-gold mb-3" />
            <h4>Community Driven</h4>
            <p>Save your builds locally or share them with an ecosystem of fellow automotive enthusiasts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;