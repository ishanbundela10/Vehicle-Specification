import React from 'react'
import { useParams, Link } from 'react-router-dom'
// import overview from '../data/overview'
import '../Pages/OverviewPage.css'
import '../App.css'
import axios from "axios"
import { useState, useEffect } from 'react' 
const OverviewPage = () => {
    const { brandName } = useParams();
    // console.log(brandName)
    const [brands, setBrands] = useState(null)
    // const brandOV = overview.find(
    //     (item) => item.brand.toLowerCase() === brandName.toLowerCase()
    // );
    // if (!brandOV) {
    //     return (
    //         <div className='p-6'>
    //             <Link to={'/'} className='bg-gray-600 p-2 rounded-2xl font-bold'>HOME</Link>
    //             <p className='text-white text-2xl mt-4'>Brand not found</p>
    //         </div>
    //     );
    // }

    useEffect(() => {
      const fetchBrand = async() => {
        try {
            const response = await axios.get(
                `/api/brands/${brandName.toLowerCase()}`
            )
            setBrands(response.data)
            // console.log(response.data)
        } catch (error) {
            console.log("error", error)
        }
      }
      fetchBrand();
    }, [brandName])

    if (!brands) {
        return  <h1 className="text-white p-5">Loading...</h1>;
    }
    return (
        <>
            <div className='p-6'>
                <div className='flex justify-between'>
                    <Link to={'/'} className='bg-gray-600 p-2 rounded-2xl font-bold'>HOME</Link>
                    <Link to={`/brand/${brandName}`} className='bg-gray-600 p-2 rounded-2xl font-bold'>← BACK</Link>
                </div>

                <div className='mt-6 max-w-[full] bg-gray-700 rounded-2xl '>
                    <div className='flex items-center gap-6 py-6'>
                        <img src={brands.logo} alt={brands.brand} className='w-36 h-36 object-contain' />
                        <div>
                            <h1 className='text-white text-4xl font-bold'>{brands.brand}</h1>
                            <p className='text-gray-400'>Founded: {brands.founded_year}</p>
                            <p className='text-gray-400'>Founder: {brands.founder}</p>
                            <p className='text-gray-400'>Headquarters: {brands.headquarter.city}, {brands.headquarter.country}</p>

                        </div>
                    </div>

                    <div className='p-6 rounded-lg'>

                        <div className='mb-6'>
                            <p className='text-gray-300 font-semibold mb-2'>Description</p>
                            <p className='text-white text-medium font-sans'>{brands.description}</p>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p className='text-gray-300 font-semibold'>Fastest Car (on road)</p>
                                <p className='text-white text-lg font-mono'>{brands.fastest_onroad}</p>
                            </div>
                            <div>
                                <p className='text-gray-300 font-semibold'>Top Speed (on road)</p>
                                <p className='text-white text-lg font-mono'>{brands.top_speed_onroad || 'N/A'} MPH</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p className='text-gray-300 font-semibold'>Fastest Car (Track only)</p>
                                <p className='text-white text-lg font-mono'>{brands.fastest_trackonly}</p>
                            </div>
                            <div>
                                <p className='text-gray-300 font-semibold'>Top Speed (Track only)</p>
                                <p className='text-white text-lg font-mono'>{brands.top_speed_trackonly || 'N/A'} MPH</p>
                            </div>
                        </div>

                        <h1 className='text-gray-300 font-semibold mt-8 mb-2'>Famous Cars</h1>
                        <div className='OVfamous'>
                            <div className="OVslider">
                                {[...brands.famous_cars, ...brands.famous_cars].map((fc) => (
                                    <div key={fc.id} className='carbox'>
                                        <img src={fc.image_url} alt="no" className='w-50 h-30' />
                                        <div className='text-[15px]'>{fc.model}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverviewPage
