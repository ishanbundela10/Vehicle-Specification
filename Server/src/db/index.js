import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

const connectDB = async () => {
    try {
    console.log("connecting...")
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    console.log(
      `MongoDB Connected: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("ERROR:", error)
    process.exit(1);
  }
}

export default connectDB;