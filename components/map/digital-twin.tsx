"use client";

import { MapContainer, TileLayer, Circle, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Fragment } from "react";
import L from "leaflet";
import { getComplaints } from "@/lib/city-store";

/* -----------------------------
   FIX LEAFLET DEFAULT ICON ISSUE
------------------------------ */
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* -----------------------------
   TYPE SAFE DATA MODEL
------------------------------ */
type Complaint = {
  id: number;
  position: [number, number];
};

/* -----------------------------
   SAMPLE DATA (CITY SIMULATION)
------------------------------ */
const complaints = getComplaints().map((c, i) => ({
  id: i,
  position: [
    33.73 + Math.random() * 0.02,
    75.15 + Math.random() * 0.02,
  ] as [number, number],
}));

export default function DigitalTwin() {
  return (
    <div className="h-[520px] w-full rounded-3xl overflow-hidden border border-white/10">
      <MapContainer
        center={[33.738045, 75.1546]}
        zoom={12}
        className="h-full w-full"
      >
        {/* Base Map Layer */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* AI HOTSPOTS */}
        {complaints.map((item) => (
          <Fragment key={item.id}>
            {/* Risk Zone */}
            <Circle
              center={item.position}
              radius={350}
              pathOptions={{
                color: "#ef4444",
                fillColor: "#ef4444",
                fillOpacity: 0.15,
              }}
            />

            {/* Marker */}
            <Marker position={item.position} />
          </Fragment>
        ))}
      </MapContainer>
    </div>
  );
}