import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  ArrowLeft,
  Home,
  Building2,
  Calendar,
  MapPin,
  User,
  Gauge,
  Trophy,
  Car,
  Info,
  Flag
} from 'lucide-react';
import './OverviewPage.css';

const OverviewPage = () => {
  const { brandName } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        setLoading(true);
        setError('');

        // Prefer full backend URL if proxy not set
        const response = await axios.get(
          `http://localhost:1003/api/brands/${encodeURIComponent(brandName.toLowerCase())}`
        );

        setBrand(response.data);
      } catch (err) {
        console.error('Brand fetch error:', err);
        setError('Brand not found or server error.');
        setBrand(null);
      } finally {
        setLoading(false);
      }
    };

    if (brandName) fetchBrand();
  }, [brandName]);

  if (loading) {
    return (
      <div className="ov-loading">
        <div className="ov-spinner"></div>
        <h2>LOADING BRAND ARCHIVE...</h2>
      </div>
    );
  }

  if (error || !brand) {
    return (
      <div className="ov-error">
        <h2>{error || 'Brand Not Found'}</h2>
        <Link to="/" className="ov-btn primary">Return Home</Link>
      </div>
    );
  }

  const famousCars = Array.isArray(brand.famous_cars) ? brand.famous_cars : [];
  const displayFamous = famousCars.length > 0 ? [...famousCars, ...famousCars] : [];

  return (
    <div className="ov-page">
      {/* TOP BAR */}
      <div className="ov-topbar">
        <div className="ov-top-left">
          <Link to="/" className="ov-btn">
            <Home size={16} /> HOME
          </Link>
          <Link to={`/brand/${brandName}`} className="ov-btn">
            <Car size={16} /> VIEW MODELS
          </Link>
        </div>
        <Link to={`/brand/${brandName}`} className="ov-back">
          <ArrowLeft size={16} /> BACK
        </Link>
      </div>

      <div className="ov-container">
        {/* HERO CARD */}
        <section className="ov-hero-card">
          <div className="ov-logo-wrap">
            <img
              src={brand.logo}
              alt={brand.brand}
              className="ov-logo"
              onError={(e) => {
                e.currentTarget.src =
                  'https://via.placeholder.com/160x160?text=Logo';
              }}
            />
          </div>

          <div className="ov-hero-info">
            <div className="ov-badge-row">
              <span className="ov-badge gold">
                <Building2 size={14} /> Brand Overview
              </span>
              {brand.headquarter?.country && (
                <span className="ov-badge cyan">
                  <Flag size={14} /> {brand.headquarter.country}
                </span>
              )}
            </div>

            <h1 className="ov-title">{brand.brand}</h1>

            <div className="ov-meta-grid">
              <div className="ov-meta-item">
                <Calendar size={16} className="meta-icon" />
                <div>
                  <span className="meta-label">Founded</span>
                  <strong>{brand.founded_year || 'N/A'}</strong>
                </div>
              </div>

              <div className="ov-meta-item">
                <User size={16} className="meta-icon" />
                <div>
                  <span className="meta-label">Founder</span>
                  <strong>{brand.founder || 'N/A'}</strong>
                </div>
              </div>

              <div className="ov-meta-item">
                <MapPin size={16} className="meta-icon" />
                <div>
                  <span className="meta-label">Headquarters</span>
                  <strong>
                    {brand.headquarter?.city || 'N/A'}
                    {brand.headquarter?.country
                      ? `, ${brand.headquarter.country}`
                      : ''}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="ov-section">
          <h2 className="ov-section-title">
            <Info size={18} /> About the Brand
          </h2>
          <p className="ov-description">
            {brand.description || 'No description available for this brand.'}
          </p>
        </section>

        {/* SPEED RECORDS */}
        <section className="ov-section">
          <h2 className="ov-section-title">
            <Gauge size={18} /> Speed Legacy
          </h2>

          <div className="ov-stats-grid">
            <div className="ov-stat-card">
              <span className="stat-label">Fastest On-Road</span>
              <strong className="stat-value">{brand.fastest_onroad || 'N/A'}</strong>
              <span className="stat-sub">
                {brand.top_speed_onroad ? `${brand.top_speed_onroad} MPH` : 'Top speed N/A'}
              </span>
            </div>

            <div className="ov-stat-card">
              <span className="stat-label">Fastest Track-Only</span>
              <strong className="stat-value">{brand.fastest_trackonly || 'N/A'}</strong>
              <span className="stat-sub">
                {brand.top_speed_trackonly
                  ? `${brand.top_speed_trackonly} MPH`
                  : 'Top speed N/A'}
              </span>
            </div>
          </div>
        </section>

        {/* FAMOUS CARS SLIDER */}
        <section className="ov-section">
          <div className="ov-section-head">
            <h2 className="ov-section-title">
              <Trophy size={18} /> Famous Cars
            </h2>
            {famousCars.length > 0 && (
              <span className="ov-hint">Hover to pause</span>
            )}
          </div>

          {famousCars.length === 0 ? (
            <div className="ov-empty">No famous cars listed for this brand.</div>
          ) : (
            <div className="OVfamous">
              <div className="OVslider">
                {displayFamous.map((fc, index) => (
                  <Link
                    key={`${fc.id || fc.model}-${index}`}
                    to={`/brand/${encodeURIComponent(brandName)}/${encodeURIComponent(
                      (fc.model || '').toLowerCase()
                    )}`}
                    className="carbox"
                  >
                    <div className="carbox-img-wrap">
                      <img
                        src={fc.image_url}
                        alt={fc.model}
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://via.placeholder.com/240x140?text=Car';
                        }}
                      />
                    </div>
                    <div className="carbox-name">{fc.model}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default OverviewPage;