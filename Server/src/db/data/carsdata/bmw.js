const cars = [
  {
    id: "bmw-1m-coupe-2011",
    brand: "BMW",
    name: "1M Coupe",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 335,
      top_speed_kmh: 250,
      acceleration_sec: 4.8,
      weight_kg: 1495,
      power_to_weight: 0.22
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 (N54)",
      displacement_cc: 2979,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "M Sport Double-Pivot",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2011,
      end_year: 2013,
      units_produced: 6309,
      country: "Germany"
    },
    price: {
      usd: { min: 55000, max: 85000, currency: "USD" },
      inr: { min: 4565000, max: 7055000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "bmw-2002-hommage-2016",
    brand: "BMW",
    name: "2002 Hommage",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Coupe",
    comfort: 2,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 365,
      top_speed_kmh: 270,
      acceleration_sec: 4.2,
      weight_kg: 1450,
      power_to_weight: 0.25
    },
    technical: {
      engine: "3.0L Turbo I6",
      displacement_cc: 2979,
      fuel: "Petrol",
      transmission: "7-Speed Dual-Clutch",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2016,
      units_produced: 1,
      country: "Germany"
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
    id: "bmw-2002-turbo-1973",
    brand: "BMW",
    name: "2002 Turbo",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Sedan",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.9,
    performance: {
      power_hp: 170,
      top_speed_kmh: 211,
      acceleration_sec: 6.9,
      weight_kg: 1080,
      power_to_weight: 0.15
    },
    technical: {
      engine: "2.0L Turbo I4 (M10)",
      displacement_cc: 1990,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Front Discs / Rear Drums",
      suspension: "MacPherson Struts / Semi-Trailing Arm",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1973,
      end_year: 1974,
      units_produced: 1672,
      country: "Germany"
    },
    price: {
      usd: { min: 90000, max: 150000, currency: "USD" },
      inr: { min: 7470000, max: 12450000, currency: "INR" }
    },
    era: "1970s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "bmw-850-csi-1990",
    brand: "BMW",
    name: "850 CSi",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 375,
      top_speed_kmh: 250,
      acceleration_sec: 5.7,
      weight_kg: 1865,
      power_to_weight: 0.20
    },
    technical: {
      engine: "5.6L V12 (S70B56)",
      displacement_cc: 5576,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Ventilated Discs",
      suspension: "M-Tuned Multi-Link",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1990,
      end_year: 1999,
      units_produced: 1510,
      country: "Germany"
    },
    price: {
      usd: { min: 80000, max: 160000, currency: "USD" },
      inr: { min: 6640000, max: 13280000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "bmw-concept-8-series-2017",
    brand: "BMW",
    name: "Concept 8 Series",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 530,
      top_speed_kmh: 250,
      acceleration_sec: 3.8,
      weight_kg: 1890,
      power_to_weight: 0.28
    },
    technical: {
      engine: "4.4L Twin-Turbo V8",
      displacement_cc: 4395,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Core / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive M Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2017,
      end_year: 2017,
      units_produced: 1,
      country: "Germany"
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
    id: "bmw-concept-z4-2017",
    brand: "BMW",
    name: "Concept Z4",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Roadster",
    comfort: 3,
    mileage: 3,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 335,
      top_speed_kmh: 250,
      acceleration_sec: 4.4,
      weight_kg: 1420,
      power_to_weight: 0.23
    },
    technical: {
      engine: "3.0L Turbo I6",
      displacement_cc: 2998,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 6
    },
    chassis: {
      material: "Aluminum Spaceframe",
      brake_material: "Ventilated Discs",
      suspension: "M Sport Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2017,
      end_year: 2017,
      units_produced: 1,
      country: "Germany"
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
    id: "bmw-i-vision-2016",
    brand: "BMW",
    name: "i Vision Future Interaction",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Roadster",
    comfort: 4,
    mileage: 5,
    stability: 4,
    rating: 4.5,
    performance: {
      power_hp: 362,
      top_speed_kmh: 250,
      acceleration_sec: 4.4,
      weight_kg: 1485,
      power_to_weight: 0.24
    },
    technical: {
      engine: "1.5L Turbo I3 + Electric Motor",
      displacement_cc: 1499,
      fuel: "Hybrid",
      transmission: "6-Speed Automatic",
      cylinders: 3
    },
    chassis: {
      material: "Carbon Fiber Reinforced Plastic (CFRP)",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2016,
      end_year: 2016,
      units_produced: 1,
      country: "Germany"
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
    id: "bmw-i8-2014",
    brand: "BMW",
    name: "i8",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Hybrid Sports Car",
    comfort: 4,
    mileage: 4,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 369,
      top_speed_kmh: 250,
      acceleration_sec: 4.4,
      weight_kg: 1535,
      power_to_weight: 0.24
    },
    technical: {
      engine: "1.5L Turbo I3 + Electric Motor",
      displacement_cc: 1499,
      fuel: "Hybrid",
      transmission: "6-Speed Auto (Gas) + 2-Speed (Electric)",
      cylinders: 3
    },
    chassis: {
      material: "Carbon Fiber (CFRP) Passenger Cell",
      brake_material: "Ventilated Discs",
      suspension: "Dynamic Damper Control",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2014,
      end_year: 2020,
      units_produced: 20465,
      country: "Germany"
    },
    price: {
      usd: { min: 60000, max: 100000, currency: "USD" },
      inr: { min: 4980000, max: 8300000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "bmw-m1-1978",
    brand: "BMW",
    name: "M1",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 5.0,
    performance: {
      power_hp: 273,
      top_speed_kmh: 265,
      acceleration_sec: 5.6,
      weight_kg: 1300,
      power_to_weight: 0.21
    },
    technical: {
      engine: "3.5L Naturally Aspirated I6 (M88/1)",
      displacement_cc: 3453,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Spaceframe Steel Tubular Chassis",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1978,
      end_year: 1980,
      units_produced: 453,
      country: "Germany"
    },
    price: {
      usd: { min: 450000, max: 750000, currency: "USD" },
      inr: { min: 37350000, max: 62250000, currency: "INR" }
    },
    era: "1970s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "bmw-m1-hommage-2008",
    brand: "BMW",
    name: "M1 Hommage",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 500,
      top_speed_kmh: 300,
      acceleration_sec: 3.8,
      weight_kg: 1400,
      power_to_weight: 0.35
    },
    technical: {
      engine: "5.0L V10",
      displacement_cc: 4999,
      fuel: "Petrol",
      transmission: "7-Speed SMG III",
      cylinders: 10
    },
    chassis: {
      material: "Carbon Fiber / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2008,
      end_year: 2008,
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
    id: "bmw-m2-f87-2016",
    brand: "BMW",
    name: "M2 (F87)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 365,
      top_speed_kmh: 270,
      acceleration_sec: 4.3,
      weight_kg: 1520,
      power_to_weight: 0.24
    },
    technical: {
      engine: "3.0L Turbo I6 (N55)",
      displacement_cc: 2979,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 7-Speed M-DCT",
      cylinders: 6
    },
    chassis: {
      material: "Steel / Aluminum Subframes",
      brake_material: "M Compound Brakes",
      suspension: "Aluminum Double-Joint Spring Strut",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2021,
      units_produced: 30000,
      country: "Germany"
    },
    price: {
      usd: { min: 38000, max: 60000, currency: "USD" },
      inr: { min: 3154000, max: 4980000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m3-e30-1985",
    brand: "BMW",
    name: "M3 (E30)",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Coupe",
    comfort: 2,
    mileage: 2,
    stability: 4,
    rating: 5.0,
    performance: {
      power_hp: 197,
      top_speed_kmh: 235,
      acceleration_sec: 6.7,
      weight_kg: 1200,
      power_to_weight: 0.16
    },
    technical: {
      engine: "2.3L Naturally Aspirated I4 (S14)",
      displacement_cc: 2302,
      fuel: "Petrol",
      transmission: "5-Speed Dog-Leg Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "ABS Ventilated Discs",
      suspension: "MacPherson Strut / Semi-Trailing Arm",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1985,
      end_year: 1992,
      units_produced: 17970,
      country: "Germany"
    },
    price: {
      usd: { min: 70000, max: 150000, currency: "USD" },
      inr: { min: 5810000, max: 12450000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "bmw-m3-e36-1992",
    brand: "BMW",
    name: "M3 (E36)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 3,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 316,
      top_speed_kmh: 250,
      acceleration_sec: 5.5,
      weight_kg: 1460,
      power_to_weight: 0.22
    },
    technical: {
      engine: "3.2L Naturally Aspirated I6 (S50B32)",
      displacement_cc: 3201,
      fuel: "Petrol",
      transmission: "6-Speed Manual / SMG",
      cylinders: 6
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Ventilated Discs",
      suspension: "MacPherson Strut / Multi-Link Central Arm",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1992,
      end_year: 1999,
      units_produced: 71242,
      country: "Germany"
    },
    price: {
      usd: { min: 18000, max: 40000, currency: "USD" },
      inr: { min: 1494000, max: 3320000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m3-e46-2001",
    brand: "BMW",
    name: "M3 (E46)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 338,
      top_speed_kmh: 250,
      acceleration_sec: 5.1,
      weight_kg: 1570,
      power_to_weight: 0.22
    },
    technical: {
      engine: "3.2L Naturally Aspirated I6 (S54)",
      displacement_cc: 3246,
      fuel: "Petrol",
      transmission: "6-Speed Manual / SMG II",
      cylinders: 6
    },
    chassis: {
      material: "Steel / Aluminum Hood",
      brake_material: "Ventilated Discs",
      suspension: "M Sport Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2001,
      end_year: 2007,
      units_produced: 85700,
      country: "Germany"
    },
    price: {
      usd: { min: 25000, max: 60000, currency: "USD" },
      inr: { min: 2075000, max: 4980000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m3-e92-2007",
    brand: "BMW",
    name: "M3 (E92)",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 414,
      top_speed_kmh: 280,
      acceleration_sec: 4.6,
      weight_kg: 1655,
      power_to_weight: 0.25
    },
    technical: {
      engine: "4.0L Naturally Aspirated V8 (S65)",
      displacement_cc: 3999,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 7-Speed M-DCT",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Roof / Aluminum",
      brake_material: "Ventilated Cross-Drilled Discs",
      suspension: "Electronic Damper Control (EDC)",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2007,
      end_year: 2013,
      units_produced: 40092,
      country: "Germany"
    },
    price: {
      usd: { min: 28000, max: 55000, currency: "USD" },
      inr: { min: 2324000, max: 4565000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m3-f80-2014",
    brand: "BMW",
    name: "M3 (F80)",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Sedan",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 425,
      top_speed_kmh: 280,
      acceleration_sec: 4.1,
      weight_kg: 1595,
      power_to_weight: 0.27
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 (S55)",
      displacement_cc: 2979,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 7-Speed M-DCT",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Roof & Driveshaft / Aluminum",
      brake_material: "M Compound / Carbon Ceramic Optional",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2014,
      end_year: 2018,
      units_produced: 34600,
      country: "Germany"
    },
    price: {
      usd: { min: 42000, max: 68000, currency: "USD" },
      inr: { min: 3486000, max: 5644000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m3-competition-g80-2021",
    brand: "BMW",
    name: "M3 Competition (G80)",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Sedan",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 503,
      top_speed_kmh: 290,
      acceleration_sec: 3.8,
      weight_kg: 1730,
      power_to_weight: 0.29
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 (S58)",
      displacement_cc: 2993,
      fuel: "Petrol",
      transmission: "8-Speed M Steptronic",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Roof / High-Strength Steel",
      brake_material: "M Carbon Ceramic Brakes",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD / xDrive AWD"
    },
    production: {
      start_year: 2021,
      end_year: null,
      units_produced: null,
      country: "Germany"
    },
    price: {
      usd: { min: 76000, max: 98000, currency: "USD" },
      inr: { min: 6308000, max: 8134000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "bmw-m3-csl-2003",
    brand: "BMW",
    name: "M3 CSL (E46)",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Track Special Coupe",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 355,
      top_speed_kmh: 280,
      acceleration_sec: 4.9,
      weight_kg: 1385,
      power_to_weight: 0.26
    },
    technical: {
      engine: "3.2L Naturally Aspirated I6 (S54B32HP)",
      displacement_cc: 3246,
      fuel: "Petrol",
      transmission: "6-Speed SMG II",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Roof / Thin Glass / Aluminum",
      brake_material: "Upgraded Compound Discs",
      suspension: "CSL Track Tuning",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2003,
      end_year: 2004,
      units_produced: 1383,
      country: "Germany"
    },
    price: {
      usd: { min: 90000, max: 160000, currency: "USD" },
      inr: { min: 7470000, max: 13280000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "bmw-m4-f82-2014",
    brand: "BMW",
    name: "M4 (F82)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 425,
      top_speed_kmh: 280,
      acceleration_sec: 4.1,
      weight_kg: 1570,
      power_to_weight: 0.27
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 (S55)",
      displacement_cc: 2979,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 7-Speed M-DCT",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Roof & Trunk Lid",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2014,
      end_year: 2020,
      units_produced: 53800,
      country: "Germany"
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
    id: "bmw-m4-competition-g82-2021",
    brand: "BMW",
    name: "M4 Competition (G82)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 503,
      top_speed_kmh: 290,
      acceleration_sec: 3.8,
      weight_kg: 1725,
      power_to_weight: 0.29
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 (S58)",
      displacement_cc: 2993,
      fuel: "Petrol",
      transmission: "8-Speed M Steptronic",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Roof / High-Strength Steel",
      brake_material: "M Carbon Ceramic Brakes",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD / xDrive AWD"
    },
    production: {
      start_year: 2021,
      end_year: null,
      units_produced: null,
      country: "Germany"
    },
    price: {
      usd: { min: 78000, max: 102000, currency: "USD" },
      inr: { min: 6474000, max: 8466000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "bmw-m4-cs-f82-2017",
    brand: "BMW",
    name: "M4 CS (F82)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 454,
      top_speed_kmh: 280,
      acceleration_sec: 3.9,
      weight_kg: 1580,
      power_to_weight: 0.29
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 (S55)",
      displacement_cc: 2979,
      fuel: "Petrol",
      transmission: "7-Speed M-DCT",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Reinforced Plastic (CFRP)",
      brake_material: "M Carbon Ceramic Option",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2017,
      end_year: 2020,
      units_produced: 3000,
      country: "Germany"
    },
    price: {
      usd: { min: 68000, max: 95000, currency: "USD" },
      inr: { min: 5644000, max: 7885000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "bmw-m4-cs-g82-2024",
    brand: "BMW",
    name: "M4 CS (G82)",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Coupe",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 543,
      top_speed_kmh: 302,
      acceleration_sec: 3.4,
      weight_kg: 1760,
      power_to_weight: 0.31
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 (S58)",
      displacement_cc: 2993,
      fuel: "Petrol",
      transmission: "8-Speed M Steptronic",
      cylinders: 6
    },
    chassis: {
      material: "CFRP Roof, Hood & Rear Diffuser",
      brake_material: "M Carbon Ceramic Brakes",
      suspension: "Adaptive M Suspension CS Tuning",
      drivetrain: "M xDrive AWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: 1700,
      country: "Germany"
    },
    price: {
      usd: { min: 123500, max: 145000, currency: "USD" },
      inr: { min: 10250000, max: 12035000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Limited Edition"
  },
  {
    id: "bmw-m4-csl-2022",
    brand: "BMW",
    name: "M4 CSL",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Track Special Coupe",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 543,
      top_speed_kmh: 307,
      acceleration_sec: 3.7,
      weight_kg: 1625,
      power_to_weight: 0.33
    },
     technical: {
      engine: "3.0L Twin-Turbo I6 (S58)",
      displacement_cc: 2993,
      fuel: "Petrol",
      transmission: "8-Speed M Steptronic",
      cylinders: 6
    },
    chassis: {
      material: "Full CFRP Hood, Trunk & Roof",
      brake_material: "M Carbon Ceramic",
      suspension: "CSL Track Suspensions",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2022,
      end_year: 2023,
      units_produced: 1000,
      country: "Germany"
    },
    price: {
      usd: { min: 140000, max: 190000, currency: "USD" },
      inr: { min: 11620000, max: 15770000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "bmw-m4-gts-2016",
    brand: "BMW",
    name: "M4 GTS",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Track Special Coupe",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 493,
      top_speed_kmh: 305,
      acceleration_sec: 3.8,
      weight_kg: 1510,
      power_to_weight: 0.33
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 w/ Water Injection",
      displacement_cc: 2979,
      fuel: "Petrol",
      transmission: "7-Speed M-DCT",
      cylinders: 6
    },
    chassis: {
      material: "Carbon Fiber Hood, Roof & Wing",
      brake_material: "M Carbon Ceramic",
      suspension: "3-Way Adjustable Coilover",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2020,
      units_produced: 700,
      country: "Germany"
    },
    price: {
      usd: { min: 95000, max: 140000, currency: "USD" },
      inr: { min: 7885000, max: 11620000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "bmw-m5-e34-1988",
    brand: "BMW",
    name: "M5 (E34)",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Sports Sedan",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 311,
      top_speed_kmh: 250,
      acceleration_sec: 6.3,
      weight_kg: 1670,
      power_to_weight: 0.19
    },
    technical: {
      engine: "3.6L Naturally Aspirated I6 (S38)",
      displacement_cc: 3535,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Ventilated Discs",
      suspension: "M Adaptive Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1988,
      end_year: 1995,
      units_produced: 12254,
      country: "Germany"
    },
    price: {
      usd: { min: 25000, max: 55000, currency: "USD" },
      inr: { min: 2075000, max: 4565000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "bmw-m5-e39-1999",
    brand: "BMW",
    name: "M5 (E39)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Sedan",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 394,
      top_speed_kmh: 250,
      acceleration_sec: 4.8,
      weight_kg: 1795,
      power_to_weight: 0.22
    },
    technical: {
      engine: "4.9L Naturally Aspirated V8 (S62)",
      displacement_cc: 4941,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum Suspension Arms",
      brake_material: "Ventilated Discs",
      suspension: "M Sport Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1999,
      end_year: 2004,
      units_produced: 20482,
      country: "Germany"
    },
    price: {
      usd: { min: 30000, max: 75000, currency: "USD" },
      inr: { min: 2490000, max: 6225000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "bmw-m5-e60-2005",
    brand: "BMW",
    name: "M5 (E60)",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Sedan",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 500,
      top_speed_kmh: 305,
      acceleration_sec: 4.5,
      weight_kg: 1830,
      power_to_weight: 0.27
    },
    technical: {
      engine: "5.0L Naturally Aspirated V10 (S85)",
      displacement_cc: 4999,
      fuel: "Petrol",
      transmission: "7-Speed SMG III / 6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Aluminum Front End / Steel Body",
      brake_material: "Ventilated Compound Discs",
      suspension: "Electronic Damper Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2005,
      end_year: 2010,
      units_produced: 20589,
      country: "Germany"
    },
    price: {
      usd: { min: 22000, max: 45000, currency: "USD" },
      inr: { min: 1826000, max: 3735000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m5-f10-2011",
    brand: "BMW",
    name: "M5 (F10)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Sedan",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 552,
      top_speed_kmh: 305,
      acceleration_sec: 4.2,
      weight_kg: 1945,
      power_to_weight: 0.28
    },
    technical: {
      engine: "4.4L Twin-Turbo V8 (S63)",
      displacement_cc: 4395,
      fuel: "Petrol",
      transmission: "7-Speed M-DCT / 6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum Doors & Hood",
      brake_material: "M Carbon Ceramic Optional",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2011,
      end_year: 2017,
      units_produced: 19500,
      country: "Germany"
    },
    price: {
      usd: { min: 30000, max: 55000, currency: "USD" },
      inr: { min: 2490000, max: 4565000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m5-f90-2018",
    brand: "BMW",
    name: "M5 (F90)",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    type: "Super Sedan",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 617,
      top_speed_kmh: 305,
      acceleration_sec: 3.1,
      weight_kg: 1895,
      power_to_weight: 0.33
    },
    technical: {
      engine: "4.4L Twin-Turbo V8 (S63B44T4)",
      displacement_cc: 4395,
      fuel: "Petrol",
      transmission: "8-Speed M Steptronic",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Roof / High-Strength Steel",
      brake_material: "M Carbon Ceramic Option",
      suspension: "Adaptive M Dampers",
      drivetrain: "M xDrive AWD"
    },
    production: {
      start_year: 2018,
      end_year: 2023,
      units_produced: 25000,
      country: "Germany"
    },
    price: {
      usd: { min: 65000, max: 105000, currency: "USD" },
      inr: { min: 5395000, max: 8715000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m5-g90-2024",
    brand: "BMW",
    name: "M5 (G90)",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Super Sedan Hybrid",
    comfort: 5,
    mileage: 4,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 717,
      top_speed_kmh: 305,
      acceleration_sec: 3.4,
      weight_kg: 2435,
      power_to_weight: 0.29
    },
    technical: {
      engine: "4.4L Twin-Turbo V8 + Electric Motor",
      displacement_cc: 4395,
      fuel: "Hybrid",
      transmission: "8-Speed M Steptronic",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber / Aluminum Composite",
      brake_material: "M Carbon Ceramic Option",
      suspension: "Adaptive M Suspension Professional",
      drivetrain: "M xDrive AWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: null,
      country: "Germany"
    },
    price: {
      usd: { min: 119500, max: 140000, currency: "USD" },
      inr: { min: 9918500, max: 11620000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "bmw-m6-e63-2006",
    brand: "BMW",
    name: "M6 (E63)",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer Coupe",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 500,
      top_speed_kmh: 305,
      acceleration_sec: 4.6,
      weight_kg: 1710,
      power_to_weight: 0.29
    },
    technical: {
      engine: "5.0L Naturally Aspirated V10 (S85)",
      displacement_cc: 4999,
      fuel: "Petrol",
      transmission: "7-Speed SMG III / 6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Carbon Fiber Roof / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Electronic Damper Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2006,
      end_year: 2010,
      units_produced: 14152,
      country: "Germany"
    },
    price: {
      usd: { min: 22000, max: 40000, currency: "USD" },
      inr: { min: 1826000, max: 3320000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m6-f12-2012",
    brand: "BMW",
    name: "M6 (F12)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer Coupe",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 552,
      top_speed_kmh: 305,
      acceleration_sec: 4.1,
      weight_kg: 1850,
      power_to_weight: 0.30
    },
    technical: {
      engine: "4.4L Twin-Turbo V8 (S63)",
      displacement_cc: 4395,
      fuel: "Petrol",
      transmission: "7-Speed M-DCT",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Roof / Aluminum",
      brake_material: "M Carbon Ceramic Optional",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2012,
      end_year: 2018,
      units_produced: 12000,
      country: "Germany"
    },
    price: {
      usd: { min: 35000, max: 60000, currency: "USD" },
      inr: { min: 2905000, max: 4980000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-m635csi-1983",
    brand: "BMW",
    name: "M635CSi",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Grand Tourer",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 282,
      top_speed_kmh: 255,
      acceleration_sec: 6.4,
      weight_kg: 1500,
      power_to_weight: 0.19
    },
    technical: {
      engine: "3.5L Naturally Aspirated I6 (M88/3)",
      displacement_cc: 3453,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Ventilated Discs",
      suspension: "MacPherson Struts / Semi-Trailing Arm",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1983,
      end_year: 1989,
      units_produced: 5855,
      country: "Germany"
    },
    price: {
      usd: { min: 45000, max: 90000, currency: "USD" },
      inr: { min: 3735000, max: 7470000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "bmw-m8-2019",
    brand: "BMW",
    name: "M8 Competition",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Super GT",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 617,
      top_speed_kmh: 305,
      acceleration_sec: 3.0,
      weight_kg: 1885,
      power_to_weight: 0.33
    },
    technical: {
      engine: "4.4L Twin-Turbo V8 (S63)",
      displacement_cc: 4395,
      fuel: "Petrol",
      transmission: "8-Speed M Steptronic",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Core / Aluminum Frame",
      brake_material: "M Carbon Ceramic Discs",
      suspension: "Adaptive M Suspension Professional",
      drivetrain: "M xDrive AWD"
    },
    production: {
      start_year: 2019,
      end_year: null,
      units_produced: null,
      country: "Germany"
    },
    price: {
      usd: { min: 138000, max: 160000, currency: "USD" },
      inr: { min: 11454000, max: 13280000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "bmw-nazca-c2-1991",
    brand: "BMW",
    name: "Nazca C2",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 350,
      top_speed_kmh: 325,
      acceleration_sec: 3.7,
      weight_kg: 1000,
      power_to_weight: 0.35
    },
    technical: {
      engine: "5.0L V12 (Alpina Tuned)",
      displacement_cc: 4988,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Body / Frame",
      brake_material: "Ventilated Discs",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1991,
      end_year: 1993,
      units_produced: 3,
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
    id: "bmw-skytop-2024",
    brand: "BMW",
    name: "Skytop Concept",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Roadster",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 617,
      top_speed_kmh: 305,
      acceleration_sec: 3.3,
      weight_kg: 1850,
      power_to_weight: 0.33
    },
    technical: {
      engine: "4.4L Twin-Turbo V8",
      displacement_cc: 4395,
      fuel: "Petrol",
      transmission: "8-Speed M Steptronic",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum & Carbon Fiber Targa Roof",
      brake_material: "M Carbon Ceramic",
      suspension: "Adaptive M Suspension",
      drivetrain: "M xDrive AWD"
    },
    production: {
      start_year: 2024,
      end_year: 2024,
      units_produced: 50,
      country: "Germany"
    },
    price: {
      usd: { min: 500000, max: 500000, currency: "USD" },
      inr: { min: 41500000, max: 41500000, currency: "INR" }
    },
    era: "Modern",
    status: "Concept",
    rarity: "Ultra Rare"
  },
  {
    id: "bmw-turbo-1972",
    brand: "BMW",
    name: "Turbo Concept",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.8,
    performance: {
      power_hp: 200,
      top_speed_kmh: 250,
      acceleration_sec: 6.6,
      weight_kg: 1270,
      power_to_weight: 0.16
    },
    technical: {
      engine: "2.0L Turbocharged I4",
      displacement_cc: 1990,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 4
    },
    chassis: {
      material: "Steel Tube Chassis w/ Gullwing Doors",
      brake_material: "Ventilated Discs",
      suspension: "Independent Struts",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1972,
      end_year: 1972,
      units_produced: 2,
      country: "Germany"
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
    id: "bmw-vision-m-next-2019",
    brand: "BMW",
    name: "Vision M NEXT",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Hybrid Supercar",
    comfort: 4,
    mileage: 4,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 591,
      top_speed_kmh: 300,
      acceleration_sec: 3.0,
      weight_kg: 1600,
      power_to_weight: 0.37
    },
    technical: {
      engine: "2.0L Turbo I4 + Electric Motors",
      displacement_cc: 1998,
      fuel: "Hybrid",
      transmission: "Automatic",
      cylinders: 4
    },
    chassis: {
      material: "Recycled Carbon Fiber / Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2019,
      end_year: 2019,
      units_produced: 1,
      country: "Germany"
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
    id: "bmw-x5m-f85-2015",
    brand: "BMW",
    name: "X5 M (F85)",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Performance SUV",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 567,
      top_speed_kmh: 280,
      acceleration_sec: 4.0,
      weight_kg: 2350,
      power_to_weight: 0.24
    },
    technical: {
      engine: "4.4L Twin-Turbo V8 (S63)",
      displacement_cc: 4395,
      fuel: "Petrol",
      transmission: "8-Speed M Steptronic",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive M Suspension Professional",
      drivetrain: "xDrive AWD"
    },
    production: {
      start_year: 2015,
      end_year: 2018,
      units_produced: 15000,
      country: "USA"
    },
    price: {
      usd: { min: 45000, max: 70000, currency: "USD" },
      inr: { min: 3735000, max: 5810000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-x6m-e71-2009",
    brand: "BMW",
    name: "X6 M (E71)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Performance SUV Coupe",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.6,
    performance: {
      power_hp: 547,
      top_speed_kmh: 275,
      acceleration_sec: 4.5,
      weight_kg: 2380,
      power_to_weight: 0.23
    },
    technical: {
      engine: "4.4L Twin-Turbo V8 (S63)",
      displacement_cc: 4395,
      fuel: "Petrol",
      transmission: "6-Speed M Sport Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive Drive",
      drivetrain: "xDrive AWD"
    },
    production: {
      start_year: 2009,
      end_year: 2014,
      units_produced: 10600,
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
    id: "bmw-z3m-1997",
    brand: "BMW",
    name: "Z3 M Coupe / Roadster",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 2,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 316,
      top_speed_kmh: 250,
      acceleration_sec: 5.2,
      weight_kg: 1390,
      power_to_weight: 0.23
    },
    technical: {
      engine: "3.2L Naturally Aspirated I6 (S50/S54)",
      displacement_cc: 3246,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Ventilated Discs",
      suspension: "MacPherson Strut / Semi-Trailing Arm",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1997,
      end_year: 2003,
      units_produced: 15322,
      country: "Germany"
    },
    price: {
      usd: { min: 35000, max: 80000, currency: "USD" },
      inr: { min: 2905000, max: 6640000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "bmw-z4-35is-e89-2009",
    brand: "BMW",
    name: "Z4 sDrive35is (E89)",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Roadster",
    comfort: 4,
    mileage: 3,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 335,
      top_speed_kmh: 250,
      acceleration_sec: 4.8,
      weight_kg: 1600,
      power_to_weight: 0.21
    },
    technical: {
      engine: "3.0L Twin-Turbo I6 (N54)",
      displacement_cc: 2979,
      fuel: "Petrol",
      transmission: "7-Speed DCT",
      cylinders: 6
    },
    chassis: {
      material: "Steel Body / Retractable Hardtop",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive M Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2009,
      end_year: 2016,
      units_produced: 12000,
      country: "Germany"
    },
    price: {
      usd: { min: 20000, max: 38000, currency: "USD" },
      inr: { min: 1660000, max: 3154000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bmw-z4m-e85-2006",
    brand: "BMW",
    name: "Z4 M (E85)",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    type: "Roadster / Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 338,
      top_speed_kmh: 250,
      acceleration_sec: 5.0,
      weight_kg: 1470,
      power_to_weight: 0.23
    },
    technical: {
      engine: "3.2L Naturally Aspirated I6 (S54)",
      displacement_cc: 3246,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Compound Discs",
      suspension: "M Sport Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2006,
      end_year: 2009,
      units_produced: 9000,
      country: "Germany"
    },
    price: {
      usd: { min: 30000, max: 55000, currency: "USD" },
      inr: { min: 2490000, max: 4565000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "bmw-z8-2001",
    brand: "BMW",
    name: "Z8",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Roadster",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 394,
      top_speed_kmh: 250,
      acceleration_sec: 4.7,
      weight_kg: 1585,
      power_to_weight: 0.25
    },
    technical: {
      engine: "4.9L Naturally Aspirated V8 (S62)",
      displacement_cc: 4941,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "All-Aluminum Spaceframe & Body",
      brake_material: "Ventilated Discs",
      suspension: "MacPherson Strut / Multi-Link",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2001,
      end_year: 2003,
      units_produced: 5703,
      country: "Germany"
    },
    price: {
      usd: { min: 180000, max: 280000, currency: "USD" },
      inr: { min: 14940000, max: 23240000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  }
];

export default cars;