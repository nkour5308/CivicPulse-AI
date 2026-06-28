"use client";

import {
  Users,
  AlertTriangle,
  Truck,
  CloudRain,
} from "lucide-react";

const stats = [
  {
    title: "Active Citizens",
    value: "18,245",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Open Complaints",
    value: "247",
    icon: AlertTriangle,
    color: "text-red-400",
  },
  {
    title: "Vehicles Deployed",
    value: "36",
    icon: Truck,
    color: "text-emerald-400",
  },
  {
    title: "Rain Probability",
    value: "72%",
    icon: CloudRain,
    color: "text-cyan-400",
  },
];

export default function CityStats() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <Icon className={item.color} size={28} />

            <p className="mt-5 text-zinc-400">
              {item.title}
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {item.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}