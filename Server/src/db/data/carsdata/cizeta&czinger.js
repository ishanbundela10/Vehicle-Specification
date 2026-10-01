const cars = [
  {
    id: "cizeta-v16t-1991",
    brand: "Cizeta",
    name: "Moroder V16T",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    type: "Supercar",
    comfort: 3,
    mileage: 1,
    stability: 4,
    rating: 4.9,
    performance: {
      power_hp: 540,
      top_speed_kmh: 328,
      acceleration_sec: 4.4,
      weight_kg: 1700,
      power_to_weight: 0.32
    },
    technical: {
      engine: "6.0L Transverse V16",
      displacement_cc: 5995,
      fuel: "Petrol",
      transmission: "5-Speed Manual",
      cylinders: 16
    },
    chassis: {
      material: "Aluminum Body / Chrome-moly Steel Frame",
      brake_material: "Ventilated Discs",
      suspension: "Independent Double Wishbone",
      drivetrain: "RWD"
    },
    production: {
      start_year: 1991,
      end_year: 1995,
      units_produced: 12,
      country: "Italy"
    },
    price: {
      usd: { min: 650000, max: 1000000, currency: "USD" },
      inr: { min: 53950000, max: 83000000, currency: "INR" }
    },
    era: "1990s",
    status: "Discontinued",
    rarity: "Ultra Rare"
  },
  {
    id: "czinger-21c-2023",
    brand: "Czinger",
    name: "21C",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    type: "Hypercar",
    comfort: 2,
    mileage: 3,
    stability: 5,
    rating: 5.0,
    performance: {
      power_hp: 1250,
      top_speed_kmh: 405,
      acceleration_sec: 1.9,
      weight_kg: 1240,
      power_to_weight: 1.01
    },
    technical: {
      engine: "2.88L Twin-Turbo V8 Hybrid",
      displacement_cc: 2880,
      fuel: "Hybrid / Petrol",
      transmission: "7-Speed Automated Manual",
      cylinders: 8
    },
    chassis: {
      material: "3D-Printed Aluminum & Carbon Fiber",
      brake_material: "Carbon Ceramic",
      suspension: "Double Wishbone",
      drivetrain: "AWD (Electric Front / Gas Rear)"
    },
    production: {
      start_year: 2023,
      end_year: null,
      units_produced: 80,
      country: "USA"
    },
    price: {
      usd: { min: 2000000, max: 2800000, currency: "USD" },
      inr: { min: 166000000, max: 232400000, currency: "INR" }
    },
    era: "Modern",
    status: "Active",
    rarity: "Ultra Rare"
  }
];

export default cars;