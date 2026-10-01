import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Car } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  // OPTIMIZED SCROLL LISTENER (Does not re-register event on every scroll)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
        setIsMobileMenuOpen(false); // Close mobile menu on scroll
      } else {
        setIsVisible(true); // Show on scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to homepage or catalog with search query
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-container">
        
        {/* LOGO */}
        <NavLink to="/" className="navbar-logo">
          <Car className="logo-icon" size={24} />
          <span className="logo-text">Apex<span className="gold-text">forge</span></span>
        </NavLink>

        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} className="navbar-search">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Search make, model, or brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {/* DESKTOP NAV LINKS */}
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/makedreamcar" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              BUILDER
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="mobile-toggle-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <form onSubmit={handleSearch} className="mobile-search">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search cars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <ul className="mobile-nav-list">
            <li>
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/builder" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>
                DREAM BUILDER
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;