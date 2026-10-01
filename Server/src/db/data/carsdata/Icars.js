const cars = [
  {
    id: "infiniti-q60-project-black-s-2017",
    brand: "Infiniti",
    name: "Q60 Project Black S Concept",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept F1-Hybrid Coupe",
    comfort: 3, mileage: 3, stability: 5, rating: 4.8,
    performance: { power_hp: 563, top_speed_kmh: 290, acceleration_sec: 3.5, weight_kg: 1775, power_to_weight: 0.31 },
    technical: { engine: "3.0L VR30DDTT Twin-Turbo V6 + Dual ERS Motors", displacement_cc: 2997, fuel: "Hybrid", transmission: "7-Speed Automatic", cylinders: 6 },
    chassis: { material: "Carbon Fiber Aero Panels & Titanium Exhaust", brake_material: "Carbon Ceramic Brakes", suspension: "Sport Tuned Adaptive Suspension", drivetrain: "RWD" },
    production: { start_year: 2017, end_year: 2017, units_produced: 2, country: "Japan / UK" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "2010s", status: "Concept", rarity: "One-Off"
  },
  {
    id: "iso-rivolta-grifo-1968",
    brand: "Iso Rivolta",
    name: "Grifo 7 Litri (GL 365)",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Italian GT / American V8",
    comfort: 4, mileage: 1, stability: 4, rating: 4.9,
    performance: { power_hp: 435, top_speed_kmh: 300, acceleration_sec: 5.2, weight_kg: 1430, power_to_weight: 0.30 },
    technical: { engine: "7.0L Chevrolet Big-Block V8 (427 Tri-Power)", displacement_cc: 6998, fuel: "Petrol", transmission: "5-Speed ZF Manual", cylinders: 8 },
    chassis: { material: "Steel Bertone Bodywork over Platform Chassis", brake_material: "4-Wheel Disc Brakes", suspension: "De Dion Rear Axle", drivetrain: "RWD" },
    production: { start_year: 1968, end_year: 1974, units_produced: 413, country: "Italy" },
    price: { usd: { min: 350000, max: 600000, currency: "USD" }, inr: { min: 29050000, max: 49800000, currency: "INR" } },
    era: "1970s", status: "Discontinued", rarity: "Extremely Rare"
  },
  {
    id: "iso-rivolta-gtz-2021",
    brand: "Iso Rivolta",
    name: "GTZ Zagato",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt Supercar",
    comfort: 4, mileage: 2, stability: 5, rating: 4.9,
    performance: { power_hp: 660, top_speed_kmh: 315, acceleration_sec: 3.7, weight_kg: 1480, power_to_weight: 0.44 },
    technical: { engine: "6.2L Supercharged V8 (Corvette LT4)", displacement_cc: 6162, fuel: "Petrol", transmission: "8-Speed Automatic", cylinders: 8 },
    chassis: { material: "Full Carbon Fiber Zagato Bodywork / Corvette C7 Base", brake_material: "Brembo Carbon Ceramic", suspension: "Magnetic Selective Ride Control", drivetrain: "RWD" },
    production: { start_year: 2021, end_year: null, units_produced: 19, country: "Italy" },
    price: { usd: { min: 1000000, max: 1300000, currency: "USD" }, inr: { min: 83000000, max: 107900000, currency: "INR" } },
    era: "Modern", status: "Active", rarity: "Ultra Rare"
  },
  {
    id: "iso-rivolta-lele-1969",
    brand: "Iso Rivolta",
    name: "Lele IR6",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Classic 2+2 GT",
    comfort: 4, mileage: 1, stability: 3, rating: 4.6,
    performance: { power_hp: 350, top_speed_kmh: 250, acceleration_sec: 6.4, weight_kg: 1610, power_to_weight: 0.21 },
    technical: { engine: "5.7L Chevy V8 / Ford 351 Cleveland V8", displacement_cc: 5733, fuel: "Petrol", transmission: "5-Speed ZF Manual / Auto", cylinders: 8 },
    chassis: { material: "Steel Gandini/Bertone Body", brake_material: "Discs", suspension: "De Dion Axle", drivetrain: "RWD" },
    production: { start_year: 1969, end_year: 1974, units_produced: 285, country: "Italy" },
    price: { usd: { min: 60000, max: 110000, currency: "USD" }, inr: { min: 4980000, max: 9130000, currency: "INR" } },
    era: "1970s", status: "Discontinued", rarity: "Rare"
  },
  {
    id: "iso-rivolta-varedo-concept-1972",
    brand: "Iso Rivolta",
    name: "Varedo Concept",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Wedge Supercar",
    comfort: 2, mileage: 1, stability: 4, rating: 4.7,
    performance: { power_hp: 325, top_speed_kmh: 265, acceleration_sec: 5.5, weight_kg: 1000, power_to_weight: 0.32 },
    technical: { engine: "5.8L Ford 351 Cleveland V8", displacement_cc: 5763, fuel: "Petrol", transmission: "5-Speed ZF Manual", cylinders: 8 },
    chassis: { material: "Fiberglass Bodywork / Zagato Frame", brake_material: "Discs", suspension: "Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 1972, end_year: 1972, units_produced: 1, country: "Italy" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "1970s", status: "Concept", rarity: "One-Off"
  },
  {
    id: "iso-rivolta-vision-gt-zagato-2017",
    brand: "Iso Rivolta",
    name: "Vision Gran Turismo Zagato Concept",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Gran Turismo Supercar",
    comfort: 3, mileage: 2, stability: 5, rating: 4.8,
    performance: { power_hp: 997, top_speed_kmh: 365, acceleration_sec: 2.7, weight_kg: 1129, power_to_weight: 0.88 },
    technical: { engine: "4.5L Twin-Turbo Callaway V8", displacement_cc: 4500, fuel: "Petrol", transmission: "7-Speed Sequential", cylinders: 8 },
    chassis: { material: "Carbon Fiber Zagato Bodywork", brake_material: "Carbon Ceramic", suspension: "Pushrod Double Wishbone", drivetrain: "RWD" },
    production: { start_year: 2017, end_year: 2017, units_produced: 1, country: "Italy" },
    price: { usd: { min: 0, max: 0, currency: "USD" }, inr: { min: 0, max: 0, currency: "INR" } },
    era: "2010s", status: "Concept", rarity: "One-Off"
  }
];

export default cars;