import React from 'react';
import { Shield, EyeOff, Database, Cookie, Lock } from 'lucide-react';
import './LegalPages.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-icon-wrap">
          <Shield size={32} />
        </div>
        <h1 className="legal-title">PRIVACY POLICY</h1>
        <p className="legal-updated">Last Updated: October 24, 2024</p>
      </div>

      <div className="legal-content">
        <div className="legal-section">
          <div className="legal-section-header">
            <EyeOff className="text-cyan-400" size={24} />
            <h2>1. Information We Collect</h2>
          </div>
          <p className="legal-text">
            We prioritize your privacy. Currently, E-Garage functions primarily as a local application. We do not require you to create an account 
            to browse vehicles or build dream cars.
          </p>
          <ul className="legal-list">
            <li><strong>Personal Data:</strong> We do not collect your name, email, or address unless you explicitly contact us.</li>
            <li><strong>Usage Data:</strong> We may collect anonymous analytics (like pages visited) to improve our platform.</li>
          </ul>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <Database className="text-gold" size={24} />
            <h2>2. Local Storage & "My Garage"</h2>
          </div>
          <p className="legal-text">
            When you use the "Make Your Dream Car" feature or add cars to your wishlist, that data is saved entirely in your browser's 
            <strong> Local Storage</strong>. It is not sent to our servers, meaning you have full control over this data and can delete it 
            simply by clearing your browser cache.
          </p>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <Cookie className="text-purple-400" size={24} />
            <h2>3. Cookies</h2>
          </div>
          <p className="legal-text">
            We use minimal cookies strictly necessary for the website to function (e.g., remembering your theme preference or basic session state). 
            We do not use third-party advertising trackers.
          </p>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <Lock className="text-green-400" size={24} />
            <h2>4. Data Security</h2>
          </div>
          <p className="legal-text">
            Any communication between your browser and our MongoDB database (for fetching car catalogs) is encrypted using standard SSL/TLS protocols.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;