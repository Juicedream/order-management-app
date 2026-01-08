"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import LocateUser from "./LocateUser";
import { useEffect, useState } from "react";
import { useCurrentLocation } from "./shared/map/useCurrentLocation";
import { LocationPoint } from "@/types/shared";
import LocationSearch from "./shared/LocationSearch";
import { DestinationIcon, PickupIcon } from "./shared/map/markers";
import MapFitter from "./shared/MapFitter";

type Props = {
  position: LatLngExpression;
  zoom: number;
  onMapAddress?: (address: string) => void;
  pickup: LocationPoint | null;
  whereTo: LocationPoint | null;
};

const MapBox = ({ position, zoom, onMapAddress, pickup, whereTo }: Props) => {
  let gpsLocation = useCurrentLocation();
  const [origin, setOrigin] = useState<LocationPoint | null>(gpsLocation);
  const [destination, setDestination] = useState<LocationPoint | null>(null);
  const [address, setAddress] = useState<string>("");
  useEffect(() => {
    if (address) {
      console.log("MapBox Address:", address);
      onMapAddress?.(address);
    }
   
  }, [address]);
  useEffect(() => {
    setOrigin(pickup);
    setDestination(whereTo);
  }, [pickup, whereTo]);
  return (
    <>
    {/* search ui */}
    <div className="absolute z-9999 top-10 left-10">
      {/* <LocationSearch 
        label="Pickup"
        placeholder="Enter pickup location"
        onSelectLocation={setOrigin}
      />
      <LocationSearch 
        label="Destination"
        placeholder="Where to?"
        onSelectLocation={setDestination}
      /> */}
    </div>
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height: "100vh", width: "100%" }}
      >
      <TileLayer
        maxZoom={19}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
        />

        {
          origin && (
            <Marker position={[origin.lat, origin.lng]} icon={PickupIcon}>
              <Popup>
                Pickup Location: {origin.address || "Unnamed location"}
              </Popup>
            </Marker>
          )
        }

        {destination && (
          <Marker
            position={[destination.lat, destination.lng]}
            icon={DestinationIcon}
          >
            <Popup>{destination.address}</Popup>
          </Marker>
        )}

        <MapFitter
          points={[origin, destination].filter(Boolean) as LocationPoint[]}
        />


      {/* User GPS marker */}
      {origin === null && (
        <LocateUser onChangeAddress={setAddress} />
      )}
    </MapContainer>
    </>
  );
};

export default MapBox;
