import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/db/index.js";
import { Car } from "./src/models/car.models.js"
import cars from "./src/db/data/cars.js"

// import { Company } from "./src/models/company.models.js";
// import companies from "./src/db/data/company.js";

// import { BrandOverview } from "./src/models/brandoverview.models.js";
// import overviewbrands from "./src/db/data/overview.js";

const seedData = async () => {
  try {
    await connectDB();

    // await Car.deleteMany(); // optional (clears old data)

    await Car.insertMany(cars);

    console.log("cars inserted successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
