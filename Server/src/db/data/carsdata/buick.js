const cars = [
  {
    id: "buick-wildcat-concept-1985",
    brand: "Buick GS",
    name: "Wildcat Concept",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Sports Car",
    comfort: 3, mileage: 2, stability: 3, rating: 4.5,
    performance: { power_hp: 360, top_speed_kmh: 290, acceleration_sec: 4.5, weight_kg: 1320, power_to_weight: 0.27 },
    technical: { engine: "3.8L Mid-Engine McLaren-Modified V6", displacement_cc: 3800, fuel: "Petrol", transmission: "4-Speed Automatic", cylinders: 6 },
    chassis: { material: "Carbon Fiber / Composite Body", brake_material: "Discs", suspension: "Independent", drivetrain: "AWD" },
    production: { start_year: 1985, end_year: 1985, units_produced: 1, country: "USA" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "1980s", status: "Concept", rarity: "One-Off"
  },
  {
    id: "buick-regal-gnx-1987",
    brand: "Buick",
    name: "Regal GNX",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Grand National Muscle",
    comfort: 4, mileage: 2, stability: 4, rating: 5.0,
    performance: { power_hp: 300, top_speed_kmh: 200, acceleration_sec: 4.7, weight_kg: 1540, power_to_weight: 0.19 },
    technical: { engine: "3.8L Turbocharged V6 (Garrett T-3)", displacement_cc: 3791, fuel: "Petrol", transmission: "4-Speed Automatic", cylinders: 6 },
    chassis: { material: "Steel Monocoque / Ladder Bar Rear Suspension", brake_material: "Ventilated Front Discs", suspension: "Panhard Rod & Torque Arm", drivetrain: "RWD" },
    production: { start_year: 1987, end_year: 1987, units_produced: 547, country: "USA" },
    price: { usd: { min: 120000, max: 200000, currency: "USD" }, inr: { min: 9960000, max: 16600000, currency: "INR" } },
    era: "1980s", status: "Discontinued", rarity: "Extremely Rare"
  },
  {
    id: "buick-gsx-1970",
    brand: "Buick",
    name: "GSX Stage 1",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Muscle Car",
    comfort: 3, mileage: 1, stability: 3, rating: 4.9,
    performance: { power_hp: 360, top_speed_kmh: 205, acceleration_sec: 5.5, weight_kg: 1750, power_to_weight: 0.20 },
    technical: { engine: "7.5L Big Block V8 (455 cu in)", displacement_cc: 7456, fuel: "Petrol", transmission: "4-Speed Hurst Manual / 3-Speed Auto", cylinders: 8 },
    chassis: { material: "Steel Body w/ Rear Spoiler & Hood Scoops", brake_material: "Front Discs / Rear Drums", suspension: "Heavy Duty Firm Ride", drivetrain: "RWD w/ Positraction" },
    production: { start_year: 1970, end_year: 1970, units_produced: 678, country: "USA" },
    price: { usd: { min: 90000, max: 180000, currency: "USD" }, inr: { min: 7470000, max: 14940000, currency: "INR" } },
    era: "1970s", status: "Discontinued", rarity: "Rare"
  },
  {
    id: "buick-riviera-gs-1965",
    brand: "Buick",
    name: "Riviera Gran Sport",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Personal Luxury Coupe",
    comfort: 5, mileage: 1, stability: 3, rating: 4.8,
    performance: { power_hp: 360, top_speed_kmh: 200, acceleration_sec: 7.2, weight_kg: 1810, power_to_weight: 0.19 },
    technical: { engine: "7.0L Wildcat V8 (425 Dual-Quad)", displacement_cc: 6964, fuel: "Petrol", transmission: "3-Speed Super Turbine Automatic", cylinders: 8 },
    chassis: { material: "Steel Cruciform Frame w/ Clamshell Headlights", brake_material: "Alfin Aluminum Front Drums", suspension: "Double Wishbone / Live Axle", drivetrain: "RWD" },
    production: { start_year: 1965, end_year: 1965, units_produced: 3547, country: "USA" },
    price: { usd: { min: 45000, max: 95000, currency: "USD" }, inr: { min: 3735000, max: 7885000, currency: "INR" } },
    era: "1960s", status: "Discontinued", rarity: "Uncommon"
  },
  {
    id: "buick-avista-concept-2016",
    brand: "Buick",
    name: "Avista Concept",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Luxury Coupe",
    comfort: 5, mileage: 3, stability: 4, rating: 4.7,
    performance: { power_hp: 400, top_speed_kmh: 275, acceleration_sec: 4.3, weight_kg: 1650, power_to_weight: 0.24 },
    technical: { engine: "3.0L Twin-Turbo V6", displacement_cc: 2990, fuel: "Petrol", transmission: "8-Speed Automatic", cylinders: 6 },
    chassis: { material: "Alpha Architecture w/ Magnetic Ride Control", brake_material: "Brembo Discs", suspension: "Adaptive Magnetic Damping", drivetrain: "RWD" },
    production: { start_year: 2016, end_year: 2016, units_produced: 1, country: "USA" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "2010s", status: "Concept", rarity: "One-Off"
  }
];
export default cars;