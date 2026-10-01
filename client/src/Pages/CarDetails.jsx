import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
    ArrowLeft, Home, Gauge, Zap, Timer,
    Settings, Wrench, Shield, Globe, Trophy, Info, AlertCircle
} from 'lucide-react';

const CarDetails = () => {
    const { brandName, modelName } = useParams();
    const [CD, setCD] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `/api/cars/brand/${brandName}/${encodeURIComponent(modelName)}`
                );
                setCD(response.data);
            } catch (error) {
                console.error(error);
                setError("Car not found or server error.");
            } finally {
                setLoading(false);
            }
        };
        fetchCar();
    }, [brandName, modelName]);

    // Premium Loading State
    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0c10] flex flex-col items-center justify-center text-slate-300">
                <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <h1 className="text-xl font-medium tracking-widest font-[Orbitron]">LOADING ASSETS...</h1>
            </div>
        );
    }

    // Error State
    if (error || !CD) {
        return (
            <div className="min-h-screen bg-[#0a0c10] flex flex-col items-center justify-center text-slate-300">
                <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                <h1 className="text-2xl font-bold">{error || "Vehicle Not Found"}</h1>
                <Link to="/" className="mt-6 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
                    Return to Garage
                </Link>
            </div>
        );
    }

    const formatPrice = (min, max) => {
        if (!min || !max) return "Price on Request";
        const avg = (min + max) / 2;
        return avg >= 1000000
            ? `$${(avg / 1000000).toFixed(2).replace(/\.?0+$/, '')}M`
            : `$${Math.round(avg).toLocaleString()}`;
    };

    return (
        <div className='min-h-screen bg-[#0a0c10] text-slate-200 font-[Rajdhani] pb-12'>

            {/* TOP NAVIGATION BAR */}
            <div className="sticky top-0 z-50 bg-[#0a0c10]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
                <div className='flex gap-3'>
                    <Link to={'/'} className='flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-sm font-bold transition-all'>
                        <Home size={16} /> HOME
                    </Link>
                    <Link to={`/brand/${brandName}`} className='flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-sm font-bold transition-all'>
                        <Globe size={16} /> VIEW {brandName.toUpperCase()}
                    </Link>
                </div>
                <Link to={`/brand/${brandName}`} className='flex items-center gap-2 text-violet-400 hover:text-violet-300 font-bold transition-all'>
                    <ArrowLeft size={16} /> BACK
                </Link>
            </div>

            {/* MAIN CONTENT GRID */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 mt-8 flex flex-col lg:flex-row gap-8'>

                {/* LEFT: IMAGE SECTION (Sticky on Desktop) */}
                <div className='w-full lg:w-[45%] xl:w-1/2'>
                    <div className='sticky top-24'>
                        <div className='bg-[#121620] border border-slate-800 rounded-3xl p-3 shadow-2xl relative overflow-hidden group'>

                            {/* BADGES OVERLAY (High Contrast & Clear) */}
                            <div className="absolute top-5 left-5 z-20 flex flex-col gap-2 pointer-events-none">
                                <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xl border ${CD.status?.toLowerCase() === 'discontinued'
                                        ? 'bg-red-600 text-white border-red-400'
                                        : CD.status?.toLowerCase() === 'concept' || CD.status?.toLowerCase() === 'prototype'
                                            ? 'bg-amber-500 text-black border-amber-300'
                                            : 'bg-emerald-500 text-black border-emerald-300'
                                    }`}>
                                    <span className={`w-2 h-2 rounded-full ${CD.status?.toLowerCase() === 'discontinued' ? 'bg-white animate-pulse' : 'bg-black'
                                        }`} />
                                    {CD.status || 'Active'}
                                </span>

                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xl bg-black/80 backdrop-blur-md border border-amber-400/60 text-amber-300">
                                    <Trophy size={12} />
                                    {CD.rarity || 'Standard'}
                                </span>
                            </div>

                            {/* CLEAN & BRIGHT CAR IMAGE (No Dark Overlay) */}
                            <img
                                src={CD.img}
                                alt={CD.name}
                                className='w-full h-auto max-h-112.5 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700'
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT: DETAILS SECTION */}
                <div className='w-full lg:w-[55%] xl:w-1/2 flex flex-col gap-6'>

                    {/* Header Info */}
                    <div className='bg-[#121620] border border-slate-800 rounded-3xl p-6 md:p-8'>
                        <div className='flex items-center gap-2 text-sm text-violet-400 font-bold tracking-widest uppercase mb-2'>
                            <span>{CD.brand}</span>
                            <span>•</span>
                            <span>{CD.production?.start_year || 'N/A'}</span>
                            <span>•</span>
                            <span>{CD.type}</span>
                        </div>
                        <h1 className='text-4xl md:text-5xl font-black text-white font-[Orbitron] mb-4'>{CD.name}</h1>

                        <div className='flex flex-wrap gap-4 text-sm text-slate-400 font-medium'>
                            <span className="flex items-center gap-1"><Globe size={16} /> {CD.production?.country}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Info size={16} /> {CD.era || 'Modern'} Era</span>
                            {CD.production?.units_produced && (
                                <>
                                    <span>•</span>
                                    <span className="text-amber-400">Only {CD.production.units_produced} units built</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Price Tag */}
                    <div className='bg-linear-to-r from-violet-600 to-indigo-600 rounded-3xl p-6 md:p-8 flex items-center justify-between shadow-lg shadow-violet-900/20'>
                        <h1 className='text-xl md:text-2xl font-bold text-violet-100'>Estimated Value</h1>
                        <span className='text-3xl md:text-4xl font-black text-white font-[Orbitron]'>
                            {formatPrice(CD.price?.usd?.min, CD.price?.usd?.max)}
                        </span>
                    </div>

                    {/* Quick Performance Stats */}
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='bg-[#121620] border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center'>
                            <Timer className="text-violet-500 mb-2" size={24} />
                            <h1 className='font-[Orbitron] font-bold text-2xl text-white'>
                                {CD.performance?.acceleration_sec || '--'} <span className='text-xs text-slate-500 font-sans'>s</span>
                            </h1>
                            <h2 className='text-xs text-slate-400 font-bold uppercase tracking-wider mt-1'>0-100 km/h</h2>
                        </div>
                        <div className='bg-[#121620] border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center'>
                            <Gauge className="text-cyan-500 mb-2" size={24} />
                            <h1 className='font-[Orbitron] font-bold text-2xl text-white'>
                                {CD.performance?.top_speed_kmh || '--'} <span className='text-xs text-slate-500 font-sans'>km/h</span>
                            </h1>
                            <h2 className='text-xs text-slate-400 font-bold uppercase tracking-wider mt-1'>Top Speed</h2>
                        </div>
                        <div className='bg-[#121620] border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center'>
                            <Zap className="text-amber-500 mb-2" size={24} />
                            <h1 className='font-[Orbitron] font-bold text-2xl text-white'>
                                {CD.performance?.power_hp || '--'} <span className='text-xs text-slate-500 font-sans'>HP</span>
                            </h1>
                            <h2 className='text-xs text-slate-400 font-bold uppercase tracking-wider mt-1'>Power</h2>
                        </div>
                    </div>

                    {/* Detailed Specs Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Technical */}
                        <div className='bg-[#121620] border border-slate-800 rounded-3xl p-6'>
                            <h1 className='flex items-center gap-2 text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3'>
                                <Settings className="text-violet-500" /> Technical Specs
                            </h1>
                            <div className='flex flex-col gap-3 text-sm'>
                                <SpecRow label="Engine" value={CD.technical?.engine} />
                                <SpecRow label="Cylinders" value={CD.technical?.cylinders} />
                                <SpecRow label="Displacement" value={CD.technical?.displacement_cc ? `${CD.technical.displacement_cc} cc` : null} />
                                <SpecRow label="Fuel Type" value={CD.technical?.fuel} />
                                <SpecRow label="Transmission" value={CD.technical?.transmission} />
                                <SpecRow label="Weight" value={CD.performance?.weight_kg ? `${CD.performance.weight_kg} kg` : null} />
                            </div>
                        </div>

                        {/* Chassis */}
                        <div className='bg-[#121620] border border-slate-800 rounded-3xl p-6'>
                            <h1 className='flex items-center gap-2 text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3'>
                                <Wrench className="text-cyan-500" /> Chassis & Drive
                            </h1>
                            <div className='flex flex-col gap-3 text-sm'>
                                <SpecRow label="Material" value={CD.chassis?.material} />
                                <SpecRow label="Brakes" value={CD.chassis?.brake_material} />
                                <SpecRow label="Suspension" value={CD.chassis?.suspension} />
                                <SpecRow label="Drivetrain" value={CD.chassis?.drivetrain} />
                            </div>
                        </div>
                    </div>

                    {/* Performance Index (Progress Bars) */}
                    <div className='bg-[#121620] border border-slate-800 rounded-3xl p-6 md:p-8'>
                        <h1 className='flex items-center gap-2 text-xl font-bold text-white mb-6 border-b border-slate-800 pb-3'>
                            <Shield className="text-amber-500" /> Performance Index
                        </h1>
                        <div className='flex flex-col gap-6'>
                            <ProgressBar label="Comfort" value={CD.comfort} color="from-emerald-400 to-green-600" />
                            <ProgressBar label="Mileage" value={CD.mileage} color="from-rose-400 to-red-600" />
                            <ProgressBar label="Stability" value={CD.stability} color="from-cyan-400 to-blue-600" />
                            <ProgressBar label="Overall Rating" value={CD.rating} color="from-amber-300 to-yellow-600" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- Helper Components for clean code ---

const SpecRow = ({ label, value }) => (
    <div className='flex justify-between items-center py-1'>
        <span className='text-slate-400'>{label}</span>
        <span className='font-bold text-slate-200 text-right w-1/2'>{value || '--'}</span>
    </div>
);

const ProgressBar = ({ label, value = 0, color }) => (
    <div>
        <div className='flex justify-between text-sm font-bold text-slate-300 mb-2 uppercase tracking-wider'>
            <span>{label}</span>
            <span>{value} / 5</span>
        </div>
        <div className='w-full bg-slate-800 rounded-full h-2.5 overflow-hidden'>
            <div
                className={`h-full rounded-full bg-linear-to-r ${color} transition-all duration-1000 ease-out`}
                style={{ width: `${(value / 5) * 100}%` }}
            ></div>
        </div>
    </div>
);

export default CarDetails;