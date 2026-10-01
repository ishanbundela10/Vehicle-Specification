const cars = [
  {
    id: "alpine-a110-2018",
    brand: "Alpine",
    name: "A110",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 252,
      top_speed_kmh: 250,
      acceleration_sec: 4.5,
      weight_kg: 1103,
      power_to_weight: 0.23
    },
    technical: {
      engine: "1.8L Turbocharged I4",
      displacement_cc: 1798,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch (Getrag)",
      cylinders: 4
    },
    chassis: {
      material: "All-Aluminum Body & Structure",
      brake_material: "Brembo Discs",
      suspension: "Double Wishbone Front & Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: null,
      units_produced: null,
      country: "France"
    },
    price: {
      usd: { min: 65000, max: 75000, currency: "USD" },
      inr: { min: 5395000, max: 6225000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "alpine-a110r-2024",
    brand: "Alpine",
    name: "A110 R",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Sports Coupe",
    comfort: 2,
    mileage: 3,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 300,
      top_speed_kmh: 285,
      acceleration_sec: 3.9,
      weight_kg: 1082,
      power_to_weight: 0.28
    },
    technical: {
      engine: "1.8L Turbocharged I4",
      displacement_cc: 1798,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 4
    },
    chassis: {
      material: "Full Carbon Fiber Hood, Roof & Carbon Wheels",
      brake_material: "Brembo High-Performance Discs",
      suspension: "Adjustable Hydraulic Track Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: null,
      country: "France"
    },
    price: {
      usd: { min: 115000, max: 135000, currency: "USD" },
      inr: { min: 9545000, max: 11205000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited Edition"
  },
  {
    id: "alpine-a110s-2019",
    brand: "Alpine",
    name: "A110 S",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 300,
      top_speed_kmh: 275,
      acceleration_sec: 4.2,
      weight_kg: 1109,
      power_to_weight: 0.27
    },
    technical: {
      engine: "1.8L Turbocharged I4",
      displacement_cc: 1798,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 4
    },
    chassis: {
      material: "Aluminum Body / Carbon Roof Option",
      brake_material: "Orange Brembo Calipers w/ Discs",
      suspension: "Stiffened Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2019,
      end_year: null,
      units_produced: null,
      country: "France"
    },
    price: {
      usd: { min: 80000, max: 95000, currency: "USD" },
      inr: { min: 6640000, max: 7885000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "alpine-a290-2024",
    brand: "Alpine",
    name: "A290",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Electric Hot Hatch",
    comfort: 4,
    mileage: 5,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 220,
      top_speed_kmh: 170,
      acceleration_sec: 6.4,
      weight_kg: 1479,
      power_to_weight: 0.15
    },
    technical: {
      engine: "Front Electric Motor (52 kWh Battery)",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "Single-Speed Automatic",
      cylinders: 0
    },
    chassis: {
      material: "Steel & Aluminum AmpR Small Platform",
      brake_material: "Brembo 4-Piston Front Brakes",
      suspension: "Multi-Link Rear Suspension w/ Hydraulic Bump Stops",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: null,
      country: "France"
    },
    price: {
      usd: { min: 42000, max: 52000, currency: "USD" },
      inr: { min: 3486000, max: 4316000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "alpine-alpenglow-hy4-2024",
    brand: "Alpine",
    name: "Alpenglow HY4 Concept",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Hydrogen Hypercar",
    comfort: 1,
    mileage: 4,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 340,
      top_speed_kmh: 270,
      acceleration_sec: 3.2,
      weight_kg: 1200,
      power_to_weight: 0.28
    },
    technical: {
      engine: "2.0L Turbocharged Hydrogen I4",
      displacement_cc: 1998,
      fuel: "Hydrogen",
      transmission: "Sequential Race Transmission",
      cylinders: 4
    },
    chassis: {
      material: "LMP1-Style Carbon Fiber Monocoque",
      brake_material: "Carbon Ceramic",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2024,
      end_year: 2024,
      units_produced: 1,
      country: "France"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "Modern",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "alpine-vision-gt-2015",
    brand: "Alpine",
    name: "Vision Gran Turismo Concept",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 1,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 450,
      top_speed_kmh: 320,
      acceleration_sec: 3.5,
      weight_kg: 900,
      power_to_weight: 0.50
    },
    technical: {
      engine: "4.5L Naturally Aspirated V8",
      displacement_cc: 4494,
      fuel: "Petrol",
      transmission: "7-Speed Sequential",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Monocoque w/ Hydraulic Airbrakes",
      brake_material: "Carbon Ceramic",
      suspension: "Pushrod Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2015,
      units_produced: 1,
      country: "France"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "2010s",
    status: "Concept",
    rarity: "One-Off"
  }
];

export default cars;