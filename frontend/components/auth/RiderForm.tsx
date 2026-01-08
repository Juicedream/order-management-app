"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import AuthButton from "./AuthButton";
import VerificationEmailPopup from "./VerificationEmailPopup";



type AuthFormProps = {
    logo?: boolean;
    left_header: string;
    left_paragraph: string;
    right_header: string;
    right_paragraph: string;
};

const RiderForm = ({
    logo = false,
    left_header = "",
    left_paragraph = "",
    right_header = "",
    right_paragraph = ""
}: AuthFormProps) => {
    const [authState, setAuthState] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    // const [hiddenPassword, setHiddenPassword] = useState("");
    const [showVerificationPopup, setShowVerificationPopup] = useState(false);
    function toggleVerificationPopup(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setShowVerificationPopup(true);
        setTimeout(() => {
            setShowVerificationPopup(false);
            setAuthState("login")
        }, 5000)
    }
    return (
        <div className="w-200 h-[680px] lg:w-300 lg:h-[680px] flex justify-between bg-amber-50 text-black border-black shadow-2xl rounded-xl overflow-hidden relative">
            <div className="w-full flex flex-col bg-gray-950 text-white justify-end text-xl pb-8 px-4 rounded-l relative">
                <div className="">
                    <div className="absolute top-4 left-4 text-3xl font-bold cursor-pointer hover:opacity-70 hover:transition-all" title="Go back" onClick={() => window.history.back()}>
                        ←
                    </div>
                </div>

                {logo && <div className="ml-8 text-4xl">🚚Logo</div>}
                <p className="ml-8 text-3xl font-bold">{left_header}</p>
                <p className="text-gray-400 ml-8">{left_paragraph}</p>
            </div>
            <div className="w-full flex px-12 py-8 flex-col gap-2 text-gray-900 bg-gray-100">
                <h1 className="text-2xl font-bold lg:text-3xl">{right_header}</h1>
                <p className="text-blue-400 text-sm lg:text-xl">{right_paragraph}</p>
                {/* sign and register knobs */}
                <div className="flex mt-4 mb-4 bg-gray-300 justify-between rounded-md text-center font-semibold">
                    <div className={clsx(`${authState === "login" ? "border border-gray-300 bg-white rounded-md text-sm w-full p-1 px-1 cursor-pointer transition-all" : "border border-gray-300 text-sm w-full rounded-2xl p-1 px-1 cursor-pointer transition-all"}`)} onClick={() => setAuthState("login")}>Login</div>
                    <div className={clsx(`${authState === "register" ? "border border-gray-300 bg-white text-sm rounded-md w-full p-1 px-1 cursor-pointer transition-all" : "border border-gray-300 text-sm w-full rounded-md p-1 px-1 cursor-pointer transition-all"}`)} onClick={() => setAuthState("register")}>Register</div>
                </div>
                {/* form */}
                <div className="">
                    {authState === "login" && (
                        <form className="flex flex-col gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="username" className="text-sm mb-2 w-full font-semibold text-gray-600">Email or Username</label>
                                <input type="text"
                                    autoFocus
                                    id="username"
                                    placeholder="Enter your username or email" className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-sm mb-2 w-full font-semibold text-gray-600">Password</label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="Enter your password"
                                        className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full" />
                                    {
                                        showPassword ? (
                                            <FaRegEye onClick={() => setShowPassword(false)} className="absolute top-3 right-0 mr-2 text-xl cursor-pointer" />
                                        ) : (
                                            <FaRegEyeSlash onClick={() => setShowPassword(true)} className="absolute top-3 right-0 mr-2 text-xl cursor-pointer" />
                                        )
                                    }

                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <input type="checkbox" name="" id="remember" className="size-4 rounded-2xl outline-none" />
                                    <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
                                </div>
                                <div>
                                    <p className="text-sm text-blue-500
                                    font-bold hover:underline cursor-pointer">
                                        <Link href="forgot-password">
                                            Forgot Password?
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            {/* login button */}
                            <div className="flex">
                                <AuthButton text="Login" isDisabled={false} />
                            </div>
                            {/* continue with */}
                            <div className="flex justify-between items-center text-gray-400">
                                <div className="w-[65%] lg:w-full">
                                    <hr className="w-full" />
                                </div>
                                <p className="text-xs lg:w-[80%] w-full text-gray-500 text-center italic uppercase">or continue with</p>
                                <div className="w-[65%] lg:w-full">
                                    <hr className="w-full" />
                                </div>
                            </div>

                            {/* google and facebook  */}
                            <div className="flex gap-4">
                                <button className="w-full px-4 text-gray-700 text-sm rounded-xl font-light shadow-2x border  py-2 border-gray-400 flex text-center justify-center items-center cursor-pointer hover:bg-gray-300">
                                    <Image src="/google-logo.svg" alt="google icon" width={20} height={20} className="inline mr-1" />
                                    <p className="items-center">Google</p>
                                </button>
                                {/* <button className="w-full px-4 text-gray-700 text-sm rounded-xl font-light shadow-2x border py-2 border-gray-400 flex text-center justify-center items-center hover:bg-gray-300 cursor-pointer">
                                    <Image src="/facebook-logo.svg" alt="facebook icon" width={20} height={20} className="inline mr-1" />
                                    <p className="items-center">Facebook</p>
                                </button> */}
                                 <button className="w-full px-4 text-gray-700 text-sm rounded-xl font-light shadow-2x border py-2 border-gray-400 flex text-center justify-center items-center hover:bg-gray-300 cursor-pointer">
                                    <Link className="flex gap-1" href="/driver/login">
                                        <span>🚚</span>
                                        {/* <Image src="/facebook-logo.svg" alt="facebook icon" width={20} height={20} className="inline mr-1" /> */}
                                        <p className="items-center">Login as a Driver</p>
                                    </Link>
                                </button>
                            </div>

                        </form>

                    )}
                    {authState === "register" && (
                        <form className="flex flex-col gap-5" onSubmit={toggleVerificationPopup}>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm mb-2 w-full font-semibold text-gray-600">Email</label>
                                    <input type="email"
                                        autoFocus
                                        id="email"
                                        placeholder="you@example.com" className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="username" className="text-sm mb-2 w-full font-semibold text-gray-600"> Username</label>
                                    <input type="text"
                                        id="username"
                                        placeholder="Eba101" className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-sm mb-2 w-full font-semibold text-gray-600">Full Name</label>
                                    <input type="text"
                                        id="name"
                                        placeholder="Ade Bayo side" className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phonenumber" className="text-sm mb-2 w-full font-semibold text-gray-600">Phone Number</label>
                                    <input type="text"
                                        id="phonenumber"
                                        placeholder="09011223344" className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full" />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-sm mb-2 w-full font-semibold text-gray-600">Password</label>
                                <div className="relative">
                                    <input type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        // value={hiddenPassword}
                                        // onChange={(e) => {
                                        //     showPassword ? setHiddenPassword(e.target.value): setHiddenPassword(".")
                                        // }}
                                        className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full" />
                                    {
                                        showPassword ? (
                                            <FaRegEye onClick={() => setShowPassword(false)} className="absolute top-3 right-0 mr-2 text-xl cursor-pointer" />
                                        ) : (
                                            <FaRegEyeSlash onClick={() => setShowPassword(true)} className="absolute top-3 right-0 mr-2 text-xl cursor-pointer" />
                                        )
                                    }

                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex items-center">
                                    <input type="checkbox" name="" id="remember" className="size-4 rounded-2xl outline-none" />
                                    <label htmlFor="remember" className="ml-2 text-sm">I accept the</label>
                                </div>

                                <div>
                                    <p className="text-sm text-blue-500
                                    font-bold hover:underline cursor-pointer ml-1">
                                        <Link href="/terms-and-conditions">
                                            {" "}
                                            Terms and Conditions
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            {/* register button */}
                            <div className="flex">
                                <AuthButton text="Register" isDisabled={false}/>
                            </div>
                            {/* continue with */}
                            <div className="flex justify-between items-center text-gray-400">
                                <div className="w-[65%] lg:w-full">
                                    <hr className="w-full" />
                                </div>
                                <p className="text-xs lg:w-[80%] w-full text-gray-500 text-center italic uppercase">or continue with</p>
                                <div className="w-[65%] lg:w-full">
                                    <hr className="w-full" />
                                </div>
                            </div>

                            {/* google and facebook  */}
                            <div className="flex gap-4">
                                <button className="w-full px-4 text-gray-700 text-sm rounded-xl font-light shadow-2x border py-2 border-gray-400 flex text-center justify-center items-center cursor-pointer hover:bg-gray-300">
                                    <Image src="/google-logo.svg" alt="google icon" width={20} height={20} className="inline mr-1" />
                                    <p className="items-center">Google</p>
                                </button>
                                <button className="w-full px-4 text-gray-700 text-sm rounded-xl font-light shadow-2x border py-2 border-gray-400 flex text-center justify-center items-center hover:bg-gray-300 cursor-pointer">
                                    <Link className="flex gap-1" href="/driver/login">
                                        <span>🚚</span>
                                        {/* <Image src="/facebook-logo.svg" alt="facebook icon" width={20} height={20} className="inline mr-1" /> */}
                                        <p className="items-center">Register as a Driver</p>
                                    </Link>
                                </button>
                            </div>

                        </form>

                    )}
                </div>
            </div>

            {showVerificationPopup && <VerificationEmailPopup />}
        </div>
    )
}

export default RiderForm