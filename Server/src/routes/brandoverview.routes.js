import express from "express";
import { BrandOverview } from "../models/brandoverview.models.js";
import overviewbrands from "../db/data/overview.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const brands = await BrandOverview.find()
        // console.log(brands)
        return res.status(200).json(brands)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const brand = await BrandOverview.findOne({
            id: req.params.id
        })
        if (!brand){
            return res.status(400).json({message: "Brand not found"})
        }
        // console.log(brand)
        return res.status(200).json(brand)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

export default router