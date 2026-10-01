const cars = [
  {
    id: "audi-a8-w12-2005",
    brand: "Audi",
    name: "A8 W12",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Luxury Sedan",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.6,
    performance: {
      power_hp: 450,
      top_speed_kmh: 250,
      acceleration_sec: 5.1,
      weight_kg: 1995,
      power_to_weight: 0.23
    },
    technical: {
      engine: "6.0L W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "6-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum Space Frame",
      brake_material: "Ventilated Discs",
      suspension: "Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2005,
      end_year: 2009,
      units_produced: 1200,
      country: "Germany"
    },
    price: {
      usd: { min: 45000, max: 75000, currency: "USD" },
      inr: { min: 3700000, max: 6200000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "audi-avus-1991",
    brand: "Audi",
    name: "Avus",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 509,
      top_speed_kmh: 340,
      acceleration_sec: 3.0,
      weight_kg: 1250,
      power_to_weight: 0.41
    },
    technical: {
      engine: "6.0L W12",
      displacement_cc: 6000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum / Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1991,
      end_year: 1991,
      units_produced: 1,
      country: "Germany"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "1990s",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "audi-le-mans-quattro-2003",
    brand: "Audi",
    name: "Le Mans Quattro",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 610,
      top_speed_kmh: 345,
      acceleration_sec: 3.7,
      weight_kg: 1530,
      power_to_weight: 0.40
    },
    technical: {
      engine: "5.0L Twin-Turbo V10",
      displacement_cc: 4991,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Aluminum / Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2003,
      end_year: 2003,
      units_produced: 1,
      country: "Germany"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "2000s",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "audi-nuvolari-2026",
    brand: "Audi",
    name: "Nuvolari",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Electric Hypercar",
    comfort: 4,
    mileage: 5,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 1000,
      top_speed_kmh: 320,
      acceleration_sec: 2.3,
      weight_kg: 1950,
      power_to_weight: 0.51
    },
    technical: {
      engine: "Tri-Motor Electric",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "Single-Speed",
      cylinders: 0
    },
    chassis: {
      material: "Carbon Fiber / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2026,
      end_year: null,
      units_produced: null,
      country: "Germany"
    },
    price: {
      usd: { min: 250000, max: 350000, currency: "USD" },
      inr: { min: 21000000, max: 29000000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Limited"
  },
  {
    id: "audi-pb18-etron-2018",
    brand: "Audi",
    name: "PB18 e-tron",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Electric Supercar",
    comfort: 3,
    mileage: 5,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 775,
      top_speed_kmh: 300,
      acceleration_sec: 2.0,
      weight_kg: 1550,
      power_to_weight: 0.50
    },
    technical: {
      engine: "Tri-Motor Electric",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "Single-Speed",
      cylinders: 0
    },
    chassis: {
      material: "Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Pushrod",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2018,
      end_year: 2018,
      units_produced: 1,
      country: "Germany"
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
    id: "audi-q7-v12-2008",
    brand: "Audi",
    name: "Q7 V12 TDI",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Luxury SUV",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.5,
    performance: {
      power_hp: 500,
      top_speed_kmh: 250,
      acceleration_sec: 5.5,
      weight_kg: 2635,
      power_to_weight: 0.19
    },
    technical: {
      engine: "6.0L Twin-Turbo V12 TDI",
      displacement_cc: 5934,
      fuel: "Diesel",
      transmission: "6-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2008,
      end_year: 2012,
      units_produced: 500,
      country: "Germany"
    },
    price: {
      usd: { min: 35000, max: 65000, currency: "USD" },
      inr: { min: 2900000, max: 5400000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "audi-r8-2007",
    brand: "Audi",
    name: "R8",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 420,
      top_speed_kmh: 301,
      acceleration_sec: 4.6,
      weight_kg: 1560,
      power_to_weight: 0.27
    },
    technical: {
      engine: "4.2L V8",
      displacement_cc: 4163,
      fuel: "Petrol",
      transmission: "6-Speed Manual / R-Tronic",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Space Frame",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2007,
      end_year: 2015,
      units_produced: 25000,
      country: "Germany"
    },
    price: {
      usd: { min: 60000, max: 110000, currency: "USD" },
      inr: { min: 5000000, max: 9100000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "audi-r8-gt-2010",
    brand: "Audi",
    name: "R8 GT",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Track Supercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 560,
      top_speed_kmh: 320,
      acceleration_sec: 3.6,
      weight_kg: 1520,
      power_to_weight: 0.37
    },
    technical: {
      engine: "5.2L V10",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "6-Speed R-Tronic",
      cylinders: 10
    },
    chassis: {
      material: "Aluminum / Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2010,
      end_year: 2013,
      units_produced: 333,
      country: "Germany"
    },
    price: {
      usd: { min: 140000, max: 220000, currency: "USD" },
      inr: { min: 11600000, max: 18200000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "audi-r8-v10-2009",
    brand: "Audi",
    name: "R8 V10",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 525,
      top_speed_kmh: 316,
      acceleration_sec: 3.9,
      weight_kg: 1625,
      power_to_weight: 0.32
    },
    technical: {
      engine: "5.2L V10",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "6-Speed Manual / R-Tronic",
      cylinders: 10
    },
    chassis: {
      material: "Aluminum Space Frame",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2009,
      end_year: 2015,
      units_produced: 15000,
      country: "Germany"
    },
    price: {
      usd: { min: 80000, max: 140000, currency: "USD" },
      inr: { min: 6600000, max: 11600000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "audi-r8-v10-plus-mk2-2015",
    brand: "Audi",
    name: "R8 V10 Plus (Mk II)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 610,
      top_speed_kmh: 330,
      acceleration_sec: 3.2,
      weight_kg: 1555,
      power_to_weight: 0.39
    },
    technical: {
      engine: "5.2L V10",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "7-Speed S Tronic",
      cylinders: 10
    },
    chassis: {
      material: "Aluminum / Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2015,
      end_year: 2024,
      units_produced: 18000,
      country: "Germany"
    },
    price: {
      usd: { min: 120000, max: 200000, currency: "USD" },
      inr: { min: 9900000, max: 16500000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "audi-rosemeyer-2000",
    brand: "Audi",
    name: "Rosemeyer",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 700,
      top_speed_kmh: 350,
      acceleration_sec: 3.4,
      weight_kg: 1800,
      power_to_weight: 0.39
    },
    technical: {
      engine: "8.0L W16",
      displacement_cc: 8000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 16
    },
    chassis: {
      material: "Aluminum / Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2000,
      end_year: 2000,
      units_produced: 1,
      country: "Germany"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "2000s",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "audi-rs-etron-gt-2021",
    brand: "Audi",
    name: "RS e-tron GT",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Electric Performance Sedan",
    comfort: 5,
    mileage: 5,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 637,
      top_speed_kmh: 250,
      acceleration_sec: 3.3,
      weight_kg: 2347,
      power_to_weight: 0.27
    },
    technical: {
      engine: "Dual-Motor Electric",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "2-Speed Rear",
      cylinders: 0
    },
    chassis: {
      material: "Aluminum / Steel",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2021,
      end_year: null,
      units_produced: null,
      country: "Germany"
    },
    price: {
      usd: { min: 145000, max: 180000, currency: "USD" },
      inr: { min: 12000000, max: 14900000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited"
  },
  {
    id: "audi-rs-etron-gt-performance-2024",
    brand: "Audi",
    name: "RS e-tron GT Performance",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Electric Performance Sedan",
    comfort: 5,
    mileage: 5,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 912,
      top_speed_kmh: 250,
      acceleration_sec: 2.5,
      weight_kg: 2320,
      power_to_weight: 0.39
    },
    technical: {
      engine: "Dual-Motor Electric",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "2-Speed Rear",
      cylinders: 0
    },
    chassis: {
      material: "Aluminum / Steel",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: null,
      country: "Germany"
    },
    price: {
      usd: { min: 165000, max: 200000, currency: "USD" },
      inr: { min: 13700000, max: 16600000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited"
  },
  {
    id: "audi-rs-q8-2020",
    brand: "Audi",
    name: "RS Q8",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Performance SUV",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 591,
      top_speed_kmh: 250,
      acceleration_sec: 3.8,
      weight_kg: 2390,
      power_to_weight: 0.25
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3996,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2020,
      end_year: null,
      units_produced: null,
      country: "Slovakia"
    },
    price: {
      usd: { min: 120000, max: 160000, currency: "USD" },
      inr: { min: 9900000, max: 13200000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "audi-rs2-avant-1994",
    brand: "Audi",
    name: "RS2 Avant",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Wagon",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 315,
      top_speed_kmh: 262,
      acceleration_sec: 4.8,
      weight_kg: 1595,
      power_to_weight: 0.20
    },
    technical: {
      engine: "2.2L Turbo I5",
      displacement_cc: 2226,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 5
    },
    chassis: {
      material: "Steel",
      brake_material: "Porsche Brakes",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1994,
      end_year: 1995,
      units_produced: 2891,
      country: "Germany"
    },
    price: {
      usd: { min: 40000, max: 90000, currency: "USD" },
      inr: { min: 3300000, max: 7450000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "audi-rs3-8v-2015",
    brand: "Audi",
    name: "RS3 (8V)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 400,
      top_speed_kmh: 280,
      acceleration_sec: 4.1,
      weight_kg: 1510,
      power_to_weight: 0.26
    },
    technical: {
      engine: "2.5L Turbo I5",
      displacement_cc: 2480,
      fuel: "Petrol",
      transmission: "7-Speed S Tronic",
      cylinders: 5
    },
    chassis: {
      material: "Steel",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2015,
      end_year: 2020,
      units_produced: 25000,
      country: "Germany"
    },
    price: {
      usd: { min: 35000, max: 55000, currency: "USD" },
      inr: { min: 2900000, max: 4550000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "audi-rs4-b5-2000",
    brand: "Audi",
    name: "RS4 (B5)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Sedan/Wagon",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 380,
      top_speed_kmh: 250,
      acceleration_sec: 4.9,
      weight_kg: 1620,
      power_to_weight: 0.23
    },
    technical: {
      engine: "2.7L Twin-Turbo V6",
      displacement_cc: 2671,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2000,
      end_year: 2001,
      units_produced: 6030,
      country: "Germany"
    },
    price: {
      usd: { min: 25000, max: 50000, currency: "USD" },
      inr: { min: 2070000, max: 4140000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "audi-rs4-b7-2006",
    brand: "Audi",
    name: "RS4 (B7)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Sedan/Wagon",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 420,
      top_speed_kmh: 250,
      acceleration_sec: 4.7,
      weight_kg: 1650,
      power_to_weight: 0.25
    },
    technical: {
      engine: "4.2L V8",
      displacement_cc: 4163,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2006,
      end_year: 2008,
      units_produced: 14000,
      country: "Germany"
    },
    price: {
      usd: { min: 30000, max: 55000, currency: "USD" },
      inr: { min: 2480000, max: 4550000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "audi-rs4-b8-2012",
    brand: "Audi",
    name: "RS4 (B8)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Wagon",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 450,
      top_speed_kmh: 280,
      acceleration_sec: 4.7,
      weight_kg: 1795,
      power_to_weight: 0.25
    },
    technical: {
      engine: "4.2L V8",
      displacement_cc: 4163,
      fuel: "Petrol",
      transmission: "7-Speed S Tronic",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2012,
      end_year: 2015,
      units_produced: 7000,
      country: "Germany"
    },
    price: {
      usd: { min: 40000, max: 70000, currency: "USD" },
      inr: { min: 3300000, max: 5800000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "audi-rs5-b8-2010",
    brand: "Audi",
    name: "RS5 (B8)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Coupe",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 450,
      top_speed_kmh: 280,
      acceleration_sec: 4.5,
      weight_kg: 1725,
      power_to_weight: 0.26
    },
    technical: {
      engine: "4.2L V8",
      displacement_cc: 4163,
      fuel: "Petrol",
      transmission: "7-Speed S Tronic",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2010,
      end_year: 2016,
      units_produced: 15000,
      country: "Germany"
    },
    price: {
      usd: { min: 35000, max: 65000, currency: "USD" },
      inr: { min: 2900000, max: 5400000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "audi-rs5-b9-2017",
    brand: "Audi",
    name: "RS5 (B9)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Coupe",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 444,
      top_speed_kmh: 280,
      acceleration_sec: 3.9,
      weight_kg: 1655,
      power_to_weight: 0.27
    },
    technical: {
      engine: "2.9L Twin-Turbo V6",
      displacement_cc: 2894,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 6
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2017,
      end_year: null,
      units_produced: null,
      country: "Germany"
    },
    price: {
      usd: { min: 75000, max: 95000, currency: "USD" },
      inr: { min: 6200000, max: 7850000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "audi-rs6-c5-2002",
    brand: "Audi",
    name: "RS6 (C5)",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Wagon/Sedan",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 450,
      top_speed_kmh: 250,
      acceleration_sec: 4.7,
      weight_kg: 1840,
      power_to_weight: 0.24
    },
    technical: {
      engine: "4.2L Twin-Turbo V8",
      displacement_cc: 4172,
      fuel: "Petrol",
      transmission: "5-Speed Tiptronic",
      cylinders: 8
    },
    chassis: {
      material: "Steel",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2002,
      end_year: 2004,
      units_produced: 8000,
      country: "Germany"
    },
    price: {
      usd: { min: 20000, max: 45000, currency: "USD" },
      inr: { min: 1650000, max: 3720000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "audi-rs6-c6-2008",
    brand: "Audi",
    name: "RS6 (C6)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Wagon/Sedan",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 572,
      top_speed_kmh: 280,
      acceleration_sec: 4.5,
      weight_kg: 2025,
      power_to_weight: 0.28
    },
    technical: {
      engine: "5.0L Twin-Turbo V10",
      displacement_cc: 4991,
      fuel: "Petrol",
      transmission: "6-Speed Tiptronic",
      cylinders: 10
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2008,
      end_year: 2010,
      units_produced: 8000,
      country: "Germany"
    },
    price: {
      usd: { min: 35000, max: 70000, currency: "USD" },
      inr: { min: 2900000, max: 5800000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "audi-rs6-c7-2013",
    brand: "Audi",
    name: "RS6 (C7)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Wagon",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 560,
      top_speed_kmh: 305,
      acceleration_sec: 3.9,
      weight_kg: 1950,
      power_to_weight: 0.29
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3993,
      fuel: "Petrol",
      transmission: "8-Speed Tiptronic",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2013,
      end_year: 2018,
      units_produced: 15000,
      country: "Germany"
    },
    price: {
      usd: { min: 50000, max: 90000, currency: "USD" },
      inr: { min: 4140000, max: 7450000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "audi-rs7-4g8-2014",
    brand: "Audi",
    name: "RS7 (4G8)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Fastback",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 560,
      top_speed_kmh: 305,
      acceleration_sec: 3.9,
      weight_kg: 1920,
      power_to_weight: 0.29
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3993,
      fuel: "Petrol",
      transmission: "8-Speed Tiptronic",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2014,
      end_year: 2019,
      units_produced: 12000,
      country: "Germany"
    },
    price: {
      usd: { min: 55000, max: 95000, currency: "USD" },
      inr: { min: 4550000, max: 7850000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "audi-rsq-2004",
    brand: "Audi",
    name: "RSQ",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Coupe",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 400,
      top_speed_kmh: 300,
      acceleration_sec: 4.0,
      weight_kg: 1400,
      power_to_weight: 0.29
    },
    technical: {
      engine: "3.0L Twin-Turbo V6",
      displacement_cc: 3000,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Aluminum / Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2004,
      end_year: 2004,
      units_produced: 1,
      country: "Germany"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "2000s",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "audi-sport-quattro-1984",
    brand: "Audi",
    name: "Sport Quattro",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Rally Homologation",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 5.0,
    performance: {
      power_hp: 306,
      top_speed_kmh: 248,
      acceleration_sec: 4.5,
      weight_kg: 1300,
      power_to_weight: 0.24
    },
    technical: {
      engine: "2.1L Turbo I5",
      displacement_cc: 2133,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 5
    },
    chassis: {
      material: "Steel / Carbon Kevlar",
      brake_material: "Ventilated Discs",
      suspension: "MacPherson Strut",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1984,
      end_year: 1985,
      units_produced: 214,
      country: "Germany"
    },
    price: {
      usd: { min: 300000, max: 600000, currency: "USD" },
      inr: { min: 24800000, max: 49600000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "audi-tt-rs-8j-2009",
    brand: "Audi",
    name: "TT RS (8J)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 340,
      top_speed_kmh: 280,
      acceleration_sec: 4.3,
      weight_kg: 1450,
      power_to_weight: 0.23
    },
    technical: {
      engine: "2.5L Turbo I5",
      displacement_cc: 2480,
      fuel: "Petrol",
      transmission: "6-Speed Manual / S Tronic",
      cylinders: 5
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2009,
      end_year: 2014,
      units_produced: 12000,
      country: "Hungary"
    },
    price: {
      usd: { min: 25000, max: 45000, currency: "USD" },
      inr: { min: 2070000, max: 3720000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "audi-tt-rs-8s-2016",
    brand: "Audi",
    name: "TT RS (8S)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 400,
      top_speed_kmh: 280,
      acceleration_sec: 3.7,
      weight_kg: 1440,
      power_to_weight: 0.28
    },
    technical: {
      engine: "2.5L Turbo I5",
      displacement_cc: 2480,
      fuel: "Petrol",
      transmission: "7-Speed S Tronic",
      cylinders: 5
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2016,
      end_year: 2024,
      units_produced: 15000,
      country: "Hungary"
    },
    price: {
      usd: { min: 45000, max: 75000, currency: "USD" },
      inr: { min: 3720000, max: 6200000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Uncommon"
  }
];

export default cars;