import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Company = mongoose.model("Company", companySchema)
