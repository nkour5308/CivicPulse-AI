"use client";

import { useEffect, useState } from "react";
import {
  getComplaints,
  subscribe,
  Complaint,
} from "@/lib/city-store";

type WardData = {
  ward: string;
  complaints: number;
  status: string;
  color: string;
};

export default function WardHeatmap() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  const wardMap: Record<string, number> = {};

  complaints.forEach((c) => {
    wardMap[c.ward] = (wardMap[c.ward] || 0) + 1;
  });

  const wards: WardData[] = Object.entries(wardMap)
    .map(([ward, count]) => {
      let status = "Low";
      let color = "bg-green-500";

      if (count >= 10) {
        status = "Critical";
        color = "bg-red-500";
      } else if (count >= 7) {
        status = "High";
        color = "bg-orange-500";
      } else if (count >= 4) {
        status = "Medium";
        color = "bg-yellow-500";
      }

      return {
        ward,
        complaints: count,
        status,
        color,
      };
    })
    .sort((a, b) => b.complaints - a.complaints);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Ward Risk Analysis
      </h2>

      {wards.length === 0 ? (
        <div className="flex h-[250px] items-center justify-center text-zinc-400">
          No ward data available
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {wards.map((ward) => (
            <div
              key={ward.ward}
              className="bg-zinc-800 rounded-xl p-4 border border-zinc-700"
            >
              <h3 className="text-white font-semibold">
                {ward.ward}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {ward.complaints} Complaint{ward.complaints !== 1 ? "s" : ""}
              </p>

              <div className="flex items-center gap-2 mt-4">

                <div
                  className={`w-3 h-3 rounded-full ${ward.color}`}
                />

                <span className="text-gray-300 text-sm">
                  {ward.status}
                </span>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}