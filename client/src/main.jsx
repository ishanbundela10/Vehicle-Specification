import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrandPage from './Pages/BrandPage.jsx'
import OverviewPage from './Pages/OverviewPage.jsx'
import UrDreamcar from './Pages/UrDreamcar.jsx'
import CarDetails from './Pages/CarDetails.jsx'
import About from './Pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/brand/:brandName",
      element: <BrandPage />
    },
    {
      path: "/Overview/:brandName",
      element: <OverviewPage />
    },
    {
      path: "/brand/:brandName/:Name",
      element: <CarDetails />
    },
    {
      path: "/makedreamcar",
      element: <UrDreamcar />
    },
    {
      path: "/about",
      element: <About />
    }

    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
