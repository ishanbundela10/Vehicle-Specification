import mongoose from "mongoose";

const famousCarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
});

const headquarterSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

const brandOverviewSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },

    brand: {
      type: String,
      required: true,
      unique: true
    },

    logo: {
      type: String,
      required: true
    },

    founded_year: {
      type: Number,
      required: true
    },

    founder: {
      type: String,
      required: true
    },

    headquarter: headquarterSchema,

    description: {
      type: String,
      required: true
    },

    top_speed_onroad: Number,
    top_speed_trackonly: Number,

    torque_onroad: Number,
    torque_trackonly: Number,

    fastest_onroad: String,
    fastest_trackonly: String,

    famous_cars: [famousCarSchema]
  },
  {
    timestamps: true
  }
);

export const BrandOverview = mongoose.model("BrandOverview",  brandOverviewSchema);