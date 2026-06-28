import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import express from "express";

dotenv.config();

const app = express();



app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})
