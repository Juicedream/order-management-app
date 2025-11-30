import nodemailer from "nodemailer";
import dotenv from "dotenv";
import {sendVerificationEmailTemplate} from "./mail.template.js";  
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { 
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
});


export async function sendVerificationEmail(toEmail, verificationToken) {
    const verificationUrl = `${process.env.LIVE_URL}/verify-email/${verificationToken}`;
    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: toEmail,
        subject: 'Verify your email address',
        html: sendVerificationEmailTemplate(verificationUrl)
    };
    try{
        await transporter.sendMail(mailOptions);
        console.log(`Verification email sent to ${toEmail}`);
    }
    catch(error){
        console.log("Error sending verification email: ", error);
        throw new Error("Could not send verification email");
    }
}