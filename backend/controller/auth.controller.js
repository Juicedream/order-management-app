import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { generateVerificationToken } from "../utils/function.js";
import { sendVerificationEmail } from "../config/mail.config.js";
import { Rider } from "../models/rider.model.js";

dotenv.config();
const salt = process.env.SALT || 10;
const tokenExpiration = "1d";

export async function loginController(req, res) {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username or email and password are required",
      });
    }
    const userExists = await User.findOne({
      $or: [{ username }, { email: username }],
    });

    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    let email = userExists.email;

    const verifyPassword = await bcrypt.compare(password, userExists.password);

    if (!verifyPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    if (!userExists.isVerified && userExists.verificationToken) {
      return res.status(403).json({
        success: false,
        message:
          "Please verify your email to login, check your mail inbox or spam folder",
      });
    }

    if (!userExists.isVerified && !userExists.verificationToken) {
      let verificationToken = generateVerificationToken(userExists.username);
      userExists.verificationToken = verificationToken;
      await sendVerificationEmail(email, verificationToken);
      await userExists.save();
      return res.status(403).json({
        success: false,
        message:
          "Please re-verify your email to login, check your mail inbox or spam folder",
      });
    }

    // jwt token generation
    const token = jwt.sign(
      {
        userId: userExists._id,
        role: userExists.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: tokenExpiration }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      success: true,
      token,
      message:
        "Login Successful, " +
        userExists.username.split("")[0].toUpperCase() +
        userExists.username.slice(1),
      user: userExists,
    });
  } catch (error) {
    console.log("Login controller Error occured: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error: Login controller has an error",
      error: error.message,
    });
  }
}

export async function registerController(req, res) {
  const { username, email, password, role } = req.body;
  let userNameLength = 6;
  let passwordLength = 6;
  let roles = ["customer", "rider"];
  try {
    if (!username || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (username.length < userNameLength) {
      return res.status(400).json({
        success: false,
        message: `Username must have at least ${userNameLength} characters`,
      });
    }
    if (password.length < passwordLength) {
      return res.status(400).json({
        success: false,
        message: `Password must have at least ${userNameLength} characters`,
      });
    }
    if (!email.includes("@") || !email.includes(".")) {
      return res.status(400).json({
        success: false,
        message: "Invalid email provided",
      });
    }
    if (!roles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role provided",
      });
    }
    //check existing user
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username or Email already in use",
      });
    }
    const hashedPassword = await bcrypt.hash(password, Number(salt));
    // verfication token generation
    let verificationToken = generateVerificationToken(username);

    // save registered user to db
    const new_user = new User({
      username,
      email,
      password: hashedPassword,
      role,
      verificationToken,
    });
    await sendVerificationEmail(email, verificationToken);
    await new_user.save();

    return res.status(201).json({
      success: true,
      message: "Kindly verify your email to complete registration!",
      user: new_user,
    });
  } catch (error) {
    console.log("Registration Error occured: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error: Registration controller has an error",
      error: error.message,
    });
  }
}

export async function verifyEmailController(req, res) {
  const { verificationToken } = req.params;
  console.log("Verification Token: ", verificationToken);
  try {
    !verificationToken &&
      res.status(400).json({
        success: false,
        message: "Verification token is required",
      });
    const user = await User.findOne({ verificationToken });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid verification token or verfication token has expired",
      });
    }
    user.isVerified = true;
    user.verificationToken = "";

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully, you can now login",
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Email Verification Error occured: ", error);
    return res.status(500).json({
      success: false,
      message:
        "Internal Server error: Email Verification controller has an error",
      error: error.message,
    });
  }
}

export async function riderRegistrationController(req, res) {
  const { fullname, email, password, username, phoneNumber } = req.body;

  // since data is validated from middleware, we save to database
  try {
    const existingUser = await Rider.find({email}).select("-password");
    if(existingUser.length > 0){
        return res.status(400).json({ error: "User already exists" })
    }
    const newRider = await Rider.create({
      fullName: fullname,
      email,
      password,
      username,
      phoneNumber,
    });
    return res.status(201).json({ rider: newRider });
  } catch (error) {
    console.log(
      "An error occurred in rider registration controller: ",
      error.message
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
