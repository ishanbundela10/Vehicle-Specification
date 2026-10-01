const cars = [
  {
    id: "bentley-arnage-red-label-1999",
    brand: "Bentley",
    name: "Arnage Red Label",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Luxury Sedan",
    comfort: 5,
    mileage: 1,
    stability: 4,
    rating: 4.6,
    performance: {
      power_hp: 400,
      top_speed_kmh: 249,
      acceleration_sec: 5.9,
      weight_kg: 2520,
      power_to_weight: 0.16
    },
    technical: {
      engine: "6.75L Turbo V8",
      displacement_cc: 6750,
      fuel: "Petrol",
      transmission: "4-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone w/ Adaptive Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1999,
      end_year: 2002,
      units_produced: 2270,
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
    id: "bentley-azure-2006",
    brand: "Bentley",
    name: "Azure",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Luxury Convertible",
    comfort: 5,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 450,
      top_speed_kmh: 274,
      acceleration_sec: 5.6,
      weight_kg: 2695,
      power_to_weight: 0.17
    },
    technical: {
      engine: "6.75L Twin-Turbo V8",
      displacement_cc: 6750,
      fuel: "Petrol",
      transmission: "6-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Reinforced Steel / Aluminum",
      brake_material: "Ventilated Discs",
      suspension: "Adaptive Computer Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2006,
      end_year: 2010,
      units_produced: 500,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 90000, max: 150000, currency: "USD" },
      inr: { min: 7470000, max: 12450000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Rare"
  },
  {
    id: "bentley-bacalar-2021",
    brand: "Bentley",
    name: "Bacalar",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt Barchetta",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 650,
      top_speed_kmh: 333,
      acceleration_sec: 3.5,
      weight_kg: 2200,
      power_to_weight: 0.30
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5950,
      fuel: "Petrol",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 12
    },
    chassis: {
      material: "Carbon Fiber & Aluminum",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2021,
      end_year: null,
      units_produced: 12,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 1900000, max: 2200000, currency: "USD" },
      inr: { min: 157700000, max: 182600000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  },
  {
    id: "bentley-batur-2023",
    brand: "Bentley",
    name: "Batur",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt Coupe",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 730,
      top_speed_kmh: 336,
      acceleration_sec: 3.4,
      weight_kg: 2200,
      power_to_weight: 0.33
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5950,
      fuel: "Petrol",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 12
    },
    chassis: {
      material: "3D-Printed Titanium / Carbon Fiber",
      brake_material: "Carbon-Silicon-Carbide (CSiC)",
      suspension: "Adaptive Air Suspension w/ e48V Active Anti-Roll",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: 18,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 2000000, max: 2500000, currency: "USD" },
      inr: { min: 166000000, max: 207500000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  },
  {
    id: "bentley-bentayga-2016",
    brand: "Bentley",
    name: "Bentayga",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    type: "Ultra-Luxury SUV",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 600,
      top_speed_kmh: 301,
      acceleration_sec: 4.0,
      weight_kg: 2440,
      power_to_weight: 0.25
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5950,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum Spaceframe",
      brake_material: "Iron / Carbon Ceramic Optional",
      suspension: "Air Suspension w/ Bentley Dynamic Ride",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2016,
      end_year: null,
      units_produced: null,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 180000, max: 240000, currency: "USD" },
      inr: { min: 14940000, max: 19920000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Common"
  },
  {
    id: "bentley-brooklands-coupe-2008",
    brand: "Bentley",
    name: "Brooklands Coupe",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Ultra-Luxury Coupe",
    comfort: 5,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 530,
      top_speed_kmh: 296,
      acceleration_sec: 5.0,
      weight_kg: 2650,
      power_to_weight: 0.20
    },
    technical: {
      engine: "6.75L Twin-Turbo V8",
      displacement_cc: 6750,
      fuel: "Petrol",
      transmission: "6-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Hand-Crafted Steel / Aluminum",
      brake_material: "Carbon Ceramic Optional",
      suspension: "Computer Controlled Adaptive Damping",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2008,
      end_year: 2011,
      units_produced: 550,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 150000, max: 250000, currency: "USD" },
      inr: { min: 12450000, max: 20750000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "bentley-continental-gt-mk1-2003",
    brand: "Bentley",
    name: "Continental GT (Mk I)",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 552,
      top_speed_kmh: 318,
      acceleration_sec: 4.8,
      weight_kg: 2385,
      power_to_weight: 0.23
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "6-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "Continuous Damping Control Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2003,
      end_year: 2011,
      units_produced: 26000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 25000, max: 50000, currency: "USD" },
      inr: { min: 2075000, max: 4150000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bentley-continental-gt-mk2-2011",
    brand: "Bentley",
    name: "Continental GT (Mk II)",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 567,
      top_speed_kmh: 318,
      acceleration_sec: 4.5,
      weight_kg: 2320,
      power_to_weight: 0.24
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Superformed Aluminum / Steel",
      brake_material: "Ventilated Discs",
      suspension: "Air Suspension w/ CDC",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2011,
      end_year: 2017,
      units_produced: 20000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 55000, max: 95000, currency: "USD" },
      inr: { min: 4565000, max: 7885000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bentley-continental-gt-mk3-2018",
    brand: "Bentley",
    name: "Continental GT (Mk III)",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 626,
      top_speed_kmh: 333,
      acceleration_sec: 3.7,
      weight_kg: 2244,
      power_to_weight: 0.28
    },
    technical: {
      engine: "6.0L Twin-Turbo W12 TSI",
      displacement_cc: 5950,
      fuel: "Petrol",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 12
    },
    chassis: {
      material: "Superformed Aluminum Structure",
      brake_material: "Iron / Carbon Ceramic Option",
      suspension: "Three-Chamber Air Suspension w/ 48V Anti-Roll",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2018,
      end_year: 2024,
      units_produced: 18000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 140000, max: 210000, currency: "USD" },
      inr: { min: 11620000, max: 17430000, currency: "INR" }
    },
    era: "Modern",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "bentley-continental-gt-speed-mk1-2007",
    brand: "Bentley",
    name: "Continental GT Speed (Mk I)",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 600,
      top_speed_kmh: 326,
      acceleration_sec: 4.5,
      weight_kg: 2350,
      power_to_weight: 0.25
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "6-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Carbon Ceramic Optional",
      suspension: "Lowered Sport Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2007,
      end_year: 2011,
      units_produced: 5000,
      country: "United Kingdom"
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
    id: "bentley-continental-gt-speed-mk2-2012",
    brand: "Bentley",
    name: "Continental GT Speed (Mk II)",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Grand Tourer",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 616,
      top_speed_kmh: 329,
      acceleration_sec: 4.0,
      weight_kg: 2320,
      power_to_weight: 0.26
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Superformed Aluminum",
      brake_material: "Carbon Ceramic Optional",
      suspension: "Sport Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2012,
      end_year: 2017,
      units_produced: 6000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 65000, max: 110000, currency: "USD" },
      inr: { min: 5395000, max: 9130000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "bentley-continental-gt-speed-mk4-2025",
    brand: "Bentley",
    name: "Continental GT Speed (Mk IV)",
    img: "https://images.unsplash.com/photo-1553440569-bcc89925339e?auto=format&fit=crop&w=1200&q=80",
    type: "Ultra Performance GT Hybrid",
    comfort: 5,
    mileage: 4,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 771,
      top_speed_kmh: 335,
      acceleration_sec: 3.2,
      weight_kg: 2450,
      power_to_weight: 0.31
    },
    technical: {
      engine: "4.0L Twin-Turbo V8 + Electric Motor",
      displacement_cc: 3996,
      fuel: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Aluminum & Carbon Fiber",
      brake_material: "Silicon Carbide Carbon Ceramic",
      suspension: "Dual-Chamber Air Suspension w/ 48V Active Anti-Roll",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2025,
      end_year: null,
      units_produced: null,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 300000, max: 360000, currency: "USD" },
      inr: { min: 24900000, max: 29880000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "bentley-continental-gt3-r-2015",
    brand: "Bentley",
    name: "Continental GT3-R",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Track Special GT",
    comfort: 3,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 572,
      top_speed_kmh: 273,
      acceleration_sec: 3.6,
      weight_kg: 2195,
      power_to_weight: 0.26},
     technical: {
      engine: "4.0L Twin-Turbo V8",
      displacement_cc: 3993,
      fuel: "Petrol",
      transmission: "8-Speed Automatic w/ Short Ratios",
      cylinders: 8
    },
    chassis: {
      material: "Carbon Fiber Aero / Aluminum",
      brake_material: "Carbon Silicon Carbide (CSiC)",
      suspension: "Air Suspension GT3-R Calibration",
      drivetrain: "AWD w/ Rear Torque Vectoring"
    },
    production: {
      start_year: 2015,
      end_year: 2018,
      units_produced: 300,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 160000, max: 240000, currency: "USD" },
      inr: { min: 13280000, max: 19920000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "bentley-continental-gtz-2008",
    brand: "Bentley",
    name: "Continental GTZ Zagato",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Coachbuilt GT",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 600,
      top_speed_kmh: 326,
      acceleration_sec: 4.5,
      weight_kg: 2350,
      power_to_weight: 0.25
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "6-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Hand-Crafted Aluminum Zagato Bodywork",
      brake_material: "Carbon Ceramic",
      suspension: "Continuous Damping Control Air",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2008,
      end_year: 2010,
      units_produced: 9,
      country: "United Kingdom / Italy"
    },
    price: {
      usd: { min: 800000, max: 1300000, currency: "USD" },
      inr: { min: 66400000, max: 107900000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "bentley-continental-supersports-mk2-2017",
    brand: "Bentley",
    name: "Continental Supersports (Mk II)",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    type: "Super GT",
    comfort: 4,
    mileage: 1,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 700,
      top_speed_kmh: 336,
      acceleration_sec: 3.5,
      weight_kg: 2280,
      power_to_weight: 0.30
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum & Carbon Fiber Accent Body",
      brake_material: "Carbon Ceramic",
      suspension: "Lowered Sport Air Suspension",
      drivetrain: "AWD w/ Rear-Biased Torque Vectoring"
    },
    production: {
      start_year: 2017,
      end_year: 2018,
      units_produced: 710,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 150000, max: 220000, currency: "USD" },
      inr: { min: 12450000, max: 18260000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Limited Edition"
  },
  {
    id: "bentley-continental-supersports-mk4-2026",
    brand: "Bentley",
    name: "Continental Supersports (Mk IV)",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Super GT Hybrid",
    comfort: 4,
    mileage: 4,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 850,
      top_speed_kmh: 345,
      acceleration_sec: 2.9,
      weight_kg: 2200,
      power_to_weight: 0.38
    },
    technical: {
      engine: "4.0L Twin-Turbo V8 High-Performance Hybrid",
      displacement_cc: 3996,
      fuel: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 8
    },
    chassis: {
      material: "Full Carbon Bodywork / Aluminum Subframes",
      brake_material: "Silicon Carbide Carbon Ceramic",
      suspension: "Race-Calibrated 48V Active Anti-Roll Air",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2026,
      end_year: null,
      units_produced: 500,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 450000, max: 550000, currency: "USD" },
      inr: { min: 37350000, max: 45650000, currency: "INR" }
    },
    era: "Modern",
    status: "Upcoming",
    rarity: "Limited Edition"
  },
  {
    id: "bentley-continental-t-1996",
    brand: "Bentley",
    name: "Continental T",
    img: "https://images.unsplash.com/photo-1541348263662-e082662d8298?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Grand Tourer",
    comfort: 4,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 420,
      top_speed_kmh: 273,
      acceleration_sec: 5.7,
      weight_kg: 2450,
      power_to_weight: 0.17
    },
    technical: {
      engine: "6.75L Turbo V8",
      displacement_cc: 6750,
      fuel: "Petrol",
      transmission: "4-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel Monocoque w/ Shortened Wheelbase",
      brake_material: "Ventilated Discs",
      suspension: "Electronic Hydraulic Adaptive Suspension",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1996,
      end_year: 2003,
      units_produced: 322,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 75000, max: 140000, currency: "USD" },
      inr: { min: 6225000, max: 11620000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Very Rare"
  },
  {
    id: "bentley-exp-10-speed-6-2015",
    brand: "Bentley",
    name: "EXP 10 Speed 6",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Sports GT",
    comfort: 4,
    mileage: 4,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 550,
      top_speed_kmh: 320,
      acceleration_sec: 3.8,
      weight_kg: 1750,
      power_to_weight: 0.31
    },
    technical: {
      engine: "V6 Plug-in Hybrid Powertrain",
      displacement_cc: 3000,
      fuel: "Hybrid",
      transmission: "8-Speed Automatic",
      cylinders: 6
    },
    chassis: {
      material: "3D-Printed Metallic / Carbon Accent Structure",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Damping Control",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2015,
      end_year: 2015,
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
    id: "bentley-exp-12-speed-6e-2017",
    brand: "Bentley",
    name: "EXP 12 Speed 6e",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Electric Convertible",
    comfort: 5,
    mileage: 5,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 500,
      top_speed_kmh: 290,
      acceleration_sec: 3.5,
      weight_kg: 1900,
      power_to_weight: 0.26
    },
    technical: {
      engine: "Dual Electric Motors (Inductive Wireless Charging)",
      displacement_cc: 0,
      fuel: "Electric",
      transmission: "Single-Speed",
      cylinders: 0
    },
    chassis: {
      material: "Aluminum & Rose-Gold Copper accents",
      brake_material: "Carbon Ceramic",
      suspension: "Adaptive Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2017,
      end_year: 2017,
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
    id: "bentley-flying-spur-2005",
    brand: "Bentley",
    name: "Continental Flying Spur",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Ultra-Luxury Sedan",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.7,
    performance: {
      power_hp: 552,
      top_speed_kmh: 312,
      acceleration_sec: 5.2,
      weight_kg: 2475,
      power_to_weight: 0.22
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "6-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Steel Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "Computer Controlled Air Suspension",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2005,
      end_year: 2012,
      units_produced: 19000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 25000, max: 50000, currency: "USD" },
      inr: { min: 2075000, max: 4150000, currency: "INR" }
    },
    era: "2000s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bentley-flying-spur-mk2-2013",
    brand: "Bentley",
    name: "Flying Spur (Mk II)",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    type: "Ultra-Luxury Sedan",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 4.8,
    performance: {
      power_hp: 616,
      top_speed_kmh: 322,
      acceleration_sec: 4.6,
      weight_kg: 2475,
      power_to_weight: 0.24
    },
    technical: {
      engine: "6.0L Twin-Turbo W12",
      displacement_cc: 5998,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 12
    },
    chassis: {
      material: "Superformed Aluminum / Steel",
      brake_material: "Ventilated Discs",
      suspension: "Air Suspension w/ CDC",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2013,
      end_year: 2018,
      units_produced: 12000,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 55000, max: 95000, currency: "USD" },
      inr: { min: 4565000, max: 7885000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Common"
  },
  {
    id: "bentley-flying-spur-mk3-2020",
    brand: "Bentley",
    name: "Flying Spur (Mk III)",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d0?auto=format&fit=crop&w=1200&q=80",
    type: "Ultra-Luxury Sedan",
    comfort: 5,
    mileage: 2,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 626,
      top_speed_kmh: 333,
      acceleration_sec: 3.8,
      weight_kg: 2437,
      power_to_weight: 0.25
    },
    technical: {
      engine: "6.0L Twin-Turbo W12 TSI",
      displacement_cc: 5950,
      fuel: "Petrol",
      transmission: "8-Speed Dual-Clutch",
      cylinders: 12
    },
    chassis: {
      material: "Aluminum & High-Strength Steel",
      brake_material: "Iron / Carbon Ceramic Optional",
      suspension: "Three-Chamber Air Suspension w/ All-Wheel Steering",
      drivetrain: "AWD"
    },
    production: {
      start_year: 2020,
      end_year: null,
      units_produced: null,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 160000, max: 230000, currency: "USD" },
      inr: { min: 13280000, max: 19090000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Uncommon"
  },
  {
    id: "bentley-hunaudieres-1999",
    brand: "Bentley",
    name: "Hunaudières",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Concept Mid-Engine Supercar",
    comfort: 2,
    mileage: 1,
    stability: 4,
    rating: 4.8,
    performance: {
      power_hp: 623,
      top_speed_kmh: 350,
      acceleration_sec: 3.3,
      weight_kg: 1550,
      power_to_weight: 0.40
    },
    technical: {
      engine: "8.0L Naturally Aspirated W16",
      displacement_cc: 8001,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 16
    },
    chassis: {
      material: "Carbon Fiber Shell / Aluminum Spaceframe",
      brake_material: "Ventilated Discs",
      suspension: "Double Wishbone",
      drivetrain: "AWD"
    },
    production: {
      start_year: 1999,
      end_year: 1999,
      units_produced: 1,
      country: "United Kingdom"
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
    id: "bentley-mulsanne-2010",
    brand: "Bentley",
    name: "Mulsanne",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    type: "Flagship Luxury Sedan",
    comfort: 5,
    mileage: 1,
    stability: 5,
    rating: 4.9,
    performance: {
      power_hp: 505,
      top_speed_kmh: 296,
      acceleration_sec: 5.1,
      weight_kg: 2680,
      power_to_weight: 0.18
    },
    technical: {
      engine: "6.75L Twin-Turbo V8",
      displacement_cc: 6752,
      fuel: "Petrol",
      transmission: "8-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Steel Monocoque / Superformed Aluminum Hood & Doors",
      brake_material: "Ventilated Discs",
      suspension: "Air Suspension w/ Continuous Damping Control",
      drivetrain: "RWD"
    },
    production: {
      start_year: 2010,
      end_year: 2020,
      units_produced: 7300,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 110000, max: 210000, currency: "USD" },
      inr: { min: 9130000, max: 17430000, currency: "INR" }
    },
    era: "2010s",
    status: "Discontinued",
    rarity: "Uncommon"
  },
  {
    id: "bentley-turbo-r-1985",
    brand: "Bentley",
    name: "Turbo R",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Classic Performance Sedan",
    comfort: 4,
    mileage: 1,
    stability: 3,
    rating: 4.7,
    performance: {
      power_hp: 385,
      top_speed_kmh: 235,
      acceleration_sec: 6.6,
      weight_kg: 2390,
      power_to_weight: 0.16
    },
    technical: {
      engine: "6.75L Turbo V8",
      displacement_cc: 6750,
      fuel: "Petrol",
      transmission: "3-Speed / 4-Speed Automatic",
      cylinders: 8
    },
    chassis: {
      material: "Heavy Steel Monocoque",
      brake_material: "Ventilated Discs",
      suspension: "Anti-Roll Stiffened Hydraulic Self-Leveling",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1985,
      end_year: 1997,
      units_produced: 7230,
      country: "United Kingdom"
    },
    price: {
      usd: { min: 15000, max: 35000, currency: "USD" },
      inr: { min: 1245000, max: 2905000, currency: "INR" }
    },
    era: "1980s",
    status: "Discontinued",
    rarity: "Uncommon"
  }
];

export default cars;