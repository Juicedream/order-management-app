import express from "express";
import { createProductController, deleteProductController, getAllProductsController, getProductByIdController, updateProductController } from "../controller/product.controller.js";
import { productAuthMiddleware } from "../middlewares/product.middleware.js";


const productRouter = express.Router();

productRouter
    .get("/all", getAllProductsController)
    .get("/:id", getProductByIdController)
    .post("/create", createProductController)
    .patch("/:id", productAuthMiddleware, updateProductController)
    .delete("/:id", productAuthMiddleware, deleteProductController)










export default productRouter;