import express from "express";
import { loginController, registerController, riderRegistrationController, verifyEmailController } from "../controller/auth.controller.js";
import payloadValidation from "../middlewares/validation.middleware.js";


const authRouter = express.Router();

authRouter
    .post("/login", loginController)
    .post("/register", registerController)
    .get("/verify-email/:verificationToken", verifyEmailController)

    // Rider registration
    .post(
        "/rider-login", 
        payloadValidation.riderRegistration, 
        riderRegistrationController
    )










export default authRouter;