import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

// import cars from "../data/cars"
import '../App.css'

const CarDetails = () => {
    const { brandName, modelName } = useParams();
    const [CD, setCD] = useState(null)
    // car details:

    useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `/api/cars/brand/${brandName}/${encodeURIComponent(modelName)}`
        );
        setCD(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
       fetchCar();
    }, [brandName, modelName]
);
    if (!CD) return <h1 className='p-4'>Loading...</h1>;
    
    // const CD = cars.find(
    //     (item) =>
    //         item.brand.toLowerCase() === brandName.toLowerCase() &&
    //         item.name.toLowerCase() === decodeURIComponent(Name).toLowerCase()
    // );
    // if (!CD) {
    //     return <h1 className='p-4'>Car not found</h1>;
    // }

    const formatPrice = (min, max) => {
        const avg = (min + max) / 2;
        return avg >= 1000000
            ? `$${(avg / 1000000).toFixed(2).replace(/\.?0+$/, '')}M`
            : `$${Math.round(avg).toLocaleString()}`;
    };

    return (
        <>
            <div className='p-6'>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <Link to={'/'} className='bg-gray-600 p-2 rounded-2xl font-bold'>HOME</Link>
                        <Link className=' bg-gray-600 p-2 rounded-2xl font-bold' to={`/Overview/${brandName}`}>Overview Brand</Link>
                    </div>
                    <Link to={`/brand/${brandName}`} className='bg-gray-600 p-2 rounded-2xl font-bold'>← BACK</Link>
                </div>
                <div className='mt-6  rounded-2xl '>
                    <div className='flex '>
                        <div className='w-[50vw] h-1/2 p-4 bg-gray-700 rounded-2xl'>
                            <img src={CD.img} alt="img%-->$" className='w-full h-full rounded-2xl' />
                        </div>
                        <div className='w-[50vw] pt-3 pl-4'>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-5'>
                                    <div className={`flex size-fit px-5 rounded-2xl text-[1em] gap-1 p-3
                                    ${CD.status?.toLowerCase() === 'discontinued' ? 'bg-red-700' : 'bg-green-700'}`}>
                                        <h1>{CD.status} {"\u2022"} {CD.rarity}</h1>
                                    </div>
                                    {CD.production.units_produced ?
                                        <div className={`flex size-fit px-5 rounded-2xl text-[1em] gap-1 p-3 bg-blue-400`}>
                                            <h1 className='font-black'>{CD.production.units_produced}</h1>
                                            <h2>Units produced</h2>
                                        </div> : " "
                                    }

                                </div>
                                <div className='flex size-fit px-5 rounded-2xl text-[1em] gap-1 bg-gray-700 p-3'>
                                    <span className='border px-2'>{CD.brand} </span> {"\u2022"}
                                    <span>{CD.production.start_year}</span>{"\u2022"}
                                    <span>{CD.type}</span>
                                </div>
                                <div className='bg-gray-700 flex-col flex gap-2 rounded-2xl px-7 py-2 size-fit '>
                                    <h1 className='font-bold text-4xl w-full'>{CD.name}</h1>
                                    <div className='flex gap-1 font-mono'>
                                        <span>{CD.production.country} </span> {"\u2022"}
                                        <span>{formatPrice(CD.price.usd.min, CD.price.usd.max)}</span>{"\u2022"}
                                        <span>{CD.era} Era</span>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='bg-gray-700 flex gap-10 rounded-2xl px-3 py-2 w-[45%]'>
                                        <div className='text-center'>
                                            <div className='flex items-baseline gap-0.5'>
                                                <h1 className='font-bold text-[20px]'>{CD.performance.acceleration_sec} </h1>
                                                <span className='font-extralight text-[13px] text-red-500'>Sec</span>
                                            </div>
                                            <h2 className='text-[13px]'>0-100</h2>
                                        </div>
                                        <div className='text-center'>
                                            <div className='flex items-baseline gap-0.5'>
                                                <h1 className='font-bold text-[20px]'>{CD.performance.top_speed_kmh}</h1>
                                                <span className='font-extralight text-[13px] text-red-500'>kmh</span>
                                            </div>
                                            <h2 className='text-[13px]'>Top Speed</h2>
                                        </div>
                                        <div className='text-center'>
                                            <div className='flex items-baseline gap-0.5'>
                                                <h1 className='font-bold text-[20px]'>{CD.performance.power_hp}</h1>
                                                <span className='font-extralight text-[13px] text-red-500'>HP</span>
                                            </div>
                                            <h2 className='text-[13px]'>Power</h2>
                                        </div>
                                    </div>
                                    <div className='bg-gray-700 rounded-2xl px-3 py-2 flex items-center w-[50%] justify-between'>
                                        <h1 className='text-2xl font-extralight'>Estimated Price :</h1>
                                        <span className=' text-4xl '>{formatPrice(CD.price.usd.min, CD.price.usd.max)}</span>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='bg-gray-700 rounded-2xl px-3 py-2 flex flex-col gap-2 w-[40%]'>
                                        <h1 className='text-2xl font-bold font-mono'>Specifications</h1>
                                        <hr />
                                        <div className='flex gap-4 flex-col'>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.technical.engine}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Configuration</h2>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.technical.cylinders}</h1>
                                                <h2 className='text-[13px] text-gray-300'>No. of Cylinders</h2>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.technical.displacement_cc}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Displacement</h2>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.technical.fuel}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Fuel type</h2>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.technical.transmission}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Transmission</h2>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.performance.weight_kg}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Weight</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-gray-700 rounded-2xl px-3 py-2 flex flex-col gap-2 w-[60%] size-fit'>
                                        <h1 className='text-2xl font-bold font-mono'>Chassis</h1>
                                        <hr />
                                        <div className='flex gap-4 flex-col'>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.chassis.material}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Material</h2>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.chassis.brake_material}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Brake material</h2>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.chassis.suspension}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Suspensions</h2>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h1 className='font-semibold'>{CD.chassis.drivetrain}</h1>
                                                <h2 className='text-[13px] text-gray-300'>Drive</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-700 flex gap-5 rounded-2xl px-3 py-5 flex-col'>
                                    <h1 className='font-bold text-2xl'>Performance Index</h1>
                                    <hr />
                                    <div className='flex flex-col gap-5'>
                                        <div>
                                            <div className='flex justify-between'>
                                                <h2 className='font-light text-[0.8rem] pl-1.5'>Comfort</h2>
                                                <span>{CD.comfort}</span>
                                            </div>
                                            <div className='fill '>
                                                <div className='fill_inside' style={{ width: `${(CD.comfort / 5) * 100}%`, background: "lightgreen" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex justify-between'>
                                                <h2 className='font-light text-[0.8rem] pl-1.5'>Mileage</h2>
                                                <span>{CD.mileage}</span>
                                            </div>
                                            <div className='fill'>
                                                <div className='fill_inside' style={{ width: `${(CD.mileage / 5) * 100}%`, background: "brown" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex justify-between'>
                                                <h2 className='font-light text-[0.8rem] pl-1.5'>Stability</h2>
                                                <span>{CD.stability}</span>
                                            </div>
                                            <div className='fill'>
                                                <div className='fill_inside' style={{ width: `${(CD.stability / 5) * 100}%`, background: "skyblue" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex justify-between'>
                                                <h2 className='font-light text-[0.8rem] pl-1.5'>OverAll rating</h2>
                                                <span>{CD.rating}</span>
                                            </div>
                                            <div className='fill'>
                                                <div className='fill_inside' style={{ width: `${(CD.rating / 5) * 100}%`, background: "gold" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarDetails
