const cars = [
  {
    id: "brabham-bt62-2018",
    brand: "Brabham",
    name: "BT62",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Only Hypercar",
    comfort: 1, mileage: 1, stability: 5, rating: 5.0,
    performance: { power_hp: 700, top_speed_kmh: 330, acceleration_sec: 2.8, weight_kg: 972, power_to_weight: 0.72 },
    technical: { engine: "5.4L Naturally Aspirated V8", displacement_cc: 5387, fuel: "Petrol", transmission: "6-Speed Sequential", cylinders: 8 },
    chassis: { material: "Carbon Fiber / Chromoly Tubular", brake_material: "Carbon-Carbon", suspension: "Double Wishbone Pushrod", drivetrain: "RWD" },
    production: { start_year: 2018, end_year: null, units_produced: 70, country: "Australia" },
    price: { usd: { min: 1300000, max: 1500000, currency: "USD" }, inr: { min: 107900000, max: 124500000, currency: "INR" } },
    era: "2010s", status: "Active", rarity: "Ultra Rare"
  },
  {
    id: "brabham-bt62r-2020",
    brand: "Brabham",
    name: "BT62R",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Road-Legal Hypercar",
    comfort: 2, mileage: 1, stability: 5, rating: 4.9,
    performance: { power_hp: 700, top_speed_kmh: 330, acceleration_sec: 2.9, weight_kg: 1050, power_to_weight: 0.66 },
    technical: { engine: "5.4L Naturally Aspirated V8", displacement_cc: 5387, fuel: "Petrol", transmission: "6-Speed Sequential (Street Gearing)", cylinders: 8 },
    chassis: { material: "Carbon Fiber / Chromoly", brake_material: "Carbon Ceramic", suspension: "Adjustable Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2020, end_year: null, units_produced: 70, country: "Australia" },
    price: { usd: { min: 1500000, max: 1800000, currency: "USD" }, inr: { min: 124500000, max: 149400000, currency: "INR" } },
    era: "Modern", status: "Active", rarity: "Ultra Rare"
  }
];
export default cars;