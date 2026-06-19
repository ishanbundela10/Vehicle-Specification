import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    comfort: {
        type: Number,
        min: 1,
        max: 5
    },
    mileage: {
        type: Number,
        min: 1,
        max: 5
    },
    stability: {
        type: Number,
        min: 1,
        max: 5
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    performance: {
        power_hp: Number,
        top_speed_kmh: Number,
        acceleration_sec: Number,
        weight_kg: Number,
        power_to_weight: Number
    },
    technical: {
        engine: String,
        displacement_cc: Number,
        fuel: String,
        transmission: String,
        cylinders: Number
    },
    chassis: {
        material: String,
        brake_material: String,
        suspension: String,
        drivetrain: String
    },
    production: {
        start_year: Number,
        end_year: Number,
        units_produced: Number,
        country: String
    },
    price: {
        usd: {
            min: Number,
            max: Number,
            currency: String
        },
        inr: {
            min: Number,
            max: Number,
            currency: String
        }
    },
    isFamous: {
        type: Boolean,
        default: false
    },
    era: String,
    status: String,
    rarity: String
}, { timestamps: true })

export const Car = mongoose.model("Car", carSchema)