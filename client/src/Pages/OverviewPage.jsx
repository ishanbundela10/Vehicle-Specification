import React from 'react'
import { useParams, Link } from 'react-router-dom'
// import overview from '../data/overview'
import '../Pages/OverviewPage.css'
import '../App.css'

const OverviewPage = () => {
    const { brandName } = useParams();
    const brandOV = overview.find(
        (item) => item.brand.toLowerCase() === brandName.toLowerCase()
    );

    if (!brandOV) {
        return (
            <div className='p-6'>
                <Link to={'/'} className='bg-gray-600 p-2 rounded-2xl font-bold'>HOME</Link>
                <p className='text-white text-2xl mt-4'>Brand not found</p>
            </div>
        );
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
                        <img src={brandOV.img} alt={brandOV.brand} className='w-36 h-36 object-contain' />
                        <div>
                            <h1 className='text-white text-4xl font-bold'>{brandOV.brand}</h1>
                            <p className='text-gray-400'>Founded: {brandOV.founded_year}</p>
                            <p className='text-gray-400'>Founder: {brandOV.founder}</p>
                            <p className='text-gray-400'>Headquarters: {brandOV.headquarter.city}, {brandOV.headquarter.country}</p>

                        </div>
                    </div>

                    <div className='p-6 rounded-lg'>

                        <div className='mb-6'>
                            <p className='text-gray-300 font-semibold mb-2'>Description</p>
                            <p className='text-white text-medium font-sans'>{brandOV.description}</p>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p className='text-gray-300 font-semibold'>Fastest Car (on road)</p>
                                <p className='text-white text-lg font-mono'>{brandOV.fastest_onroad}</p>
                            </div>
                            <div>
                                <p className='text-gray-300 font-semibold'>Top Speed (on road)</p>
                                <p className='text-white text-lg font-mono'>{brandOV.top_speed_onroad || 'N/A'} MPH</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p className='text-gray-300 font-semibold'>Fastest Car (Track only)</p>
                                <p className='text-white text-lg font-mono'>{brandOV.fastest_trackonly}</p>
                            </div>
                            <div>
                                <p className='text-gray-300 font-semibold'>Top Speed (Track only)</p>
                                <p className='text-white text-lg font-mono'>{brandOV.top_speed_trackonly || 'N/A'} MPH</p>
                            </div>
                        </div>

                        <h1 className='text-gray-300 font-semibold mt-8 mb-2'>Famous Cars</h1>
                        <div className='OVfamous'>
                            <div className="OVslider">
                                {brandOV.famous_cars.map((fc) => (
                                    <div key={fc.id} className='w-40 h-44 text-center'>
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
