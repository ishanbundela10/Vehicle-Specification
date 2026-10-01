const cars = [
  {
    id: "chevrolet-camaro-ss-gen5-2010",
    brand: "Chevrolet",
    name: "Camaro SS (Gen 5)",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Muscle Car",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 426,
      top_speed_kmh: 250,
      acceleration_sec: 4.7,
      weight_kg: 1750,
      power_to_weight: 0.24
    },
    technical: {
      engine: "6.2L Naturally Aspirated V8 (LS3)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "6-Speed Manual / Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Brembo Ventilated Discs",
      suspension: "FE3 Sport Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2010,
      end_year: 2015,
      units_produced: 500000,
      country: "USA"
    },
    price: {
      usd: { min: 18000, max: 32000, currency: "USD" },
      inr: { min: 1494000, max: 2656000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "chevrolet-camaro-zl1-gen6-2016",
    brand: "Chevrolet",
    name: "Camaro ZL1 (Gen 6)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Track Muscle Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 650,
      top_speed_kmh: 318,
      acceleration_sec: 3.5,
      weight_kg: 1760,
      power_to_weight: 0.37
    },
    technical: {
      engine: "6.2L Supercharged V8 (LT4)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 10-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "High-Strength Steel & Aluminum",
      brake_material: "Brembo 6-Piston Discs",
      suspension: "Magnetic Ride Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2023,
      units_produced: 15000,
      country: "USA"
    },
    price: {
      usd: { min: 65000, max: 88000, currency: "USD" },
      inr: { min: 5395000, max: 7304000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "chevrolet-corvette-c1-1953",
    brand: "Chevrolet",
    name: "Corvette C1",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Roadster",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.9,
    performance: {
      power_hp: 283,
      top_speed_kmh: 200,
      acceleration_sec: 6.9,
      weight_kg: 1300,
      power_to_weight: 0.21
    },
    technical: {
      engine: "4.6L Small-Block V8",
      displacement_cc: 4638,
      fuel: "Petrol",
      transmission: "4-Speed Manual / 2-Speed Powerglide",
      cylinders: 8
    },
    chassis: {
      material: "Fiberglass Body / Steel Box Frame",
      brake_material: "Drum Brakes",
      suspension: "Independent Front / Live Rear Axle",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1953,
      end_year: 1962,
      units_produced: 69015,
      country: "USA"
    },
    price: {
      usd: { min: 75000, max: 180000, currency: "USD" },
      inr: { min: 6225000, max: 14940000, currency: "INR" }
    },
    era: "1950s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "chevrolet-corvette-c2-1963",
    brand: "Chevrolet",
    name: "Corvette C2 Sting Ray",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Car",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 5.0,
    performance: {
      power_hp: 360,
      top_speed_kmh: 225,
      acceleration_sec: 5.8,
      weight_kg: 1370,
      power_to_weight: 0.26
    },
    technical: {
      engine: "5.4L Fuel-Injected V8 (L84)",
      displacement_cc: 5359,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Fiberglass Body / Steel Frame",
      brake_material: "4-Wheel Disc Brakes",
      suspension: "Independent Rear Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1963,
      end_year: 1967,
      units_produced: 117964,
      country: "USA"
    },
    price: {
      usd: { min: 90000, max: 250000, currency: "USD" },
      inr: { min: 7470000, max: 20750000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "chevrolet-corvette-c3-1968",
    brand: "Chevrolet",
    name: "Corvette C3",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Muscle Sports Car",
    comfort: 3,
    mileage: 2,
    stability: 3,
    rating: 4.7,
    performance: {
      power_hp: 300,
      top_speed_kmh: 220,
      acceleration_sec: 6.2,
      weight_kg: 1500,
      power_to_weight: 0.20
    },
    technical: {
      engine: "5.7L Small-Block V8 (L48)",
      displacement_cc: 5733,
      fuel: "Petrol",
      transmission: "4-Speed Manual / 3-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Fiberglass Body / Steel Frame",
      brake_material: "Disc Brakes",
      suspension: "Independent Rear Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1968,
      end_year: 1982,
      units_produced: 542861,
      country: "USA"
    },
    price: {
      usd: { min: 22000, max: 55000, currency: "USD" },
      inr: { min: 1826000, max: 4565000, currency: "INR" }
    },
    era: "1970s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "chevrolet-corvette-c4-1984",
    brand: "Chevrolet",
    name: "Corvette C4",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.5,
    performance: {
      power_hp: 300,
      top_speed_kmh: 245,
      acceleration_sec: 5.5,
      weight_kg: 1480,
      power_to_weight: 0.20
    },
    technical: {
      engine: "5.7L Small-Block V8 (LT1)",
      displacement_cc: 5733,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 4-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "SMC Fiberglass Body / Uniframe",
      brake_material: "4-Wheel Disc Brakes",
      suspension: "Transverse Fiberglass Leaf Spring",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1984,
      end_year: 1996,
      units_produced: 358180,
      country: "USA"
    },
    price: {
      usd: { min: 12000, max: 28000, currency: "USD" },
      inr: { min: 996000, max: 2324000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "chevrolet-corvette-c5-1997",
    brand: "Chevrolet",
    name: "Corvette C5",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 4,
    mileage: 3,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 345,
      top_speed_kmh: 280,
      acceleration_sec: 4.7,
      weight_kg: 1470,
      power_to_weight: 0.23
    },
    technical: {
      engine: "5.7L V8 (LS1)",
      displacement_cc: 5665,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 4-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Hydroformed Steel Frame / Composite Panels",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1997,
      end_year: 2004,
      units_produced: 248715,
      country: "USA"
    },
    price: {
      usd: { min: 16000, max: 32000, currency: "USD" },
      inr: { min: 1328000, max: 2656000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "chevrolet-corvette-c6-2005",
    brand: "Chevrolet",
    name: "Corvette C6",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 4,
    mileage: 3,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 430,
      top_speed_kmh: 300,
      acceleration_sec: 4.2,
      weight_kg: 1460,
      power_to_weight: 0.29
    },
    technical: {
      engine: "6.2L V8 (LS3)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 6-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Hydroformed Steel Frame",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone w/ Magnetic Ride",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2005,
      end_year: 2013,
      units_produced: 215100,
      country: "USA"
    },
    price: {
      usd: { min: 22000, max: 42000, currency: "USD" },
      inr: { min: 1826000, max: 3486000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "chevrolet-corvette-c7-2014",
    brand: "Chevrolet",
    name: "Corvette C7 Stingray",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 455,
      top_speed_kmh: 306,
      acceleration_sec: 3.8,
      weight_kg: 1500,
      power_to_weight: 0.30
    },
    technical: {
      engine: "6.2L V8 (LT1)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "7-Speed Manual / 8-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Frame / Carbon Composite Hood & Roof",
      brake_material: "Brembo Discs",
      suspension: "Magnetic Selective Ride Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2014,
      end_year: 2019,
      units_produced: 189500,
      country: "USA"
    },
    price: {
      usd: { min: 38000, max: 62000, currency: "USD" },
      inr: { min: 3154000, max: 5146000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "chevrolet-corvette-c7-grand-sport-2017",
    brand: "Chevrolet",
    name: "Corvette C7 Grand Sport",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Track Sports Car",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 460,
      top_speed_kmh: 306,
      acceleration_sec: 3.6,
      weight_kg: 1550,
      power_to_weight: 0.29
    },
    technical: {
      engine: "6.2L V8 (LT1)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "7-Speed Manual / 8-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Frame / Carbon Aero Body",
      brake_material: "Brembo Carbon Ceramic Option",
      suspension: "Magnetic Selective Ride Control Z07 Spec",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2017,
      end_year: 2019,
      units_produced: 26000,
      country: "USA"
    },
    price: {
      usd: { min: 52000, max: 78000, currency: "USD" },
      inr: { min: 4316000, max: 6474000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "chevrolet-corvette-c8-2020",
    brand: "Chevrolet",
    name: "Corvette C8 Stingray",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Mid-Engine Sports Car",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 495,
      top_speed_kmh: 312,
      acceleration_sec: 2.9,
      weight_kg: 1530,
      power_to_weight: 0.32
    },
    technical: {
      engine: "6.2L Mid-Engine V8 (LT2)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Structure / Fiberglass Composite",
      brake_material: "Brembo Discs",
      suspension: "Magnetic Ride Control 4.0",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2020,
      end_year: null,
      units_produced: null,
      country: "USA"
    },
    price: {
      usd: { min: 68000, max: 92000, currency: "USD" },
      inr: { min: 5644000, max: 7636000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "chevrolet-corvette-mako-shark-1962",
    brand: "Chevrolet",
    name: "Corvette Mako Shark (XP-755)",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Sports Car",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.8,
    performance: {
      power_hp: 300,
      top_speed_kmh: 210,
      acceleration_sec: 6.5,
      weight_kg: 1350,
      power_to_weight: 0.22
    },
    technical: {
      engine: "5.4L V8",
      displacement_cc: 5359,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Custom Fiberglass Styling Shell",
      brake_material: "Drum Brakes",
      suspension: "Independent Suspension Prototype",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1962,
      end_year: 1965,
      units_produced: 1,
      country: "USA"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "1960s",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "chevrolet-corvette-z06-c5-2000",
    brand: "Chevrolet",
    name: "Corvette Z06 (C5)",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Coupe",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 405,
      top_speed_kmh: 282,
      acceleration_sec: 4.0,
      weight_kg: 1415,
      power_to_weight: 0.28
    },
    technical: {
      engine: "5.7L V8 (LS6)",
      displacement_cc: 5665,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Hydroformed Steel Frame / Titanium Exhaust",
      brake_material: "Ventilated Discs",
      suspension: "FE4 Track Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2000,
      end_year: 2005,
      units_produced: 28388,
      country: "USA"
    },
    price: {
      usd: { min: 25000, max: 45000, currency: "USD" },
      inr: { min: 2075000, max: 3735000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "chevrolet-corvette-z06-c6-2006",
    brand: "Chevrolet",
    name: "Corvette Z06 (C6)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 505,
      top_speed_kmh: 318,
      acceleration_sec: 3.7,
      weight_kg: 1420,
      power_to_weight: 0.35
    },
    technical: {
      engine: "7.0L Naturally Aspirated V8 (LS7)",
      displacement_cc: 7011,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Frame / Carbon Fiber Fenders & Floor",
      brake_material: "Brembo 6-Piston Discs",
      suspension: "MSRC Adaptive Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2006,
      end_year: 2013,
      units_produced: 27979,
      country: "USA"
    },
    price: {
      usd: { min: 42000, max: 70000, currency: "USD" },
      inr: { min: 3486000, max: 5810000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "chevrolet-corvette-z06-c7-2016",
    brand: "Chevrolet",
    name: "Corvette Z06 (C7)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 650,
      top_speed_kmh: 315,
      acceleration_sec: 3.2,
      weight_kg: 1598,
      power_to_weight: 0.40
    },
    technical: {
      engine: "6.2L Supercharged V8 (LT4)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "7-Speed Manual / 8-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Frame / Carbon Aero Body Parts",
      brake_material: "Brembo Carbon Ceramic (Z07 Package)",
      suspension: "Magnetic Selective Ride Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2019,
      units_produced: 39500,
      country: "USA"
    },
    price: {
      usd: { min: 65000, max: 98000, currency: "USD" },
      inr: { min: 5395000, max: 8134000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "chevrolet-corvette-z06-c8-2023",
    brand: "Chevrolet",
    name: "Corvette Z06 (C8)",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Mid-Engine Supercar",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 670,
      top_speed_kmh: 314,
      acceleration_sec: 2.6,
      weight_kg: 1560,
      power_to_weight: 0.42
    },
    technical: {
      engine: "5.5L Flat-Plane Crank NA V8 (LT6)",
      displacement_cc: 5463,
      fuel: "Petrol",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Spaceframe / Carbon Aero Package",
      brake_material: "Brembo Carbon Ceramic",
      suspension: "Magnetic Ride Control 4.0",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: null,
      country: "USA"
    },
    price: {
      usd: { min: 112000, max: 155000, currency: "USD" },
      inr: { min: 9296000, max: 12865000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "chevrolet-corvette-zr1-c4-1990",
    brand: "Chevrolet",
    name: "Corvette ZR-1 (C4)",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 405,
      top_speed_kmh: 290,
      acceleration_sec: 4.4,
      weight_kg: 1570,
      power_to_weight: 0.25
    },
    technical: {
      engine: "5.7L 32V DOHC V8 (LT5)",
      displacement_cc: 5733,
      fuel: "Petrol",
      transmission: "6-Speed ZF Manual",
      cylinders: 8
    },
    chassis: {
      material: "Fiberglass Composite Body / Steel Subframes",
      brake_material: "Heavy-Duty Discs",
      suspension: "FX3 Selective Ride Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1990,
      end_year: 1996,
      units_produced: 6939,
      country: "USA"
    },
    price: {
      usd: { min: 30000, max: 65000, currency: "USD" },
      inr: { min: 2490000, max: 5395000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "chevrolet-corvette-zr1-c6-2009",
    brand: "Chevrolet",
    name: "Corvette ZR1 (C6)",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 638,
      top_speed_kmh: 330,
      acceleration_sec: 3.3,
      weight_kg: 1515,
      power_to_weight: 0.42
    },
    technical: {
      engine: "6.2L Supercharged V8 (LS9)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Frame / Polycarbonate Clear Hood Window",
      brake_material: "Brembo Carbon Ceramic",
      suspension: "Magnetic Selective Ride Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2009,
      end_year: 2014,
      units_produced: 4684,
      country: "USA"
    },
    price: {
      usd: { min: 70000, max: 120000, currency: "USD" },
      inr: { min: 5810000, max: 9960000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "chevrolet-corvette-zr1-c7-2018",
    brand: "Chevrolet",
    name: "Corvette ZR1 (C7)",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Supercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 755,
      top_speed_kmh: 341,
      acceleration_sec: 2.8,
      weight_kg: 1614,
      power_to_weight: 0.46
    },
    technical: {
      engine: "6.2L Supercharged V8 (LT5)",
      displacement_cc: 6162,
      fuel: "Petrol",
      transmission: "7-Speed Manual / 8-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Full Carbon Fiber High-Wing Aero Body",
      brake_material: "Brembo Carbon Ceramic",
      suspension: "Magnetic Selective Ride Control ZTK Package",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2019,
      units_produced: 2953,
      country: "USA"
    },
    price: {
      usd: { min: 140000, max: 220000, currency: "USD" },
      inr: { min: 11620000, max: 18260000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "chevrolet-corvette-zr1-c8-2025",
    brand: "Chevrolet",
    name: "Corvette ZR1 (C8)",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Mid-Engine Hypercar",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1064,
      top_speed_kmh: 346,
      acceleration_sec: 2.3,
      weight_kg: 1665,
      power_to_weight: 0.63
    },
    technical: {
      engine: "5.5L Twin-Turbo Flat-Plane V8 (LT7)",
      displacement_cc: 5463,
      fuel: "Petrol",
      transmission: "8-Speed Reinforced Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Split Rear Window Carbon Frame / ZTK Carbon Aero",
      brake_material: "Carbon Ceramic Matrix",
      suspension: "Magnetic Selective Ride Control 4.0",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2025,
      end_year: null,
      units_produced: null,
      country: "USA"
    },
    price: {
      usd: { min: 180000, max: 240000, currency: "USD" },
      inr: { min: 14940000, max: 19920000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Limited Edition"
  },
  {
    id: "chevrolet-corvette-zr1x-c8-2026",
    brand: "Chevrolet",
    name: "Corvette ZR1X / ZORA (C8)",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Mid-Engine Hybrid Hypercar",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1220,
      top_speed_kmh: 355,
      acceleration_sec: 2.0,
      weight_kg: 1750,
      power_to_weight: 0.69
    },
    technical: {
      engine: "5.5L Twin-Turbo V8 + Electric Front Motor",
      displacement_cc: 5463,
      fuel: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Full Carbon Fiber Monocoque & Bodywork",
      brake_material: "Silicon Carbide Carbon Ceramic",
      suspension: "Adaptive e-AWD Active Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2026,
      end_year: null,
      units_produced: null,
      country: "USA"
    },
    price: {
      usd: { min: 250000, max: 320000, currency: "USD" },
      inr: { min: 20750000, max: 26560000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Ultra Rare"
  },
  {
    id: "chevrolet-nivola-1990",
    brand: "Chevrolet",
    name: "Nivola Concept",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Mid-Engine Coupe",
    comfort: 2,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 380,
      top_speed_kmh: 280,
      acceleration_sec: 4.5,
      weight_kg: 1300,
      power_to_weight: 0.29
    },
    technical: {
      engine: "5.7L V8 (LT5)",
      displacement_cc: 5733,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Yellow Composite Body Shell / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1990,
      end_year: 1990,
      units_produced: 1,
      country: "Italy"
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
    id: "chevrolet-ramarro-1984",
    brand: "Chevrolet",
    name: "Ramarro Bertone Concept",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Sports Coupe",
    comfort: 3,
    mileage: 2,
    stability: 3,
    rating: 4.5,
    performance: {
      power_hp: 230,
      top_speed_kmh: 240,
      acceleration_sec: 6.0,
      weight_kg: 1400,
      power_to_weight: 0.16
    },
    technical: {
      engine: "5.7L V8",
      displacement_cc: 5733,
      fuel: "Petrol",
      transmission: "3-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Bertone Sliding Door Body / Steel Frame",
      brake_material: "Disc Brakes",
      suspension: "Transverse Leaf Spring",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1984,
      end_year: 1984,
      units_produced: 1,
      country: "Italy"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "1980s",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "chevrolet-ss-concept-2003",
    brand: "Chevrolet",
    name: "SS Concept (2003)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Muscle Sedan",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 430,
      top_speed_kmh: 260,
      acceleration_sec: 4.5,
      weight_kg: 1650,
      power_to_weight: 0.26
    },
    technical: {
      engine: "6.0L V8",
      displacement_cc: 5967,
      fuel: "Petrol",
      transmission: "4-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Brembo 4-Piston Discs",
      suspension: "MSRC Adaptive Suspensions",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2003,
      end_year: 2003,
      units_produced: 1,
      country: "USA"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "2000s",
    status: "Concept",
    rarity: "One-Off"
  }
];

export default cars;