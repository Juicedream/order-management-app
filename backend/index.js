import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectToOrderDatabase1 } from "./config/db.connect.js";
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const apiVersion = "v1"
const apiStarterUrl = "/api/" + apiVersion; //http://localhost:3000/api/v1

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// connection to databases and other routes would go here
let db1 = await connectToOrderDatabase1();

app.get("/", (req, res) => {
    res.send("<h1>Order Management Backend API</h1> <p>Welcome to our page</p>")
})

app.use(apiStarterUrl, authRoutes);
app.use(apiStarterUrl + "/product", productRoutes);
app.use(apiStarterUrl + "/user", userRoutes);

app.get(`${apiStarterUrl}/health`, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Order Management Backend Server is running",
        database_connection: [{
            order_database_1: db1 ? "Connected": "Not Connected"
        }]
    })
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
})

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
    method: req.method,
  });
});

app.listen(PORT, () => console.log(`Order management Server is running on http://localhost:${PORT}`));