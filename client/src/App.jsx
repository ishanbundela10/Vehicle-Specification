import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import VehicleCard from './Components/VehicleCard'
import famouscars from "./data/famous"
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import OverviewPage from './Pages/OverviewPage'
import IsHome from './Pages/isHome'
import Footer from './Components/Footer'

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
     <Navbar/>
      {isHome ?
       <IsHome/> : <Outlet />
      }
      <Footer/>
     
    </>
  )
}

function App() {
  return <AppLayout />;
}

export default App;