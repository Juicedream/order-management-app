"use client";
import LocationSearch from "@/components/shared/LocationSearch";
import { useCurrentLocation } from "@/components/shared/map/useCurrentLocation";
import { LocationPoint } from "@/types/shared";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";





const Dashboard = () => {
    let gpsLocation = useCurrentLocation();
    const [origin, setOrigin] = useState<LocationPoint | null>(gpsLocation);
    const [destination, setDestination] = useState<LocationPoint | null>(null);
  const [currentTab, setCurrentTab] = useState("pickup");
  const [currentLocation, setCurrentLocation] = useState("");
  const [address, setAddress] = useState<string>("");
  const pathname = usePathname();
  const Map = useMemo(() => dynamic(
    () => import('@/components/MapBox'),
    {
      loading: () => <p>A map  is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div className="relative">
      
      {/* <Map /> */}
      <Map position={[6.45, 3.39]} zoom={12} onMapAddress={setAddress} pickup={origin} whereTo={destination} />
      {/* <Map /> */}

      {/* Request page */}
      <div className="bg-white lg:w-[600px] lg:h-[480px] z-9999 border-slate-700  lg:top-10 rounded-md mt-4 lg:fixed md:bottom-0 md:mb-2 md:fixed md:w-[700px] md:h-[510px] lg:shadow-lg lg:shadow-slate-600 relative">
         
        <div className="bg-slate-900 w-full h-20 shadow-md shadow-slate-500 border-none rounded-t-md">
          <div className="px-2 py-2 flex justify-between items-center">
            <h1 className="font-semibold text-2xl text-white">
              {/* {welcomeMessage}    */}
              {currentTab === "pickup" ? "Request a Ride?" : "Make an Order?"}
            </h1>
            <button 
            onClick={() => setCurrentLocation(address)}
            className="bg-slate-300 px-2 py-2 my-1 rounded-md outline-none border-white shadow-sm shadow-black hover:shadow-none text-slate-800 font-medium uppercase border-none cursor-pointer hover:bg-slate-500/60 hover:text-white">
              {" "}
              📍 Use current location{" "}
            </button>
          </div>
         
        </div>
        {/* ride or order */}
        <div className="mt-3 w-full flex justify-center items-center">
          <div className="flex bg-slate-300 w-[500px] h-[50px] rounded-md text-center items-center transition-all">
            <div
              onClick={() => setCurrentTab("pickup")}
              className={clsx(
                "w-6/12 h-full cursor-pointer rounded-md flex items-center justify-center",
                `${currentTab === "pickup" && "bg-slate-900 text-white"}`
              )}
            >
              Pickup Request
            </div>
            <div
              onClick={() => setCurrentTab("order")}
              className={clsx(
                "w-6/12 h-full cursor-pointer rounded-md flex items-center justify-center",
                `${currentTab === "order" && "bg-slate-800 text-white"}`
              )}
            >
              Place an Order
            </div>
          </div>
        </div>
        {/* forms */}
        {
          currentTab === "pickup" && (
            // <div className="mb-2 py-4 border-none my-2 mx-2 rounded-md shadow-sm shadow-black">
            <div className="mb-2 py-4 border-none lg:my-2 md:my-4 mx-2 rounded-md">
              <LocationSearch 
              onPickupSelect={setOrigin}
              onDestinationSelect={setDestination}
              />
            </div>
            
          )
        }
         {
          currentTab === "order" && (
            // <div className="mb-2 py-4 border-none my-2 mx-2 rounded-md shadow-sm shadow-black">
            <div className="mb-2 flex items-center justify-center py-4 border-none lg:my-2 md:my-4 mx-8 rounded-md">
              <div className="flex items-center justify-around flex-wrap gap-4 w-[480px] px-4 py-2">
                {/* Courier */}
                <div className="bg-[#cfaa5c] flex items-center flex-col shadow-md shadow-black py-6 px-8 rounded-xl hover:shadow-none hover:border hover:cursor-pointer hover:scale-108 hover:mt-2">
                  {/* <p className="font-2xl">🚚</p> */}
                  <Image 
                  width={60}
                  height={60}
                  src="/courier.svg" 
                  alt="Courier service" />
                  <span className="font-bold">Courier</span>
                </div>
                {/* Food */}
             <div className="bg-[#fff098] flex items-center flex-col shadow-md shadow-black py-5 px-8 rounded-xl hover:shadow-none hover:border hover:cursor-pointer hover:scale-108 hover:mt-2">
               <Image 
                  width={70}
                  height={70}
                  src="/food.svg" 
                  alt="Courier service" />
                  <span className="font-bold">Food</span>
                </div>
                {/* drinks */}
                <div className="bg-[#3da5af] flex items-center flex-col shadow-md shadow-black py-5 px-8 rounded-xl hover:shadow-none hover:border hover:cursor-pointer hover:scale-108 hover:mt-2">
               <Image 
                  width={70}
                  height={70}
                  src="/drinks.svg" 
                  alt="Courier service" />
                  <span className="font-bold">Drinks</span>
                </div>
                {/* clothes */}
                <div className="bg-slate-700 text-white flex items-center flex-col shadow-md shadow-black py-5 px-8 rounded-xl hover:shadow-none hover:border hover:cursor-pointer hover:scale-108 hover:mt-2">
               <Image 
                  width={70}
                  height={70}
                  src="/clothes.svg" 
                  alt="Courier service" />
                  <span className="font-bold">Clothes</span>
                </div>
               
              </div>
            </div>
            
          )
        }
      </div>
    </div>
  );
};

export default Dashboard;
