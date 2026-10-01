
import express from "express";
import { Car } from "../models/car.models.js";

const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const cars = await Car.find();
//     res.status(200).json(cars);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/famous", async (req, res) => {
  try {
    const cars = await Car.find({ isFamous: true });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // console.log(cars)
});

router.get("/test", async (req, res) => {
  const car = await Car.findOne({})   // get ANY car
  console.log("Sample car:", car)     // see exact field names
  return res.status(200).json(car)
})  

router.get("/brand/:brandName/:modelName", async (req, res) => {
  try {
    const { brandName, modelName } = req.params
    // console.log("brandName:", brandName)
    // console.log("modelName:", modelName)  
    const car = await Car.findOne({
       brand: { $regex: new RegExp(`^${brandName}$`, "i") },
       name: { $regex: new RegExp(`^${modelName}$`, "i") }
    });
    // console.log(car)
    
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    return res.status(200).json(car);
  } catch (error) {
    console.log("error:", error.message)
    return res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { brand } = req.query;
    let filter = {};

    if (brand) {
      // Escape special regex characters + exact match + case-insensitive
      const escaped = brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      filter.brand = { $regex: new RegExp(`^${escaped}$`, "i") };
    }

    const cars = await Car.find(filter).sort({ name: 1 });
    // console.log("Brand filter:", brand, "=> Found:", cars.length);

    return res.status(200).json(cars);
  } catch (error) {
    console.error("GET /api/cars error:", error.message);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
