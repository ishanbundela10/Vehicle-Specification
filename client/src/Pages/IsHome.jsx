import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import VehicleCard from '../Components/VehicleCard'
// import famouscars from "../data/famous"
// import companies from '../data/company'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios"; 

const IsHome = () => {
  
  const { brandName, name } = useParams()

  const [cars, setCars] = useState([]);
  const [companies, setCompanies] = useState([])

  useEffect(() => {
  const famousCars = async () => {
    try {
      const response = await axios.get(
        `/api/cars/famous`
      );
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  famousCars();
}, []);

  useEffect(()=>{
    const fetchCompanies = async () => {
      try {
        const comapnys = await axios.get(
       `/api/companies`
      );
      setCompanies(comapnys.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies()
  }, [])

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
        (item) => item._id === car._id
      )

      if (exists) {
        return prevWishlist.filter(
          (item) => item._id !== car._id
        )
      } else {
        return [...prevWishlist, car]
      }
    })
  }


  return (
    <>
      <div className="maincontent">
        <Sidebar companies={companies} />
        <div className="famous-container">
          <div className='font-bold text-white text-4xl'>Famous Cars</div>
          <div className="slider">
            <div className="famouscards">
              {cars.map((car) => (
                <VehicleCard key={car._id} car={car} wishlist={wishlist} toggleWishlist={toggleWishlist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IsHome
