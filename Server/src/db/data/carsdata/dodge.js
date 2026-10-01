const cars = [
  {
    id: "dodge-challenger-srt-demon-2018",
    brand: "Dodge",
    name: "Challenger SRT Demon",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Drag Muscle Car",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 5.0,
    performance: {
      power_hp: 840,
      top_speed_kmh: 335,
      acceleration_sec: 2.3,
      weight_kg: 1941,
      power_to_weight: 0.43
    },
    technical: {
      engine: "6.2L Supercharged HEMI V8",
      displacement_cc: 6166,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Brembo Lightweight Discs",
      suspension: "Drag-Mode Adaptive Bilstein Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2019,
      units_produced: 3300,
      country: "USA"
    },
    price: {
      usd: { min: 85000, max: 150000, currency: "USD" },
      inr: { min: 7055000, max: 12450000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "dodge-challenger-srt-demon-170-2023",
    brand: "Dodge",
    name: "Challenger SRT Demon 170",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Drag Muscle Car",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 5.0,
    performance: {
      power_hp: 1025,
      top_speed_kmh: 346,
      acceleration_sec: 1.66,
      weight_kg: 1930,
      power_to_weight: 0.53
    },
    technical: {
      engine: "6.2L Supercharged HEMI V8 (E85)",
      displacement_cc: 6166,
      fuel: "E85 Flex Fuel",
      transmission: "8-Speed Heavy-Duty Auto",
      cylinders: 8
    },
    chassis: {
      material: "High-Strength Steel Unibody",
      brake_material: "Transbrake Brembo Discs",
      suspension: "Drag-Tune Adaptive Bilstein",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: 2023,
      units_produced: 3300,
      country: "USA"
    },
    price: {
      usd: { min: 96666, max: 180000, currency: "USD" },
      inr: { min: 8023000, max: 14940000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "dodge-challenger-srt-hellcat-2015",
    brand: "Dodge",
    name: "Challenger SRT Hellcat",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Muscle Car",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 707,
      top_speed_kmh: 320,
      acceleration_sec: 3.6,
      weight_kg: 2018,
      power_to_weight: 0.35
    },
    technical: {
      engine: "6.2L Supercharged HEMI V8",
      displacement_cc: 6166,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 8-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Brembo 6-Piston Discs",
      suspension: "Bilstein Three-Mode Adaptive",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2023,
      units_produced: 40000,
      country: "USA"
    },
    price: {
      usd: { min: 60000, max: 85000, currency: "USD" },
      inr: { min: 4980000, max: 7055000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "dodge-challenger-srt8-2008",
    brand: "Dodge",
    name: "Challenger SRT8",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Muscle Car",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 470,
      top_speed_kmh: 293,
      acceleration_sec: 4.5,
      weight_kg: 1887,
      power_to_weight: 0.25
    },
    technical: {
      engine: "6.4L HEMI V8 (392)",
      displacement_cc: 6417,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 5-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Brembo Discs",
      suspension: "Performance Damping",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2008,
      end_year: 2014,
      units_produced: 35000,
      country: "USA"
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
    id: "dodge-charger-srt-hellcat-2014",
    brand: "Dodge",
    name: "Charger SRT Hellcat",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Muscle Sedan",
    comfort: 4,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 707,
      top_speed_kmh: 328,
      acceleration_sec: 3.7,
      weight_kg: 2075,
      power_to_weight: 0.34
    },
    technical: {
      engine: "6.2L Supercharged HEMI V8",
      displacement_cc: 6166,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel Unibody",
      brake_material: "Brembo 6-Piston Discs",
      suspension: "Adaptive Damping Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2014,
      end_year: 2023,
      units_produced: 30000,
      country: "USA"
    },
    price: {
      usd: { min: 65000, max: 90000, currency: "USD" },
      inr: { min: 5395000, max: 7470000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "dodge-copperhead-concept-1997",
    brand: "Dodge",
    name: "Copperhead Concept",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Roadster",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.5,
    performance: {
      power_hp: 220,
      top_speed_kmh: 217,
      acceleration_sec: 6.2,
      weight_kg: 1297,
      power_to_weight: 0.17
    },
    technical: {
      engine: "2.7L Naturally Aspirated V6",
      displacement_cc: 2700,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1997,
      end_year: 1997,
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
    id: "dodge-ram-srt-10-2004",
    brand: "Dodge",
    name: "Ram SRT-10",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Truck",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 500,
      top_speed_kmh: 248,
      acceleration_sec: 4.9,
      weight_kg: 2336,
      power_to_weight: 0.21
    },
    technical: {
      engine: "8.3L Viper V10",
      displacement_cc: 8285,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 4-Speed Auto",
      cylinders: 10
    },
    chassis: {
      material: "Hydroformed Steel Frame",
      brake_material: "Heavy-Duty Brembo Discs",
      suspension: "Bilstein Performance Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2004,
      end_year: 2006,
      units_produced: 10040,
      country: "USA"
    },
    price: {
      usd: { min: 35000, max: 65000, currency: "USD" },
      inr: { min: 2905000, max: 5395000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "dodge-viper-acr-vx-2016",
    brand: "Dodge",
    name: "Viper ACR (VX I)",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Track Supercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 645,
      top_speed_kmh: 285,
      acceleration_sec: 3.3,
      weight_kg: 1538,
      power_to_weight: 0.42
    },
    technical: {
      engine: "8.4L Naturally Aspirated V10",
      displacement_cc: 8382,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Tubular Steel & Carbon Fiber",
      brake_material: "Carbon Ceramic Matrix",
      suspension: "Bilstein 10-Way Racing Coilovers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2017,
      units_produced: 600,
      country: "USA"
    },
    price: {
      usd: { min: 180000, max: 280000, currency: "USD" },
      inr: { min: 14940000, max: 23240000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "dodge-viper-gts-1996",
    brand: "Dodge",
    name: "Viper GTS",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 450,
      top_speed_kmh: 298,
      acceleration_sec: 4.0,
      weight_kg: 1530,
      power_to_weight: 0.29
    },
    technical: {
      engine: "8.0L Naturally Aspirated V10",
      displacement_cc: 7990,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Tubular Steel Frame / Composite Body",
      brake_material: "Four-Wheel Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1996,
      end_year: 2005,
      units_produced: 10000,
      country: "USA"
    },
    price: {
      usd: { min: 55000, max: 110000, currency: "USD" },
      inr: { min: 4565000, max: 9130000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "dodge-viper-rt10-1992",
    brand: "Dodge",
    name: "Viper RT/10",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Roadster Supercar",
    comfort: 1,
    mileage: 1,
    stability: 3,
    rating: 4.8,
    performance: {
      power_hp: 400,
      top_speed_kmh: 266,
      acceleration_sec: 4.5,
      weight_kg: 1490,
      power_to_weight: 0.27
    },
    technical: {
      engine: "8.0L Naturally Aspirated V10",
      displacement_cc: 7990,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Tubular Steel Chassis / Composite Body",
      brake_material: "Heavy-Duty Discs",
      suspension: "Independent Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1992,
      end_year: 1997,
      units_produced: 6708,
      country: "USA"
    },
    price: {
      usd: { min: 45000, max: 85000, currency: "USD" },
      inr: { min: 3735000, max: 7055000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "dodge-viper-srt-10-2002",
    brand: "Dodge",
    name: "Viper SRT-10",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 500,
      top_speed_kmh: 305,
      acceleration_sec: 3.9,
      weight_kg: 1530,
      power_to_weight: 0.33
    },
    technical: {
      engine: "8.3L Naturally Aspirated V10",
      displacement_cc: 8285,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Tubular Steel Backbone Chassis",
      brake_material: "Brembo 4-Piston Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2002,
      end_year: 2006,
      units_produced: 8000,
      country: "USA"
    },
    price: {
      usd: { min: 48000, max: 80000, currency: "USD" },
      inr: { min: 3984000, max: 6640000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "dodge-viper-srt-10-zb-2008",
    brand: "Dodge",
    name: "Viper SRT-10 (ZB II)",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 600,
      top_speed_kmh: 325,
      acceleration_sec: 3.5,
      weight_kg: 1560,
      power_to_weight: 0.38
    },
    technical: {
      engine: "8.4L Naturally Aspirated V10",
      displacement_cc: 8382,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 10
    },
    chassis: {
      material: "Tubular Steel Spaceframe",
      brake_material: "Brembo Discs",
      suspension: "Adjustable Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2008,
      end_year: 2010,
      units_produced: 3200,
      country: "USA"
    },
    price: {
      usd: { min: 60000, max: 105000, currency: "USD" },
      inr: { min: 4980000, max: 8715000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Rare"
  }
];

export default cars;