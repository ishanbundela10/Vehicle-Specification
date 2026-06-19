import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/db/index.js";
import { Car } from "./src/models/car.models.js";
import cars from "./src/db/data/cars.js"

const seedData = async () => {
  try {
    await connectDB();

    await Car.deleteMany(); // optional (clears old data)

    await Car.insertMany(cars);

    console.log("Cars inserted successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
