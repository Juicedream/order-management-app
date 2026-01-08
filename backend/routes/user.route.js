import express from 'express';
import { adminAuthMiddleware, userAuthMiddleware } from '../middlewares/user.middleware.js';
import { getAllUsersController, getUserByIdController, getUserProfileController, getUsersByRoleController } from '../controller/user.controller.js';
const userRouter = express.Router();

userRouter
    .get("/all", userAuthMiddleware, adminAuthMiddleware, getAllUsersController)
    .get("/profile", userAuthMiddleware, getUserProfileController)
    .get("/:id", userAuthMiddleware, adminAuthMiddleware, getUserByIdController)
    .get("/role/:role", userAuthMiddleware, getUsersByRoleController)
    .post("/create-rider", userAuthMiddleware, adminAuthMiddleware)
    .post("customer/:id/promote-to-rider", userAuthMiddleware, adminAuthMiddleware)
    .post("customer/:id/demote-rider", userAuthMiddleware, adminAuthMiddleware)
    .patch("/update-profile", userAuthMiddleware)
    .patch("customer/:id", userAuthMiddleware, adminAuthMiddleware)
    .patch("rider/:id", userAuthMiddleware, adminAuthMiddleware)
    .delete("/:id", userAuthMiddleware, adminAuthMiddleware)
    .delete("delete-profile", userAuthMiddleware)








export default userRouter;