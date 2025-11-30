// config/db.connect.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoOrderDb1Uri = process.env.MONGO_ORDER_DB1_URI;

async function connectToOrderDatabase1() {
  try {
    await mongoose.connect(mongoOrderDb1Uri);
    console.log("✅ Connected to Order Database 1 successfully");

    mongoose.connection.on("connected", () => {
      console.log("🟢 Mongoose connected");
    });
    mongoose.connection.on("error", (err) => {
      console.error("🔴 Mongoose connection error:", err);
    });
    mongoose.connection.on("disconnected", () => {
      console.log("🟠 Mongoose disconnected");
    });

    return true;
  } catch (error) {
    console.error("❌ Error connecting to Order Database 1:", error);
    return false;
  }
}

export { connectToOrderDatabase1 };