import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Bike, Search, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';
import make_car from '../assets/make_car.jpg';
import './Sidebar.css';

function Sidebar({ companies = [] }) {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Search logic: uses .includes() instead of .startsWith() for better results
  const filteredCompanies = companies.filter((company) =>
    company?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleCompanies = showAll ? filteredCompanies : filteredCompanies.slice(0, 10);

  return (
    <aside className="sidebar-container">
      {/* HEADER */}
      <div className="sidebar-header">
        <h2>E-Garage</h2>
      </div>

      {/* QUICK CATEGORY SWITCHER */}
      <div className="category-row">
        <Link to="/" className="cat-btn active" title="Cars Catalog">
          <Car size={20} />
          <span>Cars</span>
        </Link>
        <Link to="/bikes" className="cat-btn coming-soon" title="Motorcycles (Coming Soon)">
          <Bike size={20} />
          <span>Bikes</span>
        </Link>
      </div>

      {/* DREAM CAR BUILDER BANNER */}
      <Link to="/makedreamcar" className="dream-builder-banner">
        <img src={make_car} alt="Dream Car Builder" className="banner-bg" />
        <div className="banner-overlay">
          <Sparkles size={16} className="text-gold" />
          <span>MAKE YOUR DREAM GARAGE</span>
        </div>
      </Link>

      {/* SEARCH BOX */}
      <div className="sidebar-search-box">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search brand or model..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowAll(false); // Reset pagination on search
          }}
        />
      </div>

      {/* BRANDS / COMPANIES LIST */}
      <div className="companies-section">
        <span className="section-label">Popular Brands</span>

        <div className="companies-list">
          {visibleCompanies.length > 0 ? (
            visibleCompanies.map((company) => (
              <Link 
                key={company._id || company.title} 
                to={`/brand/${encodeURIComponent(company.title.toLowerCase())}`}
                className="brand-link"
              >
                <Button img={company.img} title={company.title} />
              </Link>
            ))
          ) : (
            <p className="no-brands-text">No brands found</p>
          )}
        </div>

        {/* VIEW ALL / LESS BUTTON */}
        {!searchQuery && filteredCompanies.length > 10 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="view-toggle-btn"
          >
            {showAll ? (
              <>View Less <ChevronUp size={16} /></>
            ) : (
              <>View All ({filteredCompanies.length}) <ChevronDown size={16} /></>
            )}
          </button>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;