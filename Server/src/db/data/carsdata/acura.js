const cars = [
  {
    id: "acura-nsx-na1-1990",
    brand: "Acura",
    name: "NSX (NA1)",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Analog Supercar",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 270,
      top_speed_kmh: 270,
      acceleration_sec: 5.0,
      weight_kg: 1370,
      power_to_weight: 0.20
    },
    technical: {
      engine: "3.0L Naturally Aspirated V6 VTEC (C30A)",
      displacement_cc: 2977,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "All-Aluminum Monocoque Chassis",
      brake_material: "4-Wheel Vented Discs",
      suspension: "Double Wishbone Suspension Front & Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1990,
      end_year: 1996,
      units_produced: 8900,
      country: "Japan"
    },
    price: {
      usd: { min: 65000, max: 125000, currency: "USD" },
      inr: { min: 5395000, max: 10375000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "acura-nsx-zanardi-edition-1999",
    brand: "Acura",
    name: "NSX Alex Zanardi Edition",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Special Edition Supercar",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 290,
      top_speed_kmh: 280,
      acceleration_sec: 4.8,
      weight_kg: 1322,
      power_to_weight: 0.22
    },
    technical: {
      engine: "3.2L DOHC V6 VTEC (C32B)",
      displacement_cc: 3179,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Lightweight Aluminum Body / Fixed Roof",
      brake_material: "Ventilated Discs",
      suspension: "Track-Tuned BBS Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1999,
      end_year: 1999,
      units_produced: 51,
      country: "Japan"
    },
    price: {
      usd: { min: 180000, max: 275000, currency: "USD" },
      inr: { min: 14940000, max: 22825000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "acura-nsx-na2-t-1997",
    brand: "Acura",
    name: "NSX-T (NA2)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Targa Supercar",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 290,
      top_speed_kmh: 275,
      acceleration_sec: 4.9,
      weight_kg: 1395,
      power_to_weight: 0.21
    },
    technical: {
      engine: "3.2L DOHC V6 VTEC (C32B)",
      displacement_cc: 3179,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Aluminum Monocoque w/ Removable Targa Top",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1997,
      end_year: 2005,
      units_produced: 9000,
      country: "Japan"
    },
    price: {
      usd: { min: 80000, max: 150000, currency: "USD" },
      inr: { min: 6640000, max: 12450000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "acura-nsx-nc1-2017",
    brand: "Acura",
    name: "NSX (NC1)",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Hybrid Supercar",
    comfort: 4,
    mileage: 4,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 573,
      top_speed_kmh: 307,
      acceleration_sec: 2.9,
      weight_kg: 1725,
      power_to_weight: 0.33
    },
    technical: {
      engine: "3.5L Twin-Turbo V6 + 3 Electric Motors",
      displacement_cc: 3493,
      fuel: "Hybrid",
      transmission: "9-Speed Dual-Clutch (DCT)",
      cylinders: 6
    },
    chassis: {
      material: "Multi-Material Spaceframe (Aluminum & Carbon Floor)",
      brake_material: "Brembo 6-Piston Discs",
      suspension: "Magnetorheological Dampers",
      drivetrain: "Sport Hybrid SH-AWD"
    },
    production: {
      start_year: 2017,
      end_year: 2021,
      units_produced: 2500,
      country: "USA"
    },
    price: {
      usd: { min: 110000, max: 160000, currency: "USD" },
      inr: { min: 9130000, max: 13280000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "acura-nsx-type-s-2022",
    brand: "Acura",
    name: "NSX Type S",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Hybrid Supercar",
    comfort: 4,
    mileage: 4,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 600,
      top_speed_kmh: 307,
      acceleration_sec: 2.7,
      weight_kg: 1750,
      power_to_weight: 0.34
    },
    technical: {
      engine: "3.5L Twin-Turbo V6 + 3 Electric Motors (GT3 Turbos)",
      displacement_cc: 3493,
      fuel: "Hybrid",
      transmission: "9-Speed Dual-Clutch (50% Faster Shifts)",
      cylinders: 6
    },
    chassis: {
      material: "Full Carbon Fiber Roof, Spoiler & Diffuser",
      brake_material: "Brembo Carbon Ceramic Brakes",
      suspension: "Adaptive Magnetorheological Dampers",
      drivetrain: "Sport Hybrid SH-AWD"
    },
    production: {
      start_year: 2022,
      end_year: 2022,
      units_produced: 350,
      country: "USA"
    },
    price: {
      usd: { min: 171400, max: 210000, currency: "USD" },
      inr: { min: 14226000, max: 17430000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "acura-integra-type-r-dc2-1997",
    brand: "Acura",
    name: "Integra Type R (DC2)",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch / Sports Coupe",
    comfort: 2,
    mileage: 3,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 195,
      top_speed_kmh: 233,
      acceleration_sec: 6.2,
      weight_kg: 1100,
      power_to_weight: 0.18
    },
    technical: {
      engine: "1.8L Naturally Aspirated I4 VTEC (B18C5)",
      displacement_cc: 1797,
      fuel: "Petrol",
      transmission: "5-Speed Manual w/ Helical LSD",
      cylinders: 4
    },
    chassis: {
      material: "Stiffened Steel Monocoque / Thinner Glass",
      brake_material: "Upgraded Discs",
      suspension: "Double Wishbone Front & Rear",
      drivetrain: "FWD"
    },
    production: {
      start_year: 1997,
      end_year: 2001,
      units_produced: 3823,
      country: "Japan"
    },
    price: {
      usd: { min: 35000, max: 80000, currency: "USD" },
      inr: { min: 2905000, max: 6640000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "acura-integra-type-s-de4-2024",
    brand: "Acura",
    name: "Integra Type S (DE4)",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Liftback",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 320,
      top_speed_kmh: 270,
      acceleration_sec: 5.1,
      weight_kg: 1460,
      power_to_weight: 0.22
    },
    technical: {
      engine: "2.0L Turbocharged I4 VTEC (K20C1)",
      displacement_cc: 1996,
      fuel: "Petrol",
      transmission: "6-Speed Manual w/ Rev-Match & LSD",
      cylinders: 4
    },
    chassis: {
      material: "High-Strength Steel Body / Aluminum Hood",
      brake_material: "Brembo 4-Piston Front Discs",
      suspension: "Dual-Axis Strut Front / Adaptive Dampers",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: null,
      country: "USA"
    },
    price: {
      usd: { min: 51800, max: 60000, currency: "USD" },
      inr: { min: 4299000, max: 4980000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "acura-rsx-type-s-dc5-2002",
    brand: "Acura",
    name: "RSX Type S (DC5)",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 3,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 210,
      top_speed_kmh: 225,
      acceleration_sec: 6.2,
      weight_kg: 1260,
      power_to_weight: 0.17
    },
    technical: {
      engine: "2.0L i-VTEC I4 (K20A2 / K20Z1)",
      displacement_cc: 1998,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "Control-Link MacPherson Strut / Double Wishbone",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2002,
      end_year: 2006,
      units_produced: 65000,
      country: "Japan"
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
    id: "acura-tlx-type-s-2021",
    brand: "Acura",
    name: "TLX Type S",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Sedan",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 355,
      top_speed_kmh: 250,
      acceleration_sec: 4.9,
      weight_kg: 1900,
      power_to_weight: 0.19
    },
    technical: {
      engine: "3.0L Turbocharged DOHC V6",
      displacement_cc: 2997,
      fuel: "Petrol",
      transmission: "10-Speed Automatic w/ Paddle Shifters",
      cylinders: 6
    },
    chassis: {
      material: "Ultra-Rigid Body Structure",
      brake_material: "Brembo 4-Piston Front Discs",
      suspension: "Double Wishbone Front / Adaptive Dampers",
      drivetrain: "Super Handling All-Wheel Drive (SH-AWD)"
    },
    production: {
      start_year: 2021,
      end_year: null,
      units_produced: null,
      country: "USA"
    },
    price: {
      usd: { min: 55000, max: 62000, currency: "USD" },
      inr: { min: 4565000, max: 5146000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "acura-mdx-type-s-2022",
    brand: "Acura",
    name: "MDX Type S",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Performance SUV",
    comfort: 5,
    mileage: 3,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 355,
      top_speed_kmh: 210,
      acceleration_sec: 5.5,
      weight_kg: 2168,
      power_to_weight: 0.16
    },
    technical: {
      engine: "3.0L Turbocharged DOHC V6",
      displacement_cc: 2997,
      fuel: "Petrol",
      transmission: "10-Speed Automatic",
      cylinders: 6
    },
    chassis: {
      material: "High-Rigidity Steel / Aluminum Hood & Fenders",
      brake_material: "Brembo Front Discs",
      suspension: "Adaptive Air Suspension w/ Lift Mode",
      drivetrain: "SH-AWD"
    },
    production: {
      start_year: 2022,
      end_year: null,
      units_produced: null,
      country: "USA"
    },
    price: {
      usd: { min: 68000, max: 75000, currency: "USD" },
      inr: { min: 5644000, max: 6225000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "acura-precision-concept-2016",
    brand: "Acura",
    name: "Precision Concept",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Luxury Sedan",
    comfort: 5,
    mileage: 3,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 400,
      top_speed_kmh: 280,
      acceleration_sec: 4.5,
      weight_kg: 1800,
      power_to_weight: 0.22
    },
    technical: {
      engine: "3.5L Twin-Turbo V6",
      displacement_cc: 3493,
      fuel: "Petrol",
      transmission: "9-Speed Automatic",
      cylinders: 6
    },
    chassis: {
      material: "Low-Slung Carbon & Aluminum Structure",
      brake_material: "Carbon Ceramic Discs",
      suspension: "Adaptive Sports Suspension",
      drivetrain: "SH-AWD"
    },
    production: {
      start_year: 2016,
      end_year: 2016,
      units_produced: 1,
      country: "USA"
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
    id: "acura-precision-ev-concept-2022",
    brand: "Acura",
    name: "Precision EV Concept",
    img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80",
    type: "Concept EV SUV",
    comfort: 5,
    mileage: 5,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 500,
      top_speed_kmh: 210,
      acceleration_sec: 4.0,
      weight_kg: 2200,
      power_to_weight: 0.23
    },
    technical: {
      engine: "Dual Electric Motors (AWD Powertrain)",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "Single-Speed Automatic",
      cylinders: 0
    },
    chassis: {
      material: "Matte Particle Blue Eco-Composite Shell",
      brake_material: "Regenerative Disc Brakes",
      suspension: "Active Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2022,
      end_year: 2022,
      units_produced: 1,
      country: "USA"
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
    id: "acura-arx-06-gtp-2023",
    brand: "Acura",
    name: "ARX-06 GTP",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "IMSA GTP Prototype Race Car",
    comfort: 1,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 670,
      top_speed_kmh: 340,
      acceleration_sec: 2.3,
      weight_kg: 1030,
      power_to_weight: 0.65
    },
    technical: {
      engine: "2.4L Twin-Turbo V6 (AR24e) + Bosch MGU Hybrid",
      displacement_cc: 2400,
      fuel: "Hybrid",
      transmission: "6-Speed Xtrac Sequential Race",
      cylinders: 6
    },
    chassis: {
      material: "ORECA Carbon Fiber Monocoque Chassis",
      brake_material: "Carbon-Carbon Racing Brakes",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: 4,
      country: "USA / France"
    },
    price: {
      usd: { min: 1500000, max: 2000000, currency: "USD" },
      inr: { min: 124500000, max: 166000000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  },
  {
    id: "acura-legend-coupe-1991",
    brand: "Acura",
    name: "Legend Coupe (Gen 2)",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Luxury Coupe",
    comfort: 4,
    mileage: 3,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 230,
      top_speed_kmh: 225,
      acceleration_sec: 7.2,
      weight_kg: 1560,
      power_to_weight: 0.14
    },
    technical: {
      engine: "3.2L Type II Longitudinal V6 (C32A1)",
      displacement_cc: 3206,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 4-Speed Auto",
      cylinders: 6
    },
    chassis: {
      material: "Steel Monocoque Structure",
      brake_material: "4-Wheel ABS Discs",
      suspension: "Double Wishbone Front & Rear",
      drivetrain: "FWD"
    },
    production: {
      start_year: 1991,
      end_year: 1995,
      units_produced: 35000,
      country: "Japan"
    },
    price: {
      usd: { min: 8000, max: 20000, currency: "USD" },
      inr: { min: 664000, max: 1660000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Uncommon"
  }
];

export default cars;