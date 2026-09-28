import React from 'react';
import VehicleCard from './VehicleCard';
import './Famous.css';

function FamousCars({ cars = [], wishlist = [], toggleWishlist }) {
  // Duplicate array for seamless infinite marquee loop
  const displayCars = cars.length > 0 ? [...cars, ...cars] : [];

  return (
    <div className="famous-container">
      <div className="famous-header">
        <h2 className="famous-title">
          FAMOUS <span className="gold-text">SUPERCARS</span>
        </h2>
        {cars.length > 0 && (
          <span className="famous-subtitle">Hover to pause auto-scroll</span>
        )}
      </div>

      {cars.length === 0 ? (
        <div className="loading-state">
          <p>Loading Famous Supercars...</p>
        </div>
      ) : (
        <div className="slider-wrapper">
          <div className="famouscards-marquee">
            {displayCars.map((car, index) => (
              <VehicleCard
                key={`${car._id || car.id}-${index}`}
                car={car}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FamousCars;