"use client";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_API_KEY;
// console.log("TOKEN:", process.env.NEXT_PUBLIC_MAP_BOX_API_KEY);
console.log("MAPBOX TOKEN:", mapboxgl.accessToken);
const Map = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-74.5);
  const [lat, setLat] = useState(40);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // if there is a map just initialize only once
    if (!mapContainer.current) return; // ensure container exists
    // if not

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
    //   style: "mapbox://styles/judenwadiogor2023/cmihimjrb00qw01r443x8ci8f",
      center: [lng, lat], // starting position [lng, lat]
      zoom: zoom, // starting zoom
    });

    map.current.on("move", () => {
      const mc = map.current;
      if (!mc) return;
      const center = mc.getCenter();
      const lngVal = parseFloat(center.lng.toFixed(4));
      const latVal = parseFloat(center.lat.toFixed(4));
      const zoomVal = parseFloat(mc.getZoom().toFixed(2));
      setLng(lngVal);
      setLat(latVal);
      setZoom(zoomVal);
    });

    return () => map.current?.remove(); // clean up unmount
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "1000px" }} />;
};

export default Map;
