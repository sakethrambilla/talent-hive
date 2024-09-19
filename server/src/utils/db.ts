import mongoose from "mongoose";
import logger from "./logger";

function connectDB() {
  const dbUri = process.env.DATABASE_URI as string;
  try {
    const db = mongoose.connect(dbUri);
    logger.info("Connect to Database");
  } catch (error) {
    logger.error("Coudn't connect to database");
  }
}

export default connectDB;
