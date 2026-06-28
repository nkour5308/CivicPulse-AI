"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import {
  getComplaints,
  subscribe,
  Complaint,
} from "@/lib/city-store";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#FACC15",
  "#EF4444",
  "#A855F7",
];

export default function DepartmentPie() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  const categoryCount: Record<string, number> = {};

  complaints.forEach((c) => {
    categoryCount[c.category] =
      (categoryCount[c.category] || 0) + 1;
  });

  const data = Object.entries(categoryCount).map(
  ([name, value]) => ({
    name,
    value,
  })
);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[450px]">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Complaints by Department
      </h2>

      {data.length === 0 ? (
        <div className="flex items-center justify-center h-[300px] text-zinc-400">
          No complaints available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={120}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#18181B",
                border: "1px solid #3F3F46",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}