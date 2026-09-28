import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Zap, Gauge, Timer } from 'lucide-react';
import "./VehicleCard.css";

function VehicleCard({ car, wishlist = [], toggleWishlist = () => {} }) {
  const isWishlisted = wishlist.some((item) => (item._id || item.id) === (car._id || car.id));

  const handleWishlistClick = (e) => {
    e.preventDefault(); // Prevents Link navigation
    e.stopPropagation(); // Prevents event bubbling
    toggleWishlist(car);
  };

  return (
    <Link to={`/brand/${encodeURIComponent(car.brand.toLowerCase())}/${encodeURIComponent(car.name.toLowerCase())}`} className="vehicle-card-link">
      <div className="vehiclecards">
        
        {/* CAR IMAGE CONTAINER */}
        <div className="vehiclebox">
          <img src={car.img} alt={car.name} className="car-img" />
          <span className="car-type-badge">{car.type || 'Supercar'}</span>
          
          {/* WISHLIST HEART BUTTON */}
          <button 
            type="button" 
            onClick={handleWishlistClick} 
            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={18} fill={isWishlisted ? "#ef4444" : "none"} color={isWishlisted ? "#ef4444" : "#ffffff"} />
          </button>
        </div>

        {/* DETAILS BOX */}
        <div className="details-box">
          <span className="brand-name">{car.brand?.toUpperCase()}</span>
          <h3 className="car-title">{car.name}</h3>

          {/* SPECS GRID */}
          <div className="specs-grid">
            <div className="spec-pill">
              <span className="spec-val">{car.performance?.power_hp || '--'}</span>
              <span className="spec-lbl"><Zap size={10} /> HP</span>
            </div>
            <div className="spec-pill">
              <span className="spec-val">{car.performance?.top_speed_kmh || '--'}</span>
              <span className="spec-lbl"><Gauge size={10} /> TOP KM/H</span>
            </div>
            <div className="spec-pill">
              <span className="spec-val">{car.performance?.acceleration_sec || '--'}s</span>
              <span className="spec-lbl"><Timer size={10} /> 0-100</span>
            </div>
          </div>

          {/* RATING BAR */}
          <div className="rating-row">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(car.rating || 5) ? 'star-icon filled' : 'star-icon'}
                />
              ))}
            </div>
            <span className="rating-value">{car.rating ? `${car.rating}/5` : '5/5'}</span>
          </div>

        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;