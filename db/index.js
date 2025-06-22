import mongoose from "mongoose";
import dotenv from "dotenv";
// import User from "../models/user/index.js";
import chalk from "chalk";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(chalk.bgBlue("MongoDB connected"));
  })
  .catch((err) => {
    console.error(chalk.redBright("MongoDB connection error:", err));
  });

export default mongoose;
