const cars = [
  {
    id: "abarth-205a-berlinetta-1950",
    brand: "Abarth",
    name: "205 A Berlinetta Vignale",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Coupe",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.8,
    performance: {
      power_hp: 83,
      top_speed_kmh: 178,
      acceleration_sec: 9.5,
      weight_kg: 550,
      power_to_weight: 0.15
    },
    technical: {
      engine: "1.1L Naturally Aspirated I4 (Fiat Tuning)",
      displacement_cc: 1089,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Aluminum Body by Vignale / Tubular Frame",
      brake_material: "Drum Brakes",
      suspension: "Independent Front / Live Axle Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1950,
      end_year: 1951,
      units_produced: 3,
      country: "Italy"
    },
    price: {
      usd: { min: 450000, max: 800000, currency: "USD" },
      inr: { min: 37350000, max: 66400000, currency: "INR" }
    },
    era: "1950s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "abarth-750-gt-zagato-1956",
    brand: "Abarth",
    name: "750 GT Zagato",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Coupe",
    comfort: 2,
    mileage: 3,
    stability: 3,
    rating: 4.9,
    performance: {
      power_hp: 47,
      top_speed_kmh: 160,
      acceleration_sec: 12.0,
      weight_kg: 535,
      power_to_weight: 0.08
    },
    technical: {
      engine: "0.75L Inline-4 (Abarth Spec)",
      displacement_cc: 747,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Hand-Formed Aluminum Double-Bubble Roof",
      brake_material: "Drum Brakes",
      suspension: "Transverse Leaf Spring Front / Trailing Arm Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1956,
      end_year: 1960,
      units_produced: 600,
      country: "Italy"
    },
    price: {
      usd: { min: 120000, max: 220000, currency: "USD" },
      inr: { min: 9960000, max: 18260000, currency: "INR" }
    },
    era: "1950s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "abarth-1000-monoposto-record-1960",
    brand: "Abarth",
    name: "1000 Monoposto Record Concept",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Record Car",
    comfort: 1,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 108,
      top_speed_kmh: 220,
      acceleration_sec: 6.8,
      weight_kg: 500,
      power_to_weight: 0.21
    },
    technical: {
      engine: "1.0L Twin-Cam Inline-4",
      displacement_cc: 982,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Streamlined Aerodynamic Body (Pininfarina)",
      brake_material: "Discs",
      suspension: "Independent Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1960,
      end_year: 1960,
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
    id: "abarth-1000-tc-berlina-corsa-1964",
    brand: "Abarth",
    name: "1000 TC Berlina Corsa",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Touring Race Car",
    comfort: 1,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 112,
      top_speed_kmh: 205,
      acceleration_sec: 6.8,
      weight_kg: 583,
      power_to_weight: 0.19
    },
    technical: {
      engine: "1.0L Naturally Aspirated I4",
      displacement_cc: 982,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Body w/ Open Engine Cover Aero",
      brake_material: "Gir-ling Discs",
      suspension: "Abarth Tuned Race Springs",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1964,
      end_year: 1970,
      units_produced: 1000,
      country: "Italy"
    },
    price: {
      usd: { min: 60000, max: 120000, currency: "USD" },
      inr: { min: 4980000, max: 9960000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "abarth-1300-ot-1965",
    brand: "Abarth",
    name: "1300 OT Berlinetta",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 2,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 147,
      top_speed_kmh: 245,
      acceleration_sec: 5.9,
      weight_kg: 655,
      power_to_weight: 0.22
    },
    technical: {
      engine: "1.3L DOHC Inline-4",
      displacement_cc: 1289,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Fiberglass Body / Tubular Subframe",
      brake_material: "Disc Brakes",
      suspension: "Independent Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1965,
      end_year: 1968,
      units_produced: 50,
      country: "Italy"
    },
    price: {
      usd: { min: 180000, max: 300000, currency: "USD" },
      inr: { min: 14940000, max: 24900000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "abarth-2000-sport-spider-1969",
    brand: "Abarth",
    name: "2000 Sport Spider",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Race Roadster",
    comfort: 1,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 250,
      top_speed_kmh: 270,
      acceleration_sec: 4.8,
      weight_kg: 575,
      power_to_weight: 0.43
    },
    technical: {
      engine: "2.0L DOHC Inline-4 (Type 236)",
      displacement_cc: 1946,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Fiberglass Bodywork / Tubular Spaceframe",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone Race Setup",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1969,
      end_year: 1971,
      units_produced: 10,
      country: "Italy"
    },
    price: {
      usd: { min: 350000, max: 600000, currency: "USD" },
      inr: { min: 29050000, max: 49800000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "fiat-abarth-131-rally-1976",
    brand: "Abarth",
    name: "131 Rally Stradale",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Rally Homologation",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 140,
      top_speed_kmh: 190,
      acceleration_sec: 7.8,
      weight_kg: 980,
      power_to_weight: 0.14
    },
    technical: {
      engine: "2.0L 16V DOHC I4 (Lampredi)",
      displacement_cc: 1995,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Monocoque w/ Fiberglass Fenders & Hood",
      brake_material: "4-Wheel Disc Brakes",
      suspension: "Independent MacPherson Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1976,
      end_year: 1978,
      units_produced: 400,
      country: "Italy"
    },
    price: {
      usd: { min: 110000, max: 200000, currency: "USD" },
      inr: { min: 9130000, max: 16600000, currency: "INR" }
    },
    era: "1970s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "abarth-500-2008",
    brand: "Abarth",
    name: "500",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch",
    comfort: 3,
    mileage: 3,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 135,
      top_speed_kmh: 205,
      acceleration_sec: 7.9,
      weight_kg: 1035,
      power_to_weight: 0.13
    },
    technical: {
      engine: "1.4L Turbocharged I4 (T-Jet)",
      displacement_cc: 1368,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Ventilated Discs",
      suspension: "MacPherson Strut / Torsion Beam",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2008,
      end_year: 2015,
      units_produced: 50000,
      country: "Italy"
    },
    price: {
      usd: { min: 10000, max: 18000, currency: "USD" },
      inr: { min: 830000, max: 1494000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "abarth-punto-evo-2010",
    brand: "Abarth",
    name: "Punto Evo",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch",
    comfort: 3,
    mileage: 3,
    stability: 4,
    rating: 4.5,
    performance: {
      power_hp: 163,
      top_speed_kmh: 213,
      acceleration_sec: 7.9,
      weight_kg: 1185,
      power_to_weight: 0.13
    },
    technical: {
      engine: "1.4L Turbocharged I4 (MultiAir)",
      displacement_cc: 1368,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Brembo Discs",
      suspension: "Sport Tuned Dampers",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2010,
      end_year: 2014,
      units_produced: 12000,
      country: "Italy"
    },
    price: {
      usd: { min: 9000, max: 16000, currency: "USD" },
      inr: { min: 747000, max: 1328000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "abarth-695-biposto-2014",
    brand: "Abarth",
    name: "695 Biposto",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Extreme Track Hatch",
    comfort: 1,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 190,
      top_speed_kmh: 230,
      acceleration_sec: 5.9,
      weight_kg: 997,
      power_to_weight: 0.19
    },
    technical: {
      engine: "1.4L Turbocharged I4 (T-Jet)",
      displacement_cc: 1368,
      fuel: "Petrol",
      transmission: "5-Speed Dog-Ring Manual (Dog-Leg)",
      cylinders: 4
    },
    chassis: {
      material: "Carbon Fiber Bumpers / Titanium Roll Cage",
      brake_material: "Brembo 4-Piston Discs",
      suspension: "Extreme Shox Adjustable Coilovers",
      drivetrain: "FWD w/ Mechanical Differential"
    },
    production: {
      start_year: 2014,
      end_year: 2018,
      units_produced: 133,
      country: "Italy"
    },
    price: {
      usd: { min: 45000, max: 70000, currency: "USD" },
      inr: { min: 3735000, max: 5810000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "abarth-124-spider-2016",
    brand: "Abarth",
    name: "124 Spider",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Roadster",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 170,
      top_speed_kmh: 232,
      acceleration_sec: 6.8,
      weight_kg: 1060,
      power_to_weight: 0.16
    },
    technical: {
      engine: "1.4L MultiAir Turbo I4",
      displacement_cc: 1368,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 6-Speed Auto",
      cylinders: 4
    },
    chassis: {
      material: "Steel & Aluminum Lightweight Roadster Frame",
      brake_material: "Brembo Discs",
      suspension: "Bilstein Dampers w/ Mechanical LSD",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2019,
      units_produced: 15000,
      country: "Japan"
    },
    price: {
      usd: { min: 24000, max: 38000, currency: "USD" },
      inr: { min: 1992000, max: 3154000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "abarth-124-gt-2018",
    brand: "Abarth",
    name: "124 GT",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Carbon Hardtop Roadster",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 170,
      top_speed_kmh: 232,
      acceleration_sec: 6.8,
      weight_kg: 1076,
      power_to_weight: 0.15
    },
    technical: {
      engine: "1.4L MultiAir Turbo I4",
      displacement_cc: 1368,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Carbon Fiber Hardtop Roof (16kg) / OZ Ultraleggera Wheels",
      brake_material: "Brembo Discs",
      suspension: "Bilstein Dampers / Record Monza Exhaust",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2020,
      units_produced: 1000,
      country: "Japan"
    },
    price: {
      usd: { min: 32000, max: 48000, currency: "USD" },
      inr: { min: 2656000, max: 3984000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "abarth-595-competizione-2021",
    brand: "Abarth",
    name: "595 Competizione",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Hot Hatch",
    comfort: 2,
    mileage: 3,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 180,
      top_speed_kmh: 225,
      acceleration_sec: 6.7,
      weight_kg: 1045,
      power_to_weight: 0.17
    },
    technical: {
      engine: "1.4L Turbocharged I4 w/ Garrett Turbo",
      displacement_cc: 1368,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Body / Sabelt Carbon Bucket Seats",
      brake_material: "Brembo 4-Piston Calipers",
      suspension: "Koni FSD Dampers",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2021,
      end_year: 2024,
      units_produced: 15000,
      country: "Poland"
    },
    price: {
      usd: { min: 28000, max: 38000, currency: "USD" },
      inr: { min: 2324000, max: 3154000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "abarth-500e-2023",
    brand: "Abarth",
    name: "500e",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Electric Hot Hatch",
    comfort: 4,
    mileage: 5,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 155,
      top_speed_kmh: 155,
      acceleration_sec: 7.0,
      weight_kg: 1410,
      power_to_weight: 0.11
    },
    technical: {
      engine: "Front Electric Motor (42 kWh Battery)",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "Single-Speed Automatic",
      cylinders: 0
    },
    chassis: {
      material: "Steel & Composite Body / Sound Generator System",
      brake_material: "4-Wheel Disc Brakes",
      suspension: "Abarth Sport Suspension",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: null,
      country: "Italy"
    },
    price: {
      usd: { min: 38000, max: 48000, currency: "USD" },
      inr: { min: 3154000, max: 3984000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "abarth-classiche-1300-ot-2024",
    brand: "Abarth",
    name: "Classiche 1300 OT",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Retro Limited Edition Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 240,
      top_speed_kmh: 250,
      acceleration_sec: 4.5,
      weight_kg: 1000,
      power_to_weight: 0.24
    },
    technical: {
      engine: "1.75L Turbocharged I4 (Alfa 4C Engine)",
      displacement_cc: 1742,
      fuel: "Petrol",
      transmission: "6-Speed Dual-Clutch",
      cylinders: 4
    },
    chassis: {
      material: "Carbon Fiber Heritage Body (Alfa 4C Tub)",
      brake_material: "Brembo Discs",
      suspension: "Double Wishbone Race Tune",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: 5,
      country: "Italy"
    },
    price: {
      usd: { min: 220000, max: 280000, currency: "USD" },
      inr: { min: 18260000, max: 23240000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  },
  {
    id: "abarth-600e-2024",
    brand: "Abarth",
    name: "600e Scorpionissima",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Electric Performance Crossover",
    comfort: 4,
    mileage: 5,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 280,
      top_speed_kmh: 200,
      acceleration_sec: 5.85,
      weight_kg: 1595,
      power_to_weight: 0.17
    },
    technical: {
      engine: "Electric Motor w/ Torsen LSD (54 kWh Battery)",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "Single-Speed Automatic",
      cylinders: 0
    },
    chassis: {
      material: "eCMP2 Platform / Sabelt Racing Seats",
      brake_material: "Alcon High-Performance Discs",
      suspension: "Stiffened Crossover Suspension",
      drivetrain: "FWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: 1949,
      country: "Italy"
    },
    price: {
      usd: { min: 46000, max: 55000, currency: "USD" },
      inr: { min: 3818000, max: 4565000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited Edition"
  }
];

export default cars;