const cars = [
  // --- DALLARA ---
  {
    id: "dallara-stradale-2017",
    brand: "Dallara",
    name: "Stradale",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Track Roadster / Barchetta",
    comfort: 2,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 400,
      top_speed_kmh: 280,
      acceleration_sec: 3.2,
      weight_kg: 855,
      power_to_weight: 0.47
    },
    technical: {
      engine: "2.3L Turbocharged I4 (Ford EcoBoost)",
      displacement_cc: 2300,
      fuel: "Petrol",
      transmission: "6-Speed Manual / Paddle-Shift",
      cylinders: 4
    },
    chassis: {
      material: "Carbon Fiber Monocoque",
      brake_material: "Brembo Discs",
      suspension: "Double Wishbone Pushrod",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2017,
      end_year: null,
      units_produced: 600,
      country: "Italy"
    },
    price: {
      usd: { min: 190000, max: 240000, currency: "USD" },
      inr: { min: 15770000, max: 19920000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },

  // --- DE TOMASO ---
  {
    id: "de-tomaso-guara-1993",
    brand: "De Tomaso",
    name: "Guara",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 2,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 304,
      top_speed_kmh: 270,
      acceleration_sec: 4.8,
      weight_kg: 1200,
      power_to_weight: 0.25
    },
    technical: {
      engine: "4.0L BMW V8 / 4.6L Ford V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "6-Speed Manual (Getrag)",
      cylinders: 8
    },
    chassis: {
      material: "Kevlar / Fiberglass Body over Honeycomb Frame",
      brake_material: "Brembo Discs",
      suspension: "Inboard Pushrod Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1993,
      end_year: 1999,
      units_produced: 52,
      country: "Italy"
    },
    price: {
      usd: { min: 120000, max: 180000, currency: "USD" },
      inr: { min: 9960000, max: 14940000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "de-tomaso-mangusta-1967",
    brand: "De Tomaso",
    name: "Mangusta",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Coupe",
    comfort: 2,
    mileage: 1,
    stability: 3,
    rating: 4.8,
    performance: {
      power_hp: 306,
      top_speed_kmh: 250,
      acceleration_sec: 5.8,
      weight_kg: 1322,
      power_to_weight: 0.23
    },
    technical: {
      engine: "4.7L / 4.9L Ford V8",
      displacement_cc: 4728,
      fuel: "Petrol",
      transmission: "5-Speed Manual (ZF)",
      cylinders: 8
    },
    chassis: {
      material: "Steel Body w/ Gullwing Engine Doors",
      brake_material: "Gir-ling Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1967,
      end_year: 1972,
      units_produced: 401,
      country: "Italy"
    },
    price: {
      usd: { min: 250000, max: 400000, currency: "USD" },
      inr: { min: 20750000, max: 33200000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "de-tomaso-p72-2025",
    brand: "De Tomaso",
    name: "P72",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt Supercar",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 700,
      top_speed_kmh: 355,
      acceleration_sec: 3.0,
      weight_kg: 1350,
      power_to_weight: 0.51
    },
    technical: {
      engine: "5.0L Supercharged Ford V8 (Roush Tuned)",
      displacement_cc: 5038,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Monocoque (Apollo IE platform)",
      brake_material: "Brembo Carbon Ceramic",
      suspension: "Pushrod Adjustable",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2025,
      end_year: null,
      units_produced: 72,
      country: "Italy"
    },
    price: {
      usd: { min: 1200000, max: 1500000, currency: "USD" },
      inr: { min: 99600000, max: 124500000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Ultra Rare"
  },
  {
    id: "de-tomaso-pantera-1971",
    brand: "De Tomaso",
    name: "Pantera",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Muscle Supercar",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 330,
      top_speed_kmh: 256,
      acceleration_sec: 5.5,
      weight_kg: 1420,
      power_to_weight: 0.23
    },
    technical: {
      engine: "5.8L Ford Cleveland V8 (351)",
      displacement_cc: 5763,
      fuel: "Petrol",
      transmission: "5-Speed Manual (ZF)",
      cylinders: 8
    },
    chassis: {
      material: "Steel Monocoque (Ghia Design)",
      brake_material: "Power Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1971,
      end_year: 1989,
      units_produced: 7260,
      country: "Italy"
    },
    price: {
      usd: { min: 80000, max: 150000, currency: "USD" },
      inr: { min: 6640000, max: 12450000, currency: "INR" }
    },
    era: "1970s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "de-tomaso-pantera-gt5-1984",
    brand: "De Tomaso",
    name: "Pantera GT5",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Widebody Muscle Supercar",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 350,
      top_speed_kmh: 260,
      acceleration_sec: 5.2,
      weight_kg: 1470,
      power_to_weight: 0.23
    },
    technical: {
      engine: "5.8L Ford Cleveland V8",
      displacement_cc: 5763,
      fuel: "Petrol",
      transmission: "5-Speed Manual (ZF)",
      cylinders: 8
    },
    chassis: {
      material: "Fiberglass Flares over Steel Body",
      brake_material: "Ventilated Discs",
      suspension: "Upgraded Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1984,
      end_year: 1989,
      units_produced: 252,
      country: "Italy"
    },
    price: {
      usd: { min: 140000, max: 220000, currency: "USD" },
      inr: { min: 11620000, max: 18260000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "de-tomaso-pantera-si-1990",
    brand: "De Tomaso",
    name: "Pantera SI (90)",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Supercar",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 305,
      top_speed_kmh: 270,
      acceleration_sec: 5.3,
      weight_kg: 1500,
      power_to_weight: 0.20
    },
    technical: {
      engine: "5.0L Ford EFI V8",
      displacement_cc: 4942,
      fuel: "Petrol",
      transmission: "5-Speed Manual (Getrag)",
      cylinders: 8
    },
    chassis: {
      material: "Tubular / Steel Spaceframe (Gandini Restyle)",
      brake_material: "Brembo Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1990,
      end_year: 1993,
      units_produced: 41,
      country: "Italy"
    },
    price: {
      usd: { min: 180000, max: 280000, currency: "USD" },
      inr: { min: 14940000, max: 23240000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Very Rare"
  },

  // --- DONKERVOORT ---
  {
    id: "donkervoort-d8-270-rs-2004",
    brand: "Donkervoort",
    name: "D8 270 RS",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Track Roadster",
    comfort: 1,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 270,
      top_speed_kmh: 250,
      acceleration_sec: 3.6,
      weight_kg: 600,
      power_to_weight: 0.45
    },
    technical: {
      engine: "1.8L Turbocharged Audi I4",
      displacement_cc: 1781,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Carbon Fiber / Tubular Frame",
      brake_material: "Ventilated Discs",
      suspension: "WP Adjustable Race Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2004,
      end_year: 2007,
      units_produced: 25,
      country: "Netherlands"
    },
    price: {
      usd: { min: 90000, max: 130000, currency: "USD" },
      inr: { min: 7470000, max: 10790000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "donkervoort-f22-2023",
    brand: "Donkervoort",
    name: "F22",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Track Supercar",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 500,
      top_speed_kmh: 290,
      acceleration_sec: 2.5,
      weight_kg: 750,
      power_to_weight: 0.66
    },
    technical: {
      engine: "2.5L Turbocharged Audi I5",
      displacement_cc: 2480,
      fuel: "Petrol",
      transmission: "5-Speed Manual w/ Rev-Matching",
      cylinders: 5
    },
    chassis: {
      material: "Ex-Core Carbon Fiber & Hybrid Steel Tube Frame",
      brake_material: "Tarox Steel Racing Discs",
      suspension: "Tracive Hydraulic Adaptive Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: 100,
      country: "Netherlands"
    },
    price: {
      usd: { min: 290000, max: 350000, currency: "USD" },
      inr: { min: 24070000, max: 29050000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited Edition"
  },

  // --- FIAT ---
  {
    id: "fiat-abarth-2000-scorpione-1969",
    brand: "Fiat",
    name: "Abarth 2000 Scorpione Concept",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Wedge Supercar",
    comfort: 1,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 220,
      top_speed_kmh: 270,
      acceleration_sec: 4.8,
      weight_kg: 670,
      power_to_weight: 0.32
    },
    technical: {
      engine: "2.0L Naturally Aspirated I4",
      displacement_cc: 1946,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Fiberglass Canopy Body (Pininfarina)",
      brake_material: "Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1969,
      end_year: 1969,
      units_produced: 1,
      country: "Italy"
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
    id: "fiat-coupe-20v-turbo-1997",
    brand: "Fiat",
    name: "Coupe 20v Turbo",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 3,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 220,
      top_speed_kmh: 250,
      acceleration_sec: 6.3,
      weight_kg: 1310,
      power_to_weight: 0.16
    },
    technical: {
      engine: "2.0L Turbocharged Inline-5",
      displacement_cc: 1998,
      fuel: "Petrol",
      transmission: "5-Speed / 6-Speed Manual",
      cylinders: 5
    },
    chassis: {
      material: "Steel Monocoque (Chris Bangle / Pininfarina)",
      brake_material: "Brembo Discs",
      suspension: "MacPherson Strut / Trailing Arm",
      drivetrain: "FWD w/ Viscodrive LSD"
    },
    production: {
      start_year: 1997,
      end_year: 2000,
      units_produced: 72762,
      country: "Italy"
    },
    price: {
      usd: { min: 10000, max: 22000, currency: "USD" },
      inr: { min: 830000, max: 1826000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Common"
  },

  // --- GEMBALLA ---
  {
    id: "gemballa-avalanche-gen3-2017",
    brand: "Gemballa",
    name: "Avalanche (Gen 3)",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Tuned Supercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 820,
      top_speed_kmh: 350,
      acceleration_sec: 2.6,
      weight_kg: 1500,
      power_to_weight: 0.54
    },
    technical: {
      engine: "3.8L Twin-Turbo Flat-6 (Porsche Based)",
      displacement_cc: 3800,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 6
    },
    chassis: {
      material: "Widebody Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Gemballa Sport Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2017,
      end_year: null,
      units_produced: 20,
      country: "Germany"
    },
    price: {
      usd: { min: 420000, max: 550000, currency: "USD" },
      inr: { min: 34860000, max: 45650000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited Edition"
  },
  {
    id: "gemballa-gtr600-2001",
    brand: "Gemballa",
    name: "GTR600 EVO",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Tuned Supercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 600,
      top_speed_kmh: 330,
      acceleration_sec: 3.5,
      weight_kg: 1420,
      power_to_weight: 0.42
    },
    technical: {
      engine: "3.6L Twin-Turbo Flat-6 (Porsche 996 GT2 base)",
      displacement_cc: 3600,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Kevlar Body Panels",
      brake_material: "Brembo Big Brakes",
      suspension: "Coilover Racing Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2001,
      end_year: 2006,
      units_produced: 15,
      country: "Germany"
    },
    price: {
      usd: { min: 180000, max: 280000, currency: "USD" },
      inr: { min: 14940000, max: 23240000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "gemballa-gtr750-avalanche-2006",
    brand: "Gemballa",
    name: "GTR750 Avalanche",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
    type: "Tuned Supercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 750,
      top_speed_kmh: 345,
      acceleration_sec: 3.1,
      weight_kg: 1450,
      power_to_weight: 0.51
    },
    technical: {
      engine: "3.8L Twin-Turbo Flat-6",
      displacement_cc: 3800,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Full Carbon Fiber Aero Body",
      brake_material: "Carbon Ceramic",
      suspension: "Gemballa Sport Coilovers",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2006,
      end_year: 2014,
      units_produced: 25,
      country: "Germany"
    },
    price: {
      usd: { min: 280000, max: 400000, currency: "USD" },
      inr: { min: 23240000, max: 33200000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "gemballa-mirage-gt-2006",
    brand: "Gemballa",
    name: "Mirage GT",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt Supercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 670,
      top_speed_kmh: 335,
      acceleration_sec: 3.7,
      weight_kg: 1380,
      power_to_weight: 0.48
    },
    technical: {
      engine: "5.7L NA V10 (Carrera GT based)",
      displacement_cc: 5733,
      fuel: "Petrol",
      transmission: "6-Speed Manual (Gemballa Clutch)",
      cylinders: 10
    },
    chassis: {
      material: "Carbon Fiber Roof / Body / Monocoque",
      brake_material: "Carbon Ceramic",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2006,
      end_year: 2011,
      units_produced: 25,
      country: "Germany"
    },
    price: {
      usd: { min: 800000, max: 1500000, currency: "USD" },
      inr: { min: 66400000, max: 124500000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },

  // --- GINETTA ---
  {
    id: "ginetta-akula-2020",
    brand: "Ginetta",
    name: "Akula",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Front-Mid Engine Supercar",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 600,
      top_speed_kmh: 320,
      acceleration_sec: 2.9,
      weight_kg: 1150,
      power_to_weight: 0.52
    },
    technical: {
      engine: "6.0L Naturally Aspirated V8 (Ginetta In-House)",
      displacement_cc: 6000,
      fuel: "Petrol",
      transmission: "6-Speed Sequential Race",
      cylinders: 8
    },
    chassis: {
      material: "Full Carbon Fiber Monocoque & Aero Body",
      brake_material: "Carbon Ceramic",
      suspension: "Pushrod Activated Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2020,
      end_year: null,
      units_produced: 20,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 430000, max: 500000, currency: "USD" },
      inr: { min: 35690000, max: 41500000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  },
  {
    id: "ginetta-f400-2007",
    brand: "Ginetta",
    name: "F400 (Farbio GTS)",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 410,
      top_speed_kmh: 298,
      acceleration_sec: 3.7,
      weight_kg: 1100,
      power_to_weight: 0.37
    },
    technical: {
      engine: "3.7L Supercharged Ford V6",
      displacement_cc: 3700,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Composite Body / Tubular Spaceframe",
      brake_material: "AP Racing Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2007,
      end_year: 2011,
      units_produced: 50,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 60000, max: 90000, currency: "USD" },
      inr: { min: 4980000, max: 7470000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },

  // --- GORDON MURRAY AUTOMOTIVE ---
  {
    id: "gma-le-mans-gtr-2026",
    brand: "Gordon Murray",
    name: "T.50s Niki Lauda (Le Mans GTR)",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Only Fan-Car Hypercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 725,
      top_speed_kmh: 340,
      acceleration_sec: 2.4,
      weight_kg: 852,
      power_to_weight: 0.85
    },
    technical: {
      engine: "3.9L Cosworth NA V12 (12,100 RPM)",
      displacement_cc: 3994,
      fuel: "Petrol",
      transmission: "6-Speed Instantaneous Paddle-Shift",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Monocoque & Active Aerodynamic Ground Fan",
      brake_material: "Brembo Carbon Ceramic",
      suspension: "Double Wishbone Pushrod",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2026,
      end_year: null,
      units_produced: 25,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 3800000, max: 4200000, currency: "USD" },
      inr: { min: 315400000, max: 348600000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Ultra Rare"
  },
  {
    id: "gma-s1-lm-2026",
    brand: "Gordon Murray",
    name: "S1 LM",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Analogue Hypercar",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 680,
      top_speed_kmh: 335,
      acceleration_sec: 2.7,
      weight_kg: 950,
      power_to_weight: 0.71
    },
    technical: {
      engine: "3.9L Cosworth NA V12",
      displacement_cc: 3994,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Monocoque",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2026,
      end_year: null,
      units_produced: 5,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 4000000, max: 4500000, currency: "USD" },
      inr: { min: 332000000, max: 373500000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "One-Off"
  },
  {
    id: "gma-t33-2024",
    brand: "Gordon Murray",
    name: "T.33",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Super GT",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 607,
      top_speed_kmh: 334,
      acceleration_sec: 2.9,
      weight_kg: 1090,
      power_to_weight: 0.55
    },
    technical: {
      engine: "3.9L Cosworth NA V12 (11,100 RPM)",
      displacement_cc: 3994,
      fuel: "Petrol",
      transmission: "6-Speed Manual / Paddle Shift",
      cylinders: 12
    },
    chassis: {
      material: "Carbon / Aluminum iStream Superlight Chassis",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: 100,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 1850000, max: 2100000, currency: "USD" },
      inr: { min: 153550000, max: 174300000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited Edition"
  },
  {
    id: "gma-t50-2023",
    brand: "Gordon Murray",
    name: "T.50",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Analogue Hypercar (Central Driver Seat)",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 654,
      top_speed_kmh: 363,
      acceleration_sec: 2.8,
      weight_kg: 986,
      power_to_weight: 0.66
    },
    technical: {
      engine: "3.9L Cosworth NA V12 (12,100 RPM)",
      displacement_cc: 3994,
      fuel: "Petrol",
      transmission: "6-Speed Manual (Xtrac)",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Monocoque & 400mm Aero Fan",
      brake_material: "Brembo Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: 100,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 3000000, max: 3500000, currency: "USD" },
      inr: { min: 249000000, max: 290500000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited Edition"
  },

  // --- GUMPERT ---
  {
    id: "gumpert-apollo-2005",
    brand: "Gumpert",
    name: "Apollo",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Supercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 650,
      top_speed_kmh: 360,
      acceleration_sec: 3.1,
      weight_kg: 1200,
      power_to_weight: 0.54
    },
    technical: {
      engine: "4.2L Twin-Turbo V8 (Audi Based)",
      displacement_cc: 4163,
      fuel: "Petrol",
      transmission: "6-Speed Sequential",
      cylinders: 8
    },
    chassis: {
      material: "Chromoly Tubular Frame w/ Carbon Fiber Body",
      brake_material: "Ventilated Discs",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2005,
      end_year: 2013,
      units_produced: 60,
      country: "Germany"
    },
    price: {
      usd: { min: 350000, max: 550000, currency: "USD" },
      inr: { min: 29050000, max: 45650000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  }
];

export default cars;