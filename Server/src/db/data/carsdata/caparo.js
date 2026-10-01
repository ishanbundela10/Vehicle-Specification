const cars = [
  {
    id: "caparo-t1-2009",
    brand: "Caparo",
    name: "T1",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Road-Legal Track Car",
    comfort: 1, mileage: 1, stability: 5, rating: 4.8,
    performance: { power_hp: 575, top_speed_kmh: 330, acceleration_sec: 2.5, weight_kg: 470, power_to_weight: 1.22 /* Incredible ratio */ },
    technical: { engine: "3.5L Naturally Aspirated V8", displacement_cc: 3500, fuel: "Petrol", transmission: "6-Speed Sequential", cylinders: 8 },
    chassis: { material: "Carbon Fiber / Aluminum Honeycomb Monocoque", brake_material: "Carbon Ceramic", suspension: "Pushrod Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2009, end_year: 2016, units_produced: 16, country: "United Kingdom" },
    price: { usd: { min: 350000, max: 400000, currency: "USD" }, inr: { min: 29050000, max: 33200000, currency: "INR" } },
    era: "2010s", status: "Discontinued", rarity: "Ultra Rare"
  }
];
export default cars;