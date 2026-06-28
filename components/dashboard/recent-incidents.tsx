"use client";

import {
  AlertTriangle,
  Trash2,
  Droplets,
  Car,
  CheckCircle2,
} from "lucide-react";

const incidents = [
  {
    id: 1,
    title: "Garbage Overflow",
    ward: "Ward 7",
    priority: "High",
    status: "Dispatching Team",
    icon: Trash2,
    color: "text-red-400",
  },
  {
    id: 2,
    title: "Water Leakage",
    ward: "Ward 3",
    priority: "Medium",
    status: "Under Investigation",
    icon: Droplets,
    color: "text-blue-400",
  },
  {
    id: 3,
    title: "Traffic Congestion",
    ward: "Ward 10",
    priority: "Low",
    status: "Signal Optimized",
    icon: Car,
    color: "text-yellow-400",
  },
  {
    id: 4,
    title: "Streetlight Failure",
    ward: "Ward 14",
    priority: "Resolved",
    status: "Completed",
    icon: CheckCircle2,
    color: "text-green-400",
  },
];

export default function RecentIncidents() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">Recent Incidents</h2>
          <p className="text-zinc-400">
            AI prioritized complaints from citizens
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2">
          <AlertTriangle className="text-red-400" size={18} />
          <span className="text-sm text-red-400">
            3 Critical
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {incidents.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500/30 hover:bg-white/10"
            >
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-zinc-900 p-3">
                    <Icon className={item.color} size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-400">
                      {item.ward}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    {item.priority}
                  </p>

                  <p className="text-sm text-zinc-500">
                    {item.status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}