import { isValidObjectId } from "mongoose";
import { Product } from "../models/products.model.js";

export async function createProductController(req, res) {
    const { name, price, image, description } = req.body;

    try {
        if (!name || !image || !price || !description) {
            return res.status(400).json({
                success: false,
                message: "Name, Image and Price are required to create a product"
            })
        }
        if(isNaN(price) || price <= 0){
            return res.status(400).json({
                success: false,
                message: "Price must be a valid number greater than zero"
            })
        }
        const newProduct = new Product({
            name,
            price,
            description,
        });
        await newProduct.save();

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: newProduct
        })
    } catch (error) {
        console.log("Create Product Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Create Product controller has an error",
            error: error.message
        })
    }

}

export async function getAllProductsController(req, res) {
    try {
        const products = await Product.find({});
        return res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            products
        })
    } catch (error) {
        console.log("Get All Products Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Get All Products controller has an error",
            error: error.message
        })
    }
}
export async function getProductByIdController(req, res) {
    const { id } = req.params;
    try {
        if (!isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid product ID"
            })
        }

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product retrieved successfully",
            product
        })
    } catch (error) {
        console.log("Get Product By ID Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Get Product By ID controller has an error",
            error: error.message
        })
    }

}

export async function updateProductController(req, res) {
    const { id } = req.params;

    try {
         if (!isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid product ID"
            })
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updatedProduct
        })
    } catch (error) {
        console.log("Update Product Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Update Product controller has an error",
            error: error.message
        }) 
    }
}

export async function deleteProductController(req, res) {
    const { id } = req.params;
    try{
         if (!isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid product ID"
            })
        }
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            product: deletedProduct
        })
    }catch(error){
        console.log("Delete Product Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Delete Product controller has an error",
            error: error.message
        })
    }
}