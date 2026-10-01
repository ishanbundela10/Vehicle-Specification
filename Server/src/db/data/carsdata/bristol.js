const cars = [
  {
    id: "bristol-bullet-2016",
    brand: "Bristol Cars",
    name: "Bullet Concept",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Roadster",
    comfort: 3, mileage: 2, stability: 4, rating: 4.5,
    performance: { power_hp: 370, top_speed_kmh: 250, acceleration_sec: 3.8, weight_kg: 1100, power_to_weight: 0.33 },
    technical: { engine: "4.8L Naturally Aspirated V8 (BMW)", displacement_cc: 4799, fuel: "Petrol", transmission: "6-Speed Manual / Auto", cylinders: 8 },
    chassis: { material: "Carbon Fiber Panels / Aluminum Chassis", brake_material: "Ventilated Discs", suspension: "Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2016, end_year: 2016, units_produced: 1, country: "United Kingdom" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "2010s", status: "Concept", rarity: "One-Off"
  },
  {
    id: "bristol-fighter-2003",
    brand: "Bristol Cars",
    name: "Fighter",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer / Supercar",
    comfort: 4, mileage: 1, stability: 4, rating: 4.7,
    performance: { power_hp: 525, top_speed_kmh: 338, acceleration_sec: 4.0, weight_kg: 1600, power_to_weight: 0.32 },
    technical: { engine: "8.0L V10 (Dodge Viper Derived)", displacement_cc: 7990, fuel: "Petrol", transmission: "6-Speed Manual / 4-Speed Auto", cylinders: 10 },
    chassis: { material: "Aluminum/Carbon Fiber Body over Box-Section Frame", brake_material: "Discs", suspension: "Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2003, end_year: 2011, units_produced: 13, country: "United Kingdom" },
    price: { usd: { min: 250000, max: 300000, currency: "USD" }, inr: { min: 20750000, max: 24900000, currency: "INR" } },
    era: "2000s", status: "Discontinued", rarity: "Extremely Rare"
  },
  {
    id: "bristol-fighter-s-2005",
    brand: "Bristol Cars",
    name: "Fighter S",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 4, mileage: 1, stability: 4, rating: 4.8,
    performance: { power_hp: 628, top_speed_kmh: 338, acceleration_sec: 4.0, weight_kg: 1600, power_to_weight: 0.39 },
    technical: { engine: "8.0L V10 (Modified)", displacement_cc: 7990, fuel: "Petrol", transmission: "6-Speed Manual", cylinders: 10 },
    chassis: { material: "Aluminum/Carbon Body", brake_material: "Discs", suspension: "Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2005, end_year: 2011, units_produced: 5, country: "United Kingdom" },
    price: { usd: { min: 300000, max: 350000, currency: "USD" }, inr: { min: 24900000, max: 29050000, currency: "INR" } },
    era: "2000s", status: "Discontinued", rarity: "Extremely Rare"
  },
  {
    id: "bristol-fighter-t-2007",
    brand: "Bristol Cars",
    name: "Fighter T",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 3, mileage: 1, stability: 4, rating: 4.9,
    performance: { power_hp: 1012, top_speed_kmh: 362, acceleration_sec: 3.5, weight_kg: 1650, power_to_weight: 0.61 },
    technical: { engine: "8.0L Twin-Turbo V10", displacement_cc: 7990, fuel: "Petrol", transmission: "6-Speed Manual", cylinders: 10 },
    chassis: { material: "Aluminum/Carbon Body", brake_material: "Vented Discs", suspension: "Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2007, end_year: 2011, units_produced: 0 /* Claimed to be produced but heavily debated */, country: "United Kingdom" },
    price: { usd: { min: 500000, max: 600000, currency: "USD" }, inr: { min: 41500000, max: 49800000, currency: "INR" } },
    era: "2000s", status: "Discontinued", rarity: "Phantom/Concept"
  }
];
export default cars;