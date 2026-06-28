import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

export async function connectDB() {
    const MONGODB_URI = process.env.MONGODB_URI;
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.log("Error connecting to database:",err);
        process.exit(1);
    }
}
