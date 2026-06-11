import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import VehicleCard from '../Components/VehicleCard'
import famouscars from "../data/famous"
import companies from '../data/company'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from '../Components/Footer'


const isHome = () => {

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  })

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (car) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.find(
        (item) => item.id === car.id
      )

      if (exists) {
        return prevWishlist.filter(
          (item) => item.id !== car.id
        )
      } else {
        return [...prevWishlist, car]
      }
    })
  }

  const { brandname, name } = useParams()

  return (
    <>
      <div className="maincontent">
        <Sidebar companies={companies} />
        <div className="famous-container">
          <div className='font-bold text-white text-4xl'>Famous Cars</div>
          <div className="slider">
            <div className="famouscards">
              {famouscars.concat(famouscars).map((car, index) => (
                <VehicleCard key={index} car={car} wishlist={wishlist} toggleWishlist={toggleWishlist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default isHome
