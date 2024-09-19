import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db";
import logger from "./utils/logger";
import router from "./routes/index.route";
import cookieParser from "cookie-parser";
import passport from "passport";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/api", router);
app.listen(PORT, async () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
  await connectDB();
});
