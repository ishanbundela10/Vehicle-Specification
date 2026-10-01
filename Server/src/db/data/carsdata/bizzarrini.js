const cars = [
  {
    id: "bizzarrini-manta-concept-1968",
    brand: "Bizzarrini",
    name: "Manta Concept",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Sports Car",
    comfort: 2, mileage: 1, stability: 3, rating: 4.8,
    performance: { power_hp: 400, top_speed_kmh: 280, acceleration_sec: 5.0, weight_kg: 1000, power_to_weight: 0.40 },
    technical: { engine: "5.3L Chevy V8", displacement_cc: 5358, fuel: "Petrol", transmission: "5-Speed Manual", cylinders: 8 },
    chassis: { material: "Tubular Chassis (P538 base)", brake_material: "Discs", suspension: "Independent", drivetrain: "RWD" },
    production: { start_year: 1968, end_year: 1968, units_produced: 1, country: "Italy" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "1960s", status: "Concept", rarity: "One-Off"
  },
  {
    id: "bizzarrini-strada-5300-1965",
    brand: "Bizzarrini",
    name: "5300 GT Strada",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Grand Tourer",
    comfort: 3, mileage: 1, stability: 4, rating: 4.9,
    performance: { power_hp: 365, top_speed_kmh: 280, acceleration_sec: 6.1, weight_kg: 1200, power_to_weight: 0.30 },
    technical: { engine: "5.3L Chevy V8", displacement_cc: 5358, fuel: "Petrol", transmission: "4-Speed Manual", cylinders: 8 },
    chassis: { material: "Aluminum Body over Steel Tube Frame", brake_material: "Inboard Discs", suspension: "De Dion Rear / Wishbone Front", drivetrain: "RWD" },
    production: { start_year: 1965, end_year: 1969, units_produced: 133, country: "Italy" },
    price: { usd: { min: 800000, max: 1200000, currency: "USD" }, inr: { min: 66400000, max: 99600000, currency: "INR" } },
    era: "1960s", status: "Discontinued", rarity: "Extremely Rare"
  }
];
export default cars;