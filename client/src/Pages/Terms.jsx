import React from 'react';
import { FileText, Scale, Car, ShieldAlert, Copyright } from 'lucide-react';
import './LegalPages.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-icon-wrap">
          <FileText size={32} />
        </div>
        <h1 className="legal-title">TERMS OF SERVICE</h1>
        <p className="legal-updated">Last Updated: October 24, 2024</p>
      </div>

      <div className="legal-content">
        <div className="legal-section">
          <div className="legal-section-header">
            <Scale className="text-cyan-400" size={24} />
            <h2>1. Acceptance of Terms</h2>
          </div>
          <p className="legal-text">
            By accessing and using E-Garage and the Dream Car Builder, you accept and agree to be bound by the terms and provision of this agreement. 
            These terms apply to all visitors, users, and others who access the service.
          </p>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <Car className="text-gold" size={24} />
            <h2>2. Vehicle Data & Estimates</h2>
          </div>
          <p className="legal-text">
            All vehicle specifications, performance metrics (HP, Top Speed, 0-100), and pricing data provided on our platform are for 
            <strong> informational and entertainment purposes only</strong>.
          </p>
          <ul className="legal-list">
            <li><strong>Prices:</strong> Estimated values subject to market fluctuations.</li>
            <li><strong>Specs:</strong> Based on factory claims; real-world performance may vary.</li>
            <li><strong>Availability:</strong> Listing a car does not guarantee its availability for purchase.</li>
          </ul>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <Copyright className="text-purple-400" size={24} />
            <h2>3. Intellectual Property</h2>
          </div>
          <p className="legal-text">
            All car images, brand logos, and trademarks displayed on this site are the property of their respective owners (e.g., Lamborghini, Porsche, Ferrari). 
            E-Garage does not claim ownership of these trademarks. They are used purely for cataloging and configuration visualization.
          </p>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <ShieldAlert className="text-red-400" size={24} />
            <h2>4. Limitation of Liability</h2>
          </div>
          <p className="legal-text">
            E-Garage shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability 
            to use our services. Your custom "Dream Builds" are saved locally on your device and may be lost if browser data is cleared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;