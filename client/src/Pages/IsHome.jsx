import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import FamousCars from '../Components/Famous';

const IsHome = () => {
  const [cars, setCars] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  // WISHLIST STATE WITH LOCALSTORAGE
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // FETCH FAMOUS CARS WITH FULL BACKEND PORT (1003)
  useEffect(() => {
    const fetchFamousCars = async () => {
      try {
        setLoading(true);
        // ⚠️ Changing to Full Backend URL (Port 1003)
        const response = await axios.get('http://localhost:1003/api/cars/famous');
        
        console.log("Famous Cars Response from MongoDB:", response.data);
        
        if (response.data && response.data.length > 0) {
          setCars(response.data);
        } else {
          setErrorMsg("MongoDB connected, but 0 cars found with { isFamous: true }");
        }
      } catch (error) {
        console.error("Error fetching famous cars:", error.message);
        setErrorMsg(`Failed to connect to backend: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchFamousCars();
  }, []);

  // FETCH COMPANIES
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:1003/api/companies');
        setCompanies(response.data || []);
      } catch (error) {
        console.error("Error fetching companies:", error.message);
      }
    };
    fetchCompanies();
  }, []);

  const toggleWishlist = (car) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some(
        (item) => (item._id || item.id) === (car._id || car.id)
      );

      if (exists) {
        return prevWishlist.filter(
          (item) => (item._id || item.id) !== (car._id || car.id)
        );
      } else {
        return [...prevWishlist, car];
      }
    });
  };

  return (
    <div className="maincontent">
      <Sidebar companies={companies} />

      {errorMsg && cars.length === 0 ? (
        <div style={{ color: '#ef4444', padding: '2rem', fontFamily: 'sans-serif' }}>
          <h3>⚠️ Data Error:</h3>
          <p>{errorMsg}</p>
        </div>
      ) : (
        <FamousCars
          cars={cars}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      )}
    </div>
  );
};

export default IsHome;