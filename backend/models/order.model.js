import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true, default:"OM" + "-" + Date.now() + "-" + mongoose.Types.ObjectId },
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
    totalQuantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    currency: { type: String, default: 'NGN', enum: ['NGN', 'USD'] },
    status: { type: String, default: 'Pending', enum: ['Pending', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'] },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });
 
export const Order = mongoose.model('Order', orderSchema);