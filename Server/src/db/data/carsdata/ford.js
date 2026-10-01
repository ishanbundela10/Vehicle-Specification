const cars = [
  {
    id: "ford-49-concept-2001",
    brand: "Ford",
    name: "Forty-Nine Concept",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Coupe",
    comfort: 4,
    mileage: 2,
    stability: 3,
    rating: 4.5,
    performance: {
      power_hp: 252,
      top_speed_kmh: 220,
      acceleration_sec: 6.8,
      weight_kg: 1650,
      power_to_weight: 0.15
    },
    technical: {
      engine: "3.9L AJ-V8",
      displacement_cc: 3934,
      fuel: "Petrol",
      transmission: "5-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel & Glass Roof Structure",
      brake_material: "Ventilated Discs",
      suspension: "Independent Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2001,
      end_year: 2001,
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
  },
  {
    id: "ford-escort-rs-cosworth-1992",
    brand: "Ford",
    name: "Escort RS Cosworth",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Rally Homologation",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 224,
      top_speed_kmh: 240,
      acceleration_sec: 5.7,
      weight_kg: 1275,
      power_to_weight: 0.18
    },
    technical: {
      engine: "2.0L Turbocharged I4 (Cosworth YBT)",
      displacement_cc: 1993,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Body w/ Whale-Tail Rear Wing",
      brake_material: "Ventilated Discs",
      suspension: "MacPherson Struts / Trailing Arm",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1992,
      end_year: 1996,
      units_produced: 7145,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 45000, max: 85000, currency: "USD" },
      inr: { min: 3735000, max: 7055000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "ford-focus-rs-mk1-2002",
    brand: "Ford",
    name: "Focus RS (Mk I)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch",
    comfort: 3,
    mileage: 3,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 212,
      top_speed_kmh: 232,
      acceleration_sec: 6.4,
      weight_kg: 1280,
      power_to_weight: 0.17
    },
    technical: {
      engine: "2.0L Turbocharged I4 (Duratec RS)",
      displacement_cc: 1988,
      fuel: "Petrol",
      transmission: "5-Speed Manual w/ Quaife LSD",
      cylinders: 4
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Brembo Ventilated Discs",
      suspension: "Sachs Racing Dampers",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2002,
      end_year: 2003,
      units_produced: 4501,
      country: "Germany"
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
    id: "ford-focus-rs-mk2-2009",
    brand: "Ford",
    name: "Focus RS (Mk II)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 301,
      top_speed_kmh: 263,
      acceleration_sec: 5.9,
      weight_kg: 1467,
      power_to_weight: 0.21
    },
    technical: {
      engine: "2.5L Turbocharged Inline-5 (Duratec)",
      displacement_cc: 2521,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 5
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "RevoKnuckle Front Suspension",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2009,
      end_year: 2011,
      units_produced: 11500,
      country: "Germany"
    },
    price: {
      usd: { min: 28000, max: 48000, currency: "USD" },
      inr: { min: 2324000, max: 3984000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "ford-focus-rs-mk3-2016",
    brand: "Ford",
    name: "Focus RS (Mk III)",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 350,
      top_speed_kmh: 266,
      acceleration_sec: 4.7,
      weight_kg: 1530,
      power_to_weight: 0.23
    },
    technical: {
      engine: "2.3L Turbocharged I4 (EcoBoost)",
      displacement_cc: 2261,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "High-Strength Steel Unibody",
      brake_material: "Brembo 4-Piston Discs",
      suspension: "Ford Performance Dynamic AWD w/ Drift Mode",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2016,
      end_year: 2020,
      units_produced: 32000,
      country: "Germany"
    },
    price: {
      usd: { min: 32000, max: 48000, currency: "USD" },
      inr: { min: 2656000, max: 3984000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "ford-gt-gen1-2004",
    brand: "Ford",
    name: "Ford GT (Gen 1)",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 550,
      top_speed_kmh: 330,
      acceleration_sec: 3.6,
      weight_kg: 1538,
      power_to_weight: 0.36
    },
    technical: {
      engine: "5.4L Supercharged V8",
      displacement_cc: 5409,
      fuel: "Petrol",
      transmission: "6-Speed Manual (Ricardo)",
      cylinders: 8
    },
    chassis: {
      material: "Superformed Aluminum Frame & Carbon Panels",
      brake_material: "Brembo 4-Piston Discs",
      suspension: "Double Wishbone w/ Coilover Shocks",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2004,
      end_year: 2006,
      units_produced: 4038,
      country: "USA"
    },
    price: {
      usd: { min: 350000, max: 550000, currency: "USD" },
      inr: { min: 29050000, max: 45650000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "ford-gt-gen2-2017",
    brand: "Ford",
    name: "Ford GT (Gen 2)",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 660,
      top_speed_kmh: 347,
      acceleration_sec: 3.0,
      weight_kg: 1385,
      power_to_weight: 0.48
    },
    technical: {
      engine: "3.5L Twin-Turbo EcoBoost V6",
      displacement_cc: 3497,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch (Getrag)",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Tub & Aluminum Subframes",
      brake_material: "Carbon Ceramic Matrix",
      suspension: "Pushrod Active Torsion Bar Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2017,
      end_year: 2022,
      units_produced: 1350,
      country: "Canada"
    },
    price: {
      usd: { min: 800000, max: 1200000, currency: "USD" },
      inr: { min: 66400000, max: 99600000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "ford-gt-mk2-2019",
    brand: "Ford",
    name: "Ford GT Mk II",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Only Hypercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 700,
      top_speed_kmh: 340,
      acceleration_sec: 2.7,
      weight_kg: 1300,
      power_to_weight: 0.54
    },
    technical: {
      engine: "3.5L Twin-Turbo EcoBoost V6 (Race Tuned)",
      displacement_cc: 3497,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 6
    },
    chassis: {
      material: "Full Carbon Race Bodywork w/ Dual-Element Wing",
      brake_material: "Carbon Ceramic Race Discs",
      suspension: "Multimatic DSSV Race Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2019,
      end_year: 2022,
      units_produced: 45,
      country: "Canada"
    },
    price: {
      usd: { min: 1200000, max: 1800000, currency: "USD" },
      inr: { min: 99600000, max: 149400000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "ford-gt-mk4-2023",
    brand: "Ford",
    name: "Ford GT Mk IV",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Only Unlimited Hypercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 800,
      top_speed_kmh: 350,
      acceleration_sec: 2.5,
      weight_kg: 1250,
      power_to_weight: 0.64
    },
    technical: {
      engine: "Bespoke Twin-Turbo EcoBoost V6",
      displacement_cc: 3800,
      fuel: "Petrol",
      transmission: "Proper Racing Transmission",
      cylinders: 6
    },
    chassis: {
      material: "Long-Wheelbase Carbon Fiber Race Tub",
      brake_material: "Carbon Ceramic",
      suspension: "Multimatic Adaptive Spool Valve (ASV) Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: 2023,
      units_produced: 67,
      country: "Canada"
    },
    price: {
      usd: { min: 1700000, max: 2000000, currency: "USD" },
      inr: { min: 141100000, max: 166000000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "ford-gt40-mk2-1966",
    brand: "Ford",
    name: "GT40 Mk II",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Le Mans Racer",
    comfort: 1,
    mileage: 1,
    stability: 4,
    rating: 5.0,
    performance: {
      power_hp: 485,
      top_speed_kmh: 340,
      acceleration_sec: 4.2,
      weight_kg: 1200,
      power_to_weight: 0.40
    },
    technical: {
      engine: "7.0L Big-Block V8 (FE 427)",
      displacement_cc: 6997,
      fuel: "Petrol",
      transmission: "4-Speed Kar Kraft Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel Monocoque w/ Fiberglass Panels",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone Front / Trailing Link Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1966,
      end_year: 1968,
      units_produced: 105,
      country: "USA / UK"
    },
    price: {
      usd: { min: 5000000, max: 12000000, currency: "USD" },
      inr: { min: 415000000, max: 996000000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "ford-gt90-concept-1995",
    brand: "Ford",
    name: "GT90 Concept",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 720,
      top_speed_kmh: 407,
      acceleration_sec: 3.1,
      weight_kg: 1451,
      power_to_weight: 0.49
    },
    technical: {
      engine: "5.9L Quad-Turbo V12",
      displacement_cc: 5927,
      fuel: "Petrol",
      transmission: "5-Speed Manual (FF-Developments)",
      cylinders: 12
    },
    chassis: {
      material: "Honeycomb Aluminum Monocoque & Carbon Body",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1995,
      end_year: 1995,
      units_produced: 1,
      country: "USA"
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
    id: "ford-indigo-concept-1996",
    brand: "Ford",
    name: "Indigo Concept",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Indy Roadster",
    comfort: 1,
    mileage: 1,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 435,
      top_speed_kmh: 290,
      acceleration_sec: 3.9,
      weight_kg: 1043,
      power_to_weight: 0.41
    },
    technical: {
      engine: "6.0L Naturally Aspirated V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Sequential Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber / Composite Monocoque",
      brake_material: "Brembo Racing Discs",
      suspension: "Pushrod IndyCar Style Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1996,
      end_year: 1996,
      units_produced: 2,
      country: "USA"
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
    id: "ford-f150-lightning-1999",
    brand: "Ford",
    name: "F-150 SVT Lightning",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Truck",
    comfort: 3,
    mileage: 1,
    stability: 3,
    rating: 4.7,
    performance: {
      power_hp: 380,
      top_speed_kmh: 238,
      acceleration_sec: 5.2,
      weight_kg: 2130,
      power_to_weight: 0.17
    },
    technical: {
      engine: "5.4L Supercharged Triton V8",
      displacement_cc: 5408,
      fuel: "Petrol",
      transmission: "4-Speed Automatic (4R100)",
      cylinders: 8
    },
    chassis: {
      material: "Steel Frame",
      brake_material: "4-Wheel Disc Brakes",
      suspension: "SVT Lowered Suspension w/ Bilstein Shocks",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1999,
      end_year: 2004,
      units_produced: 28124,
      country: "USA"
    },
    price: {
      usd: { min: 20000, max: 42000, currency: "USD" },
      inr: { min: 1660000, max: 3486000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "ford-mustang-bullitt-2018",
    brand: "Ford",
    name: "Mustang Bullitt",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
    type: "Special Edition Muscle Car",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 480,
      top_speed_kmh: 262,
      acceleration_sec: 4.1,
      weight_kg: 1746,
      power_to_weight: 0.27
    },
    technical: {
      engine: "5.0L Naturally Aspirated V8 (Coyote)",
      displacement_cc: 5038,
      fuel: "Petrol",
      transmission: "6-Speed Manual w/ Cue-Ball Shifter",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Brembo 6-Piston Front Discs",
      suspension: "MagneRide Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2020,
      units_produced: 11500,
      country: "USA"
    },
    price: {
      usd: { min: 42000, max: 58000, currency: "USD" },
      inr: { min: 3486000, max: 4814000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "ford-mustang-dark-horse-mk7-2024",
    brand: "Ford",
    name: "Mustang Dark Horse (S650)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Track Muscle Car",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 500,
      top_speed_kmh: 268,
      acceleration_sec: 3.7,
      weight_kg: 1755,
      power_to_weight: 0.28
    },
    technical: {
      engine: "5.0L Gen-4 Coyote V8",
      displacement_cc: 5038,
      fuel: "Petrol",
      transmission: "6-Speed Tremec Manual / 10-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "High-Strength Steel Body / Carbon Wheels Option",
      brake_material: "Brembo 6-Piston Discs",
      suspension: "MagneRide Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: null,
      country: "USA"
    },
    price: {
      usd: { min: 61000, max: 78000, currency: "USD" },
      inr: { min: 5063000, max: 6474000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "ford-mustang-gt-mk1-1965",
    brand: "Ford",
    name: "Mustang GT (Mk I)",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Muscle Car",
    comfort: 3,
    mileage: 2,
    stability: 3,
    rating: 4.9,
    performance: {
      power_hp: 271,
      top_speed_kmh: 200,
      acceleration_sec: 7.3,
      weight_kg: 1320,
      power_to_weight: 0.20
    },
    technical: {
      engine: "4.7L Small-Block V8 (289 HiPo)",
      displacement_cc: 4736,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Front Discs / Rear Drums",
      suspension: "Independent Front / Live Axle Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1965,
      end_year: 1973,
      units_produced: 680000,
      country: "USA"
    },
    price: {
      usd: { min: 45000, max: 120000, currency: "USD" },
      inr: { min: 3735000, max: 9960000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "ford-mustang-boss-429-1969",
    brand: "Ford",
    name: "Mustang Boss 429",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Nascar Muscle",
    comfort: 2,
    mileage: 1,
    stability: 3,
    rating: 5.0,
    performance: {
      power_hp: 375,
      top_speed_kmh: 210,
      acceleration_sec: 5.3,
      weight_kg: 1600,
      power_to_weight: 0.23
    },
    technical: {
      engine: "7.0L Semi-Hemi V8 (Boss 429)",
      displacement_cc: 7030,
      fuel: "Petrol",
      transmission: "4-Speed Toploader Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody Modified by Kar Kraft",
      brake_material: "Power Front Discs",
      suspension: "Heavy-Duty Competition Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1969,
      end_year: 1970,
      units_produced: 1359,
      country: "USA"
    },
    price: {
      usd: { min: 250000, max: 500000, currency: "USD" },
      inr: { min: 20750000, max: 41500000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "ford-mustang-gt-mk5-2005",
    brand: "Ford",
    name: "Mustang GT (S197)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Muscle Car",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 300,
      top_speed_kmh: 240,
      acceleration_sec: 5.1,
      weight_kg: 1565,
      power_to_weight: 0.19
    },
    technical: {
      engine: "4.6L 3V Modular V8",
      displacement_cc: 4606,
      fuel: "Petrol",
      transmission: "5-Speed Manual / 5-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Ventilated Discs",
      suspension: "MacPherson Strut / Solid Rear Axle",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2005,
      end_year: 2014,
      units_produced: 650000,
      country: "USA"
    },
    price: {
      usd: { min: 10000, max: 22000, currency: "USD" },
      inr: { min: 830000, max: 1826000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "ford-mustang-gt-mk6-2015",
    brand: "Ford",
    name: "Mustang GT (S550)",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Muscle Car",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 460,
      top_speed_kmh: 250,
      acceleration_sec: 4.3,
      weight_kg: 1680,
      power_to_weight: 0.27
    },
    technical: {
      engine: "5.0L Coyote V8",
      displacement_cc: 5038,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 10-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "High-Strength Steel Unibody",
      brake_material: "Brembo 6-Piston Option",
      suspension: "Integral Link Independent Rear Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2023,
      units_produced: 450000,
      country: "USA"
    },
    price: {
      usd: { min: 25000, max: 45000, currency: "USD" },
      inr: { min: 2075000, max: 3735000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "ford-mustang-gtd-2025",
    brand: "Ford",
    name: "Mustang GTD",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Street-Legal Race Hypercar",
    comfort: 2,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 815,
      top_speed_kmh: 325,
      acceleration_sec: 2.8,
      weight_kg: 1580,
      power_to_weight: 0.51
    },
    technical: {
      engine: "5.2L Supercharged Dry-Sump V8",
      displacement_cc: 5200,
      fuel: "Petrol",
      transmission: "8-Speed Rear Transaxle Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Body / Carbon Driveshaft",
      brake_material: "Brembo Carbon Ceramic",
      suspension: "Semi-Active Pushrod & Rocker Architecture",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2025,
      end_year: null,
      units_produced: 1000,
      country: "USA / Canada"
    },
    price: {
      usd: { min: 325000, max: 370000, currency: "USD" },
      inr: { min: 26975000, max: 30710000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Limited Edition"
  },
  {
    id: "ford-mustang-shelby-gt500-gen2-2007",
    brand: "Ford",
    name: "Shelby GT500 (Gen 2)",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Muscle Car",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 500,
      top_speed_kmh: 250,
      acceleration_sec: 4.5,
      weight_kg: 1780,
      power_to_weight: 0.28
    },
    technical: {
      engine: "5.4L Supercharged Modular V8",
      displacement_cc: 5409,
      fuel: "Petrol",
      transmission: "6-Speed Tremec Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody w/ Aluminum Hood",
      brake_material: "Brembo 14-inch Discs",
      suspension: "SVT Tuned Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2007,
      end_year: 2009,
      units_produced: 23000,
      country: "USA"
    },
    price: {
      usd: { min: 30000, max: 50000, currency: "USD" },
      inr: { min: 2490000, max: 4150000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "ford-mustang-shelby-gt500-gen4-2020",
    brand: "Ford",
    name: "Shelby GT500 (Gen 4)",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Super Muscle Car",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 760,
      top_speed_kmh: 290,
      acceleration_sec: 3.3,
      weight_kg: 1890,
      power_to_weight: 0.40
    },
    technical: {
      engine: "5.2L Supercharged V8 (Predator)",
      displacement_cc: 5163,
      fuel: "Petrol",
      transmission: "7-Speed Tremec Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Steel Body / Carbon Fiber Track Pack Wing",
      brake_material: "SHW 6-Piston 420mm Discs",
      suspension: "MagneRide Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2020,
      end_year: 2022,
      units_produced: 14000,
      country: "USA"
    },
    price: {
      usd: { min: 78000, max: 110000, currency: "USD" },
      inr: { min: 6474000, max: 9130000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "ford-shelby-gt350r-2015",
    brand: "Ford",
    name: "Shelby GT350R",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Track Sports Car",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 526,
      top_speed_kmh: 280,
      acceleration_sec: 3.9,
      weight_kg: 1655,
      power_to_weight: 0.31
    },
    technical: {
      engine: "5.2L Flat-Plane Crank V8 (Voodoo)",
      displacement_cc: 5163,
      fuel: "Petrol",
      transmission: "6-Speed Tremec Manual",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Wheels & Carbon Aero Wing",
      brake_material: "Brembo 6-Piston Discs",
      suspension: "MagneRide Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2020,
      units_produced: 3000,
      country: "USA"
    },
    price: {
      usd: { min: 65000, max: 105000, currency: "USD" },
      inr: { min: 5395000, max: 8715000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "ford-rs200-1984",
    brand: "Ford",
    name: "RS200 Evolution",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Group B Rally Homologation",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 450,
      top_speed_kmh: 240,
      acceleration_sec: 3.0,
      weight_kg: 1050,
      power_to_weight: 0.42
    },
    technical: {
      engine: "2.1L Turbocharged I4 (BDT-E)",
      displacement_cc: 2137,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Fiberglass Body / Aluminum Honeycomb Chassis",
      brake_material: "Ventilated Discs",
      suspension: "Twin-Damper Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1984,
      end_year: 1986,
      units_produced: 200,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 280000, max: 550000, currency: "USD" },
      inr: { min: 23240000, max: 45650000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "ford-sierra-rs-cosworth-1986",
    brand: "Ford",
    name: "Sierra RS Cosworth",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Touring Car / Sports Coupe",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 204,
      top_speed_kmh: 240,
      acceleration_sec: 6.2,
      weight_kg: 1205,
      power_to_weight: 0.16
    },
    technical: {
      engine: "2.0L Turbocharged I4 (Cosworth YBD)",
      displacement_cc: 1993,
      fuel: "Petrol",
      transmission: "5-Speed Manual (Borg-Warner)",
      cylinders: 4
    },
    chassis: {
      material: "Steel Monocoque w/ Whale-Tail Rear Spoiler",
      brake_material: "ABS Ventilated Discs",
      suspension: "MacPherson Strut / Semi-Trailing Arm",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1986,
      end_year: 1992,
      units_produced: 5545,
      country: "Belgium"
    },
    price: {
      usd: { min: 35000, max: 75000, currency: "USD" },
      inr: { min: 2905000, max: 6225000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "ford-tickford-capri-1983",
    brand: "Ford",
    name: "Tickford Capri Turbo",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Coupe",
    comfort: 3,
    mileage: 2,
    stability: 3,
    rating: 4.6,
    performance: {
      power_hp: 205,
      top_speed_kmh: 225,
      acceleration_sec: 6.5,
      weight_kg: 1260,
      power_to_weight: 0.16
    },
    technical: {
      engine: "2.8L Turbocharged Cologne V6",
      displacement_cc: 2792,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel Body / GRP Front Grill & Side Skirts",
      brake_material: "4-Wheel Disc Brakes",
      suspension: "Bilstein Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1983,
      end_year: 1987,
      units_produced: 100,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 25000, max: 50000, currency: "USD" },
      inr: { min: 2075000, max: 4150000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Very Rare"
  }
];

export default cars;