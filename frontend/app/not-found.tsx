"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

const NotFound = () => {
  const pathName = usePathname();
  return (
   <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    <p className="text-xl mt-4">The page "{pathName}" does not exist.</p>
    <button className="mt-4 bg-blue-500 p-4 text-xl rounded cursor-pointer">
      <Link href="/">Go to Home</Link>
    </button>
   </div>
  )
}

export default NotFound