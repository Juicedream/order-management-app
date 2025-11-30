import mongoose  from "mongoose";

const riderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    age: {
        type: Number,
    },
    token: {
        value: String,
        createdAt: {
            type: Date,
            default: Date.now,
            index: { expires: '5m' }
        }
    },
    phoneNumber: { type: String },
    isOnboarded: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rating"
        }
    ],
    vehicle: {        
        type: {
            type: String,
            enum: ["Car", "Bicycle", "Motorcycle", "Powerbike", "Van", "Bus"],
        },
        number: {
            type: String,
            unique: true
        },
        color: {
            type: String,
        },
    },
    payment: {
        mode: {
            type: String,
            enum: ["Transfer", "Card", "Cash"],
        },
        payId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Payment"
        }
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
    joinedAt: {
        type: Date,
        default: Date.now
    },  
}, { timestamps: true });

export const Rider = mongoose.model('Rider', riderSchema);