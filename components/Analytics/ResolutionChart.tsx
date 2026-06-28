"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  getComplaints,
  subscribe,
  Complaint,
} from "@/lib/city-store";

export default function ResolutionChart() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  const statusCount = {
    Submitted: 0,
    Assigned: 0,
    "In Progress": 0,
    Resolved: 0,
  };

  complaints.forEach((c) => {
    statusCount[c.status]++;
  });

  const data = [
    {
      status: "Submitted",
      count: statusCount.Submitted,
    },
    {
      status: "Assigned",
      count: statusCount.Assigned,
    },
    {
      status: "In Progress",
      count: statusCount["In Progress"],
    },
    {
      status: "Resolved",
      count: statusCount.Resolved,
    },
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[420px]">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Complaints by Status
      </h2>

      {complaints.length === 0 ? (
        <div className="flex h-[300px] items-center justify-center text-zinc-400">
          No complaints available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={data}>

            <CartesianGrid
              stroke="#27272A"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="status"
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
              }}
            />

            <Bar
              dataKey="count"
              fill="#3B82F6"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      )}

    </div>
  );
}