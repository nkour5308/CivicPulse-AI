"use client";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import {
  Complaint,
  getComplaints,
  subscribe,
} from "@/lib/city-store";

import { useEffect, useState } from "react";

const wardCoordinates: Record<
  string,
  [number, number]
> = {
  "Ward 1": [32.7266, 74.8570],
  "Ward 2": [32.7290, 74.8615],
  "Ward 3": [32.7325, 74.8660],
  "Ward 4": [32.7360, 74.8715],
  "Ward 5": [32.7390, 74.8780],
  "Ward 6": [32.7425, 74.8830],
  "Ward 7": [32.7460, 74.8890],
  "Ward 8": [32.7500, 74.8945],
};

function markerColor(priority: string) {
  switch (priority) {
    case "High":
      return "red";

    case "Medium":
      return "orange";

    default:
      return "green";
  }
}

function icon(color: string) {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
}

export default function ComplaintMap() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  return (
    <MapContainer
      center={[32.7300, 74.8700]}
      zoom={13}
      style={{
        height: "700px",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {complaints.map((complaint) => {
        const position =
          wardCoordinates[complaint.ward];

        if (!position) return null;

        return (
          <Marker
            key={complaint.id}
            position={position}
            icon={icon(markerColor(complaint.priority))}
          >
            <Popup>

              <h3
                style={{
                  fontWeight: "bold",
                  marginBottom: 8,
                }}
              >
                {complaint.issue}
              </h3>

              <p>
                <strong>ID:</strong>{" "}
                {complaint.id}
              </p>

              <p>
                <strong>Ward:</strong>{" "}
                {complaint.ward}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {complaint.status}
              </p>

              <p>
                <strong>Priority:</strong>{" "}
                {complaint.priority}
              </p>

              <p>
                <strong>Officer:</strong>{" "}
                {complaint.officer}
              </p>

            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}