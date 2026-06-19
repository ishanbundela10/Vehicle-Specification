import React from 'react'
import "./VehicleCard.css"
import { Link } from 'react-router-dom'


function VehicleCard({ car, wishlist = [], toggleWishlist = () => { } }) {

  const isWishlisted = wishlist.find((item) => item.id === car.id)

  return (
    <>
    <Link to={`/brand/${car.brand}/${car.name}`}>
      <div className="vehiclecards cursor-pointer">
        
        <div className="vehiclebox w-full h-1/2 object-cover overflow-hidden">
          <img src={car.img} alt="" className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-125" />
        </div>
        <div className="details-box">
          <div className='flex flex-col gap-1'>
            <span className='text-xs border px-2 py-0.5' style={{width:"fit-content"}}>{car.type}</span>
            <span className='text-xs mt-1 '>{car.brand.toUpperCase()}</span>
            <span className='text-2xl font-medium' >{car.name}</span>
            <div className='flex justify-around my-2'>
              <span className='border w-14 px-3 py-0.5 rounded-sm'>
                <div className='text-center'>
                  <div className='font-medium'>{car.performance.power_hp}</div>
                  <div className='text-[10px]'>HP</div>
                </div>
              </span>
              <span className='border w-18 rounded-sm'>
                <div className='text-center'>
                  <div className='font-medium'>{car.performance.top_speed_kmh}</div>
                  <div className='text-[10px]'>TOP SPEED</div>
                </div>
              </span>
              <span className='border w-16 rounded-sm'>
                <div className='text-center'>
                  <div className='font-medium'>{car.performance.acceleration_sec}</div>
                  <div className='text-[10px]'>0-100</div>
                </div>
              </span>
            </div>
          </div>
          <div className="rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(car.rating) ? 'star filled' : (i - 0.5 < car.rating ? 'star half' : 'star')}>
                  ★
                </span>
              ))}
            </div>
            <span className="rating-value">{car.rating}/5</span>
            <button onClick={() => { toggleWishlist(car) }} className='text-3xl'> {isWishlisted ? "❤️" : "🤍"} </button>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default VehicleCard
