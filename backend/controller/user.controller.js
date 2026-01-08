import { isValidObjectId } from "mongoose";
import { User } from "../models/user.model.js";


export async function getAllUsersController(req, res) {
    try {
        // Logic to fetch all users from the database
        // Assuming User is a mongoose model
        const users = await User.find().select('-password'); // Exclude password field
        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            users
        });
    } catch (error) {
        console.log("Get All Users Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Unable to fetch users",
            error: error.message
        });
    }
}

export async function getUserProfileController(req, res) {
    try {
        const userId = req.user; // Assuming user ID is set in req.user by authentication middleware
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "User profile fetched successfully",
            user
        });
    } catch (error) {
        console.log("Get User Profile Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Unable to fetch user profile",
            error: error.message
        });
    }
}

export async function getUserByIdController(req, res) {
    try {
        const userId = req.params.id;
        if (!isValidObjectId(userId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID"
            });
        }
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user
        });
    } catch (error) {
        console.log("Get User By ID Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Unable to fetch user",
            error: error.message
        });
    }
}

export async function getUsersByRoleController(req, res) {
    const {role} = req.params;
    let roles = ['customer', 'rider', 'admin'];
    if(!roles.includes(role)){
        return res.status(400).json({
            success: false,
            message: "Invalid role parameter"
        });
    }
    try {
        const users = await User.find({ role }).select('-password');
        return res.status(200).json({
            success: true,
            message: role + "s fetched successfully",
            users
        });
    } catch (error) {
        console.log("Get User by Role Controller Error: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server error: Unable to fetch" + role + "s",
            error: error.message
        });
    }
}