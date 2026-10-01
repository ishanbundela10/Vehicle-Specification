const cars = [
  {
    id: "bugatti-atlantic-concept-2015",
    brand: "Bugatti",
    name: "Atlantic Concept",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 500,
      top_speed_kmh: 300,
      acceleration_sec: 3.8,
      weight_kg: 1650,
      power_to_weight: 0.30
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Monocoque",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Dampers",
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
  },
  {
    id: "bugatti-bolide-2024",
    brand: "Bugatti",
    name: "Bolide",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Only Hypercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1578,
      top_speed_kmh: 380,
      acceleration_sec: 2.2,
      weight_kg: 1450,
      power_to_weight: 1.08
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "3D-Printed Titanium & Carbon Monocoque",
      brake_material: "Carbon-Carbon Race Discs",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: 40,
      country: "France"
    },
    price: {
      usd: { min: 4400000, max: 4800000, currency: "USD" },
      inr: { min: 365200000, max: 398400000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  },
  {
    id: "bugatti-brouillard-2026",
    brand: "Bugatti",
    name: "Brouillard",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Hypercar",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 1800,
      top_speed_kmh: 440,
      acceleration_sec: 2.1,
      weight_kg: 1950,
      power_to_weight: 0.92
    },
    technical: {
      engine: "8.3L Naturally Aspirated V16 Hybrid",
      displacement_cc: 8300,
      fuel: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Carbon Composite Structure",
      brake_material: "Carbon Ceramic",
      suspension: "Active Pushrod Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2026,
      end_year: 2026,
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
    id: "bugatti-centodieci-2022",
    brand: "Bugatti",
    name: "Centodieci",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt Hypercar",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1578,
      top_speed_kmh: 380,
      acceleration_sec: 2.4,
      weight_kg: 1976,
      power_to_weight: 0.79
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Full Carbon Fiber Body & Monocoque",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2022,
      end_year: 2022,
      units_produced: 10,
      country: "France"
    },
    price: {
      usd: { min: 9000000, max: 10500000, currency: "USD" },
      inr: { min: 747000000, max: 871500000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "bugatti-chiron-2016",
    brand: "Bugatti",
    name: "Chiron",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 5,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 1479,
      top_speed_kmh: 420,
      acceleration_sec: 2.4,
      weight_kg: 1995,
      power_to_weight: 0.74
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Carbon Fiber Monocoque",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Shock Absorbers",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2016,
      end_year: 2024,
      units_produced: 500,
      country: "France"
    },
    price: {
      usd: { min: 2900000, max: 3400000, currency: "USD" },
      inr: { min: 240700000, max: 282200000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "bugatti-chiron-concept-1999",
    brand: "Bugatti",
    name: "18/3 Chiron Concept",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 547,
      top_speed_kmh: 330,
      acceleration_sec: 3.9,
      weight_kg: 1650,
      power_to_weight: 0.33
    },
    technical: {
      engine: "6.3L Naturally Aspirated W18",
      displacement_cc: 6255,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 18
    },
    chassis: {
      material: "Carbon Fiber & Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1999,
      end_year: 1999,
      units_produced: 1,
      country: "France"
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
    id: "bugatti-chiron-pur-sport-2021",
    brand: "Bugatti",
    name: "Chiron Pur Sport",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Hypercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1479,
      top_speed_kmh: 350,
      acceleration_sec: 2.3,
      weight_kg: 1945,
      power_to_weight: 0.76
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch (Close Ratio)",
      cylinders: 16
    },
    chassis: {
      material: "Carbon Fiber & Titanium",
      brake_material: "Carbon Ceramic",
      suspension: "Stiffer Springs & Adaptive Dampers",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2021,
      end_year: 2024,
      units_produced: 60,
      country: "France"
    },
    price: {
      usd: { min: 3600000, max: 4100000, currency: "USD" },
      inr: { min: 298800000, max: 340300000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "bugatti-chiron-sport-2018",
    brand: "Bugatti",
    name: "Chiron Sport",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 1479,
      top_speed_kmh: 420,
      acceleration_sec: 2.4,
      weight_kg: 1977,
      power_to_weight: 0.74
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Carbon Fiber Wipers & Anti-Roll Bar",
      brake_material: "Carbon Ceramic",
      suspension: "Sport-Tuned Adaptive Dampers",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2018,
      end_year: 2024,
      units_produced: 120,
      country: "France"
    },
    price: {
      usd: { min: 3260000, max: 3700000, currency: "USD" },
      inr: { min: 270580000, max: 307100000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "bugatti-chiron-super-sport-2022",
    brand: "Bugatti",
    name: "Chiron Super Sport",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Speed Hypercar",
    comfort: 5,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1578,
      top_speed_kmh: 440,
      acceleration_sec: 2.4,
      weight_kg: 1970,
      power_to_weight: 0.80
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Longtail Carbon Body & Composite Shell",
      brake_material: "Carbon Ceramic",
      suspension: "High-Speed Tuned Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2022,
      end_year: 2024,
      units_produced: 80,
      country: "France"
    },
    price: {
      usd: { min: 3900000, max: 4500000, currency: "USD" },
      inr: { min: 323700000, max: 373500000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "bugatti-chiron-super-sport-300-plus-2019",
    brand: "Bugatti",
    name: "Chiron Super Sport 300+",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "World Record Hypercar",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1578,
      top_speed_kmh: 490,
      acceleration_sec: 2.3,
      weight_kg: 1970,
      power_to_weight: 0.80
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Exposed Carbon Fiber Bodywork",
      brake_material: "Carbon Ceramic",
      suspension: "Ultra High-Speed Adaptive Dampers",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2019,
      end_year: 2022,
      units_produced: 30,
      country: "France"
    },
    price: {
      usd: { min: 3900000, max: 5200000, currency: "USD" },
      inr: { min: 323700000, max: 431600000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "bugatti-divo-2020",
    brand: "Bugatti",
    name: "Divo",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Hypercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1479,
      top_speed_kmh: 380,
      acceleration_sec: 2.4,
      weight_kg: 1960,
      power_to_weight: 0.75
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "High-Downforce Carbon Fiber Aero Shell",
      brake_material: "Carbon Ceramic",
      suspension: "Track-Tuned Chassis",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2020,
      end_year: 2021,
      units_produced: 40,
      country: "France"
    },
    price: {
      usd: { min: 5800000, max: 7000000, currency: "USD" },
      inr: { min: 481400000, max: 581000000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "bugatti-eb110-gt-1991",
    brand: "Bugatti",
    name: "EB110 GT",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Supercar",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 553,
      top_speed_kmh: 342,
      acceleration_sec: 3.4,
      weight_kg: 1618,
      power_to_weight: 0.34
    },
    technical: {
      engine: "3.5L Quad-Turbo V12",
      displacement_cc: 3500,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Monocoque (Aérospatiale)",
      brake_material: "Brembo Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1991,
      end_year: 1995,
      units_produced: 84,
      country: "Italy"
    },
    price: {
      usd: { min: 1500000, max: 2200000, currency: "USD" },
      inr: { min: 124500000, max: 182600000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "bugatti-eb110-supersport-1992",
    brand: "Bugatti",
    name: "EB110 Super Sport",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Track Supercar",
    comfort: 2,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 603,
      top_speed_kmh: 355,
      acceleration_sec: 3.2,
      weight_kg: 1418,
      power_to_weight: 0.42
    },
    technical: {
      engine: "3.5L Quad-Turbo V12",
      displacement_cc: 3500,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Monocoque",
      brake_material: "Brembo Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1992,
      end_year: 1995,
      units_produced: 30,
      country: "Italy"
    },
    price: {
      usd: { min: 2500000, max: 3500000, currency: "USD" },
      inr: { min: 207500000, max: 290500000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "bugatti-eb112-1993",
    brand: "Bugatti",
    name: "EB112",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Luxury Fastback",
    comfort: 5,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 450,
      top_speed_kmh: 300,
      acceleration_sec: 4.3,
      weight_kg: 1800,
      power_to_weight: 0.25
    },
    technical: {
      engine: "6.0L Naturally Aspirated V12",
      displacement_cc: 5994,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Full Aluminum Bodywork / Carbon Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1993,
      end_year: 2000,
      units_produced: 3,
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
    id: "bugatti-la-voiture-noire-2019",
    brand: "Bugatti",
    name: "La Voiture Noire",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "One-Off Hypercar",
    comfort: 5,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1479,
      top_speed_kmh: 420,
      acceleration_sec: 2.4,
      weight_kg: 1960,
      power_to_weight: 0.75
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Bespoke Handcrafted Carbon Fiber Shell",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping System",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2019,
      end_year: 2019,
      units_produced: 1,
      country: "France"
    },
    price: {
      usd: { min: 18700000, max: 18700000, currency: "USD" },
      inr: { min: 1552100000, max: 1552100000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "One-Off"
  },
  {
    id: "bugatti-mistral-2023",
    brand: "Bugatti",
    name: "W16 Mistral",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Hyper-Roadster",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1578,
      top_speed_kmh: 420,
      acceleration_sec: 2.3,
      weight_kg: 1950,
      power_to_weight: 0.81
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Carbon Monocoque Roadster Structure",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Shock System",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: 99,
      country: "France"
    },
    price: {
      usd: { min: 5000000, max: 6000000, currency: "USD" },
      inr: { min: 415000000, max: 498000000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  },
  {
    id: "bugatti-tourbillon-2026",
    brand: "Bugatti",
    name: "Tourbillon",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Hybrid Hypercar",
    comfort: 5,
    mileage: 4,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1775,
      top_speed_kmh: 445,
      acceleration_sec: 2.0,
      weight_kg: 1995,
      power_to_weight: 0.89
    },
    technical: {
      engine: "8.3L Cosworth NA V16 + 3 Electric Motors",
      displacement_cc: 8300,
      fuel: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "T800 Carbon Composite & 3D-Printed Suspensions",
      brake_material: "Carbon Ceramic Matrix",
      suspension: "Multi-link 3D Printed Aluminum",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2026,
      end_year: null,
      units_produced: 250,
      country: "France"
    },
    price: {
      usd: { min: 4100000, max: 4600000, currency: "USD" },
      inr: { min: 340300000, max: 381800000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Limited Edition"
  },
  {
    id: "bugatti-veyron-2005",
    brand: "Bugatti",
    name: "Veyron 16.4",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 1001,
      top_speed_kmh: 407,
      acceleration_sec: 2.5,
      weight_kg: 1888,
      power_to_weight: 0.53
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Carbon Fiber Monocoque / Titanium",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2005,
      end_year: 2011,
      units_produced: 252,
      country: "France"
    },
    price: {
      usd: { min: 1200000, max: 1800000, currency: "USD" },
      inr: { min: 99600000, max: 149400000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "bugatti-veyron-grandsport-2009",
    brand: "Bugatti",
    name: "Veyron Grand Sport",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Hyper-Roadster",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 1001,
      top_speed_kmh: 407,
      acceleration_sec: 2.7,
      weight_kg: 1990,
      power_to_weight: 0.50
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Reinforced Carbon Monocoque / Polycarbonate Roof",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2009,
      end_year: 2015,
      units_produced: 58,
      country: "France"
    },
    price: {
      usd: { min: 1500000, max: 2200000, currency: "USD" },
      inr: { min: 124500000, max: 182600000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "bugatti-veyron-supersport-2010",
    brand: "Bugatti",
    name: "Veyron Super Sport",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "World Record Hypercar",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1200,
      top_speed_kmh: 431,
      acceleration_sec: 2.5,
      weight_kg: 1838,
      power_to_weight: 0.65
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Full Carbon Fiber Body Shell",
      brake_material: "Carbon Ceramic",
      suspension: "Aero-Optimized Adaptive Suspensions",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2010,
      end_year: 2011,
      units_produced: 30,
      country: "France"
    },
    price: {
      usd: { min: 2200000, max: 3200000, currency: "USD" },
      inr: { min: 182600000, max: 265600000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "bugatti-veyron-vitesse-2011",
    brand: "Bugatti",
    name: "Veyron Grand Sport Vitesse",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Hyper-Roadster",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1200,
      top_speed_kmh: 408,
      acceleration_sec: 2.6,
      weight_kg: 1990,
      power_to_weight: 0.60
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 16
    },
    chassis: {
      material: "Reinforced Carbon Monocoque",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone Adaptive",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2011,
      end_year: 2015,
      units_produced: 92,
      country: "France"
    },
    price: {
      usd: { min: 2500000, max: 3500000, currency: "USD" },
      inr: { min: 207500000, max: 290500000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "bugatti-vision-gt-2015",
    brand: "Bugatti",
    name: "Vision Gran Turismo",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Race Hypercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 1650,
      top_speed_kmh: 447,
      acceleration_sec: 2.1,
      weight_kg: 1400,
      power_to_weight: 1.17
    },
    technical: {
      engine: "8.0L Quad-Turbo W16",
      displacement_cc: 7993,
      fuel: "Petrol",
      transmission: "7-Speed Sequential Race",
      cylinders: 16
    },
    chassis: {
      material: "Full Carbon Fiber Race Monocoque",
      brake_material: "Carbon-Carbon Discs",
      suspension: "Pushrod Active Suspension",
      drivetrain: "AWD"
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