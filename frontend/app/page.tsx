"use client"
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import HomeNavbar from "@/components/home/HomeNavbar";
import Image from "next/image";
import { fetchExternalData } from "./actions";
import { useEffect, useState } from "react";

type Product = {
  name: string;
  price: number;
  _id: string | number;
  image: string;
}
const products = [
  { _id: 1, name: "Product 1", price: 19.99, image: "/globe.svg" },
  { _id: 2, name: "Product 2", price: 29.99, image: "/file.svg" },
  { _id: 3, name: "Product 3", price: 39.99, image: "/globe.svg" },
  { _id: 4, name: "Product 23", price: 39.99, image: "/next.svg" },
  { _id: 5, name: "Product 32", price: 39.99, image: "/window.svg" },
  { _id: 6, name: "Product 34", price: 39.99, image: "/google-logo.svg" },
  { _id: 7, name: "Product 35", price: 39.99, image: "/vercel.svg" },
  { _id: 8, name: "Product 36", price: 39.99, image: "/facebook-logo.svg" },
  { _id: 9, name: "Product 37", price: 39.99, image: "/next.svg" },
  { _id: 11, name: "Product 355", price: 39.99, image: "/globe.svg" },
  { _id: 30, name: "Product 377", price: 39.99, image: "/globe.svg" },
  { _id: 33, name: "Product 3332", price: 39.99, image: "/vercel.svg" },
  { _id: 36, name: "Product 37", price: 39.99, image: "/google-logo.svg" },
  { _id: 31, name: "Product 388", price: 39.99, image: "/globe.svg" },
  { _id: 38, name: "Product 333", price: 39.99, image: "/globe.svg" },
  { _id: 35, name: "Product 322", price: 39.99, image: "/facebook-logo.svg" },
  { _id: 23, name: "Product 333", price: 39.99, image: "/globe.svg" },
  { _id: 22, name: "Product 377", price: 39.99, image: "/file.svg" },


]

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchExternalData();
      setAllProducts(data?.products);
      setIsLoading(false)
    }
    fetchProducts();
  }, [])

  console.log(allProducts)
  

  return (
    <main className="min-h-screen">
      <HomeNavbar />
      <HeroSection />
      {/* Product section */}
      <section className="flex mt-4 w-full flex-col gap-4">
        {/* Product list component can be added here */}
        <h2 className="text-4xl text-gray-700 text-center ">Latest Products</h2>
        {isLoading && <p className="text-center animate-pulse text-xl text-gray-400">Loading...</p>}
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 bg-gray-100 p-4 rounded-lg">
          {/* Example product items */}
          
          {!isLoading && allProducts.map((product: Product) => (
            <div className="border border-gray-400 p-4 rounded-lg shadow-xl bg-gray-200" key={product?._id}>
              <Image src="/globe.svg" alt={product?.name} width={200} height={200} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">₦{product.price.toLocaleString()}</p>
              <div className="flex justify-between items-center mt-4">
                {/* <select name="" id="">
                <option value="">Select Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">1</option>
                <option value="4">1</option>
              </select> */}
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>


      </section>

      <Footer />

    </main>
  )
}
