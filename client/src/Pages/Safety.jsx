import React from 'react';
import { AlertTriangle, Key, Search, BadgeCheck, FileWarning } from 'lucide-react';
import './LegalPages.css';

const Safety = () => {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-icon-wrap" style={{ color: '#f59e0b', borderColor: '#f59e0b' }}>
          <AlertTriangle size={32} />
        </div>
        <h1 className="legal-title" style={{ background: 'linear-gradient(90deg, #fff, #f59e0b)', WebkitBackgroundClip: 'text' }}>
          SAFETY TIPS
        </h1>
        <p className="legal-updated">Guidelines for Enthusiasts & Buyers</p>
      </div>

      <div className="legal-content">
        <div className="legal-section">
          <div className="legal-section-header">
            <Search className="text-cyan-400" size={24} />
            <h2>1. Research Before Buying</h2>
          </div>
          <p className="legal-text">
            While E-Garage provides estimated prices and specs, always do your own independent research before purchasing a supercar or vintage vehicle.
          </p>
          <ul className="legal-list">
            <li>Always check the <strong>VIN (Vehicle Identification Number)</strong> history.</li>
            <li>Hire an independent mechanic for a pre-purchase inspection (PPI).</li>
            <li>Verify the service history, especially for high-maintenance exotics.</li>
          </ul>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <BadgeCheck className="text-gold" size={24} />
            <h2>2. Avoid Scams & Fraud</h2>
          </div>
          <p className="legal-text">
            The luxury car market can attract fraudulent listings. Protect yourself with these golden rules:
          </p>
          <ul className="legal-list">
            <li>If a deal seems <strong>too good to be true</strong>, it usually is.</li>
            <li>Never wire money or pay a deposit without seeing the car in person and verifying the title.</li>
            <li>Use reputable escrow services for large transactions.</li>
          </ul>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <Key className="text-purple-400" size={24} />
            <h2>3. Test Drive Precautions</h2>
          </div>
          <p className="legal-text">
            Supercars have immense power (often 700+ HP) and handle differently than standard vehicles.
          </p>
          <ul className="legal-list">
            <li>Ensure you have proper insurance coverage before getting behind the wheel.</li>
            <li>Meet sellers in public, well-lit places (like a bank or police station parking lot).</li>
            <li>Take time to understand the car's driving modes and braking capabilities.</li>
          </ul>
        </div>

        <div className="legal-section">
          <div className="legal-section-header">
            <FileWarning className="text-red-400" size={24} />
            <h2>4. Platform Usage</h2>
          </div>
          <p className="legal-text">
            E-Garage is currently a catalog and configurator. We do not facilitate direct sales. If anyone contacts you claiming to be an "E-Garage Broker," 
            please report them immediately as we do not sell cars directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safety;