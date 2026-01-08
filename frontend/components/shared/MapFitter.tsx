import { LocationPoint } from '@/types/shared';
import { LatLngBounds } from 'leaflet';
import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet';

type Props = {
    points: LocationPoint[];
}

const MapFitter = ({ points }: Props) => {
    const map = useMap();
    useEffect(() => {
        if (points.length < 2) return;
        const bounds = new LatLngBounds(points.map(p => [p.lat, p.lng]));
        map.fitBounds(bounds, { padding: [60, 60] });
    }, [points, map]);
  return null;
}

export default MapFitter