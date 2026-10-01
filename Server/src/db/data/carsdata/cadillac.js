const cars = [
  {
    id: "cadillac-16-concept-2003",
    brand: "Cadillac V-Series",
    name: "Sixteen Concept",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Luxury Sedan",
    comfort: 5, mileage: 1, stability: 5, rating: 4.9,
    performance: { power_hp: 1000, top_speed_kmh: 320, acceleration_sec: 3.5, weight_kg: 2270, power_to_weight: 0.44 },
    technical: { engine: "13.6L Naturally Aspirated V16", displacement_cc: 13600, fuel: "Petrol", transmission: "4-Speed Automatic", cylinders: 16 },
    chassis: { material: "Aluminum Spaceframe", brake_material: "Ventilated Discs", suspension: "Independent High-Arm", drivetrain: "RWD" },
    production: { start_year: 2003, end_year: 2003, units_produced: 1, country: "USA" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "2000s", status: "Concept", rarity: "One-Off"
  },
  {
    id: "cadillac-cien-concept-2002",
    brand: "Cadillac V-Series",
    name: "Cien Concept",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 3, mileage: 2, stability: 5, rating: 4.8,
    performance: { power_hp: 750, top_speed_kmh: 350, acceleration_sec: 3.5, weight_kg: 1450, power_to_weight: 0.51 },
    technical: { engine: "7.5L Northstar V12", displacement_cc: 7500, fuel: "Petrol", transmission: "6-Speed Semi-Automatic", cylinders: 12 },
    chassis: { material: "Carbon Composite Monocoque", brake_material: "Ventilated Discs", suspension: "Pushrod Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2002, end_year: 2002, units_produced: 1, country: "USA" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "2000s", status: "Concept", rarity: "One-Off"
  },
  {
    id: "cadillac-cts-v-2003",
    brand: "Cadillac V-Series",
    name: "CTS-V (Gen 1)",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Sedan",
    comfort: 4, mileage: 2, stability: 4, rating: 4.6,
    performance: { power_hp: 400, top_speed_kmh: 262, acceleration_sec: 4.6, weight_kg: 1746, power_to_weight: 0.23 },
    technical: { engine: "5.7L LS6 V8 / 6.0L LS2 V8", displacement_cc: 5665, fuel: "Petrol", transmission: "6-Speed Tremec Manual", cylinders: 8 },
    chassis: { material: "Steel Unibody", brake_material: "Brembo 4-Piston Discs", suspension: "Nürburgring Tuned Suspension", drivetrain: "RWD" },
    production: { start_year: 2003, end_year: 2007, units_produced: 10000, country: "USA" },
    price: { usd: { min: 15000, max: 25000, currency: "USD" }, inr: { min: 1245000, max: 2075000, currency: "INR" } },
    era: "2000s", status: "Discontinued", rarity: "Common"
  },
  {
    id: "cadillac-elmiraj-concept-2013",
    brand: "Cadillac V-Series",
    name: "Elmiraj Concept",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Grand Tourer",
    comfort: 5, mileage: 2, stability: 4, rating: 4.7,
    performance: { power_hp: 500, top_speed_kmh: 280, acceleration_sec: 4.5, weight_kg: 1814, power_to_weight: 0.27 },
    technical: { engine: "4.5L Twin-Turbo V8", displacement_cc: 4500, fuel: "Petrol", transmission: "8-Speed Automatic", cylinders: 8 },
    chassis: { material: "Steel / Aluminum Hybrid", brake_material: "Carbon Ceramic", suspension: "Adaptive Ride", drivetrain: "RWD" },
    production: { start_year: 2013, end_year: 2013, units_produced: 1, country: "USA" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "2010s", status: "Concept", rarity: "One-Off"
  }
];
export default cars;