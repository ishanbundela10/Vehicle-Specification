import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import VehicleCard from './Components/VehicleCard'
// import famouscars from "./data/famous"
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import IsHome from './Pages/IsHome'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <ScrollToTop/>
        <Navbar />
        <main className='flex-1'>

          {isHome ?
            <IsHome /> : <Outlet />
          }
        </main>
        <Footer />
      </div>

    </>
  )
}

function App() {
  return <AppLayout />;
}

export default App;