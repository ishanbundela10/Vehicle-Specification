import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import VehicleCard from './Components/VehicleCard'
// import famouscars from "./data/famous"
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import OverviewPage from './Pages/OverviewPage'
import IsHome from './Pages/isHome'
import Footer from './Components/Footer'

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

    //   const [cars, setCars] = useState([]);
  
    //  useEffect(() => {
    //   const fetchCars = async () => {
    //     try {
    //       const response = await axios.get(
    //         "/api/cars"
    //       );
    //       setCars(response.data);
    //     } catch (error) {
    //       console.error("Error fetching cars:", error);
    //     }
    //   };
  
    //   fetchCars();
    // }, []);

  return (
    <>
    <div className='flex flex-col min-h-screen'>

     <Navbar/>
     <main className='flex-1'>

      {isHome ?
       <IsHome/> : <Outlet />
      }
      </main>
      <Footer/>
      </div>
     
    </>
  )
}

function App() {
  return <AppLayout />;
}

export default App;