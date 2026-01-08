import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    role: {
      type: String,
      default: "customer",
      enum: ["customer", "admin", "rider"],
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    address: { type: String },
    phoneNumber: { type: String },
    otpCode: { type: String, default: "", expiresAt: 60 * 2000 }, //2 minutes expiration
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String, default: "", expiresAt: 60 * 10000 }, //10 minutes expiration
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
