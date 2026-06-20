import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import cars from '../data/cars';
import UrDreamcar from './UrDreamcar';
import Sidebar from '../Components/Sidebar';
// import companies from '../data/company';
import axios from "axios";


function BrandPage() {
  const [cars, setCars] = useState([]);
  const { brandName } = useParams();
  const [companies, setCompanies] = useState([])


  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          `/api/cars?brand=${brandName}`
        );
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };


    fetchCars();
  }, [brandName]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const company = await axios.get(
          `/api/companies`
        );
        setCompanies(company.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies()
  }, [])



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandName]);

  // const filteredCars = cars.filter(
  //   (car) => car.brand.toLowerCase() === brandName.toLowerCase()
  // );

  return (
    <>
      <div className='flex'>
        <Sidebar companies={companies} />
        <div className='pt-2' >
          <div className='flex justify-between mx-6 w-[67vw]'>
            <Link to={'/'} className='bg-gray-600 p-2 rounded-2xl font-bold'>HOME</Link>
            <Link className='ml-5 bg-gray-600 p-2 rounded-2xl font-bold' to={`/Overview/${brandName}`}>Overview Brand</Link>
          </div>
          <div className="grid grid-cols-3 gap-4 p-5">
            {cars.map((car) => {
              return <Link to={`/brand/${car.brand}/${car.name}`}>
                <div key={car._id} className="border border-gray-600 cursor-pointer rounded-lg h-88 overflow-hidden" style={{ backgroundColor: "#393E46" }}>
                  <div className='w-full h-1/2 object-cover rounded-lg overflow-hidden'>
                    <img src={car.img} alt="" className="w-full h-full hover:scale-125" />
                  </div>
                  <div className="details-box">

                    <div className='flex flex-col gap-1'>
                      <span className='text-xs border px-2 py-0.5' style={{ width: "fit-content" }}>{car.type}</span>
                      <span className='text-xs mt-1 '>{car.brand}</span>
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
                  </div>
                </div>
              </Link>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandPage;
