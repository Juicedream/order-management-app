import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export async function userAuthMiddleware(req, res, next) {
    const token = req.cookies?.auth_token;
    try {
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: No authentication token provided"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Invalid authentication token"
            })
        }

        req.user = decoded?.userId;
        req.role = decoded?.role;
        next();

    } catch (error) {
        console.log("User Auth Middleware Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: User Auth Middleware has an error",
            error: error.message
        })
    }
}

export function adminAuthMiddleware(req, res, next) {
    if (req.role !== 'admin') {
        const error = new Error("Forbidden: Admins only");
        error.status = 403;
        return next(error);
    } else {
        next();
    }
}

export function riderAuthMiddleware(req, res, next) {
    if (req.role !== 'rider') {
        const error = new Error("Forbidden: Riders only");
        error.status = 403;
        return next(error);
    } else {
        next();
    }
}
export function customerAuthMiddleware(req, res, next) {
    if (req.role !== 'customer') {
        const error = new Error("Forbidden: Customers only");
        error.status = 403;
        return next(error);
    } else {
        next();
    }
}