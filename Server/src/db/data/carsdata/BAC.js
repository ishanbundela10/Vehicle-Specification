const cars = [
  {
    id: "bac-mono-2011",
    brand: "BAC",
    name: "Mono",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Single-Seat Track Car",
    comfort: 1, mileage: 2, stability: 5, rating: 4.8,
    performance: { power_hp: 280, top_speed_kmh: 274, acceleration_sec: 2.8, weight_kg: 540, power_to_weight: 0.51 },
    technical: { engine: "2.3L Cosworth I4", displacement_cc: 2300, fuel: "Petrol", transmission: "6-Speed Sequential", cylinders: 4 },
    chassis: { material: "Carbon Fiber / Tubular Steel", brake_material: "AP Racing Discs", suspension: "Pushrod Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2011, end_year: 2020, units_produced: 150, country: "United Kingdom" },
    price: { usd: { min: 130000, max: 170000, currency: "USD" }, inr: { min: 10790000, max: 14110000, currency: "INR" } },
    era: "2010s", status: "Discontinued", rarity: "Rare"
  },
  {
    id: "bac-mono-r-2019",
    brand: "BAC",
    name: "Mono R",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Single-Seat Track Car",
    comfort: 1, mileage: 2, stability: 5, rating: 5.0,
    performance: { power_hp: 340, top_speed_kmh: 274, acceleration_sec: 2.5, weight_kg: 555, power_to_weight: 0.61 },
    technical: { engine: "2.5L Mountune I4", displacement_cc: 2500, fuel: "Petrol", transmission: "6-Speed Sequential", cylinders: 4 },
    chassis: { material: "Graphene-Enhanced Carbon Fiber", brake_material: "Carbon Ceramic", suspension: "Ohlins Adjustable Pushrod", drivetrain: "RWD" },
    production: { start_year: 2019, end_year: null, units_produced: 30, country: "United Kingdom" },
    price: { usd: { min: 250000, max: 300000, currency: "USD" }, inr: { min: 20750000, max: 24900000, currency: "INR" } },
    era: "Modern", status: "Active", rarity: "Extremely Rare"
  }
];
export default cars;