import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error: ", error);
    process.exit(1); // Exit process with failure
  }
};
