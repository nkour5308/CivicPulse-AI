"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  getComplaints,
  subscribe,
  Complaint,
} from "@/lib/city-store";

export default function TrendChart() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  // Last 7 days
  const last7Days: Record<string, number> = {};

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);

    const key = d.toLocaleDateString("en-US", {
      weekday: "short",
    });

    last7Days[key] = 0;
  }

  complaints.forEach((c) => {
    const day = new Date(c.createdAt).toLocaleDateString("en-US", {
      weekday: "short",
    });

    if (last7Days[day] !== undefined) {
      last7Days[day]++;
    }
  });

  const data = Object.entries(last7Days).map(([day, complaints]) => ({
    day,
    complaints,
  }));

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Complaint Trends (Last 7 Days)
      </h2>

      {complaints.length === 0 ? (
        <div className="h-[350px] flex items-center justify-center text-zinc-400">
          No complaint data available
        </div>
      ) : (
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>

              <CartesianGrid
                stroke="#27272A"
                strokeDasharray="4 4"
              />

              <XAxis
                dataKey="day"
                stroke="#9CA3AF"
              />

              <YAxis
                stroke="#9CA3AF"
              />

              <Tooltip
                contentStyle={{
                  background: "#18181B",
                  border: "1px solid #3F3F46",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />

              <Line
                type="monotone"
                dataKey="complaints"
                stroke="#3B82F6"
                strokeWidth={4}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />

            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

    </div>
  );
}