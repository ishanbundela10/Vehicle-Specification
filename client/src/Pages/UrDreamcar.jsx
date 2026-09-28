import React, { useEffect, useMemo, useState } from "react";
import {
  Check,
  Zap,
  Gauge,
  Weight,
  Palette,
  Disc,
  Cpu,
  Sliders,
  Layers,
  ChevronRight,
  RotateCcw,
  Loader2,
  Star,
  Search,
  Heart,
  Bookmark,
  Trash2,
  X,
} from "lucide-react";
import "../Pages/UrDreamcar.css";

// LOCAL CONFIGURATION OPTIONS
const COLOR_OPTIONS = [
  { id: "stock", name: "Factory Color", hex: "#9ca3af", price: 0, filter: "none" },
  { id: "matte-black", name: "Stealth Matte Black", hex: "#111111", price: 180000, filter: "brightness(0.65) contrast(1.1)" },
  { id: "rosso", name: "Rosso Red", hex: "#b71c1c", price: 220000, filter: "sepia(1) hue-rotate(310deg) saturate(3)" },
  { id: "blue", name: "Electric Blue", hex: "#0288d1", price: 220000, filter: "sepia(1) hue-rotate(180deg) saturate(3)" },
  { id: "white", name: "Pearl White", hex: "#f5f5f5", price: 150000, filter: "brightness(1.2) contrast(0.9)" },
  { id: "green", name: "Acid Green", hex: "#76ff03", price: 250000, filter: "sepia(1) hue-rotate(80deg) saturate(4)" },
];

const WHEEL_OPTIONS = [
  { id: "stock", name: "Stock Alloy", price: 0 },
  { id: "forged-20", name: "20\" Forged Sport", price: 350000 },
  { id: "aero-21", name: "21\" Aero Platinum", price: 520000 },
];

const TUNE_OPTIONS = [
  { id: "stock", name: "Stock Tune", hpBonus: 0, accelBonus: 0, price: 0 },
  { id: "stage1", name: "Stage 1 ECU + Intake", hpBonus: 60, accelBonus: -0.2, price: 280000 },
  { id: "track", name: "Track Pack / Hybrid Boost", hpBonus: 160, accelBonus: -0.45, price: 950000 },
];

const PACKAGE_OPTIONS = [
  { id: "carbon", name: "Carbon Fiber Aero Kit", price: 650000 },
  { id: "ceramic", name: "Carbon Ceramic Brakes", price: 480000 },
  { id: "interior", name: "Alcantara Premium Interior + HUD", price: 320000 },
  { id: "exhaust", name: "Titanium Sport Exhaust", price: 210000 },
  { id: "starlight", name: "Starlight Roof Headliner", price: 150000 },
  { id: "audio", name: "Bespoke 3D Surround Audio System", price: 280000 },
  { id: "autopilot", name: "Autonomous Driving Level 3", price: 450000 },
  { id: "suspension", name: "Air Suspension with Lift Kit", price: 300000 },
];

const formatINR = (n = 0) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

const UrDreamcar = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [search, setSearch] = useState("");

  // SELECTIONS
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0])
  const [selectedWheels, setSelectedWheels] = useState(WHEEL_OPTIONS[0])
  const [selectedTune, setSelectedTune] = useState(TUNE_OPTIONS[0])
  const [selectedPackages, setSelectedPackages] = useState([])
  const [activeTab, setActiveTab] = useState("model")
  const [showSummary, setShowSummary] = useState(false)
  const [showMyGarage, setShowMyGarage] = useState(false)
  const [detailedBuild, setDetailedBuild] = useState(null)

  // --- LOCAL STORAGE STATES ---
  const [likedCarIds, setLikedCarIds] = useState(() => {
    const saved = localStorage.getItem("dream_car_likes");
    return saved ? JSON.parse(saved) : [];
  });

  const [savedBuilds, setSavedBuilds] = useState(() => {
    const saved = localStorage.getItem("dream_car_builds");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync Liked Cars to LocalStorage
  useEffect(() => {
    localStorage.setItem("dream_car_likes", JSON.stringify(likedCarIds));
  }, [likedCarIds]);

  // Sync Saved Builds to LocalStorage
  useEffect(() => {
    localStorage.setItem("dream_car_builds", JSON.stringify(savedBuilds));
  }, [savedBuilds]);

  // Fetch cars from your Express/MongoDB API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError("");
        const url = brandFilter
          ? `http://localhost:1003/api/cars?brand=${encodeURIComponent(brandFilter)}`
          : `http://localhost:1003/api/cars`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch cars from MongoDB");

        const data = await res.json();
        setCars(data || []);

        if (data?.length) {
          setSelectedCar(data[0]);
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [brandFilter]);

  const brands = useMemo(() => {
    const set = new Set(cars.map((c) => c.brand).filter(Boolean));
    return Array.from(set).sort();
  }, [cars]);

  const filteredCars = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return cars;
    return cars.filter(
      (c) =>
        c.name?.toLowerCase().includes(q) ||
        c.brand?.toLowerCase().includes(q) ||
        c.type?.toLowerCase().includes(q)
    );
  }, [cars, search]);

  const basePrice = selectedCar?.price?.inr?.min || selectedCar?.price?.usd?.min || 0;

  const totalPrice = useMemo(() => {
    const packagesCost = selectedPackages.reduce((s, p) => s + p.price, 0);
    return (
      basePrice +
      (selectedColor?.price || 0) +
      (selectedWheels?.price || 0) +
      (selectedTune?.price || 0) +
      packagesCost
    );
  }, [basePrice, selectedColor, selectedWheels, selectedTune, selectedPackages]);

  const liveHp = (selectedCar?.performance?.power_hp || 0) + (selectedTune?.hpBonus || 0);
  const liveAccel = (
    (selectedCar?.performance?.acceleration_sec || 0) + (selectedTune?.accelBonus || 0)
  ).toFixed(1);
  const topSpeed = selectedCar?.performance?.top_speed_kmh || 0;

  // --- LOCALSTORAGE HANDLERS ---
  const toggleLikeCar = (carId, e) => {
    if (e) e.stopPropagation();
    setLikedCarIds((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );
  };

  const saveCurrentBuildToLocalStorage = () => {
    if (!selectedCar) return;

    const newBuild = {
      id: Date.now().toString(), // unique build ID
      carName: `${selectedCar.brand} ${selectedCar.name}`,
      carImg: selectedCar.img,
      color: selectedColor,
      wheels: selectedWheels,
      tune: selectedTune,
      packages: selectedPackages,
      totalPrice,
      liveHp,
      liveAccel,
      topSpeed,
      savedAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    setSavedBuilds((prev) => [newBuild, ...prev]);
    setShowSummary(false);
    alert("🎉 Dream Build saved to your Local Garage!");
  };

  const deleteSavedBuild = (buildId) => {
    setSavedBuilds((prev) => prev.filter((b) => b.id !== buildId));
  };

  const togglePackage = (pkg) => {
    setSelectedPackages((prev) =>
      prev.some((p) => p.id === pkg.id)
        ? prev.filter((p) => p.id !== pkg.id)
        : [...prev, pkg]
    );
  };

  const resetBuild = () => {
    if (!cars.length) return;
    setSelectedCar(cars[0]);
    setSelectedColor(COLOR_OPTIONS[0]);
    setSelectedWheels(WHEEL_OPTIONS[0]);
    setSelectedTune(TUNE_OPTIONS[0]);
    setSelectedPackages([]);
    setActiveTab("model");
  };

  if (loading) {
    return (
      <div className="builder-loading">
        <Loader2 className="spinner" size={42} />
        <p>Loading cars from MongoDB...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="builder-error">
        <h2>Could not load cars</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="builder-container">
      {/* HEADER TITLE & LOCAL GARAGE BUTTON */}
      <div className="title">
        <div className="overlay-1">
          <span className="title-text">MAKE YOUR DREAM CAR</span>
          <img
            className="w-30 h-30 invert car-icon-animate"
            src="https://www.svgrepo.com/show/175234/top-down-sports-car-silhouette.svg"
            alt="car"
          />
        </div>

        {/* GARAGE TRIGGER BUTTON */}
        <button className="garage-trigger-btn" onClick={() => setShowMyGarage(true)}>
          <Bookmark size={18} /> My Garage ({savedBuilds.length})
        </button>
      </div>

      <div className="builder-workspace">
        {/* LEFT COLUMN: CAR PREVIEW */}
        <div className="visualizer-column">
          <div className="canvas-card">
            <div className="model-badge-row">
              <span className="model-badge">
                {selectedCar ? `${selectedCar.brand} ${selectedCar.name}` : "Select a car"}
              </span>

              {/* LIKE BUTTON */}
              {selectedCar && (
                <button
                  className={`like-icon-btn ${likedCarIds.includes(selectedCar._id || selectedCar.id) ? "liked" : ""
                    }`}
                  onClick={(e) => toggleLikeCar(selectedCar._id || selectedCar.id, e)}
                  title="Like this car"
                >
                  <Heart
                    size={22}
                    fill={likedCarIds.includes(selectedCar._id || selectedCar.id) ? "#ef4444" : "none"}
                  />
                </button>
              )}
            </div>

            <div className="car-stage">
              {selectedCar?.img ? (
                <img
                  src={selectedCar.img}
                  alt={selectedCar.name}
                  className="car-render"
                  style={{ filter: selectedColor?.filter || "none" }}
                />
              ) : (
                <div className="no-car">No image</div>
              )}
              <div
                className="color-ambient-glow"
                style={{ backgroundColor: selectedColor?.hex || "#888" }}
              />
            </div>

            {/* PERFORMANCE BAR */}
            <div className="stats-bar">
              <div className="stat-box">
                <Zap className="stat-icon text-amber" />
                <div>
                  <span className="stat-val">{liveHp || "--"} HP</span>
                  <span className="stat-lbl">Power</span>
                </div>
              </div>
              <div className="stat-box">
                <Gauge className="stat-icon text-cyan" />
                <div>
                  <span className="stat-val">{liveAccel || "--"}s</span>
                  <span className="stat-lbl">0-100</span>
                </div>
              </div>
              <div className="stat-box">
                <Weight className="stat-icon text-purple" />
                <div>
                  <span className="stat-val">{topSpeed || "--"}</span>
                  <span className="stat-lbl">Top km/h</span>
                </div>
              </div>
            </div>

            {selectedCar && (
              <div className="meta-row">
                <span><Star size={14} /> {selectedCar.rating ?? "N/A"}</span>
                <span>{selectedCar.type || "N/A"}</span>
                <span>{selectedCar.rarity || selectedCar.status || "Standard"}</span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: CONTROLS */}
        <div className="controls-column">
          <div className="tabs-nav">
            <button className={`tab-btn ${activeTab === "model" ? "active" : ""}`} onClick={() => setActiveTab("model")}>
              <Layers size={16} /> Model
            </button>
            <button className={`tab-btn ${activeTab === "exterior" ? "active" : ""}`} onClick={() => setActiveTab("exterior")}>
              <Palette size={16} /> Exterior
            </button>
            <button className={`tab-btn ${activeTab === "performance" ? "active" : ""}`} onClick={() => setActiveTab("performance")}>
              <Cpu size={16} /> Tune
            </button>
            <button className={`tab-btn ${activeTab === "packages" ? "active" : ""}`} onClick={() => setActiveTab("packages")}>
              <Sliders size={16} /> Add-ons
            </button>
          </div>

          <div className="tab-content">
            {/* MODEL TAB */}
            {activeTab === "model" && (
              <div className="option-group">
                <div className="filter-row">
                  <div className="search-box">
                    <Search size={18} />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search name, brand, or type..."
                    />
                  </div>
                  <select
                    className="brand-select"
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                  >
                    <option value="">All Brands</option>
                    {brands.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <h3>Select Base Car</h3>
                <div className="card-selector scroll-list">
                  {filteredCars.map((car) => {
                    const isLiked = likedCarIds.includes(car._id || car.id);
                    return (
                      <div
                        key={car._id || car.id}
                        className={`select-card ${selectedCar?._id === car._id ? "selected" : ""}`}
                        onClick={() => setSelectedCar(car)}
                      >
                        <img src={car.img} alt={car.name} className="thumb" />
                        <div className="card-info">
                          <h4>{car.brand} {car.name}</h4>
                          <p>{car.type} • {car.technical?.engine || "N/A"}</p>
                          <span className="price-tag">
                            {formatINR(car.price?.inr?.min || 0)}
                          </span>
                        </div>

                        <div className="card-actions">
                          <button
                            className={`mini-like-btn ${isLiked ? "liked" : ""}`}
                            onClick={(e) => toggleLikeCar(car._id || car.id, e)}
                          >
                            <Heart size={16} fill={isLiked ? "#ef4444" : "none"} />
                          </button>
                          {selectedCar?._id === car._id && <Check className="check-badge" />}
                        </div>
                      </div>
                    );
                  })}
                  {!filteredCars.length && <p className="empty">No cars found.</p>}
                </div>
              </div>
            )}

            {/* EXTERIOR TAB */}
            {activeTab === "exterior" && (
              <div className="option-group">
                <h3>Paint Finish</h3>
                <div className="color-swatch-grid">
                  {COLOR_OPTIONS.map((c) => (
                    <button
                      key={c.id}
                      className={`swatch-btn ${selectedColor.id === c.id ? "active-swatch" : ""}`}
                      onClick={() => setSelectedColor(c)}
                    >
                      <span className="swatch-circle" style={{ backgroundColor: c.hex }} />
                      <span className="swatch-name">{c.name}</span>
                      <span className="swatch-price">{c.price ? `+${formatINR(c.price)}` : "Included"}</span>
                    </button>
                  ))}
                </div>

                <h3 className="mt-6">Wheels</h3>
                <div className="card-selector">
                  {WHEEL_OPTIONS.map((w) => (
                    <div
                      key={w.id}
                      className={`select-card ${selectedWheels.id === w.id ? "selected" : ""}`}
                      onClick={() => setSelectedWheels(w)}
                    >
                      <Disc size={22} />
                      <div className="card-info">
                        <h4>{w.name}</h4>
                        <span className="price-tag">{w.price ? `+${formatINR(w.price)}` : "Included"}</span>
                      </div>
                      {selectedWheels.id === w.id && <Check className="check-badge" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TUNE TAB */}
            {activeTab === "performance" && (
              <div className="option-group">
                <h3>Performance Tune</h3>
                <div className="card-selector">
                  {TUNE_OPTIONS.map((t) => (
                    <div
                      key={t.id}
                      className={`select-card ${selectedTune.id === t.id ? "selected" : ""}`}
                      onClick={() => setSelectedTune(t)}
                    >
                      <div className="card-info">
                        <h4>{t.name}</h4>
                        <p>{t.hpBonus ? `+${t.hpBonus} HP` : "Factory stock"}</p>
                        <span className="price-tag">{t.price ? `+${formatINR(t.price)}` : "Included"}</span>
                      </div>
                      {selectedTune.id === t.id && <Check className="check-badge" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PACKAGES TAB */}
            {activeTab === "packages" && (
              <div className="option-group">
                <h3>Dream Packages</h3>
                <div className="card-selector">
                  {PACKAGE_OPTIONS.map((pkg) => {
                    const checked = selectedPackages.some((p) => p.id === pkg.id);
                    return (
                      <div
                        key={pkg.id}
                        className={`select-card ${checked ? "selected" : ""}`}
                        onClick={() => togglePackage(pkg)}
                      >
                        <div className="card-info">
                          <h4>{pkg.name}</h4>
                          <span className="price-tag">+{formatINR(pkg.price)}</span>
                        </div>
                        <div className={`checkbox-custom ${checked ? "checked" : ""}`}>
                          {checked && <Check size={14} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div className="price-footer">
            <div className="price-details">
              <span className="price-label">Estimated Build Price</span>
              <span className="total-price-text">{formatINR(totalPrice)}</span>
            </div>
            <div className="action-btns">
              <button className="reset-btn" onClick={resetBuild} title="Reset Build">
                <RotateCcw size={18} />
              </button>
              <button className="summary-btn" onClick={() => setShowSummary(true)}>
                View Spec <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SPEC SUMMARY MODAL */}
      {showSummary && selectedCar && (
        <div className="modal-overlay" onClick={() => setShowSummary(false)}>
          <div className="summary-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Your Dream Build</h2>
              <button className="close-btn" onClick={() => setShowSummary(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="summary-spec-header">
                <h3>{selectedCar.brand} {selectedCar.name}</h3>
                <p className="gold-text">{formatINR(totalPrice)}</p>
              </div>
              <ul className="summary-list">
                <li><span>Base Price</span><strong>{formatINR(basePrice)}</strong></li>
                <li><span>Paint</span><strong>{selectedColor.name}</strong></li>
                <li><span>Wheels</span><strong>{selectedWheels.name}</strong></li>
                <li><span>Tune</span><strong>{selectedTune.name}</strong></li>
                <li>
                  <span>Packages</span>
                  <strong>
                    {selectedPackages.length
                      ? selectedPackages.map((p) => p.name).join(", ")
                      : "None"}
                  </strong>
                </li>
              </ul>
              <div className="summary-stats-grid">
                <div><span>HP</span><h4>{liveHp}</h4></div>
                <div><span>0-100</span><h4>{liveAccel}s</h4></div>
                <div><span>Top</span><h4>{topSpeed} km/h</h4></div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="order-btn" onClick={saveCurrentBuildToLocalStorage}>
                Save Build to Local Storage
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MY LOCAL GARAGE MODAL */}
      {showMyGarage && (
        <div className="modal-overlay" onClick={() => {
          setShowMyGarage(false);
          setDetailedBuild(null); // Reset details when closing
        }}>
          <div className="summary-modal garage-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{detailedBuild ? "Build Specifications" : "My Local Garage"}</h2>
              <button className="close-btn" onClick={() => {
                setShowMyGarage(false);
                setDetailedBuild(null);
              }}>×</button>
            </div>

            <div className="modal-body scroll-list">
              {/* --- DETAILED VIEW OF A SPECIFIC SAVED CAR --- */}
              {detailedBuild ? (
                <div className="build-detail-view">
                  <button className="back-btn" onClick={() => setDetailedBuild(null)}>
                    ← Back to Garage
                  </button>

                  <div className="detail-hero">
                    <img
                      src={detailedBuild.carImg}
                      alt={detailedBuild.carName}
                      style={{ filter: detailedBuild.color?.filter || "none" }}
                    />
                    <h3>{detailedBuild.carName}</h3>
                    <p className="date-tag">Configured on {detailedBuild.savedAt}</p>
                  </div>

                  <div className="summary-stats-grid mb-4">
                    <div><span>HP</span><h4>{detailedBuild.liveHp}</h4></div>
                    <div><span>0-100</span><h4>{detailedBuild.liveAccel}s</h4></div>
                    <div><span>Top</span><h4>{detailedBuild.topSpeed} km/h</h4></div>
                  </div>

                  <h4 className="receipt-title">Build Sheet & Modifications</h4>
                  <ul className="receipt-list">
                    <li>
                      <span>Exterior Paint</span>
                      <strong>{detailedBuild.color?.name}</strong>
                    </li>
                    <li>
                      <span>Wheels</span>
                      <strong>{detailedBuild.wheels?.name}</strong>
                    </li>
                    <li>
                      <span>Engine Tune</span>
                      <strong>{detailedBuild.tune?.name}</strong>
                    </li>

                    {detailedBuild.packages?.length > 0 && (
                      <li className="addons-section">
                        <span>Installed Add-ons:</span>
                        <div className="addon-tags">
                          {detailedBuild.packages.map((pkg, i) => (
                            <span key={i} className="addon-tag">✓ {pkg.name}</span>
                          ))}
                        </div>
                      </li>
                    )}

                    <li className="total-row">
                      <span>Total Value</span>
                      <strong className="gold-text">{formatINR(detailedBuild.totalPrice)}</strong>
                    </li>
                  </ul>
                </div>
              ) : (
                /* --- LIST OF SAVED CARS --- */
                savedBuilds.length === 0 ? (
                  <div className="empty-garage">
                    <Bookmark size={48} />
                    <p>No builds saved yet! Configure a car and click "Save Build".</p>
                  </div>
                ) : (
                  savedBuilds.map((build) => (
                    <div key={build.id} className="saved-build-card">
                      <img
                        src={build.carImg}
                        alt={build.carName}
                        className="garage-thumb"
                        style={{ filter: build.color?.filter || "none" }}
                      />
                      <div className="garage-info">
                        <h4>{build.carName}</h4>
                        <span className="gold-text">{formatINR(build.totalPrice)}</span>
                        <small className="date-tag">Saved on {build.savedAt}</small>

                        <div className="garage-card-actions">
                          <button
                            className="view-spec-btn"
                            onClick={() => setDetailedBuild(build)}
                          >
                            View Build Sheet
                          </button>
                        </div>
                      </div>
                      <button
                        className="delete-build-btn"
                        onClick={() => deleteSavedBuild(build.id)}
                        title="Delete Build"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrDreamcar;