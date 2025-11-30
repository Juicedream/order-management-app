import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    description: { type: String },
    inStock: { type: Boolean, default: true },
    quantity: { type: Number, default: 0 },
    currency: { type: String, default: 'NGN', enum: ['NGN', 'USD'] },
    digitalProduct: { type: Boolean, default: false }
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);

