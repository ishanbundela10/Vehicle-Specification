import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Home,
  ArrowLeft,
  Info,
  Search,
  Gauge,
  Zap,
  Timer,
  Car,
  LayoutGrid,
  AlertCircle
} from 'lucide-react';
import Sidebar from '../Components/Sidebar';
import './BrandPage.css';

function BrandPage() {
  const { brandName } = useParams();

  const [cars, setCars] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name'); // name | hp | speed | accel

  // Fetch brand cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await axios.get(
          `http://localhost:1003/api/cars?brand=${encodeURIComponent(brandName)}`
        );
        console.log("Brand:", brandName);
        console.log("Cars received:", response.data?.length, response.data);
        setCars(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error('Error fetching cars:', err);
        setError('Failed to load cars for this brand.');
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    if (brandName) fetchCars();
  }, [brandName]);

  // Fetch companies for sidebar
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:1003/api/companies');
        setCompanies(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error('Error fetching companies:', err);
      }
    };
    fetchCompanies();
  }, []);

  // Scroll top on brand change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandName]);

  // Filter + sort
  const filteredCars = useMemo(() => {
    let list = [...cars];

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (car) =>
          car.name?.toLowerCase().includes(q) ||
          car.type?.toLowerCase().includes(q) ||
          car.brand?.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => {
      if (sortBy === 'hp') {
        return (b.performance?.power_hp || 0) - (a.performance?.power_hp || 0);
      }
      if (sortBy === 'speed') {
        return (b.performance?.top_speed_kmh || 0) - (a.performance?.top_speed_kmh || 0);
      }
      if (sortBy === 'accel') {
        return (a.performance?.acceleration_sec || 999) - (b.performance?.acceleration_sec || 999);
      }
      return (a.name || '').localeCompare(b.name || '');
    });

    return list;
  }, [cars, search, sortBy]);

  const brandTitle = brandName
    ? brandName.charAt(0).toUpperCase() + brandName.slice(1)
    : 'Brand';

  return (
    <div className="brand-page">
      <div className="brand-layout">
        <Sidebar companies={companies} />

        <main className="brand-main">
          {/* TOP BAR */}
          <div className="brand-topbar">
            <div className="brand-top-left">
              <Link to="/" className="bp-btn">
                <Home size={16} /> HOME
              </Link>
              <Link to={`/Overview/${brandName}`} className="bp-btn gold">
                <Info size={16} /> Brand Overview
              </Link>
            </div>

            <Link to="/" className="bp-back">
              <ArrowLeft size={16} /> BACK
            </Link>
          </div>

          {/* HEADER */}
          <section className="brand-header-card">
            <div className="brand-header-left">
              <div className="brand-chip">
                <Car size={14} /> Models Collection
              </div>
              <h1 className="brand-title">{brandTitle}</h1>
              <p className="brand-subtitle">
                Explore every model available for this brand with live performance stats.
              </p>
            </div>

            <div className="brand-header-stats">
              <div className="brand-stat-box">
                <span className="label">Total Models</span>
                <strong>{cars.length}</strong>
              </div>
              <div className="brand-stat-box">
                <span className="label">Showing</span>
                <strong>{filteredCars.length}</strong>
              </div>
            </div>
          </section>

          {/* FILTERS */}
          <section className="brand-filters">
            <div className="brand-search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search model or type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="brand-sort">
              <LayoutGrid size={16} />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="hp">Sort by HP</option>
                <option value="speed">Sort by Top Speed</option>
                <option value="accel">Sort by 0-100</option>
              </select>
            </div>
          </section>

          {/* CONTENT */}
          {loading ? (
            <div className="brand-loading">
              <div className="brand-spinner"></div>
              <p>Loading {brandTitle} models...</p>
            </div>
          ) : error ? (
            <div className="brand-empty error">
              <AlertCircle size={28} />
              <h3>{error}</h3>
              <button onClick={() => window.location.reload()} className="bp-btn gold">
                Retry
              </button>
            </div>
          ) : filteredCars.length === 0 ? (
            <div className="brand-empty">
              <Car size={28} />
              <h3>No models found</h3>
              <p>Try another search or check brand name.</p>
            </div>
          ) : (
            <section className="brand-grid">
              {filteredCars.map((car) => (
                <Link
                  key={car._id || car.id}
                  to={`/brand/${encodeURIComponent(car.brand)}/${encodeURIComponent(car.name)}`}
                  className="brand-card-link"
                >
                  <article className="brand-card">
                    <div className="brand-card-image">
                      <img
                        src={car.img}
                        alt={car.name}
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://via.placeholder.com/640x360?text=Car+Image';
                        }}
                      />
                      <span className="type-badge">{car.type || 'Car'}</span>
                    </div>

                    <div className="brand-card-body">
                      <span className="car-brand">{car.brand}</span>
                      <h3 className="car-name">{car.name}</h3>

                      <div className="car-specs">
                        <div className="spec">
                          <Zap size={14} />
                          <div>
                            <strong>{car.performance?.power_hp ?? '--'}</strong>
                            <span>HP</span>
                          </div>
                        </div>

                        <div className="spec">
                          <Gauge size={14} />
                          <div>
                            <strong>{car.performance?.top_speed_kmh ?? '--'}</strong>
                            <span>KM/H</span>
                          </div>
                        </div>

                        <div className="spec">
                          <Timer size={14} />
                          <div>
                            <strong>{car.performance?.acceleration_sec ?? '--'}</strong>
                            <span>0-100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default BrandPage;