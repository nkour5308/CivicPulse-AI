"use client";

import {
  AlertTriangle,
  CloudRain,
  Trash2,
  Zap,
} from "lucide-react";

const predictions = [
  {
    title: "Flood Risk (Next 6h)",
    value: "High",
    icon: CloudRain,
    color: "text-cyan-400",
    detail: "72% probability due to incoming rainfall system",
  },
  {
    title: "Waste Overflow Risk",
    value: "Critical",
    icon: Trash2,
    color: "text-red-400",
    detail: "Ward 7 bins expected to exceed capacity",
  },
  {
    title: "Power Outage Probability",
    value: "Medium",
    icon: Zap,
    color: "text-yellow-400",
    detail: "Grid load instability detected in Zone 3",
  },
  {
    title: "Complaint Surge Alert",
    value: "High",
    icon: AlertTriangle,
    color: "text-orange-400",
    detail: "Expected 40% increase in sanitation complaints",
  },
];

export default function PredictionDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {predictions.map((p) => {
        const Icon = p.icon;

        return (
          <div
            key={p.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3">
              <Icon className={p.color} size={28} />

              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>
            </div>

            <p className="mt-4 text-4xl font-bold">
              {p.value}
            </p>

            <p className="mt-3 text-zinc-400">
              {p.detail}
            </p>
          </div>
        );
      })}
    </div>
  );
}