const cars = [
    {
        id: "ferrari1",
        brand: "Ferrari",
        name: "375 MM Sport Speciale",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/1953-08-16_Pescara_Ferrari_340_0320AM_Maglioli%2BHawthorn.jpg/330px-1953-08-16_Pescara_Ferrari_340_0320AM_Maglioli%2BHawthorn.jpg",
        type: "Race/Sports Car",
        comfort: 2,
        mileage: 1,
        stability: 3,
        rating: 4.5,
        performance: {
            power_hp: 340,
            top_speed_kmh: 280,
            acceleration_sec: 6.3,
            weight_kg: 1100,
            power_to_weight: 0.31
        },
        technical: {
            engine: "4.5L V12",
            displacement_cc: 4500,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum/Steel",
            brake_material: "Performance Drum/Disc",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1955,
            end_year: 1955,
            units_produced: 23,
            country: "Italy"
        },
        price: {
            usd: { min: 4500000, max: 6500000, currency: "USD" },
            inr: { min: 427500000, max: 617500000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "ferrari2",
        brand: "Ferrari",
        name: "250 GT SWB",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ferrari_250_California_Spyder_SWB.jpg/960px-Ferrari_250_California_Spyder_SWB.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.6,
        performance: {
            power_hp: 280,
            top_speed_kmh: 240,
            acceleration_sec: 7.1,
            weight_kg: 1050,
            power_to_weight: 0.27
        },
        technical: {
            engine: "3.0L V12",
            displacement_cc: 3000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum/Steel",
            brake_material: "Performance Disc",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1959,
            end_year: 1961,
            units_produced: 165,
            country: "Italy"
        },
        price: {
            usd: { min: 3000000, max: 4500000, currency: "USD" },
            inr: { min: 285000000, max: 427500000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "ferrari3",
        brand: "Ferrari",
        name: "250 GTO",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1963_Ferrari_250_GTO_%28chassis_4153GT%29_2.95.jpg/1280px-1963_Ferrari_250_GTO_%28chassis_4153GT%29_2.95.jpg",
        type: "Sports/Race Car",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.8,
        performance: {
            power_hp: 300,
            top_speed_kmh: 280,
            acceleration_sec: 6.1,
            weight_kg: 1100,
            power_to_weight: 0.27
        },
        technical: {
            engine: "3.0L V12",
            displacement_cc: 3000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum body over tubular frame",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1962,
            end_year: 1964,
            units_produced: 39,
            country: "Italy"
        },
        price: {
            usd: { min: 8000000, max: 12000000, currency: "USD" },
            inr: { min: 760000000, max: 1140000000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "ferrari4",
        brand: "Ferrari",
        name: "250 LM",
        img: "https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/eb3b42fd-8083-41f5-aba7-ceb88472154b/art-mg-ferrari250lm01.jpg?format=1500w",
        type: "Race Car",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 4.7,
        performance: {
            power_hp: 320,
            top_speed_kmh: 287,
            acceleration_sec: 5.8,
            weight_kg: 1050,
            power_to_weight: 0.30
        },
        technical: {
            engine: "3.3L V12",
            displacement_cc: 3300,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1963,
            end_year: 1966,
            units_produced: 32,
            country: "Italy"
        },
        price: {
            usd: { min: 4000000, max: 6000000, currency: "USD" },
            inr: { min: 380000000, max: 570000000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "ferrari5",
        brand: "Ferrari",
        name: "275 GTB",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/1966_Ferrari_275_GTB_sn_08549%2C_front_left_%28Greenwich_2019%29.jpg/960px-1966_Ferrari_275_GTB_sn_08549%2C_front_left_%28Greenwich_2019%29.jpg",
        type: "Grand Tourer",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.5,
        performance: {
            power_hp: 280,
            top_speed_kmh: 260,
            acceleration_sec: 6.8,
            weight_kg: 1100,
            power_to_weight: 0.25
        },
        technical: {
            engine: "3.3L V12",
            displacement_cc: 3300,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Steel with aluminum panels",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1964,
            end_year: 1968,
            units_produced: 454,
            country: "Italy"
        },
        price: {
            usd: { min: 1800000, max: 2800000, currency: "USD" },
            inr: { min: 171000000, max: 266000000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari6",
        brand: "Ferrari",
        name: "365 GTB4 (Daytona)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/1973_Ferrari_Daytona_365_GTB4_Blue_LC22.jpg/330px-1973_Ferrari_Daytona_365_GTB4_Blue_LC22.jpg",
        type: "GT / Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.7,
        performance: {
            power_hp: 352,
            top_speed_kmh: 280,
            acceleration_sec: 5.9,
            weight_kg: 1250,
            power_to_weight: 0.28
        },
        technical: {
            engine: "4.4L V12",
            displacement_cc: 4400,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Steel with aluminum panels",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1968,
            end_year: 1973,
            units_produced: 1406,
            country: "Italy"
        },
        price: {
            usd: { min: 1200000, max: 1800000, currency: "USD" },
            inr: { min: 114000000, max: 171000000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari7",
        brand: "Ferrari",
        name: "Dino 246 GT/GTS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Dino_246_GT_%2824627987921%29.jpg/960px-Dino_246_GT_%2824627987921%29.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 2,
        stability: 4,
        rating: 4.4,
        performance: {
            power_hp: 195,
            top_speed_kmh: 235,
            acceleration_sec: 8.3,
            weight_kg: 950,
            power_to_weight: 0.21
        },
        technical: {
            engine: "2.4L V6",
            displacement_cc: 2400,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 6
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1969,
            end_year: 1974,
            units_produced: 3966,
            country: "Italy"
        },
        price: {
            usd: { min: 800000, max: 1200000, currency: "USD" },
            inr: { min: 76000000, max: 114000000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari8",
        brand: "Ferrari",
        name: "365 GTC/4",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/1972_Ferrari_365_GTC-4_in_Blu_Sera%2C_front_left.jpg/330px-1972_Ferrari_365_GTC-4_in_Blu_Sera%2C_front_left.jpg",
        type: "Luxury GT",
        comfort: 4,
        mileage: 1,
        stability: 3,
        rating: 4.3,
        performance: {
            power_hp: 340,
            top_speed_kmh: 260,
            acceleration_sec: 6.4,
            weight_kg: 1350,
            power_to_weight: 0.25
        },
        technical: {
            engine: "4.4L V12",
            displacement_cc: 4400,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1971,
            end_year: 1972,
            units_produced: 520,
            country: "Italy"
        },
        price: {
            usd: { min: 950000, max: 1500000, currency: "USD" },
            inr: { min: 90250000, max: 142500000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari9",
        brand: "Ferrari",
        name: "365 GT4 BB",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ferrari_365_GT4_BB_%2815868372458%29.jpg/960px-Ferrari_365_GT4_BB_%2815868372458%29.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.6,
        performance: {
            power_hp: 380,
            top_speed_kmh: 300,
            acceleration_sec: 3.5,
            weight_kg: 1420,
            power_to_weight: 0.27
        },
        technical: {
            engine: "4.4L Flat-12",
            displacement_cc: 4400,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1973,
            end_year: 1976,
            units_produced: 387,
            country: "Italy"
        },
        price: {
            usd: { min: 800000, max: 1100000, currency: "USD" },
            inr: { min: 76000000, max: 104500000, currency: "INR" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari10",
        brand: "Ferrari",
        name: "308 GT4",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ferrari_308_GT4.jpg/960px-Ferrari_308_GT4.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 2,
        stability: 3,
        rating: 4.1,
        performance: {
            power_hp: 250,
            top_speed_kmh: 250,
            acceleration_sec: 5.2,
            weight_kg: 1070,
            power_to_weight: 0.23
        },
        technical: {
            engine: "2.9L V8",
            displacement_cc: 2900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 8
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1973,
            end_year: 1980,
            units_produced: 2578,
            country: "Italy"
        },
        price: {
            usd: { min: 60000, max: 90000, currency: "USD" },
            inr: { min: 5700000, max: 8550000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari11",
        brand: "Ferrari",
        name: "308",
        img: "https://www.supercarworld.com/images/fullpics/111h.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 2,
        stability: 3,
        rating: 4.2,
        performance: {
            power_hp: 255,
            top_speed_kmh: 255,
            acceleration_sec: 5.0,
            weight_kg: 1080,
            power_to_weight: 0.24
        },
        technical: {
            engine: "2.9L V8",
            displacement_cc: 2900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 8
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1975,
            end_year: 1985,
            units_produced: 2681,
            country: "Italy"
        },
        price: {
            usd: { min: 70000, max: 100000, currency: "USD" },
            inr: { min: 6650000, max: 9500000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari12",
        brand: "Ferrari",
        name: "512 BB",
        img: "https://www.supercarworld.com/images/fullpics/018p.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.5,
        performance: {
            power_hp: 360,
            top_speed_kmh: 283,
            acceleration_sec: 3.8,
            weight_kg: 1480,
            power_to_weight: 0.24
        },
        technical: {
            engine: "5.0L Flat-12",
            displacement_cc: 5000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1976,
            end_year: 1984,
            units_produced: 929,
            country: "Italy"
        },
        price: {
            usd: { min: 700000, max: 950000, currency: "USD" },
            inr: { min: 66500000, max: 90250000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari13",
        brand: "Ferrari",
        name: "400",
        img: "https://www.supercarworld.com/images/fullpics/894.jpg",
        type: "Luxury GT",
        comfort: 4,
        mileage: 1,
        stability: 3,
        rating: 4.2,
        performance: {
            power_hp: 340,
            top_speed_kmh: 240,
            acceleration_sec: 7.2,
            weight_kg: 1500,
            power_to_weight: 0.23
        },
        technical: {
            engine: "4.8L V12",
            displacement_cc: 4800,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1976,
            end_year: 1985,
            units_produced: 1311,
            country: "Italy"
        },
        price: {
            usd: { min: 65000, max: 95000, currency: "USD" },
            inr: { min: 6175000, max: 9025000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari14",
        brand: "Ferrari",
        name: "Testarossa",
        img: "https://www.supercarworld.com/images/fullpics/039.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.6,
        performance: {
            power_hp: 390,
            top_speed_kmh: 290,
            acceleration_sec: 3.2,
            weight_kg: 1520,
            power_to_weight: 0.26
        },
        technical: {
            engine: "4.9L Flat-12",
            displacement_cc: 4900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1984,
            end_year: 1991,
            units_produced: 2187,
            country: "Italy"
        },
        price: {
            usd: { min: 400000, max: 600000, currency: "USD" },
            inr: { min: 38000000, max: 57000000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari15",
        brand: "Ferrari",
        name: "288 GTO",
        img: "https://www.supercarworld.com/images/fullpics/019m.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.7,
        performance: {
            power_hp: 400,
            top_speed_kmh: 305,
            acceleration_sec: 3.0,
            weight_kg: 1350,
            power_to_weight: 0.30
        },
        technical: {
            engine: "2.9L Twin-Turbo V8",
            displacement_cc: 2900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 8
        },
        chassis: {
            material: "Tubular steel with Kevlar/Carbon",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1984,
            end_year: 1986,
            units_produced: 272,
            country: "Italy"
        },
        price: {
            usd: { min: 1500000, max: 2200000, currency: "USD" },
            inr: { min: 142500000, max: 209000000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari16",
        brand: "Ferrari",
        name: "F40",
        img: "https://www.supercarworld.com/images/fullpics/007u.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 4.8,
        performance: {
            power_hp: 471,
            top_speed_kmh: 324,
            acceleration_sec: 3.8,
            weight_kg: 1100,
            power_to_weight: 0.43
        },
        technical: {
            engine: "2.9L Twin-Turbo V8",
            displacement_cc: 2900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 8
        },
        chassis: {
            material: "Tubular steel/Carbon composite",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1987,
            end_year: 1992,
            units_produced: 399,
            country: "Italy"
        },
        price: {
            usd: { min: 4000000, max: 6000000, currency: "USD" },
            inr: { min: 380000000, max: 570000000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari17",
        brand: "Ferrari",
        name: "F50",
        img: "https://www.supercarworld.com/images/fullpics/010l.jpg",
        type: "Hypercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 4.7,
        performance: {
            power_hp: 513,
            top_speed_kmh: 325,
            acceleration_sec: 3.7,
            weight_kg: 1050,
            power_to_weight: 0.49
        },
        technical: {
            engine: "4.7L V12",
            displacement_cc: 4700,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1995,
            end_year: 1997,
            units_produced: 349,
            country: "Italy"
        },
        price: {
            usd: { min: 3000000, max: 4500000, currency: "USD" },
            inr: { min: 285000000, max: 427500000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari18",
        brand: "Ferrari",
        name: "Enzo",
        img: "https://www.supercarworld.com/images/fullpics/175.jpg",
        type: "Hypercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 651,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1365,
            power_to_weight: 0.48
        },
        technical: {
            engine: "6.0L V12",
            displacement_cc: 6000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2002,
            end_year: 2004,
            units_produced: 400,
            country: "Italy"
        },
        price: {
            usd: { min: 3500000, max: 5000000, currency: "USD" },
            inr: { min: 332500000, max: 475000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari19",
        brand: "Ferrari",
        name: "458 Italia",
        img: "https://www.supercarworld.com/images/fullpics/438b.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 2,
        stability: 4,
        rating: 4.7,
        performance: {
            power_hp: 562,
            top_speed_kmh: 325,
            acceleration_sec: 3.0,
            weight_kg: 1380,
            power_to_weight: 0.41
        },
        technical: {
            engine: "4.5L V8",
            displacement_cc: 4500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2009,
            end_year: 2015,
            units_produced: 3977,
            country: "Italy"
        },
        price: {
            usd: { min: 200000, max: 280000, currency: "USD" },
            inr: { min: 19000000, max: 26600000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari20",
        brand: "Ferrari",
        name: "LaFerrari",
        img: "https://www.supercarworld.com/images/fullpics/457.jpg",
        type: "Hypercar",
        comfort: 2,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 950,
            top_speed_kmh: 352,
            acceleration_sec: 2.4,
            weight_kg: 1255,
            power_to_weight: 0.76
        },
        technical: {
            engine: "6.3L Hybrid V12",
            displacement_cc: 6300,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2013,
            end_year: 2018,
            units_produced: 499,
            country: "Italy"
        },
        price: {
            usd: { min: 1300000, max: 2000000, currency: "USD" },
            inr: { min: 123500000, max: 190000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari21",
        brand: "Ferrari",
        name: "488 GTB",
        img: "https://www.supercarworld.com/images/fullpics/472n.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 2,
        stability: 5,
        rating: 4.7,
        performance: {
            power_hp: 661,
            top_speed_kmh: 330,
            acceleration_sec: 3.0,
            weight_kg: 1395,
            power_to_weight: 0.47
        },
        technical: {
            engine: "3.9L Twin-Turbo V8",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2015,
            end_year: 2019,
            units_produced: 7603,
            country: "Italy"
        },
        price: {
            usd: { min: 245000, max: 300000, currency: "USD" },
            inr: { min: 23275000, max: 28500000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari22",
        brand: "Ferrari",
        name: "812 Superfast",
        img: "https://www.supercarworld.com/images/fullpics/715b.jpg",
        type: "Supercar",
        comfort: 4,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 789,
            top_speed_kmh: 340,
            acceleration_sec: 3.1,
            weight_kg: 1650,
            power_to_weight: 0.48
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2017,
            end_year: 2024,
            units_produced: 4500,
            country: "Italy"
        },
        price: {
            usd: { min: 310000, max: 380000, currency: "USD" },
            inr: { min: 29450000, max: 36100000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "ferrari23",
        brand: "Ferrari",
        name: "SF90 Stradale",
        img: "https://www.supercarworld.com/images/fullpics/931b.jpg",
        type: "Hybrid Hypercar",
        comfort: 4,
        mileage: 2,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 986,
            top_speed_kmh: 340,
            acceleration_sec: 2.5,
            weight_kg: 1570,
            power_to_weight: 0.63
        },
        technical: {
            engine: "4.0L Twin-Turbo Hybrid V8",
            displacement_cc: 4000,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2019,
            end_year: 2024,
            units_produced: 2248,
            country: "Italy"
        },
        price: {
            usd: { min: 400000, max: 550000, currency: "USD" },
            inr: { min: 38000000, max: 52250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari24",
        brand: "Ferrari",
        name: "Roma",
        img: "https://www.supercarworld.com/images/fullpics/1001b.jpg",
        type: "Luxury GT",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.6,
        performance: {
            power_hp: 612,
            top_speed_kmh: 320,
            acceleration_sec: 3.4,
            weight_kg: 1545,
            power_to_weight: 0.40
        },
        technical: {
            engine: "3.9L Twin-Turbo V8",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2020,
            end_year: 2024,
            units_produced: 4000,
            country: "Italy"
        },
        price: {
            usd: { min: 180000, max: 240000, currency: "USD" },
            inr: { min: 17100000, max: 22800000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "ferrari25",
        brand: "Ferrari",
        name: "Daytona SP3",
        img: "https://www.supercarworld.com/images/fullpics/1001b.jpg",
        type: "Hypercar",
        comfort: 4,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 829,
            top_speed_kmh: 340,
            acceleration_sec: 2.8,
            weight_kg: 1650,
            power_to_weight: 0.50
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2021,
            end_year: 2024,
            units_produced: 599,
            country: "Italy"
        },
        price: {
            usd: { min: 500000, max: 750000, currency: "USD" },
            inr: { min: 47500000, max: 71250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari26",
        brand: "Ferrari",
        name: "296 GTB",
        img: "https://www.supercarworld.com/images/fullpics/1030k.jpg",
        type: "Hybrid Supercar",
        comfort: 4,
        mileage: 2,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 819,
            top_speed_kmh: 330,
            acceleration_sec: 2.9,
            weight_kg: 1470,
            power_to_weight: 0.56
        },
        technical: {
            engine: "3.0L Twin-Turbo Hybrid V6",
            displacement_cc: 3000,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 6
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2022,
            end_year: 2024,
            units_produced: 1500,
            country: "Italy"
        },
        price: {
            usd: { min: 270000, max: 350000, currency: "USD" },
            inr: { min: 25650000, max: 33250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "ferrari27",
        brand: "Ferrari",
        name: "Purosangue",
        img: "https://www.supercarworld.com/images/fullpics/1084.jpg",
        type: "Performance SUV",
        comfort: 4,
        mileage: 1,
        stability: 4,
        rating: 4.7,
        performance: {
            power_hp: 715,
            top_speed_kmh: 310,
            acceleration_sec: 3.3,
            weight_kg: 1900,
            power_to_weight: 0.38
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2023,
            end_year: 2024,
            units_produced: 500,
            country: "Italy"
        },
        price: {
            usd: { min: 270000, max: 320000, currency: "USD" },
            inr: { min: 25650000, max: 30400000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari28",
        brand: "Ferrari",
        name: "12Cilindri",
        img: "https://www.supercarworld.com/images/fullpics/1180.jpg",
        type: "Grand Tourer",
        comfort: 4,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 819,
            top_speed_kmh: 340,
            acceleration_sec: 3.0,
            weight_kg: 1680,
            power_to_weight: 0.49
        },
        technical: {
            engine: "6.5L Naturally Aspirated V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2024,
            end_year: 2024,
            units_produced: null,
            country: "Italy"
        },
        price: {
            usd: { min: 300000, max: 380000, currency: "USD" },
            inr: { min: 28500000, max: 36100000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari29",
        brand: "Ferrari",
        name: "328",
        img: "https://via.placeholder.com/960x640?text=Ferrari+328",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.3,
        performance: {
            power_hp: 270,
            top_speed_kmh: 263,
            acceleration_sec: 6.5,
            weight_kg: 1100,
            power_to_weight: 0.25
        },
        technical: {
            engine: "3.2L V8",
            displacement_cc: 3200,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 8
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1985,
            end_year: 1989,
            units_produced: 7409,
            country: "Italy"
        },
        price: {
            usd: { min: 70000, max: 100000, currency: "USD" },
            inr: { min: 6650000, max: 9500000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari30",
        brand: "Ferrari",
        name: "348",
        img: "https://via.placeholder.com/960x640?text=Ferrari+348",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.2,
        performance: {
            power_hp: 300,
            top_speed_kmh: 275,
            acceleration_sec: 6.1,
            weight_kg: 1120,
            power_to_weight: 0.27
        },
        technical: {
            engine: "3.4L V8",
            displacement_cc: 3400,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 8
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1989,
            end_year: 1994,
            units_produced: 3480,
            country: "Italy"
        },
        price: {
            usd: { min: 80000, max: 120000, currency: "USD" },
            inr: { min: 7600000, max: 11400000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari31",
        brand: "Ferrari",
        name: "512 TR / M",
        img: "https://via.placeholder.com/960x640?text=Ferrari+512+TR",
        type: "Grand Tourer",
        comfort: 4,
        mileage: 1,
        stability: 4,
        rating: 4.5,
        performance: {
            power_hp: 428,
            top_speed_kmh: 314,
            acceleration_sec: 3.9,
            weight_kg: 1550,
            power_to_weight: 0.28
        },
        technical: {
            engine: "4.9L Flat-12",
            displacement_cc: 4900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1991,
            end_year: 1999,
            units_produced: 1001,
            country: "Italy"
        },
        price: {
            usd: { min: 550000, max: 750000, currency: "USD" },
            inr: { min: 52250000, max: 71250000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari32",
        brand: "Ferrari",
        name: "456",
        img: "https://via.placeholder.com/960x640?text=Ferrari+456",
        type: "Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.4,
        performance: {
            power_hp: 436,
            top_speed_kmh: 302,
            acceleration_sec: 5.2,
            weight_kg: 1600,
            power_to_weight: 0.27
        },
        technical: {
            engine: "5.5L V12",
            displacement_cc: 5500,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel/Aluminum",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1992,
            end_year: 2003,
            units_produced: 1289,
            country: "Italy"
        },
        price: {
            usd: { min: 70000, max: 110000, currency: "USD" },
            inr: { min: 6650000, max: 10450000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari33",
        brand: "Ferrari",
        name: "F355",
        img: "https://via.placeholder.com/960x640?text=Ferrari+F355",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.5,
        performance: {
            power_hp: 375,
            top_speed_kmh: 295,
            acceleration_sec: 3.8,
            weight_kg: 1130,
            power_to_weight: 0.33
        },
        technical: {
            engine: "3.5L V8",
            displacement_cc: 3500,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 8
        },
        chassis: {
            material: "Steel monocoque with tubular subframe",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1994,
            end_year: 1999,
            units_produced: 3717,
            country: "Italy"
        },
        price: {
            usd: { min: 100000, max: 150000, currency: "USD" },
            inr: { min: 9500000, max: 14250000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari34",
        brand: "Ferrari",
        name: "550 Maranello",
        img: "https://via.placeholder.com/960x640?text=Ferrari+550",
        type: "Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.6,
        performance: {
            power_hp: 485,
            top_speed_kmh: 320,
            acceleration_sec: 3.6,
            weight_kg: 1650,
            power_to_weight: 0.29
        },
        technical: {
            engine: "5.5L V12",
            displacement_cc: 5500,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel/Aluminum",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1996,
            end_year: 2002,
            units_produced: 2681,
            country: "Italy"
        },
        price: {
            usd: { min: 120000, max: 180000, currency: "USD" },
            inr: { min: 11400000, max: 17100000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari35",
        brand: "Ferrari",
        name: "360 Modena",
        img: "https://via.placeholder.com/960x640?text=Ferrari+360",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.5,
        performance: {
            power_hp: 400,
            top_speed_kmh: 295,
            acceleration_sec: 3.7,
            weight_kg: 1260,
            power_to_weight: 0.32
        },
        technical: {
            engine: "3.6L V8",
            displacement_cc: 3600,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1999,
            end_year: 2005,
            units_produced: 7282,
            country: "Italy"
        },
        price: {
            usd: { min: 130000, max: 180000, currency: "USD" },
            inr: { min: 12350000, max: 17100000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari36",
        brand: "Ferrari",
        name: "575M Maranello",
        img: "https://via.placeholder.com/960x640?text=Ferrari+575M",
        type: "Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 5,
        rating: 4.6,
        performance: {
            power_hp: 515,
            top_speed_kmh: 325,
            acceleration_sec: 4.0,
            weight_kg: 1700,
            power_to_weight: 0.30
        },
        technical: {
            engine: "5.7L V12",
            displacement_cc: 5700,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel/Aluminum",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2002,
            end_year: 2006,
            units_produced: 2036,
            country: "Italy"
        },
        price: {
            usd: { min: 140000, max: 200000, currency: "USD" },
            inr: { min: 13300000, max: 19000000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari37",
        brand: "Ferrari",
        name: "360 Challenge Stradale",
        img: "https://via.placeholder.com/960x640?text=Ferrari+360+Stradale",
        type: "Track-Focused Sports Car",
        comfort: 2,
        mileage: 1,
        stability: 5,
        rating: 4.6,
        performance: {
            power_hp: 425,
            top_speed_kmh: 300,
            acceleration_sec: 3.5,
            weight_kg: 1250,
            power_to_weight: 0.34
        },
        technical: {
            engine: "3.6L V8",
            displacement_cc: 3600,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2003,
            end_year: 2005,
            units_produced: 298,
            country: "Italy"
        },
        price: {
            usd: { min: 170000, max: 240000, currency: "USD" },
            inr: { min: 16150000, max: 22800000, currency: "INR" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari38",
        brand: "Ferrari",
        name: "F430",
        img: "https://via.placeholder.com/960x640?text=Ferrari+F430",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 5,
        rating: 4.6,
        performance: {
            power_hp: 483,
            top_speed_kmh: 315,
            acceleration_sec: 3.5,
            weight_kg: 1380,
            power_to_weight: 0.35
        },
        technical: {
            engine: "4.3L V8",
            displacement_cc: 4300,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2004,
            end_year: 2009,
            units_produced: 4233,
            country: "Italy"
        },
        price: {
            usd: { min: 160000, max: 220000, currency: "USD" },
            inr: { min: 15200000, max: 20900000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari39",
        brand: "Ferrari",
        name: "612 Scaglietti",
        img: "https://via.placeholder.com/960x640?text=Ferrari+612",
        type: "Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.5,
        performance: {
            power_hp: 533,
            top_speed_kmh: 320,
            acceleration_sec: 3.4,
            weight_kg: 1800,
            power_to_weight: 0.30
        },
        technical: {
            engine: "5.7L V12",
            displacement_cc: 5700,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2004,
            end_year: 2010,
            units_produced: 1865,
            country: "Italy"
        },
        price: {
            usd: { min: 180000, max: 260000, currency: "USD" },
            inr: { min: 17100000, max: 24700000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari40",
        brand: "Ferrari",
        name: "575 SuperAmerica",
        img: "https://via.placeholder.com/960x640?text=Ferrari+575+SA",
        type: "Convertible Grand Tourer",
        comfort: 4,
        mileage: 1,
        stability: 5,
        rating: 4.6,
        performance: {
            power_hp: 540,
            top_speed_kmh: 320,
            acceleration_sec: 3.9,
            weight_kg: 1750,
            power_to_weight: 0.31
        },
        technical: {
            engine: "5.7L V12",
            displacement_cc: 5700,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel/Aluminum",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2005,
            end_year: 2006,
            units_produced: 499,
            country: "Italy"
        },
        price: {
            usd: { min: 200000, max: 280000, currency: "USD" },
            inr: { min: 19000000, max: 26600000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari41",
        brand: "Ferrari",
        name: "575 GTZ",
        img: "https://via.placeholder.com/960x640?text=Ferrari+575+GTZ",
        type: "Coachbuilt Grand Tourer",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.7,
        performance: {
            power_hp: 540,
            top_speed_kmh: 320,
            acceleration_sec: 3.9,
            weight_kg: 1800,
            power_to_weight: 0.30
        },
        technical: {
            engine: "5.7L V12",
            displacement_cc: 5700,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel/Aluminum",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2005,
            end_year: 2006,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            usd: { min: null, max: null, currency: "USD" },
            inr: { min: null, max: null, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "ferrari42",
        brand: "Ferrari",
        name: "P4/5",
        img: "https://via.placeholder.com/960x640?text=Ferrari+P4%2F5",
        type: "One-Off Supercar",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 660,
            top_speed_kmh: 362,
            acceleration_sec: 3.0,
            weight_kg: 1200,
            power_to_weight: 0.55
        },
        technical: {
            engine: "6.0L V12",
            displacement_cc: 6000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
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
            usd: { min: 4000000, max: 5500000, currency: "USD" },
            inr: { min: 380000000, max: 522500000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "ferrari43",
        brand: "Ferrari",
        name: "599 GTB",
        img: "https://via.placeholder.com/960x640?text=Ferrari+599+GTB",
        type: "Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 5,
        rating: 4.7,
        performance: {
            power_hp: 612,
            top_speed_kmh: 330,
            acceleration_sec: 3.7,
            weight_kg: 1710,
            power_to_weight: 0.36
        },
        technical: {
            engine: "6.0L V12",
            displacement_cc: 6000,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2006,
            end_year: 2012,
            units_produced: 5999,
            country: "Italy"
        },
        price: {
            usd: { min: 250000, max: 350000, currency: "USD" },
            inr: { min: 23750000, max: 33250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari44",
        brand: "Ferrari",
        name: "F430 Scuderia",
        img: "https://via.placeholder.com/960x640?text=Ferrari+F430+Scuderia",
        type: "Track-Focused Sports Car",
        comfort: 2,
        mileage: 1,
        stability: 5,
        rating: 4.7,
        performance: {
            power_hp: 503,
            top_speed_kmh: 319,
            acceleration_sec: 3.3,
            weight_kg: 1350,
            power_to_weight: 0.37
        },
        technical: {
            engine: "4.3L V8",
            displacement_cc: 4300,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2007,
            end_year: 2009,
            units_produced: 499,
            country: "Italy"
        },
        price: {
            usd: { min: 200000, max: 280000, currency: "USD" },
            inr: { min: 19000000, max: 26600000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari45",
        brand: "Ferrari",
        name: "California",
        img: "https://via.placeholder.com/960x640?text=Ferrari+California",
        type: "Convertible Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.5,
        performance: {
            power_hp: 453,
            top_speed_kmh: 310,
            acceleration_sec: 3.2,
            weight_kg: 1680,
            power_to_weight: 0.27
        },
        technical: {
            engine: "4.3L / 3.9L V8",
            displacement_cc: 4300,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2008,
            end_year: 2015,
            units_produced: 14661,
            country: "Italy"
        },
        price: {
            usd: { min: 180000, max: 250000, currency: "USD" },
            inr: { min: 17100000, max: 23750000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari46",
        brand: "Ferrari",
        name: "599 GTO",
        img: "https://via.placeholder.com/960x640?text=Ferrari+599+GTO",
        type: "High-Performance Grand Tourer",
        comfort: 3,
        mileage: 1,
        stability: 5,
        rating: 4.7,
        performance: {
            power_hp: 661,
            top_speed_kmh: 335,
            acceleration_sec: 3.6,
            weight_kg: 1705,
            power_to_weight: 0.39
        },
        technical: {
            engine: "6.0L V12",
            displacement_cc: 6000,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2010,
            end_year: 2012,
            units_produced: 300,
            country: "Italy"
        },
        price: {
            usd: { min: 350000, max: 500000, currency: "USD" },
            inr: { min: 33250000, max: 47500000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari47",
        brand: "Ferrari",
        name: "FF",
        img: "https://via.placeholder.com/960x640?text=Ferrari+FF",
        type: "Shooting Brake Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 5,
        rating: 4.6,
        performance: {
            power_hp: 651,
            top_speed_kmh: 335,
            acceleration_sec: 3.8,
            weight_kg: 1850,
            power_to_weight: 0.35
        },
        technical: {
            engine: "6.3L V12",
            displacement_cc: 6300,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2011,
            end_year: 2016,
            units_produced: 2247,
            country: "Italy"
        },
        price: {
            usd: { min: 260000, max: 350000, currency: "USD" },
            inr: { min: 24700000, max: 33250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari48",
        brand: "Ferrari",
        name: "SP12 EC",
        img: "https://via.placeholder.com/960x640?text=Ferrari+SP12",
        type: "One-Off Sports Car",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 562,
            top_speed_kmh: 325,
            acceleration_sec: 3.8,
            weight_kg: 1300,
            power_to_weight: 0.43
        },
        technical: {
            engine: "4.5L V8",
            displacement_cc: 4500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2012,
            end_year: 2012,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            usd: { min: 3000000, max: 4500000, currency: "USD" },
            inr: { min: 285000000, max: 427500000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "ferrari49",
        brand: "Ferrari",
        name: "F12 Berlinetta",
        img: "https://via.placeholder.com/960x640?text=Ferrari+F12",
        type: "Grand Tourer",
        comfort: 4,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 730,
            top_speed_kmh: 340,
            acceleration_sec: 3.1,
            weight_kg: 1710,
            power_to_weight: 0.43
        },
        technical: {
            engine: "6.3L Naturally Aspirated V12",
            displacement_cc: 6300,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2012,
            end_year: 2017,
            units_produced: 1430,
            country: "Italy"
        },
        price: {
            usd: { min: 320000, max: 420000, currency: "USD" },
            inr: { min: 30400000, max: 39900000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari50",
        brand: "Ferrari",
        name: "F12 TRS",
        img: "https://via.placeholder.com/960x640?text=Ferrari+F12+TRS",
        type: "One-Off Roadster",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 730,
            top_speed_kmh: 340,
            acceleration_sec: 2.9,
            weight_kg: 1700,
            power_to_weight: 0.43
        },
        technical: {
            engine: "6.3L Naturally Aspirated V12",
            displacement_cc: 6300,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2014,
            end_year: 2014,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            usd: { min: 3500000, max: 5000000, currency: "USD" },
            inr: { min: 332500000, max: 475000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "ferrari51",
        brand: "Ferrari",
        name: "458 Speciale",
        img: "https://via.placeholder.com/960x640?text=Ferrari+458+Speciale",
        type: "Track-Focused Sports Car",
        comfort: 2,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 597,
            top_speed_kmh: 325,
            acceleration_sec: 3.0,
            weight_kg: 1350,
            power_to_weight: 0.44
        },
        technical: {
            engine: "4.5L Naturally Aspirated V8",
            displacement_cc: 4500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2013,
            end_year: 2017,
            units_produced: 499,
            country: "Italy"
        },
        price: {
            usd: { min: 250000, max: 350000, currency: "USD" },
            inr: { min: 23750000, max: 33250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari52",
        brand: "Ferrari",
        name: "Sergio",
        img: "https://via.placeholder.com/960x640?text=Ferrari+Sergio",
        type: "Limited Edition Roadster",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 597,
            top_speed_kmh: 320,
            acceleration_sec: 3.1,
            weight_kg: 1300,
            power_to_weight: 0.46
        },
        technical: {
            engine: "4.5L Naturally Aspirated V8",
            displacement_cc: 4500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2015,
            end_year: 2016,
            units_produced: 6,
            country: "Italy"
        },
        price: {
            usd: { min: 3000000, max: 4500000, currency: "USD" },
            inr: { min: 285000000, max: 427500000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari53",
        brand: "Ferrari",
        name: "California T",
        img: "https://via.placeholder.com/960x640?text=Ferrari+California+T",
        type: "Convertible Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.5,
        performance: {
            power_hp: 553,
            top_speed_kmh: 316,
            acceleration_sec: 3.4,
            weight_kg: 1720,
            power_to_weight: 0.32
        },
        technical: {
            engine: "3.9L Twin-Turbo V8",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2014,
            end_year: 2017,
            units_produced: 3417,
            country: "Italy"
        },
        price: {
            usd: { min: 190000, max: 260000, currency: "USD" },
            inr: { min: 18050000, max: 24700000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari54",
        brand: "Ferrari",
        name: "GTC4Lusso",
        img: "https://via.placeholder.com/960x640?text=Ferrari+GTC4Lusso",
        type: "Shooting Brake Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 5,
        rating: 4.7,
        performance: {
            power_hp: 680,
            top_speed_kmh: 335,
            acceleration_sec: 3.5,
            weight_kg: 1900,
            power_to_weight: 0.36
        },
        technical: {
            engine: "6.3L V12 / 3.9L Twin-Turbo V8",
            displacement_cc: 6300,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2016,
            end_year: 2020,
            units_produced: 4400,
            country: "Italy"
        },
        price: {
            usd: { min: 300000, max: 400000, currency: "USD" },
            inr: { min: 28500000, max: 38000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "ferrari55",
        brand: "Ferrari",
        name: "F12tdf",
        img: "https://via.placeholder.com/960x640?text=Ferrari+F12tdf",
        type: "Track-Focused Grand Tourer",
        comfort: 3,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 769,
            top_speed_kmh: 340,
            acceleration_sec: 2.9,
            weight_kg: 1680,
            power_to_weight: 0.46
        },
        technical: {
            engine: "6.3L Naturally Aspirated V12",
            displacement_cc: 6300,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2016,
            end_year: 2017,
            units_produced: 799,
            country: "Italy"
        },
        price: {
            usd: { min: 400000, max: 550000, currency: "USD" },
            inr: { min: 38000000, max: 52250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari56",
        brand: "Ferrari",
        name: "458 MM Speciale",
        img: "https://via.placeholder.com/960x640?text=Ferrari+458+MM",
        type: "One-Off Sports Car",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 597,
            top_speed_kmh: 325,
            acceleration_sec: 3.1,
            weight_kg: 1350,
            power_to_weight: 0.44
        },
        technical: {
            engine: "4.5L Naturally Aspirated V8",
            displacement_cc: 4500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2016,
            end_year: 2016,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            usd: { min: 3500000, max: 5000000, currency: "USD" },
            inr: { min: 332500000, max: 475000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "ferrari57",
        brand: "Ferrari",
        name: "SP3JC",
        img: "https://via.placeholder.com/960x640?text=Ferrari+SP3JC",
        type: "One-Off Roadster",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 780,
            top_speed_kmh: 340,
            acceleration_sec: 2.9,
            weight_kg: 1700,
            power_to_weight: 0.46
        },
        technical: {
            engine: "6.3L Naturally Aspirated V12",
            displacement_cc: 6300,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2018,
            end_year: 2018,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            usd: { min: 4500000, max: 6500000, currency: "USD" },
            inr: { min: 427500000, max: 617500000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "ferrari58",
        brand: "Ferrari",
        name: "SP38",
        img: "https://via.placeholder.com/960x640?text=Ferrari+SP38",
        type: "One-Off Supercar",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 661,
            top_speed_kmh: 330,
            acceleration_sec: 3.0,
            weight_kg: 1350,
            power_to_weight: 0.49
        },
        technical: {
            engine: "3.9L Twin-Turbo V8",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2018,
            end_year: 2018,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            usd: { min: 4000000, max: 6000000, currency: "USD" },
            inr: { min: 380000000, max: 570000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "ferrari59",
        brand: "Ferrari",
        name: "Portofino",
        img: "https://via.placeholder.com/960x640?text=Ferrari+Portofino",
        type: "Convertible Grand Tourer",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.6,
        performance: {
            power_hp: 592,
            top_speed_kmh: 320,
            acceleration_sec: 3.5,
            weight_kg: 1770,
            power_to_weight: 0.33
        },
        technical: {
            engine: "3.9L Twin-Turbo V8",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2017,
            end_year: 2024,
            units_produced: 5000,
            country: "Italy"
        },
        price: {
            usd: { min: 200000, max: 280000, currency: "USD" },
            inr: { min: 19000000, max: 26600000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "ferrari60",
        brand: "Ferrari",
        name: "Monza SP1/SP2",
        img: "https://via.placeholder.com/960x640?text=Ferrari+Monza",
        type: "Limited Edition Speedster",
        comfort: 2,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 809,
            top_speed_kmh: 300,
            acceleration_sec: 3.8,
            weight_kg: 1300,
            power_to_weight: 0.62
        },
        technical: {
            engine: "6.5L Naturally Aspirated V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber/Aluminum",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2018,
            end_year: 2024,
            units_produced: 499,
            country: "Italy"
        },
        price: {
            usd: { min: 450000, max: 650000, currency: "USD" },
            inr: { min: 42750000, max: 61750000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari61",
        brand: "Ferrari",
        name: "488 Pista",
        img: "https://via.placeholder.com/960x640?text=Ferrari+488+Pista",
        type: "Track-Focused Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 711,
            top_speed_kmh: 340,
            acceleration_sec: 2.7,
            weight_kg: 1380,
            power_to_weight: 0.52
        },
        technical: {
            engine: "3.9L Twin-Turbo V8",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2018,
            end_year: 2020,
            units_produced: 1311,
            country: "Italy"
        },
        price: {
            usd: { min: 280000, max: 380000, currency: "USD" },
            inr: { min: 26600000, max: 36100000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari62",
        brand: "Ferrari",
        name: "F8 Tributo",
        img: "https://via.placeholder.com/960x640?text=Ferrari+F8",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 5,
        rating: 4.7,
        performance: {
            power_hp: 710,
            top_speed_kmh: 340,
            acceleration_sec: 2.9,
            weight_kg: 1395,
            power_to_weight: 0.51
        },
        technical: {
            engine: "3.9L Twin-Turbo V8",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2019,
            end_year: 2024,
            units_produced: 4800,
            country: "Italy"
        },
        price: {
            usd: { min: 270000, max: 330000, currency: "USD" },
            inr: { min: 25650000, max: 31350000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "ferrari63",
        brand: "Ferrari",
        name: "812 Competizione",
        img: "https://via.placeholder.com/960x640?text=Ferrari+812+Comp",
        type: "Track-Focused Grand Tourer",
        comfort: 3,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 819,
            top_speed_kmh: 340,
            acceleration_sec: 2.8,
            weight_kg: 1650,
            power_to_weight: 0.50
        },
        technical: {
            engine: "6.5L Naturally Aspirated V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2021,
            end_year: 2024,
            units_produced: 1000,
            country: "Italy"
        },
        price: {
            usd: { min: 380000, max: 500000, currency: "USD" },
            inr: { min: 36100000, max: 47500000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari64",
        brand: "Ferrari",
        name: "SP-8",
        img: "https://via.placeholder.com/960x640?text=Ferrari+SP-8",
        type: "One-Off Roadster",
        comfort: 5,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 710,
            top_speed_kmh: 340,
            acceleration_sec: 2.2,
            weight_kg: 1350,
            power_to_weight: 0.53
        },
        technical: {
            engine: "3.9L Twin-Turbo V8",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2024,
            end_year: 2024,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            usd: { min: 5000000, max: 7000000, currency: "USD" },
            inr: { min: 475000000, max: 665000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "One-Off"
    },
    {
        id: "ferrari65",
        brand: "Ferrari",
        name: "SF90 XX",
        img: "https://via.placeholder.com/960x640?text=Ferrari+SF90+XX",
        type: "Extreme Hybrid Supercar",
        comfort: 3,
        mileage: 2,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 1016,
            top_speed_kmh: 320,
            acceleration_sec: 2.5,
            weight_kg: 1600,
            power_to_weight: 0.64
        },
        technical: {
            engine: "4.0L Twin-Turbo V8 Hybrid",
            displacement_cc: 4000,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2025,
            end_year: 2025,
            units_produced: null,
            country: "Italy"
        },
        price: {
            usd: { min: 600000, max: 800000, currency: "USD" },
            inr: { min: 57000000, max: 76000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari66",
        brand: "Ferrari",
        name: "F80",
        img: "https://via.placeholder.com/960x640?text=Ferrari+F80",
        type: "Hypercar",
        comfort: 3,
        mileage: 2,
        stability: 5,
        rating: 5.0,
        performance: {
            power_hp: 1184,
            top_speed_kmh: 350,
            acceleration_sec: 2.5,
            weight_kg: 1575,
            power_to_weight: 0.75
        },
        technical: {
            engine: "Hybrid Twin-Turbo V6",
            displacement_cc: null,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 6
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2025,
            end_year: 2025,
            units_produced: null,
            country: "Italy"
        },
        price: {
            usd: { min: 700000, max: 950000, currency: "USD" },
            inr: { min: 66500000, max: 90250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari67",
        brand: "Ferrari",
        name: "296 Speciale",
        img: "https://via.placeholder.com/960x640?text=Ferrari+296+Spec",
        type: "Track-Focused Hybrid Sports Car",
        comfort: 3,
        mileage: 2,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 868,
            top_speed_kmh: 330,
            acceleration_sec: 2.7,
            weight_kg: 1480,
            power_to_weight: 0.59
        },
        technical: {
            engine: "3.0L Twin-Turbo V6 Hybrid",
            displacement_cc: 3000,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 6
        },
        chassis: {
            material: "Aluminum chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2025,
            end_year: 2025,
            units_produced: null,
            country: "Italy"
        },
        price: {
            usd: { min: 400000, max: 550000, currency: "USD" },
            inr: { min: 38000000, max: 52250000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "ferrari68",
        brand: "Ferrari",
        name: "FXX",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ferrari_FXX_-_2005_%287625225516%29.jpg/960px-Ferrari_FXX_-_2005_%287625225516%29.jpg",
        type: "Track-Only Hypercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 860,
            top_speed_kmh: 400,
            acceleration_sec: 2.8,
            weight_kg: 1350,
            power_to_weight: 0.64
        },
        technical: {
            engine: "6.3L V12",
            displacement_cc: 6300,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2005,
            end_year: 2009,
            units_produced: 30,
            country: "Italy"
        },
        price: {
            usd: { min: 7000000, max: 10000000, currency: "USD" },
            inr: { min: 665000000, max: 950000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari69",
        brand: "Ferrari",
        name: "599 XX",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ferrari_599XX_2.jpg/960px-Ferrari_599XX_2.jpg",
        type: "Track-Only Hypercar",
        comfort: 1,
        mileage: 1,
        stability: 5,
        rating: 4.8,
        performance: {
            power_hp: 740,
            top_speed_kmh: 340,
            acceleration_sec: 3.0,
            weight_kg: 1450,
            power_to_weight: 0.51
        },
        technical: {
            engine: "6.0L V12",
            displacement_cc: 6000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2009,
            end_year: 2012,
            units_produced: 30,
            country: "Italy"
        },
        price: {
            usd: { min: 8500000, max: 12000000, currency: "USD" },
            inr: { min: 807500000, max: 1140000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari70",
        brand: "Ferrari",
        name: "FXX K",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ferrari_FXX_K_%2824289658633%29.jpg/960px-Ferrari_FXX_K_%2824289658633%29.jpg",
        type: "Track-Only Hypercar",
        comfort: 1,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 1050,
            top_speed_kmh: 405,
            acceleration_sec: 2.4,
            weight_kg: 1365,
            power_to_weight: 0.77
        },
        technical: {
            engine: "6.3L V12 Hybrid",
            displacement_cc: 6300,
            fuel: "Hybrid",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2015,
            end_year: 2017,
            units_produced: 32,
            country: "Italy"
        },
        price: {
            usd: { min: 10000000, max: 14000000, currency: "USD" },
            inr: { min: 950000000, max: 1330000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "ferrari71",
        brand: "Ferrari",
        name: "P80/C",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ferrari_P80_C_2019_%282%29.jpg/960px-Ferrari_P80_C_2019_%282%29.jpg",
        type: "One-Off Bespoke Hypercar",
        comfort: 5,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 800,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1300,
            power_to_weight: 0.62
        },
        technical: {
            engine: "6.2L V12",
            displacement_cc: 6200,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2019,
            end_year: 2019,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            usd: { min: 15000000, max: 20000000, currency: "USD" },
            inr: { min: 1425000000, max: 1900000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "ferrari72",
        brand: "Ferrari",
        name: "KC23",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ferrari_KC23.jpg/960px-Ferrari_KC23.jpg",
        type: "Track-Focused Hypercar",
        comfort: 3,
        mileage: 1,
        stability: 5,
        rating: 4.9,
        performance: {
            power_hp: 920,
            top_speed_kmh: 370,
            acceleration_sec: 2.6,
            weight_kg: 1450,
            power_to_weight: 0.63
        },
        technical: {
            engine: "6.3L Twin-Turbo V12 Hybrid",
            displacement_cc: 6300,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2023,
            end_year: 2024,
            units_produced: null,
            country: "Italy"
        },
        price: {
            usd: { min: 18000000, max: 25000000, currency: "USD" },
            inr: { min: 1710000000, max: 2375000000, currency: "INR" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },

    // ---------------------------------------------
    // LAMBORGHINI MODELS
    // ---------------------------------------------

    {
        id: "lamborghini1",
        brand: "Lamborghini",
        name: "350 GT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lamborghini_350_GT.jpg/320px-Lamborghini_350_GT.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.2,
        performance: {
            power_hp: 270,
            top_speed_kmh: 250,
            acceleration_sec: 7.5,
            weight_kg: 1300,
            power_to_weight: 0.21
        },
        technical: {
            engine: "3.5L V12",
            displacement_cc: 3500,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1964,
            end_year: 1967,
            units_produced: 120,
            country: "Italy"
        },
        price: {
            inr: { min: 950000000, max: 1330000000, currency: "INR" },
            usd: { min: 10000000, max: 14000000, currency: "USD" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini2",
        brand: "Lamborghini",
        name: "400 GT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lamborghini_400_GT.jpg/320px-Lamborghini_400_GT.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.3,
        performance: {
            power_hp: 320,
            top_speed_kmh: 260,
            acceleration_sec: 6.9,
            weight_kg: 1350,
            power_to_weight: 0.24
        },
        technical: {
            engine: "4.0L V12",
            displacement_cc: 4000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1966,
            end_year: 1968,
            units_produced: 23,
            country: "Italy"
        },
        price: {
            inr: { min: 1140000000, max: 1520000000, currency: "INR" },
            usd: { min: 12000000, max: 16000000, currency: "USD" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini3",
        brand: "Lamborghini",
        name: "Miura P400",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/thirty/Lamborghini_Miura_P400.jpg/320px-Lamborghini_Miura_P400.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.7,
        performance: {
            power_hp: 350,
            top_speed_kmh: 280,
            acceleration_sec: 6.3,
            weight_kg: 1150,
            power_to_weight: 0.30
        },
        technical: {
            engine: "3.9L V12",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Steel monocoque",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "MidEngine RWD"
        },
        production: {
            start_year: 1966,
            end_year: 1969,
            units_produced: 109,
            country: "Italy"
        },
        price: {
            inr: { min: 2375000000, max: 3800000000, currency: "INR" },
            usd: { min: 25000000, max: 40000000, currency: "USD" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini4",
        brand: "Lamborghini",
        name: "Miura P400 S",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Lamborghini_Miura_S_1970.jpg/320px-Lamborghini_Miura_S_1970.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.8,
        performance: {
            power_hp: 370,
            top_speed_kmh: 285,
            acceleration_sec: 6.1,
            weight_kg: 1160,
            power_to_weight: 0.32
        },
        technical: {
            engine: "3.9L V12",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Steel monocoque",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "MidEngine RWD"
        },
        production: {
            start_year: 1969,
            end_year: 1971,
            units_produced: 140,
            country: "Italy"
        },
        price: {
            inr: { min: 2660000000, max: 4180000000, currency: "INR" },
            usd: { min: 28000000, max: 44000000, currency: "USD" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini5",
        brand: "Lamborghini",
        name: "Miura P400 SV",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lamborghini_Miura_SV.jpg/320px-Lamborghini_Miura_SV.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.9,
        performance: {
            power_hp: 385,
            top_speed_kmh: 290,
            acceleration_sec: 5.9,
            weight_kg: 1170,
            power_to_weight: 0.33
        },
        technical: {
            engine: "3.9L V12",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Steel monocoque",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "MidEngine RWD"
        },
        production: {
            start_year: 1971,
            end_year: 1973,
            units_produced: 150,
            country: "Italy"
        },
        price: {
            inr: { min: 3050000000, max: 4750000000, currency: "INR" },
            usd: { min: 32000000, max: 50000000, currency: "USD" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini6",
        brand: "Lamborghini",
        name: "Espada",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lamborghini_Espada_Series_III.jpg/320px-Lamborghini_Espada_Series_III.jpg",
        type: "Sports Car",
        comfort: 4,
        mileage: 1,
        stability: 3,
        rating: 4.1,
        performance: {
            power_hp: 325,
            top_speed_kmh: 245,
            acceleration_sec: 6.8,
            weight_kg: 1400,
            power_to_weight: 0.23
        },
        technical: {
            engine: "3.9L V12",
            displacement_cc: 3900,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Steel monocoque",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1968,
            end_year: 1978,
            units_produced: 1226,
            country: "Italy"
        },
        price: {
            inr: { min: 760000000, max: 1140000000, currency: "INR" },
            usd: { min: 8000000, max: 12000000, currency: "USD" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini7",
        brand: "Lamborghini",
        name: "Jarama",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lamborghini_Jarama_400_GTS.jpg/320px-Lamborghini_Jarama_400_GTS.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.0,
        performance: {
            power_hp: 365,
            top_speed_kmh: 260,
            acceleration_sec: 6.2,
            weight_kg: 1420,
            power_to_weight: 0.26
        },
        technical: {
            engine: "4.0L V12",
            displacement_cc: 4000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Steel monocoque",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1970,
            end_year: 1976,
            units_produced: 410,
            country: "Italy"
        },
        price: {
            inr: { min: 570000000, max: 900000000, currency: "INR" },
            usd: { min: 6000000, max: 9500000, currency: "USD" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini8",
        brand: "Lamborghini",
        name: "Urraco P250",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lamborghini_Urraco.jpg/320px-Lamborghini_Urraco.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 2,
        stability: 3,
        rating: 3.9,
        performance: {
            power_hp: 220,
            top_speed_kmh: 230,
            acceleration_sec: 8.5,
            weight_kg: 1000,
            power_to_weight: 0.22
        },
        technical: {
            engine: "2.5L V8",
            displacement_cc: 2500,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 8
        },
        chassis: {
            material: "Steel monocoque",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1972,
            end_year: 1979,
            units_produced: 791,
            country: "Italy"
        },
        price: {
            inr: { min: 285000000, max: 475000000, currency: "INR" },
            usd: { min: 3000000, max: 5000000, currency: "USD" }
        },
        era: "Classic",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini9",
        brand: "Lamborghini",
        name: "Countach LP400",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/fifty/Lamborghini_Countach_LP400.jpg/320px-Lamborghini_Countach_LP400.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.8,
        performance: {
            power_hp: 375,
            top_speed_kmh: 289,
            acceleration_sec: 5.8,
            weight_kg: 1300,
            power_to_weight: 0.29
        },
        technical: {
            engine: "4.0L V12",
            displacement_cc: 4000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel spaceframe",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1974,
            end_year: 1977,
            units_produced: 401,
            country: "Italy"
        },
        price: {
            inr: { min: 1425000000, max: 2375000000, currency: "INR" },
            usd: { min: 15000000, max: 25000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini10",
        brand: "Lamborghini",
        name: "Countach LP400 S",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Lamborghini_Countach_LP400S.jpg/320px-Lamborghini_Countach_LP400S.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.7,
        performance: {
            power_hp: 353,
            top_speed_kmh: 280,
            acceleration_sec: 6.2,
            weight_kg: 1310,
            power_to_weight: 0.27
        },
        technical: {
            engine: "4.0L V12",
            displacement_cc: 4000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel spaceframe",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1978,
            end_year: 1982,
            units_produced: 237,
            country: "Italy"
        },
        price: {
            inr: { min: 1710000000, max: 2660000000, currency: "INR" },
            usd: { min: 18000000, max: 28000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini11",
        brand: "Lamborghini",
        name: "Countach LP500 S",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lamborghini_Countach_LP500S.jpg/320px-Lamborghini_Countach_LP500S.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.8,
        performance: {
            power_hp: 375,
            top_speed_kmh: 295,
            acceleration_sec: 5.6,
            weight_kg: 1350,
            power_to_weight: 0.28
        },
        technical: {
            engine: "4.8L V12",
            displacement_cc: 4800,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel spaceframe",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1982,
            end_year: 1985,
            units_produced: 323,
            country: "Italy"
        },
        price: {
            inr: { min: 1900000000, max: 2850000000, currency: "INR" },
            usd: { min: 20000000, max: 30000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini12",
        brand: "Lamborghini",
        name: "Countach 5000 QV",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lamborghini_Countach_5000QV.jpg/320px-Lamborghini_Countach_5000QV.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 3,
        rating: 4.9,
        performance: {
            power_hp: 455,
            top_speed_kmh: 302,
            acceleration_sec: 4.9,
            weight_kg: 1450,
            power_to_weight: 0.31
        },
        technical: {
            engine: "5.2L V12",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel spaceframe",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1985,
            end_year: 1988,
            units_produced: 657,
            country: "Italy"
        },
        price: {
            inr: { min: 2375000000, max: 3325000000, currency: "INR" },
            usd: { min: 25000000, max: 35000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini13",
        brand: "Lamborghini",
        name: "Countach 25th Anniversary",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Lamborghini_Countach_25thAnniversary.jpg/320px-Lamborghini_Countach_25thAnniversary.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 3,
        rating: 4.9,
        performance: {
            power_hp: 455,
            top_speed_kmh: 302,
            acceleration_sec: 4.9,
            weight_kg: 1450,
            power_to_weight: 0.31
        },
        technical: {
            engine: "5.2L V12",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel spaceframe",
            brake_material: "Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1988,
            end_year: 1990,
            units_produced: 658,
            country: "Italy"
        },
        price: {
            inr: { min: 2660000000, max: 3610000000, currency: "INR" },
            usd: { min: 28000000, max: 38000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini14",
        brand: "Lamborghini",
        name: "Diablo",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lamborghini_Diablo.jpg/320px-Lamborghini_Diablo.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.8,
        performance: {
            power_hp: 492,
            top_speed_kmh: 325,
            acceleration_sec: 4.0,
            weight_kg: 1600,
            power_to_weight: 0.31
        },
        technical: {
            engine: "5.7L V12",
            displacement_cc: 5700,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel spaceframe",
            brake_material: "Brembo Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1990,
            end_year: 1993,
            units_produced: 2700,
            country: "Italy"
        },
        price: {
            inr: { min: 1900000000, max: 2850000000, currency: "INR" },
            usd: { min: 20000000, max: 30000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini15",
        brand: "Lamborghini",
        name: "Diablo VT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Lamborghini_Diablo_VT.jpg/320px-Lamborghini_Diablo_VT.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.8,
        performance: {
            power_hp: 510,
            top_speed_kmh: 330,
            acceleration_sec: 3.6,
            weight_kg: 1650,
            power_to_weight: 0.31
        },
        technical: {
            engine: "5.7L V12",
            displacement_cc: 5700,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel spaceframe",
            brake_material: "Brembo Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 1993,
            end_year: 1998,
            units_produced: 2100,
            country: "Italy"
        },
        price: {
            inr: { min: 2375000000, max: 3325000000, currency: "INR" },
            usd: { min: 25000000, max: 35000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini16",
        brand: "Lamborghini",
        name: "Diablo SV",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Lamborghini_Diablo_SV.jpg/320px-Lamborghini_Diablo_SV.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.7,
        performance: {
            power_hp: 510,
            top_speed_kmh: 330,
            acceleration_sec: 3.5,
            weight_kg: 1580,
            power_to_weight: 0.32
        },
        technical: {
            engine: "5.7L V12",
            displacement_cc: 5700,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel spaceframe",
            brake_material: "Brembo Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1995,
            end_year: 1998,
            units_produced: 400,
            country: "Italy"
        },
        price: {
            inr: { min: 1710000000, max: 2470000000, currency: "INR" },
            usd: { min: 18000000, max: 26000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini17",
        brand: "Lamborghini",
        name: "Diablo GT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lamborghini_Diablo_GT.jpg/320px-Lamborghini_Diablo_GT.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 3,
        rating: 4.9,
        performance: {
            power_hp: 575,
            top_speed_kmh: 338,
            acceleration_sec: 3.4,
            weight_kg: 1620,
            power_to_weight: 0.35
        },
        technical: {
            engine: "6.0L V12",
            displacement_cc: 6000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel with Carbon",
            brake_material: "Brembo Disc Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1999,
            end_year: 2000,
            units_produced: 80,
            country: "Italy"
        },
        price: {
            inr: { min: 2850000000, max: 3990000000, currency: "INR" },
            usd: { min: 30000000, max: 42000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini18",
        brand: "Lamborghini",
        name: "Diablo GTR",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Lamborghini_Diablo_GTR.jpg/320px-Lamborghini_Diablo_GTR.jpg",
        type: "Race Car",
        comfort: 1,
        mileage: 1,
        stability: 3,
        rating: 4.9,
        performance: {
            power_hp: 590,
            top_speed_kmh: 340,
            acceleration_sec: 3.2,
            weight_kg: 1550,
            power_to_weight: 0.38
        },
        technical: {
            engine: "6.0L V12",
            displacement_cc: 6000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Tubular steel with Carbon",
            brake_material: "Brembo Racing Brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 1999,
            end_year: 2000,
            units_produced: 50,
            country: "Italy"
        },
        price: {
            inr: { min: 4750000000, max: 6650000000, currency: "INR" },
            usd: { min: 50000000, max: 70000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini19",
        brand: "Lamborghini",
        name: "Murciélago",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/forty/Lamborghini_Murcielago.jpg/320px-Lamborghini_Murcielago.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.8,
        performance: {
            power_hp: 572,
            top_speed_kmh: 330,
            acceleration_sec: 3.8,
            weight_kg: 1650,
            power_to_weight: 0.35
        },
        technical: {
            engine: "6.2L V12",
            displacement_cc: 6200,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber and steel",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2001,
            end_year: 2006,
            units_produced: 3079,
            country: "Italy"
        },
        price: {
            inr: { min: 2660000000, max: 4275000000, currency: "INR" },
            usd: { min: 28000000, max: 45000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini20",
        brand: "Lamborghini",
        name: "Murciélago LP640",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lamborghini_Murcielago_LP640.jpg/320px-Lamborghini_Murcielago_LP640.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 640,
            top_speed_kmh: 340,
            acceleration_sec: 3.3,
            weight_kg: 1700,
            power_to_weight: 0.38
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber and steel",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2006,
            end_year: 2010,
            units_produced: 1907,
            country: "Italy"
        },
        price: {
            inr: { min: 3325000000, max: 4750000000, currency: "INR" },
            usd: { min: 35000000, max: 50000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini21",
        brand: "Lamborghini",
        name: "Murciélago LP670-4 SuperVeloce",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lamborghini_Murcielago_LP_670-4_SuperVeloce.jpg/320px-Lamborghini_Murcielago_LP_670-4_SuperVeloce.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 670,
            top_speed_kmh: 342,
            acceleration_sec: 3.2,
            weight_kg: 1650,
            power_to_weight: 0.41
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber and steel",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2009,
            end_year: 2010,
            units_produced: 186,
            country: "Italy"
        },
        price: {
            inr: { min: 4750000000, max: 6175000000, currency: "INR" },
            usd: { min: 50000000, max: 65000000, currency: "USD" }
        },
        era: "Modern",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini22",
        brand: "Lamborghini",
        name: "Gallardo",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Lamborghini_Gallardo.jpg/320px-Lamborghini_Gallardo.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.7,
        performance: {
            power_hp: 500,
            top_speed_kmh: 309,
            acceleration_sec: 3.2,
            weight_kg: 1520,
            power_to_weight: 0.33
        },
        technical: {
            engine: "5.0L V10",
            displacement_cc: 5000,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Brembo Brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2003,
            end_year: 2008,
            units_produced: 4099,
            country: "Italy"
        },
        price: {
            inr: { min: 1520000000, max: 2375000000, currency: "INR" },
            usd: { min: 16000000, max: 25000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini23",
        brand: "Lamborghini",
        name: "Gallardo LP560-4",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lamborghini_Gallardo_LP560-4.jpg/320px-Lamborghini_Gallardo_LP560-4.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.8,
        performance: {
            power_hp: 560,
            top_speed_kmh: 325,
            acceleration_sec: 3.4,
            weight_kg: 1550,
            power_to_weight: 0.36
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Manual/Auto",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum spaceframe",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2008,
            end_year: 2013,
            units_produced: 3000,
            country: "Italy"
        },
        price: {
            inr: { min: 1710000000, max: 2660000000, currency: "INR" },
            usd: { min: 18000000, max: 28000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini24",
        brand: "Lamborghini",
        name: "Gallardo LP570-4 Superleggera",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lamborghini_Gallardo_LP570-4_Superleggera.jpg/320px-Lamborghini_Gallardo_LP570-4_Superleggera.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 570,
            top_speed_kmh: 328,
            acceleration_sec: 3.2,
            weight_kg: 1450,
            power_to_weight: 0.39
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum spaceframe / Carbon fiber",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2010,
            end_year: 2013,
            units_produced: 598,
            country: "Italy"
        },
        price: {
            inr: { min: 1900000000, max: 2850000000, currency: "INR" },
            usd: { min: 20000000, max: 30000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini25",
        brand: "Lamborghini",
        name: "Sesto Elemento",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Lamborghini_Sesto_Elemento.jpg/320px-Lamborghini_Sesto_Elemento.jpg",
        type: "Hypercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 570,
            top_speed_kmh: 320,
            acceleration_sec: 2.6,
            weight_kg: 999,
            power_to_weight: 0.57
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 10
        },
        chassis: {
            material: "Forged composite carbon fiber",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2010,
            end_year: 2011,
            units_produced: 6,
            country: "Italy"
        },
        price: {
            inr: { min: 1900000000, max: 2850000000, currency: "INR" },
            usd: { min: 20000000, max: 30000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini26",
        brand: "Lamborghini",
        name: "Aventador LP700-4",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lamborghini_Aventador_LP_700-4.jpg/320px-Lamborghini_Aventador_LP_700-4.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 700,
            top_speed_kmh: 350,
            acceleration_sec: 2.9,
            weight_kg: 1575,
            power_to_weight: 0.44
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2011,
            end_year: 2016,
            units_produced: 5000,
            country: "Italy"
        },
        price: {
            inr: { min: 1900000000, max: 2660000000, currency: "INR" },
            usd: { min: 20000000, max: 28000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini27",
        brand: "Lamborghini",
        name: "Aventador LP720-4 50° Anniversario",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Lamborghini_Aventador_LP720-4_50_Anniversario.jpg/320px-Lamborghini_Aventador_LP720-4_50_Anniversario.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 720,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1600,
            power_to_weight: 0.45
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2013,
            end_year: 2013,
            units_produced: 100,
            country: "Italy"
        },
        price: {
            inr: { min: 2185000000, max: 2850000000, currency: "INR" },
            usd: { min: 23000000, max: 30000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini28",
        brand: "Lamborghini",
        name: "Aventador LP750-4 SuperVeloce",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lamborghini_Aventador_LP750-4_SV.jpg/320px-Lamborghini_Aventador_LP750-4_SV.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 750,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1550,
            power_to_weight: 0.48
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2015,
            end_year: 2017,
            units_produced: 2000,
            country: "Italy"
        },
        price: {
            inr: { min: 2375000000, max: 3325000000, currency: "INR" },
            usd: { min: 25000000, max: 35000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini29",
        brand: "Lamborghini",
        name: "Aventador S",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lamborghini_Aventador_S.jpg/320px-Lamborghini_Aventador_S.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 740,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1575,
            power_to_weight: 0.47
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2017,
            end_year: 2020,
            units_produced: 1800,
            country: "Italy"
        },
        price: {
            inr: { min: 2185000000, max: 2850000000, currency: "INR" },
            usd: { min: 23000000, max: 30000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini30",
        brand: "Lamborghini",
        name: "Aventador SVJ",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lamborghini_Aventador_SVJ.jpg/320px-Lamborghini_Aventador_SVJ.jpg",
        type: "Supercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 770,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1575,
            power_to_weight: 0.49
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2018,
            end_year: 2022,
            units_produced: 1600,
            country: "Italy"
        },
        price: {
            inr: { min: 2375000000, max: 3325000000, currency: "INR" },
            usd: { min: 25000000, max: 35000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini31",
        brand: "Lamborghini",
        name: "Aventador LP780-4 Ultimae",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lamborghini_Aventador_LP_780-4_Ultimae.jpg/320px-Lamborghini_Aventador_LP_780-4_Ultimae.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 780,
            top_speed_kmh: 355,
            acceleration_sec: 2.8,
            weight_kg: 1600,
            power_to_weight: 0.49
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2021,
            end_year: 2022,
            units_produced: 500,
            country: "Italy"
        },
        price: {
            inr: { min: 2660000000, max: 3610000000, currency: "INR" },
            usd: { min: 28000000, max: 38000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini32",
        brand: "Lamborghini",
        name: "Huracán LP610-4",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lamborghini_Huracan_LP610-4.jpg/320px-Lamborghini_Huracan_LP610-4.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.8,
        performance: {
            power_hp: 610,
            top_speed_kmh: 325,
            acceleration_sec: 3.2,
            weight_kg: 1450,
            power_to_weight: 0.42
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2014,
            end_year: 2016,
            units_produced: 3000,
            country: "Italy"
        },
        price: {
            inr: { min: 1520000000, max: 2090000000, currency: "INR" },
            usd: { min: 16000000, max: 22000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini33",
        brand: "Lamborghini",
        name: "Huracán LP580-2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lamborghini_Huracan_LP580-2.jpg/320px-Lamborghini_Huracan_LP580-2.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 3,
        rating: 4.7,
        performance: {
            power_hp: 580,
            top_speed_kmh: 320,
            acceleration_sec: 3.4,
            weight_kg: 1420,
            power_to_weight: 0.41
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2015,
            end_year: 2019,
            units_produced: 5000,
            country: "Italy"
        },
        price: {
            inr: { min: 1330000000, max: 1900000000, currency: "INR" },
            usd: { min: 14000000, max: 20000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini34",
        brand: "Lamborghini",
        name: "Huracán Performante",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lamborghini_Huracan_Performante.jpg/320px-Lamborghini_Huracan_Performante.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 640,
            top_speed_kmh: 325,
            acceleration_sec: 2.9,
            weight_kg: 1420,
            power_to_weight: 0.45
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2017,
            end_year: 2021,
            units_produced: 1500,
            country: "Italy"
        },
        price: {
            inr: { min: 1710000000, max: 2280000000, currency: "INR" },
            usd: { min: 18000000, max: 24000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Rare"
    },
    {
        id: "lamborghini35",
        brand: "Lamborghini",
        name: "Huracán EVO",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lamborghini_Huracan_Evo.jpg/320px-Lamborghini_Huracan_Evo.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 640,
            top_speed_kmh: 325,
            acceleration_sec: 2.9,
            weight_kg: 1450,
            power_to_weight: 0.44
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2019,
            end_year: 2024,
            units_produced: 4000,
            country: "Italy"
        },
        price: {
            inr: { min: 1710000000, max: 2185000000, currency: "INR" },
            usd: { min: 18000000, max: 23000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini36",
        brand: "Lamborghini",
        name: "Huracán STO",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lamborghini_Huracan_STO.jpg/320px-Lamborghini_Huracan_STO.jpg",
        type: "Supercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 640,
            top_speed_kmh: 310,
            acceleration_sec: 3.0,
            weight_kg: 1405,
            power_to_weight: 0.46
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2021,
            end_year: 2024,
            units_produced: 1400,
            country: "Italy"
        },
        price: {
            inr: { min: 1900000000, max: 2660000000, currency: "INR" },
            usd: { min: 20000000, max: 28000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "lamborghini37",
        brand: "Lamborghini",
        name: "Huracán Tecnica",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lamborghini_Huracan_Tecnica.jpg/320px-Lamborghini_Huracan_Tecnica.jpg",
        type: "Supercar",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 640,
            top_speed_kmh: 325,
            acceleration_sec: 2.9,
            weight_kg: 1450,
            power_to_weight: 0.44
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum and carbon fiber chassis",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2022,
            end_year: 2024,
            units_produced: 1200,
            country: "Italy"
        },
        price: {
            inr: { min: 1900000000, max: 2470000000, currency: "INR" },
            usd: { min: 20000000, max: 26000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "lamborghini38",
        brand: "Lamborghini",
        name: "Reventón",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lamborghini_Reventon.jpg/320px-Lamborghini_Reventon.jpg",
        type: "Hypercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 650,
            top_speed_kmh: 340,
            acceleration_sec: 3.3,
            weight_kg: 1600,
            power_to_weight: 0.41
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber body over tubular steel",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2007,
            end_year: 2009,
            units_produced: 21,
            country: "Italy"
        },
        price: {
            inr: { min: 5700000000, max: 8550000000, currency: "INR" },
            usd: { min: 60000000, max: 90000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini39",
        brand: "Lamborghini",
        name: "Sian FKP 37",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Lamborghini_Si%C3%A1n_FKP_37.jpg/320px-Lamborghini_Si%C3%A1n_FKP_37.jpg",
        type: "Hypercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 819,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1595,
            power_to_weight: 0.51
        },
        technical: {
            engine: "6.5L V12 + Supercapacitor Hybrid",
            displacement_cc: 6500,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2019,
            end_year: 2021,
            units_produced: 63,
            country: "Italy"
        },
        price: {
            inr: { min: 3800000000, max: 5700000000, currency: "INR" },
            usd: { min: 40000000, max: 60000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini40",
        brand: "Lamborghini",
        name: "Centenario",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lamborghini_Centenario.jpg/320px-Lamborghini_Centenario.jpg",
        type: "Hypercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 770,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1575,
            power_to_weight: 0.49
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2016,
            end_year: 2018,
            units_produced: 40,
            country: "Italy"
        },
        price: {
            inr: { min: 3990000000, max: 5700000000, currency: "INR" },
            usd: { min: 42000000, max: 60000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini41",
        brand: "Lamborghini",
        name: "Veneno",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lamborghini_Veneno.jpg/320px-Lamborghini_Veneno.jpg",
        type: "Hypercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 750,
            top_speed_kmh: 355,
            acceleration_sec: 2.8,
            weight_kg: 1550,
            power_to_weight: 0.48
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2013,
            end_year: 2014,
            units_produced: 9,
            country: "Italy"
        },
        price: {
            inr: { min: 3325000000, max: 4750000000, currency: "INR" },
            usd: { min: 35000000, max: 50000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "Extremely Rare"
    },
    {
        id: "lamborghini42",
        brand: "Lamborghini",
        name: "Egoista",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/thirty/Lamborghini_Egoista.jpg/320px-Lamborghini_Egoista.jpg",
        type: "Concept/Hypercar",
        comfort: 1,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 600,
            top_speed_kmh: 350,
            acceleration_sec: 3.0,
            weight_kg: 1350,
            power_to_weight: 0.44
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Manual",
            cylinders: 10
        },
        chassis: {
            material: "Carbon fiber and aluminum",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "RWD"
        },
        production: {
            start_year: 2013,
            end_year: 2013,
            units_produced: 0,
            country: "Italy"
        },
        price: {
            inr: { min: null, max: null, currency: "INR" },
            usd: { min: null, max: null, currency: "USD" }
        },
        era: "Contemporary",
        status: "Concept",
        rarity: "Concept"
    },
    {
        id: "lamborghini43",
        brand: "Lamborghini",
        name: "Terzo Millennio",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lamborghini_Terzo_Millennio.jpg/320px-Lamborghini_Terzo_Millennio.jpg",
        type: "Concept/Hypercar",
        comfort: 3,
        mileage: 3,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 910,
            top_speed_kmh: 370,
            acceleration_sec: 3.0,
            weight_kg: 1350,
            power_to_weight: 0.67
        },
        technical: {
            engine: "Full Electric — 4 Motors",
            displacement_cc: 0,
            fuel: "Electric",
            transmission: "Direct Drive",
            cylinders: 0
        },
        chassis: {
            material: "Carbon fiber advanced composite",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2017,
            end_year: 2017,
            units_produced: 0,
            country: "Italy"
        },
        price: {
            inr: { min: null, max: null, currency: "INR" },
            usd: { min: null, max: null, currency: "USD" }
        },
        era: "Contemporary",
        status: "Concept",
        rarity: "Concept"
    },
    {
        id: "lamborghini44",
        brand: "Lamborghini",
        name: "Revuelto",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lamborghini_Revuelto.jpg/320px-Lamborghini_Revuelto.jpg",
        type: "Supercar",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 1001,
            top_speed_kmh: 350,
            acceleration_sec: 2.5,
            weight_kg: 1850,
            power_to_weight: 0.54
        },
        technical: {
            engine: "6.5L V12 + 3 Electric Motors",
            displacement_cc: 6500,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monofuselage",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2023,
            end_year: 2024,
            units_produced: 500,
            country: "Italy"
        },
        price: {
            inr: { min: 3700000000, max: 4750000000, currency: "INR" },
            usd: { min: 39000000, max: 50000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "lamborghini45",
        brand: "Lamborghini",
        name: "Huracán Sterrato",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lamborghini_Huracan_Sterrato.jpg/320px-Lamborghini_Huracan_Sterrato.jpg",
        type: "Sports Car",
        comfort: 3,
        mileage: 1,
        stability: 4,
        rating: 4.8,
        performance: {
            power_hp: 610,
            top_speed_kmh: 260,
            acceleration_sec: 3.4,
            weight_kg: 1550,
            power_to_weight: 0.39
        },
        technical: {
            engine: "5.2L V10",
            displacement_cc: 5200,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 10
        },
        chassis: {
            material: "Aluminum and carbon fiber",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2023,
            end_year: 2024,
            units_produced: 1200,
            country: "Italy"
        },
        price: {
            inr: { min: 1710000000, max: 2280000000, currency: "INR" },
            usd: { min: 18000000, max: 24000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini46",
        brand: "Lamborghini",
        name: "Urus",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Lamborghini_Urus.jpg/320px-Lamborghini_Urus.jpg",
        type: "Super SUV",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.7,
        performance: {
            power_hp: 650,
            top_speed_kmh: 305,
            acceleration_sec: 3.6,
            weight_kg: 2200,
            power_to_weight: 0.30
        },
        technical: {
            engine: "4.0L Twin-Turbo V8",
            displacement_cc: 4000,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum and steel composite",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2018,
            end_year: 2024,
            units_produced: 15000,
            country: "Italy"
        },
        price: {
            inr: { min: 1710000000, max: 2185000000, currency: "INR" },
            usd: { min: 18000000, max: 23000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini47",
        brand: "Lamborghini",
        name: "Urus Performante",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lamborghini_Urus_Performante.jpg/320px-Lamborghini_Urus_Performante.jpg",
        type: "Super SUV",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.8,
        performance: {
            power_hp: 666,
            top_speed_kmh: 306,
            acceleration_sec: 3.5,
            weight_kg: 2150,
            power_to_weight: 0.31
        },
        technical: {
            engine: "4.0L Twin-Turbo V8",
            displacement_cc: 4000,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum and steel composite",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2022,
            end_year: 2024,
            units_produced: 3000,
            country: "Italy"
        },
        price: {
            inr: { min: 1900000000, max: 2375000000, currency: "INR" },
            usd: { min: 20000000, max: 25000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Uncommon"
    },
    {
        id: "lamborghini48",
        brand: "Lamborghini",
        name: "Urus SE",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lamborghini_Urus_SE.jpg/320px-Lamborghini_Urus_SE.jpg",
        type: "Super SUV",
        comfort: 4,
        mileage: 2,
        stability: 4,
        rating: 4.9,
        performance: {
            power_hp: 800,
            top_speed_kmh: 312,
            acceleration_sec: 3.4,
            weight_kg: 2300,
            power_to_weight: 0.35
        },
        technical: {
            engine: "4.0L Twin-Turbo V8 + Electric Motor",
            displacement_cc: 4000,
            fuel: "Hybrid",
            transmission: "Automatic",
            cylinders: 8
        },
        chassis: {
            material: "Aluminum and steel composite",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2024,
            end_year: 2024,
            units_produced: null,
            country: "Italy"
        },
        price: {
            inr: { min: 2090000000, max: 2660000000, currency: "INR" },
            usd: { min: 22000000, max: 28000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Active",
        rarity: "Rare"
    },
    {
        id: "lamborghini49",
        brand: "Lamborghini",
        name: "SC18 Alston",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lamborghini_SC18_Alston.jpg/320px-Lamborghini_SC18_Alston.jpg",
        type: "Hypercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 770,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1550,
            power_to_weight: 0.50
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2018,
            end_year: 2018,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            inr: { min: 3325000000, max: 3800000000, currency: "INR" },
            usd: { min: 35000000, max: 40000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    },
    {
        id: "lamborghini50",
        brand: "Lamborghini",
        name: "SC20",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lamborghini_SC20.jpg/320px-Lamborghini_SC20.jpg",
        type: "Hypercar",
        comfort: 2,
        mileage: 1,
        stability: 4,
        rating: 5.0,
        performance: {
            power_hp: 770,
            top_speed_kmh: 350,
            acceleration_sec: 2.8,
            weight_kg: 1550,
            power_to_weight: 0.50
        },
        technical: {
            engine: "6.5L V12",
            displacement_cc: 6500,
            fuel: "Petrol",
            transmission: "Automatic",
            cylinders: 12
        },
        chassis: {
            material: "Carbon fiber monocoque",
            brake_material: "Carbon-ceramic brakes",
            suspension: "Double Wishbone",
            drivetrain: "AWD"
        },
        production: {
            start_year: 2020,
            end_year: 2020,
            units_produced: 1,
            country: "Italy"
        },
        price: {
            inr: { min: 3610000000, max: 4370000000, currency: "INR" },
            usd: { min: 38000000, max: 46000000, currency: "USD" }
        },
        era: "Contemporary",
        status: "Discontinued",
        rarity: "One-Off"
    }
];


export default cars;