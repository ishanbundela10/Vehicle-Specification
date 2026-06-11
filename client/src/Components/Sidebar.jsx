import React, { useState } from 'react'
import "./Sidebar.css"
import Button from './Button'
import { FaCar } from "react-icons/fa";
import { TbMotorbikeFilled } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import make_car from '../assets/make_car.jpg';
import { Link } from 'react-router-dom';

function Sidebar({ companies }) {

  const [showall, setShowall] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter first, then slice if not showing all
  const filteredCompanies = companies.filter(company =>
    company.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  )

  const visibleCompanies = showall ? filteredCompanies : filteredCompanies.slice(0, 10)

  return (
    <>
      <aside className='sidebarcontainer'>

        <div className='font-bold text-2xl px-5 py-3 underline'>Welcome to my EGarage</div>

        <div className="car-bike-opt">
          <div className='flex gap-4 justify-center align-middle items-center'>
            <Link to={'/'} className='font-medium text-xs bg-gray-500 p-4 rounded-2xl'><FaCar className='text-2xl' /></Link>
            <Link className='font-medium text-xs bg-gray-500 p-4 rounded-2xl'><TbMotorbikeFilled className='text-2xl' /></Link>
            <Link to={`/makedreamcar`} >
            <button
              style={{
                position: "relative",
                width: "160px",
                height: "75px",
                border: "none",
                padding: 0,
                overflow: "hidden",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              >
              <img
                src={make_car}
                alt="car"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  filter: "brightness(50%)",
                }}
              />
              <span
                style={{
                  position: "relative",
                  zIndex: 10,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                MAKE YOUR DREAM GARAGE
              </span>
            </button>
          </Link>
          </div>
        </div>

        <div className="search flex justify-center items-center">
          <CiSearch className='text-3xl' />
          <input
            type="text"
            placeholder='Search by Company or Model'
            className='bg-gray-500 w-70 px-3 py-1 rounded-2xl'
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setShowall(false) // reset to top 10 on new search
            }}
          />
        </div>

        <div className="companies">
          {visibleCompanies.length > 0 ? (
            visibleCompanies.map((company, index) => (
              <Link key={company.id} to={`/brand/${company.title.toLowerCase()}`}>
                <Button key={index} img={company.img} title={company.title} />
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-400 py-4">No brands found</p>
          )}

          {/* Only show View all/less if not searching */}
          {!searchQuery && (
            <button
              onClick={() => setShowall(!showall)}
              className="bg-gray-500 text-white px-3 py-2 rounded-2xl w-full"
            >
              {showall ? "View less" : "View all"}
            </button>
          )}
        </div>

      </aside>
    </>
  )
}

export default Sidebar;