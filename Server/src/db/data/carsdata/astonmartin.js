const astonMartinCars = [
  {
    id: "aston-martin-bulldog-1979",
    brand: "Aston Martin",
    name: "Bulldog",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Supercar",
    comfort: 2,
    mileage: 1,
    stability: 3,
    rating: 4.7,
    performance: {
      power_hp: 600,
      top_speed_kmh: 309,
      acceleration_sec: 5.1,
      weight_kg: 1730,
      power_to_weight: 0.35
    },
    technical: {
      engine: "5.3L Twin-Turbo V8",
      displacement_cc: 5340,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Steel Tube Spaceframe",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1979,
      end_year: 1979,
      units_produced: 1,
      country: "United Kingdom"
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
    id: "aston-martin-cc100-2013",
    brand: "Aston Martin",
    name: "CC100 Speedster",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Speedster",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 565,
      top_speed_kmh: 290,
      acceleration_sec: 4.0,
      weight_kg: 1200,
      power_to_weight: 0.47
    },
    technical: {
      engine: "6.0L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Automated Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2013,
      end_year: 2013,
      units_produced: 2,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "2010s",
    status: "Concept",
    rarity: "Ultra Rare"
  },
  {
    id: "aston-martin-db10-2015",
    brand: "Aston Martin",
    name: "DB10",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Coupe",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 430,
      top_speed_kmh: 310,
      acceleration_sec: 4.3,
      weight_kg: 1530,
      power_to_weight: 0.28
    },
    technical: {
      engine: "4.7L V8",
      displacement_cc: 4735,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Space Frame",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2015,
      units_produced: 10,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 0, max: 0, currency: "USD" },
      inr: { min: 0, max: 0, currency: "INR" }
    },
    era: "2010s",
    status: "Concept",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-db11-amr-2018",
    brand: "Aston Martin",
    name: "DB11 AMR",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 630,
      top_speed_kmh: 335,
      acceleration_sec: 3.7,
      weight_kg: 1870,
      power_to_weight: 0.33
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Bonded Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2023,
      units_produced: 3000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 240000, max: 280000, currency: "USD" },
      inr: { min: 19900000, max: 23200000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-db11-v12-2016",
    brand: "Aston Martin",
    name: "DB11 V12",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 600,
      top_speed_kmh: 322,
      acceleration_sec: 3.9,
      weight_kg: 1770,
      power_to_weight: 0.33
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Bonded Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2023,
      units_produced: 7500,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 215000, max: 250000, currency: "USD" },
      inr: { min: 17800000, max: 20700000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "aston-martin-db11-v8-2017",
    brand: "Aston Martin",
    name: "DB11 V8",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 3,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 503,
      top_speed_kmh: 300,
      acceleration_sec: 4.0,
      weight_kg: 1760,
      power_to_weight: 0.28
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Bonded Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2017,
      end_year: 2023,
      units_produced: 9000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 198000, max: 230000, currency: "USD" },
      inr: { min: 16400000, max: 19000000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "aston-martin-db12-2023",
    brand: "Aston Martin",
    name: "DB12",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Super Tourer",
    comfort: 5,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 671,
      top_speed_kmh: 325,
      acceleration_sec: 3.6,
      weight_kg: 1685,
      power_to_weight: 0.39
    },
     technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Extruded Bonded Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Bilstein DTX Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: null,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 245000, max: 290000, currency: "USD" },
      inr: { min: 20300000, max: 24000000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-db4-gt-zagato-1960",
    brand: "Aston Martin",
    name: "DB4 GT Zagato",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Grand Tourer",
    comfort: 2,
    mileage: 1,
    stability: 3,
    rating: 5.0,
    performance: {
      power_hp: 314,
      top_speed_kmh: 247,
      acceleration_sec: 6.1,
      weight_kg: 1225,
      power_to_weight: 0.25
    },
    technical: {
      engine: "3.7L Straight-6",
      displacement_cc: 3670,
      fuel: "Petrol",
      transmission: "4-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Aluminum Body / Tubular Frame",
      brake_material: "Girling Discs",
      suspension: "Wishbone / Live Axle",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1960,
      end_year: 1962,
      units_produced: 19,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 8000000, max: 13000000, currency: "USD" },
      inr: { min: 664000000, max: 1079000000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-db5-1963",
    brand: "Aston Martin",
    name: "DB5",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Grand Tourer",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 5.0,
    performance: {
      power_hp: 282,
      top_speed_kmh: 238,
      acceleration_sec: 8.0,
      weight_kg: 1502,
      power_to_weight: 0.18
    },
    technical: {
      engine: "4.0L Straight-6",
      displacement_cc: 3995,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Magnesium-Aluminum Alloy (Superleggera)",
      brake_material: "Girling Discs",
      suspension: "Independent Front / Live Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1963,
      end_year: 1965,
      units_produced: 1059,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 900000, max: 2500000, currency: "USD" },
      inr: { min: 74700000, max: 207500000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "aston-martin-db6-vantage-1965",
    brand: "Aston Martin",
    name: "DB6 Vantage",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Grand Tourer",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 325,
      top_speed_kmh: 245,
      acceleration_sec: 6.4,
      weight_kg: 1474,
      power_to_weight: 0.22
    },
    technical: {
      engine: "4.0L Straight-6",
      displacement_cc: 3995,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 6
    },
    chassis: {
      material: "Aluminum Alloy",
      brake_material: "Girling Discs",
      suspension: "Independent Front / De Dion Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1965,
      end_year: 1970,
      units_produced: 1783,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 350000, max: 700000, currency: "USD" },
      inr: { min: 29000000, max: 58100000, currency: "INR" }
    },
    era: "1960s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "aston-martin-db7-1994",
    brand: "Aston Martin",
    name: "DB7",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.5,
    performance: {
      power_hp: 335,
      top_speed_kmh: 266,
      acceleration_sec: 5.7,
      weight_kg: 1725,
      power_to_weight: 0.19
    },
    technical: {
      engine: "3.2L Supercharged Straight-6",
      displacement_cc: 3239,
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
      start_year: 1994,
      end_year: 1999,
      units_produced: 2461,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 30000, max: 55000, currency: "USD" },
      inr: { min: 2490000, max: 4565000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-db7-gt-2003",
    brand: "Aston Martin",
    name: "DB7 GT",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 435,
      top_speed_kmh: 298,
      acceleration_sec: 4.9,
      weight_kg: 1780,
      power_to_weight: 0.24
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Brembo Discs",
      suspension: "Stiffened Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2003,
      end_year: 2004,
      units_produced: 190,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 65000, max: 110000, currency: "USD" },
      inr: { min: 5395000, max: 9130000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "aston-martin-db7-vantage-1999",
    brand: "Aston Martin",
    name: "DB7 Vantage",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 420,
      top_speed_kmh: 290,
      acceleration_sec: 5.0,
      weight_kg: 1780,
      power_to_weight: 0.23
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 5-Speed Auto",
      cylinders: 12
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1999,
      end_year: 2004,
      units_produced: 4100,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 35000, max: 60000, currency: "USD" },
      inr: { min: 2905000, max: 4980000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-db7-zagato-2003",
    brand: "Aston Martin",
    name: "DB7 Zagato",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 435,
      top_speed_kmh: 299,
      acceleration_sec: 4.9,
      weight_kg: 1740,
      power_to_weight: 0.25
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Steel / Aluminum Zagato Body",
      brake_material: "Brembo Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2003,
      end_year: 2004,
      units_produced: 99,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 250000, max: 450000, currency: "USD" },
      inr: { min: 20750000, max: 37350000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-db9-2004",
    brand: "Aston Martin",
    name: "DB9",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 510,
      top_speed_kmh: 295,
      acceleration_sec: 4.5,
      weight_kg: 1765,
      power_to_weight: 0.28
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Automatic / Manual",
      cylinders: 12
    },
    chassis: {
      material: "VH Bonded Aluminum",
      brake_material: "Carbon Ceramic Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2004,
      end_year: 2016,
      units_produced: 16500,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 45000, max: 95000, currency: "USD" },
      inr: { min: 3735000, max: 7885000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "aston-martin-dbs-2008",
    brand: "Aston Martin",
    name: "DBS V12",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar GT",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 510,
      top_speed_kmh: 307,
      acceleration_sec: 4.3,
      weight_kg: 1695,
      power_to_weight: 0.30
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Manual / Auto",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum & Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2008,
      end_year: 2012,
      units_produced: 3400,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 110000, max: 180000, currency: "USD" },
      inr: { min: 9130000, max: 14940000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-dbs-770-ultimate-2023",
    brand: "Aston Martin",
    name: "DBS 770 Ultimate",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Super GT",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 759,
      top_speed_kmh: 340,
      acceleration_sec: 3.2,
      weight_kg: 1845,
      power_to_weight: 0.41
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber & Bonded Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: 2024,
      units_produced: 499,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 387000, max: 450000, currency: "USD" },
      inr: { min: 32121000, max: 37350000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "aston-martin-dbs-superleggera-2018",
    brand: "Aston Martin",
    name: "DBS Superleggera",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Super GT",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 715,
      top_speed_kmh: 340,
      acceleration_sec: 3.4,
      weight_kg: 1693,
      power_to_weight: 0.42
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber & Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2024,
      units_produced: 4000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 280000, max: 335000, currency: "USD" },
      inr: { min: 23240000, max: 27805000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-dbx-2020",
    brand: "Aston Martin",
    name: "DBX",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Luxury SUV",
    comfort: 5,
    mileage: 3,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 542,
      top_speed_kmh: 291,
      acceleration_sec: 4.5,
      weight_kg: 2245,
      power_to_weight: 0.24
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "9-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Bonded Aluminum Structure",
      brake_material: "Cast Iron Discs",
      suspension: "Triple-Chamber Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2020,
      end_year: null,
      units_produced: null,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 185000, max: 210000, currency: "USD" },
      inr: { min: 15355000, max: 17430000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "aston-martin-dbx-707-2022",
    brand: "Aston Martin",
    name: "DBX707",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Performance SUV",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 697,
      top_speed_kmh: 310,
      acceleration_sec: 3.3,
      weight_kg: 2245,
      power_to_weight: 0.31
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "9-Speed Wet-Clutch Auto",
      cylinders: 8
    },
    chassis: {
      material: "Bonded Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Triple-Chamber Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2022,
      end_year: null,
      units_produced: null,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 242000, max: 275000, currency: "USD" },
      inr: { min: 20086000, max: 22825000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-dp-100-2014",
    brand: "Aston Martin",
    name: "DP-100 Vision Gran Turismo",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Hypercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 800,
      top_speed_kmh: 350,
      acceleration_sec: 2.8,
      weight_kg: 1350,
      power_to_weight: 0.59
    },
    technical: {
      engine: "Twin-Turbo V12",
      displacement_cc: 6000,
      fuel: "Petrol",
      transmission: "Sequential Race",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Composite",
      brake_material: "Carbon Ceramic",
      suspension: "Pushrod Active Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2014,
      end_year: 2014,
      units_produced: 1,
      country: "United Kingdom"
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
    id: "aston-martin-lagonda-1979",
    brand: "Aston Martin",
    name: "Lagonda",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Luxury Sedan",
    comfort: 5,
    mileage: 1,
    stability: 3,
    rating: 4.4,
    performance: {
      power_hp: 280,
      top_speed_kmh: 238,
      acceleration_sec: 8.8,
      weight_kg: 2023,
      power_to_weight: 0.13
    },
    technical: {
      engine: "5.3L V8",
      displacement_cc: 5340,
      fuel: "Petrol",
      transmission: "3-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel Monocoque / Aluminum Panels",
      brake_material: "Ventilated Discs",
      suspension: "De Dion Rear / Wishbone Front",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1979,
      end_year: 1990,
      units_produced: 645,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 60000, max: 120000, currency: "USD" },
      inr: { min: 4980000, max: 9960000, currency: "INR" }
    },
    era: "1970s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "aston-martin-lagonda-taraf-2015",
    brand: "Aston Martin",
    name: "Lagonda Taraf",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Ultra-Luxury Sedan",
    comfort: 5,
    mileage: 2,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 540,
      top_speed_kmh: 314,
      acceleration_sec: 4.4,
      weight_kg: 1995,
      power_to_weight: 0.27
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Reinforced Plastic",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2016,
      units_produced: 120,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 1000000, max: 1000000, currency: "USD" },
      inr: { min: 83000000, max: 83000000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-one-77-2009",
    brand: "Aston Martin",
    name: "One-77",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 3,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 750,
      top_speed_kmh: 354,
      acceleration_sec: 3.5,
      weight_kg: 1500,
      power_to_weight: 0.50
    },
    technical: {
      engine: "7.3L Naturally Aspirated V12",
      displacement_cc: 7312,
      fuel: "Petrol",
      transmission: "6-Speed Automated Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Monocoque / Hand-Rolled Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2009,
      end_year: 2012,
      units_produced: 77,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 1800000, max: 3000000, currency: "USD" },
      inr: { min: 149400000, max: 249000000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-rapide-2010",
    brand: "Aston Martin",
    name: "Rapide",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Sedan",
    comfort: 5,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 470,
      top_speed_kmh: 303,
      acceleration_sec: 5.1,
      weight_kg: 1950,
      power_to_weight: 0.24
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "VH Bonded Aluminum",
      brake_material: "Dual-Cast Discs",
      suspension: "Adaptive Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2010,
      end_year: 2013,
      units_produced: 3000,
      country: "Austria"
    },
    price: {
      usd: { min: 45000, max: 80000, currency: "USD" },
      inr: { min: 3735000, max: 6640000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "aston-martin-rapide-amr-2018",
    brand: "Aston Martin",
    name: "Rapide AMR",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Performance Sedan",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 595,
      top_speed_kmh: 330,
      acceleration_sec: 4.2,
      weight_kg: 1990,
      power_to_weight: 0.30
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Bonded Aluminum / Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Lowered Adaptive Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2020,
      units_produced: 210,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 140000, max: 210000, currency: "USD" },
      inr: { min: 11620000, max: 17430000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "aston-martin-twenty-twenty-2001",
    brand: "Aston Martin",
    name: "Twenty Twenty Concept",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Roadster",
    comfort: 2,
    mileage: 2,
    stability: 3,
    rating: 4.3,
    performance: {
      power_hp: 450,
      top_speed_kmh: 290,
      acceleration_sec: 4.8,
      weight_kg: 1400,
      power_to_weight: 0.32
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Exposed Aluminum Frame / Plastic Panels",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2001,
      end_year: 2001,
      units_produced: 1,
      country: "United Kingdom"
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
    id: "aston-martin-v12-speedster-2022",
    brand: "Aston Martin",
    name: "V12 Speedster",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Speedster",
    comfort: 2,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 690,
      top_speed_kmh: 318,
      acceleration_sec: 3.5,
      weight_kg: 1765,
      power_to_weight: 0.39
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Chassis",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2022,
      end_year: 2023,
      units_produced: 88,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 950000, max: 1200000, currency: "USD" },
      inr: { min: 78850000, max: 99600000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-v12-vantage-2009",
    brand: "Aston Martin",
    name: "V12 Vantage",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 3,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 510,
      top_speed_kmh: 305,
      acceleration_sec: 4.2,
      weight_kg: 1680,
      power_to_weight: 0.30
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Bonded Aluminum Structure",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2009,
      end_year: 2017,
      units_produced: 1200,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 85000, max: 140000, currency: "USD" },
      inr: { min: 7055000, max: 11620000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "aston-martin-v12-vantage-mk2-2022",
    brand: "Aston Martin",
    name: "V12 Vantage Mk II",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 690,
      top_speed_kmh: 322,
      acceleration_sec: 3.5,
      weight_kg: 1795,
      power_to_weight: 0.38
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum & Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2022,
      end_year: 2024,
      units_produced: 333,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 300000, max: 380000, currency: "USD" },
      inr: { min: 24900000, max: 31540000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "aston-martin-v12-vantage-v600-2018",
    brand: "Aston Martin",
    name: "V12 Vantage V600",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 600,
      top_speed_kmh: 330,
      acceleration_sec: 3.7,
      weight_kg: 1620,
      power_to_weight: 0.37
    },
    technical: {
      engine: "5.9L Naturally Aspirated V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "7-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Full Carbon Fiber Body",
      brake_material: "Carbon Ceramic",
      suspension: "3-Way Adjustable Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2018,
      units_produced: 14,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 1200000, max: 1600000, currency: "USD" },
      inr: { min: 99600000, max: 132800000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "aston-martin-v12-zagato-2011",
    brand: "Aston Martin",
    name: "V12 Zagato",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Coupe",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 510,
      top_speed_kmh: 305,
      acceleration_sec: 4.2,
      weight_kg: 1680,
      power_to_weight: 0.30
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Automated Manual",
      cylinders: 12
    },
    chassis: {
      material: "Hand-crafted Aluminum / Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2011,
      end_year: 2012,
      units_produced: 61,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 450000, max: 700000, currency: "USD" },
      inr: { min: 37350000, max: 58100000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-v8-vantage-2005",
    brand: "Aston Martin",
    name: "V8 Vantage",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 380,
      top_speed_kmh: 282,
      acceleration_sec: 4.9,
      weight_kg: 1570,
      power_to_weight: 0.24
    },
    technical: {
      engine: "4.3L V8",
      displacement_cc: 4280,
      fuel: "Petrol",
      transmission: "6-Speed Manual / Sportshift",
      cylinders: 8
    },
    chassis: {
      material: "Bonded Aluminum Structure",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2005,
      end_year: 2017,
      units_produced: 22000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 35000, max: 65000, currency: "USD" },
      inr: { min: 2905000, max: 5395000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "aston-martin-v8-vantage-n430-2014",
    brand: "Aston Martin",
    name: "V8 Vantage N430",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 430,
      top_speed_kmh: 305,
      acceleration_sec: 4.6,
      weight_kg: 1610,
      power_to_weight: 0.26
    },
    technical: {
      engine: "4.7L V8",
      displacement_cc: 4735,
      fuel: "Petrol",
      transmission: "6-Speed Manual / Sportshift II",
      cylinders: 8
    },
    chassis: {
      material: "Bonded Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Sports Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2014,
      end_year: 2017,
      units_produced: 1000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 50000, max: 80000, currency: "USD" },
      inr: { min: 4150000, max: 6640000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-valhalla-2025",
    brand: "Aston Martin",
    name: "Valhalla",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Mid-Engine Plug-in Hybrid Hypercar",
    comfort: 3,
    mileage: 4,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 998,
      top_speed_kmh: 350,
      acceleration_sec: 2.5,
      weight_kg: 1550,
      power_to_weight: 0.64
    },
    technical: {
      engine: "4.0L Twin-Turbo V8 + Dual Electric Motors",
      displacement_cc: 3982,
      fuel: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Monocoque",
      brake_material: "Carbon Ceramic Matrix",
      suspension: "Pushrod Front / Multilink Rear",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2025,
      end_year: null,
      units_produced: 999,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 800000, max: 950000, currency: "USD" },
      inr: { min: 66400000, max: 78850000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Limited Edition"
  },
  {
    id: "aston-martin-valiant-2024",
    brand: "Aston Martin",
    name: "Valiant",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Focused Supercar",
    comfort: 2,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 735,
      top_speed_kmh: 330,
      acceleration_sec: 3.2,
      weight_kg: 1600,
      power_to_weight: 0.45
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Full Carbon Fiber Body & 3D Printed Subframe",
      brake_material: "Carbon Ceramic",
      suspension: "Multimatic Adaptive Spool Valve (ASV) Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: 38,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 2500000, max: 3000000, currency: "USD" },
      inr: { min: 207500000, max: 249000000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Ultra Rare"
  },
  {
    id: "aston-martin-valkyrie-2022",
    brand: "Aston Martin",
    name: "Valkyrie",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1160,
      top_speed_kmh: 355,
      acceleration_sec: 2.5,
      weight_kg: 1030,
      power_to_weight: 1.12
    },
    technical: {
      engine: "6.5L Naturally Aspirated V12 + KERS Hybrid",
      displacement_cc: 6500,
      fuel: "Hybrid",
      transmission: "7-Speed Single-Clutch Automated",
      cylinders: 12
    },
    chassis: {
      material: "100% Carbon Fiber Monocoque",
      brake_material: "Carbon-Carbon Discs",
      suspension: "Active Torsion Bar Pushrod",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2022,
      end_year: 2024,
      units_produced: 150,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 3200000, max: 4000000, currency: "USD" },
      inr: { min: 265600000, max: 332000000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "aston-martin-valour-2023",
    brand: "Aston Martin",
    name: "Valour",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Special Edition Supercar",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 705,
      top_speed_kmh: 322,
      acceleration_sec: 3.4,
      weight_kg: 1700,
      power_to_weight: 0.41
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Shell",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: 110,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 1500000, max: 2000000, currency: "USD" },
      inr: { min: 124500000, max: 166000000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-vanquish-2001",
    brand: "Aston Martin",
    name: "Vanquish",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 460,
      top_speed_kmh: 306,
      acceleration_sec: 4.8,
      weight_kg: 1835,
      power_to_weight: 0.25
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Electro-Hydraulic Manual",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum & Carbon Fiber Composite",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2001,
      end_year: 2007,
      units_produced: 2578,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 60000, max: 110000, currency: "USD" },
      inr: { min: 4980000, max: 9130000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-vanquish-mk2-2012",
    brand: "Aston Martin",
    name: "Vanquish (Mk II)",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 565,
      top_speed_kmh: 295,
      acceleration_sec: 4.1,
      weight_kg: 1739,
      power_to_weight: 0.32
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed / 8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Generation 4 VH Aluminum Structure with Carbon Body",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2012,
      end_year: 2018,
      units_produced: 6000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 120000, max: 190000, currency: "USD" },
      inr: { min: 9960000, max: 15770000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-vanquish-mk3-2025",
    brand: "Aston Martin",
    name: "Vanquish (Mk III)",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Super GT",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 824,
      top_speed_kmh: 345,
      acceleration_sec: 3.2,
      weight_kg: 1774,
      power_to_weight: 0.46
    },
    technical: {
      engine: "5.2L Twin-Turbo V12",
      displacement_cc: 5204,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Bonded Aluminum Structure & Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Bespoke Bilstein DTX Adaptive Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2025,
      end_year: null,
      units_produced: 1000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 420000, max: 500000, currency: "USD" },
      inr: { min: 34860000, max: 41500000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Limited Edition"
  },
  {
    id: "aston-martin-vanquish-s-2005",
    brand: "Aston Martin",
    name: "Vanquish S",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 4,
    mileage: 2,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 520,
      top_speed_kmh: 321,
      acceleration_sec: 4.6,
      weight_kg: 1875,
      power_to_weight: 0.27
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Electro-Hydraulic Manual",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum & Carbon Fiber",
      brake_material: "Grooved Discs with Brembo Calipers",
      suspension: "Sports Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2005,
      end_year: 2007,
      units_produced: 1086,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 80000, max: 140000, currency: "USD" },
      inr: { min: 6640000, max: 11620000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "aston-martin-vanquish-vision-2019",
    brand: "Aston Martin",
    name: "Vanquish Vision Concept",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Mid-Engine Supercar",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 700,
      top_speed_kmh: 330,
      acceleration_sec: 3.0,
      weight_kg: 1400,
      power_to_weight: 0.50
    },
    technical: {
      engine: "3.0L Twin-Turbo V6 Hybrid",
      displacement_cc: 3000,
      fuel: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 6
    },
    chassis: {
      material: "Bonded Aluminum Chassis",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2019,
      end_year: 2019,
      units_produced: 1,
      country: "United Kingdom"
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
    id: "aston-martin-vanquish-zagato-2016",
    brand: "Aston Martin",
    name: "Vanquish Zagato",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Special Edition GT",
    comfort: 4,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 592,
      top_speed_kmh: 323,
      acceleration_sec: 3.5,
      weight_kg: 1739,
      power_to_weight: 0.34
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Full Carbon Fiber Body Panels",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2018,
      units_produced: 99,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 650000, max: 900000, currency: "USD" },
      inr: { min: 53950000, max: 74700000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-vantage-2024",
    brand: "Aston Martin",
    name: "Vantage (2024)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 4,
    mileage: 3,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 656,
      top_speed_kmh: 325,
      acceleration_sec: 3.4,
      weight_kg: 1605,
      power_to_weight: 0.40
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Bonded Aluminum Structure",
      brake_material: "Carbon Ceramic Optional",
      suspension: "Adaptive Bilstein DTX Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2024,
      end_year: null,
      units_produced: null,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 191000, max: 220000, currency: "USD" },
      inr: { min: 15853000, max: 18260000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "aston-martin-vantage-2018",
    brand: "Aston Martin",
    name: "Vantage (2018)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 4,
    mileage: 3,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 503,
      top_speed_kmh: 314,
      acceleration_sec: 3.6,
      weight_kg: 1530,
      power_to_weight: 0.32
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Bonded Aluminum Structure",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2018,
      end_year: 2023,
      units_produced: 12000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 95000, max: 145000, currency: "USD" },
      inr: { min: 7885000, max: 12035000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "aston-martin-vantage-amr-2019",
    brand: "Aston Martin",
    name: "Vantage AMR",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Sports Car",
    comfort: 3,
    mileage: 3,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 503,
      top_speed_kmh: 314,
      acceleration_sec: 3.9,
      weight_kg: 1435,
      power_to_weight: 0.35
    },
    technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3982,
      fuel: "Petrol",
      transmission: "7-Speed Dog-Leg Manual",
      cylinders: 8
    },
    chassis: {
      material: "Bonded Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2019,
      end_year: 2024,
      units_produced: 200,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 140000, max: 185000, currency: "USD" },
      inr: { min: 11620000, max: 15355000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "aston-martin-vantage-gt12-2015",
    brand: "Aston Martin",
    name: "Vantage GT12",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Track Special",
    comfort: 2,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 592,
      top_speed_kmh: 298,
      acceleration_sec: 3.5,
      weight_kg: 1565,
      power_to_weight: 0.37
    },
    technical: {
      engine: "5.9L Naturally Aspirated V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "7-Speed Automated Manual",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Aerodynamic Body",
      brake_material: "Carbon Ceramic",
      suspension: "Track-Tuned Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2018,
      units_produced: 100,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 380000, max: 550000, currency: "USD" },
      inr: { min: 31540000, max: 45650000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-vantage-gt8-2016",
    brand: "Aston Martin",
    name: "Vantage GT8",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Track Special",
    comfort: 2,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 440,
      top_speed_kmh: 305,
      acceleration_sec: 4.4,
      weight_kg: 1510,
      power_to_weight: 0.29
    },
    technical: {
      engine: "4.7L Naturally Aspirated V8",
      displacement_cc: 4735,
      fuel: "Petrol",
      transmission: "6-Speed Manual / 7-Speed Auto",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Aero Panels",
      brake_material: "Ventilated Discs",
      suspension: "Track Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2016,
      end_year: 2017,
      units_produced: 150,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 220000, max: 320000, currency: "USD" },
      inr: { min: 18260000, max: 26560000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-vantage-v8-1977",
    brand: "Aston Martin",
    name: "V8 Vantage (1977)",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Muscle GT",
    comfort: 3,
    mileage: 1,
    stability: 3,
    rating: 4.8,
    performance: {
      power_hp: 390,
      top_speed_kmh: 270,
      acceleration_sec: 5.3,
      weight_kg: 1815,
      power_to_weight: 0.21
    },
    technical: {
      engine: "5.3L Naturally Aspirated V8",
      displacement_cc: 5340,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum Panels / Steel Frame",
      brake_material: "Girling Discs",
      suspension: "De Dion Tube Rear",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1977,
      end_year: 1989,
      units_produced: 534,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 150000, max: 300000, currency: "USD" },
      inr: { min: 12450000, max: 24900000, currency: "INR" }
    },
    era: "1970s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "aston-martin-vantage-zagato-1986",
    brand: "Aston Martin",
    name: "Vantage Zagato",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Classic GT",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.7,
    performance: {
      power_hp: 432,
      top_speed_kmh: 300,
      acceleration_sec: 4.8,
      weight_kg: 1588,
      power_to_weight: 0.27
    },
    technical: {
      engine: "5.3L V8",
      displacement_cc: 5340,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Hand-bent Aluminum Body",
      brake_material: "Ventilated Discs",
      suspension: "De Dion Rear Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1986,
      end_year: 1989,
      units_produced: 52,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 400000, max: 700000, currency: "USD" },
      inr: { min: 33200000, max: 58100000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  },
  {
    id: "aston-martin-victor-2020",
    brand: "Aston Martin",
    name: "Victor",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 2,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 836,
      top_speed_kmh: 350,
      acceleration_sec: 2.9,
      weight_kg: 1630,
      power_to_weight: 0.51
    },
    technical: {
      engine: "7.3L Naturally Aspirated V12",
      displacement_cc: 7312,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 12
    },
    chassis: {
      material: "Full Carbon Fiber Monocoque",
      brake_material: "Carbon Ceramic",
      suspension: "Pushrod Inboard Dampers",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2020,
      end_year: 2020,
      units_produced: 1,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 3000000, max: 5000000, currency: "USD" },
      inr: { min: 249000000, max: 415000000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "One-Off"
  },
  {
    id: "aston-martin-virage-mk2-2011",
    brand: "Aston Martin",
    name: "Virage (Mk II)",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 490,
      top_speed_kmh: 299,
      acceleration_sec: 4.6,
      weight_kg: 1785,
      power_to_weight: 0.27
    },
    technical: {
      engine: "5.9L V12",
      displacement_cc: 5935,
      fuel: "Petrol",
      transmission: "6-Speed Touchtronic II Auto",
      cylinders: 12
    },
    chassis: {
      material: "VH Bonded Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping System",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2011,
      end_year: 2012,
      units_produced: 1000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 65000, max: 100000, currency: "USD" },
      inr: { min: 5395000, max: 8300000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "aston-martin-virage-vantage-1993",
    brand: "Aston Martin",
    name: "Virage Vantage",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Muscle GT",
    comfort: 3,
    mileage: 1,
    stability: 3,
    rating: 4.7,
    performance: {
      power_hp: 550,
      top_speed_kmh: 300,
      acceleration_sec: 4.6,
      weight_kg: 1990,
      power_to_weight: 0.27
    },
    technical: {
      engine: "5.3L Twin-Supercharged V8",
      displacement_cc: 5340,
      fuel: "Petrol",
      transmission: "6-Speed Manual",
      cylinders: 8
    },
    chassis: {
      material: "Hand-Crafted Aluminum Panels",
      brake_material: "Ventilated Discs",
      suspension: "De Dion Rear Tube",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1993,
      end_year: 2000,
      units_produced: 280,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 110000, max: 200000, currency: "USD" },
      inr: { min: 9130000, max: 16600000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "aston-martin-vulcan-2015",
    brand: "Aston Martin",
    name: "Vulcan",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Track-Only Hypercar",
    comfort: 1,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 820,
      top_speed_kmh: 360,
      acceleration_sec: 2.9,
      weight_kg: 1350,
      power_to_weight: 0.60
    },
    technical: {
      engine: "7.0L Naturally Aspirated V12",
      displacement_cc: 7000,
      fuel: "Petrol",
      transmission: "6-Speed Sequential Race",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber Monocoque",
      brake_material: "Carbon Ceramic Matrix",
      suspension: "Pushrod Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2015,
      end_year: 2017,
      units_produced: 24,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 2300000, max: 3400000, currency: "USD" },
      inr: { min: 190900000, max: 282200000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Extremely Rare"
  }
];

export default astonMartinCars;