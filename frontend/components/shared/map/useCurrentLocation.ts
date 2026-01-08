import { LocationPoint } from "@/types/shared";
import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<LocationPoint | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          address: "Current location",
        });
      },
      () => {}
    );
  }, []);

  return location;
};
