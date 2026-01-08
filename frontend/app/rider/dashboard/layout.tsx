import DashboardNavbar from "@/components/DashboardNavbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { createElement } from "react";
import { Toaster } from "react-hot-toast";
import { AiFillHome } from "react-icons/ai";
import { FaCar, FaUser } from "react-icons/fa";
import { PiPackageBold } from "react-icons/pi";




const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const navigations = [
  {
    text: "Home",
    path: "/rider/dashboard/home",
    icon: createElement(AiFillHome)
  },
  {
    text: "Rides",
    path: "/rider/dashboard/rides",
    icon: createElement(FaCar)
  },
  {
    text: "Orders",
    path: "/rider/dashboard/orders",
    icon: createElement(PiPackageBold)
  },
  {
    text: "Profile",
    path: "/rider/dashboard/profile",
    icon: createElement(FaUser)
  },
]



export const metadata: Metadata = {
  title:  "User Dashboard",
  description: "Pickup and manage requests efficiently.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased px-8`}
        className={`${poppins.variable} antialiased px-8`}
      >
        <DashboardNavbar navigations={navigations}/>
            {children}
        <Toaster  />
      </body>
    </html>
  );
}
