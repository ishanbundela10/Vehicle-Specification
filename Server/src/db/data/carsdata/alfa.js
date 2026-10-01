const cars = [
  {
    id: "alfa-romeo-147-gta-2003",
    brand: "Alfa Romeo",
    name: "147 GTA",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 247,
      top_speed_kmh: 246,
      acceleration_sec: 6.3,
      weight_kg: 1360,
      power_to_weight: 0.18
    },
    technical: {
      engine: "3.2L Naturally Aspirated V6 (Busso)",
      displacement_cc: 3179,
      fuel: "Petrol",
      transmission: "6-Speed Manual / Selespeed",
      cylinders: 6
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Brembo 4-Piston Discs",
      suspension: "Double Wishbone Front / MacPherson Rear",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2003,
      end_year: 2005,
      units_produced: 5029,
      country: "Italy"
    },
    price: {
      usd: { min: 18000, max: 35000, currency: "USD" },
      inr: { min: 1494000, max: 2905000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "alfa-romeo-33-navajo-1976",
    brand: "Alfa Romeo",
    name: "33 Navajo Concept",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 230,
      top_speed_kmh: 260,
      acceleration_sec: 5.5,
      weight_kg: 910,
      power_to_weight: 0.25
    },
    technical: {
      engine: "2.0L Naturally Aspirated V8",
      displacement_cc: 1995,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Fiberglass Body / Tubular Chassis",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1976,
      end_year: 1976,
      units_produced: 1,
      country: "Italy"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "1970s",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "alfa-romeo-33-spider-cuneo-1971",
    brand: "Alfa Romeo",
    name: "33 Spider Cuneo Concept",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Roadster",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 230,
      top_speed_kmh: 265,
      acceleration_sec: 5.4,
      weight_kg: 860,
      power_to_weight: 0.26
    },
    technical: {
      engine: "2.0L Naturally Aspirated V8",
      displacement_cc: 1995,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Panels / Tubular Frame",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1971,
      end_year: 1971,
      units_produced: 1,
      country: "Italy"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "1970s",
    status: "Concept",
    rarity: "One-Off"
  },
  {
    id: "alfa-romeo-33-stradale-2024",
    brand: "Alfa Romeo",
    name: "33 Stradale (2024)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt Supercar",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 620,
      top_speed_kmh: 333,
      acceleration_sec: 3.0,
      weight_kg: 1500,
      power_to_weight: 0.41
    },
    technical: {
      engine: "3.0L Twin-Turbo V6",
      displacement_cc: 2981,
      fuel: "Petrol",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Monocoque / Aluminum H-Frame",
      brake_material: "Brembo Carbon-Ceramic",
      suspension: "Double-Arm Active Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: 33,
      country: "Italy"
    },
    price: {
      usd: { min: 3000000, max: 3500000, currency: "USD" },
      inr: { min: 249000000, max: 290500000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  },
  {
    id: "alfa-romeo-33-2-coupe-speciale-1969",
    brand: "Alfa Romeo",
    name: "33/2 Coupe Speciale Concept",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Coupe",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 230,
      top_speed_kmh: 260,
      acceleration_sec: 5.6,
      weight_kg: 790,
      power_to_weight: 0.29},
     technical: {
      engine: "2.0L Naturally Aspirated V8",
      displacement_cc: 1995,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Fiberglass Body / Tubular Alloy Frame",
      brake_material: "Gir-ling Discs",
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
    id: "alfa-romeo-4c-2015",
    brand: "Alfa Romeo",
    name: "4C",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 2,
    mileage: 3,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 237,
      top_speed_kmh: 258,
      acceleration_sec: 4.1,
      weight_kg: 895,
      power_to_weight: 0.26
    },
    technical: {
      engine: "1.75L Turbocharged I4",
      displacement_cc: 1742,
      fuel: "Petrol",
      transmission: "6-Speed Dual-Clutch (TCT)",
      cylinders: 4
    },
    chassis: {
      material: "Full Carbon Fiber Monocoque Tub",
      brake_material: "Brembo Cross-Drilled Discs",
      suspension: "Double Wishbone Front / MacPherson Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2020,
      units_produced: 9117,
      country: "Italy"
    },
    price: {
      usd: { min: 45000, max: 75000, currency: "USD" },
      inr: { min: 3735000, max: 6225000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "alfa-romeo-8c-competizione-2007",
    brand: "Alfa Romeo",
    name: "8C Competizione",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 444,
      top_speed_kmh: 292,
      acceleration_sec: 4.2,
      weight_kg: 1585,
      power_to_weight: 0.28
    },
    technical: {
      engine: "4.7L Ferrari-Derived NA V8",
      displacement_cc: 4691,
      fuel: "Petrol",
      transmission: "6-Speed Automated Manual",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Body / Steel Chassis",
      brake_material: "Brembo Carbon Ceramic Option",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2007,
      end_year: 2010,
      units_produced: 500,
      country: "Italy"
    },
    price: {
      usd: { min: 250000, max: 380000, currency: "USD" },
      inr: { min: 20750000, max: 31540000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "alfa-romeo-bat-1953",
    brand: "Alfa Romeo",
    name: "B.A.T. 5 / 7 / 9 Concepts",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Concept Coupe",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.9,
    performance: {
      power_hp: 90,
      top_speed_kmh: 200,
      acceleration_sec: 11.5,
      weight_kg: 1000,
      power_to_weight: 0.09
    },
    technical: {
      engine: "1.9L Inline-4",
      displacement_cc: 1900,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Hand-Beaten Aerodynamic Steel Body (Bertone)",
      brake_material: "Drum Brakes",
      suspension: "Live Axle Rear / Wishbone Front",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1953,
      end_year: 1955,
      units_produced: 3,
      country: "Italy"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "1950s",
    status: "Concept",
    rarity: "Ultra Rare"
  },
  {
    id: "alfa-romeo-brera-2005",
    brand: "Alfa Romeo",
    name: "Brera 3.2 Q4",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.5,
    performance: {
      power_hp: 256,
      top_speed_kmh: 240,
      acceleration_sec: 6.8,
      weight_kg: 1630,
      power_to_weight: 0.15
    },
    technical: {
      engine: "3.2L JTS V6",
      displacement_cc: 3195,
      fuel: "Petrol",
      transmission: "6-Speed Manual / Q-Tronic",
      cylinders: 6
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Brembo Discs",
      suspension: "High Double Wishbone / Multilink",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2005,
      end_year: 2010,
      units_produced: 21786,
      country: "Italy"
    },
    price: {
      usd: { min: 12000, max: 25000, currency: "USD" },
      inr: { min: 996000, max: 2075000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "alfa-romeo-brera-concept-2002",
    brand: "Alfa Romeo",
    name: "Brera Concept (Giugiaro)",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Grand Tourer",
    comfort: 4,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 400,
      top_speed_kmh: 285,
      acceleration_sec: 4.9,
      weight_kg: 1550,
      power_to_weight: 0.25
    },
    technical: {
      engine: "4.2L Maserati-Derived V8",
      displacement_cc: 4244,
      fuel: "Petrol",
      transmission: "6-Speed Sequential",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Body / Aluminum Structure",
      brake_material: "Brembo Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2002,
      end_year: 2002,
      units_produced: 1,
      country: "Italy"
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
    id: "alfa-romeo-canguro-1964",
    brand: "Alfa Romeo",
    name: "Canguro Concept",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Sports Coupe",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.6,
    performance: {
      power_hp: 112,
      top_speed_kmh: 210,
      acceleration_sec: 8.8,
      weight_kg: 650,
      power_to_weight: 0.17
    },
    technical: {
      engine: "1.6L Twin-Cam I4",
      displacement_cc: 1570,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Fiberglass Body / Tubular Spaceframe (TZ)",
      brake_material: "Inboard Rear Discs",
      suspension: "Independent Front / De Dion Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1964,
      end_year: 1964,
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
    id: "alfa-romeo-carabo-1968",
    brand: "Alfa Romeo",
    name: "Carabo Concept",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Wedge Supercar",
    comfort: 1,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 230,
      top_speed_kmh: 250,
      acceleration_sec: 5.5,
      weight_kg: 1000,
      power_to_weight: 0.23
    },
    technical: {
      engine: "2.0L NA V8 (33 Stradale Engine)",
      displacement_cc: 1995,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Fiberglass / Scissor Door Pioneer (Bertone)",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1968,
      end_year: 1968,
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
    id: "alfa-romeo-diva-2006",
    brand: "Alfa Romeo",
    name: "Diva Concept",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Mid-Engine Sports Car",
    comfort: 2,
    mileage: 2,
    stability: 4,
    rating: 4.5,
    performance: {
      power_hp: 250,
      top_speed_kmh: 270,
      acceleration_sec: 4.8,
      weight_kg: 1100,
      power_to_weight: 0.22
    },
    technical: {
      engine: "3.2L Busso V6",
      displacement_cc: 3179,
      fuel: "Petrol",
      transmission: "6-Speed Selespeed",
      cylinders: 6
    },
    chassis: {
      material: "Modified 156 Chassis / Carbon Accents",
      brake_material: "Brembo Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2006,
      end_year: 2006,
      units_produced: 1,
      country: "Italy"
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
    id: "alfa-romeo-giulia-gtam-2021",
    brand: "Alfa Romeo",
    name: "Giulia GTAm",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Track Performance Sedan",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 532,
      top_speed_kmh: 300,
      acceleration_sec: 3.6,
      weight_kg: 1520,
      power_to_weight: 0.35
    },
    technical: {
      engine: "2.9L Twin-Turbo V6 (Ferrari Derived)",
      displacement_cc: 2891,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Hood, Roof, Spoiler & Roll Cage",
      brake_material: "Brembo Carbon Ceramic",
      suspension: "Active Aero & Sports Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2021,
      end_year: null,
      units_produced: 500,
      country: "Italy"
    },
    price: {
      usd: { min: 200000, max: 250000, currency: "USD" },
      inr: { min: 16600000, max: 20750000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited Edition"
  },
  {
    id: "alfa-romeo-giulia-quadrifoglio-2016",
    brand: "Alfa Romeo",
    name: "Giulia Quadrifoglio",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Sedan",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 503,
      top_speed_kmh: 307,
      acceleration_sec: 3.8,
      weight_kg: 1580,
      power_to_weight: 0.31
    },
    technical: {
      engine: "2.9L Twin-Turbo V6 (Ferrari Derived)",
      displacement_cc: 2891,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 8-Speed Auto",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Hood & Roof / Aluminum Suspension",
      brake_material: "Brembo Carbon Ceramic Optional",
      suspension: "Alfa Active Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2024,
      units_produced: 12000,
      country: "Italy"
    },
    price: {
      usd: { min: 55000, max: 85000, currency: "USD" },
      inr: { min: 4565000, max: 7055000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "alfa-romeo-gt-2004",
    brand: "Alfa Romeo",
    name: "GT 3.2 V6",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.5,
    performance: {
      power_hp: 237,
      top_speed_kmh: 243,
      acceleration_sec: 6.7,
      weight_kg: 1410,
      power_to_weight: 0.16
    },
    technical: {
      engine: "3.2L Busso V6",
      displacement_cc: 3179,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel Monocoque (Bertone Designed)",
      brake_material: "Ventilated Discs",
      suspension: "High Double Wishbone",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2004,
      end_year: 2007,
      units_produced: 80800,
      country: "Italy"
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
    id: "alfa-romeo-montreal-1970",
    brand: "Alfa Romeo",
    name: "Montreal",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Grand Tourer",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 197,
      top_speed_kmh: 220,
      acceleration_sec: 7.4,
      weight_kg: 1270,
      power_to_weight: 0.15
    },
    technical: {
      engine: "2.6L Crossplane V8 (Race-Derived)",
      displacement_cc: 2593,
      fuel: "Petrol",
      transmission: "5-Speed ZF Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel Body (Gandini / Bertone)",
      brake_material: "Ventilated Discs",
      suspension: "Independent Front / Live Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1970,
      end_year: 1977,
      units_produced: 3925,
      country: "Italy"
    },
    price: {
      usd: { min: 65000, max: 110000, currency: "USD" },
      inr: { min: 5395000, max: 9130000, currency: "INR" }
    },
    era: "1970s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "alfa-romeo-scighera-1997",
    brand: "Alfa Romeo",
    name: "Scighera Concept",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 2,
    mileage: 1,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 400,
      top_speed_kmh: 302,
      acceleration_sec: 3.8,
      weight_kg: 1450,
      power_to_weight: 0.27
    },
    technical: {
      engine: "3.0L Twin-Turbo V6",
      displacement_cc: 2959,
      fuel: "Petrol",
      transmission: "6-Speed Sequential",
      cylinders: 6
    },
    chassis: {
      material: "Aluminum & Carbon Fiber Frame (Italdesign)",
      brake_material: "Ventilated Discs",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1997,
      end_year: 1997,
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
    id: "alfa-romeo-sz-1989",
    brand: "Alfa Romeo",
    name: "SZ (Sprint Zagato / Il Mostro)",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Coupe",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 207,
      top_speed_kmh: 245,
      acceleration_sec: 7.0,
      weight_kg: 1260,
      power_to_weight: 0.16
    },
    technical: {
      engine: "3.0L 12V Busso V6",
      displacement_cc: 2959,
      fuel: "Petrol",
      transmission: "5-Speed Manual Rear Transaxle",
      cylinders: 6
    },
    chassis: {
      material: "Modar Injection-Molded Composite Body",
      brake_material: "Inboard Rear Discs",
      suspension: "Group A Touring Car Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1989,
      end_year: 1993,
      units_produced: 1036,
      country: "Italy"
    },
    price: {
      usd: { min: 60000, max: 120000, currency: "USD" },
      inr: { min: 4980000, max: 9960000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "alfa-romeo-t33-stradale-1967",
    brand: "Alfa Romeo",
    name: "T33 Stradale (1967)",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Historic Supercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 227,
      top_speed_kmh: 260,
      acceleration_sec: 5.5,
      weight_kg: 700,
      power_to_weight: 0.32
    },
    technical: {
      engine: "2.0L Racing V8 (SPICA Fuel Injection)",
      displacement_cc: 1995,
      fuel: "Petrol",
      transmission: "6-Speed Valerio Colotti Manual",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Panels over Magnesium Alloy Tubing",
      brake_material: "Girling Discs (Inboard Rear)",
      suspension: "Double Wishbone Race Setup",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1967,
      end_year: 1969,
      units_produced: 18,
      country: "Italy"
    },
    price: {
      usd: { min: 10000000, max: 15000000, currency: "USD" },
      inr: { min: 830000000, max: 1245000000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "alfa-romeo-tz3-stradale-2010",
    brand: "Alfa Romeo",
    name: "TZ3 Stradale Zagato",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt Supercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 600,
      top_speed_kmh: 325,
      acceleration_sec: 3.6,
      weight_kg: 1450,
      power_to_weight: 0.41
    },
    technical: {
      engine: "8.4L Naturally Aspirated V10 (Viper Engine)",
      displacement_cc: 8382,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Carbon Fiber Zagato Body / Viper Frame",
      brake_material: "Brembo Discs",
      suspension: "Independent Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2010,
      end_year: 2011,
      units_produced: 9,
      country: "Italy"
    },
    price: {
      usd: { min: 700000, max: 1000000, currency: "USD" },
      inr: { min: 58100000, max: 83000000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  }
];

export default cars;