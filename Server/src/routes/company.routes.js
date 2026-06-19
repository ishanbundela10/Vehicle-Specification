import express from "express";
import { Company } from "../models/company.models.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { title } = req.query;

    let filter = {};

    if (title) {
      filter.title = { $regex: new RegExp(title, "i") };
    }

    const companies = await Company.find(filter);

    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
