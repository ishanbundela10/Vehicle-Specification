import express from "express";
import { BrandOverview } from "../models/brandoverview.models.js";

const router = express.Router();

// GET ALL BRANDS OVERVIEW
router.get("/", async (req, res) => {
    try {
        const brands = await BrandOverview.find();
        return res.status(200).json(brands);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// GET BRAND OVERVIEW BY ID / BRAND NAME (Flexible Search)
router.get("/:id", async (req, res) => {
    try {
        const rawId = req.params.id; // e.g., "audi", "bmw", "mercedes"
        const cleanId = rawId.replace(/[-_\s]/g, "").toLowerCase();

        // Search by exact ID OR regex on brand name (so "audi" matches "Audi Sport")
        const brand = await BrandOverview.findOne({
            $or: [
                { id: cleanId },
                { id: { $regex: new RegExp(cleanId, "i") } },
                { brand: { $regex: new RegExp(rawId, "i") } }
            ]
        });

        if (!brand) {
            return res.status(404).json({ message: "Brand overview not found in MongoDB" });
        }

        return res.status(200).json(brand);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default router;