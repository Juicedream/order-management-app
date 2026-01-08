import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";

import "./globals.css";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Order Management App",
  description: "Generate and manage orders efficiently.",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
