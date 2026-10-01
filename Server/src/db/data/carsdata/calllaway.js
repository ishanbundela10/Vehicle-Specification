const cars = [
  {
    id: "callaway-c16-2007",
    brand: "Callaway Cars",
    name: "C16",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 3, mileage: 2, stability: 4, rating: 4.8,
    performance: { power_hp: 650, top_speed_kmh: 331, acceleration_sec: 3.3, weight_kg: 1475, power_to_weight: 0.44 },
    technical: { engine: "6.0L Supercharged V8 (LS2 based)", displacement_cc: 5967, fuel: "Petrol", transmission: "6-Speed Manual", cylinders: 8 },
    chassis: { material: "Fiberglass / Carbon Body on Corvette C6 Frame", brake_material: "Alcon Discs", suspension: "Eibach Coilovers", drivetrain: "RWD" },
    production: { start_year: 2007, end_year: 2013, units_produced: 15, country: "USA" },
    price: { usd: { min: 150000, max: 200000, currency: "USD" }, inr: { min: 12450000, max: 16600000, currency: "INR" } },
    era: "2000s", status: "Discontinued", rarity: "Ultra Rare"
  },
  {
    id: "callaway-sledgehammer-1988",
    brand: "Callaway Cars",
    name: "Sledgehammer Corvette Concept",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Top Speed Record Car",
    comfort: 2, mileage: 1, stability: 4, rating: 5.0,
    performance: { power_hp: 898, top_speed_kmh: 410, acceleration_sec: 3.9, weight_kg: 1573, power_to_weight: 0.57 },
    technical: { engine: "5.7L Twin-Turbo V8", displacement_cc: 5733, fuel: "Petrol", transmission: "6-Speed Manual (ZF)", cylinders: 8 },
    chassis: { material: "Aerodynamic Fiber Body (C4 Corvette)", brake_material: "Ventilated Discs", suspension: "FX3 with Custom Tuning", drivetrain: "RWD" },
    production: { start_year: 1988, end_year: 1988, units_produced: 1, country: "USA" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "1980s", status: "Concept", rarity: "One-Off"
  }
];
export default cars;