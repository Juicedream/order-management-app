import dotenv from "dotenv";

dotenv.config();
import jwt from "jsonwebtoken";

export async function productAuthMiddleware(req, res, next) {
    //middleware logic here
    const token = req.cookies?.auth_token;
    // console.log("Auth Token in Middleware: ", token);
    try {

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: No authentication token provided"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return  res.status(401).json({
                success: false,
                message: "Unauthorized: Invalid authentication token"
            })
        }

        if(decoded.role !== 'admin'){
            return res.status(403).json({
                success: false,
                message: "Forbidden: You do not have permission to perform this action"
            });
        }
        req.user = decoded?.userId;
        next();
    } catch (error) {
        console.log("Product Auth Middleware Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Product Auth Middleware has an error",
            error: error.message
        })
    }


}