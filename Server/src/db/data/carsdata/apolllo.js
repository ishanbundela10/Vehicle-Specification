const cars = [
  {
    id: "apollo-arrow-2016",
    brand: "Apollo",
    name: "Arrow",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Hypercar",
    comfort: 2, mileage: 1, stability: 5, rating: 4.8,
    performance: { power_hp: 1000, top_speed_kmh: 360, acceleration_sec: 2.9, weight_kg: 1300, power_to_weight: 0.76 },
    technical: { engine: "4.0L Twin-Turbo V8", displacement_cc: 3993, fuel: "Petrol", transmission: "7-Speed Sequential", cylinders: 8 },
    chassis: { material: "Carbon Fiber / Kevlar", brake_material: "Carbon Ceramic", suspension: "Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2016, end_year: 2016, units_produced: 1, country: "Germany" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "2010s", status: "Concept", rarity: "One-Off"
  },
  {
    id: "apollo-evo-2022",
    brand: "Apollo",
    name: "Project EVO",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 2, mileage: 1, stability: 5, rating: 5.0,
    performance: { power_hp: 780, top_speed_kmh: 335, acceleration_sec: 2.7, weight_kg: 1250, power_to_weight: 0.62 },
    technical: { engine: "6.3L Naturally Aspirated V12", displacement_cc: 6300, fuel: "Petrol", transmission: "6-Speed Sequential", cylinders: 12 },
    chassis: { material: "Carbon Monocoque", brake_material: "Carbon Ceramic", suspension: "Pushrod Adjustable", drivetrain: "RWD" },
    production: { start_year: 2022, end_year: null, units_produced: 10, country: "Germany" },
    price: { usd: { min: 3000000, max: 3000000, currency: "USD" }, inr: { min: 249000000, max: 249000000, currency: "INR" } },
    era: "Modern", status: "Active", rarity: "Ultra Rare"
  },
  {
    id: "apollo-ie-2017",
    brand: "Apollo",
    name: "Intensa Emozione (IE)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Hypercar",
    comfort: 1, mileage: 1, stability: 5, rating: 4.9,
    performance: { power_hp: 780, top_speed_kmh: 335, acceleration_sec: 2.7, weight_kg: 1250, power_to_weight: 0.62 },
    technical: { engine: "6.3L Naturally Aspirated V12", displacement_cc: 6300, fuel: "Petrol", transmission: "6-Speed Sequential", cylinders: 12 },
    chassis: { material: "Full Carbon Fiber Chassis", brake_material: "Brembo Carbon Ceramic", suspension: "Inboard Pushrod", drivetrain: "RWD" },
    production: { start_year: 2017, end_year: null, units_produced: 10, country: "Germany" },
    price: { usd: { min: 2670000, max: 2670000, currency: "USD" }, inr: { min: 221610000, max: 221610000, currency: "INR" } },
    era: "2010s", status: "Active", rarity: "Ultra Rare"
  }
];
export default cars;