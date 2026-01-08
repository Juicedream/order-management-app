"use client";

import { Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { LatLng } from "leaflet";
import { PickupIcon } from "./shared/map/markers";

type Props = {
  onChangeAddress?: (address: string) => void;
}

const LocateUser = ({ onChangeAddress }: Props) => {
  const map = useMap();
  const [position, setPosition] = useState<LatLng | null>(null);
  const [address, setAddress] = useState("Loading address...");

  useEffect(() => {
    map.locate({
      enableHighAccuracy: true,
      setView: true,
      maxZoom: 17,
      watch: true, // change to true for live tracking
    });

    map.on("locationfound", (e) => {
      setPosition(e.latlng);
    });

    map.on("locationerror", (e) => {
      // alert("Unable to retrieve your location, enable GPS and try again");
      console.log("GPS ERROR:", e.message);
    });

    return () => {
      map.off("locationfound");
      map.off("locationerror");
    };
  }, [map]);
  useEffect(() => {
    if (position) {
      const {lat, lng} = position;
      // console.log(`User located at Latitude: ${lat}, Longitude: ${lng}`);
      const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
    
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // console.log("Reverse Geocoding Result:", data);
          const address = data.display_name;
          console.log(`User's Address: ${address}`);
          setAddress(address);
          onChangeAddress?.(address);
        })
        .catch((error) => {
          const fallbackMessage = "Unable to retrieve address";
          console.error("Error during reverse geocoding:", error);
          setAddress(fallbackMessage);
          onChangeAddress?.(fallbackMessage);
        });
    
    }
  }, [position, onChangeAddress]);

  if (!position) return null;


  return (
    <Marker position={position} icon={PickupIcon}>
      <Popup>{address}</Popup>
    </Marker>
  );
};

export default LocateUser;
