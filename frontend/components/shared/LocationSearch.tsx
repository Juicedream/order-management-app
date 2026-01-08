"use client";

import { LocationPoint } from "@/types/shared";
import { useState } from "react";

type Props = {
  onPickupSelect: (location: LocationPoint) => void;
  onDestinationSelect: (location: LocationPoint) => void;

};

const LocationSearch = ({ onPickupSelect, onDestinationSelect }: Props) => {
  const [pickupQuery, setPickupQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const searchPlace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupQuery.trim() && !destinationQuery.trim()) return;
    setLoading(true);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      pickupQuery
    )}`;
    const url2 = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      destinationQuery
    )}`;
    try {
      // Implement location search logic here, e.g., call an API
      const res1 = await fetch(url);
      const res2 = await fetch(url2);
      const data1 = await res1.json();
      const data2 = await res2.json();
      if (!data1.length || !data2.length) {
        alert("Location not found");
        setDestinationQuery("");
        setPickupQuery("");
        return;
      }
      // get the place
      const pickupPlace = data1[0];
      const destinationPlace = data2[0];
      onPickupSelect({
        lat: Number(pickupPlace.lat),
        lng: Number(pickupPlace.lon),
        address: pickupPlace.display_name,
      });

      onDestinationSelect({
        lat: Number(destinationPlace.lat),
        lng: Number(destinationPlace.lon),
        address: destinationPlace.display_name,
      });
    } catch (error) {
      console.error("Error searching location:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center mx-2">
        <div className="h-2/6 flex flex-col px-2 justify-center mt-2 lg:mb-12 md:mb-14">
          <label
            className="text-md mx-2 px-2 text-slate-400 font-bold"
            htmlFor="current_location"
          >
            Current Location:
          </label>
          <input
            type="text"
            autoFocus
            name="current_location"
            id="current_location"
            value={pickupQuery}
            onChange={(e) => setPickupQuery(e.target.value)}
            // defaultValue={""}
            className="h-full border-b border-slate-400 px-4 py-2 text-xl text-slate-800 outline-none font-semibold uppercase focus:border-b-blue-700"
          />
        </div>
        <div className="h-2/6 flex flex-col px-2 justify-center mt-2">
          <label
            className="text-md mx-2 px-2 text-slate-400 font-bold"
            htmlFor="destination_location"
          >
            Destination:
          </label>
          <input
            type="text"
            name="destination_location"
            id="destination_location"
            value={destinationQuery}
            onChange={(e) => setDestinationQuery(e.target.value)}
            className="h-full border-b border-slate-400 px-4 py-2 text-xl text-slate-800 outline-none font-semibold uppercase focus:border-b-blue-700"
          />
        </div>

        <button
          type="button"
          onClick={searchPlace}
          className="h-2/6 text-center py-4 px-4 bg-slate-800 my-6 mx-2 rounded-md text-slate-300 font-medium text-xl hover:bg-slate-600 cursor-pointer"
        >
          {loading ? "Requesting..." : "Request Ride"}
        </button>
      </div>
    </>
  );
};

export default LocationSearch;
