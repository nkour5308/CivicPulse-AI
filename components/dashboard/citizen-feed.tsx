"use client";

import {
  MessageSquare,
  Trash2,
  Droplets,
  TrafficCone,
  Lightbulb,
  Clock3,
} from "lucide-react";

const complaints = [
  {
    id: 1,
    citizen: "Rahul Sharma",
    issue: "Garbage has not been collected for the last 3 days.",
    ward: "Ward 7",
    time: "2 mins ago",
    priority: "High",
    icon: Trash2,
    color: "text-red-400",
  },
  {
    id: 2,
    citizen: "Priya Singh",
    issue: "Major water leakage near Sector 12.",
    ward: "Ward 3",
    time: "8 mins ago",
    priority: "Medium",
    icon: Droplets,
    color: "text-blue-400",
  },
  {
    id: 3,
    citizen: "Amit Verma",
    issue: "Heavy traffic due to broken traffic signal.",
    ward: "Ward 10",
    time: "15 mins ago",
    priority: "High",
    icon: TrafficCone,
    color: "text-yellow-400",
  },
  {
    id: 4,
    citizen: "Neha Patel",
    issue: "Streetlight not working since yesterday.",
    ward: "Ward 14",
    time: "21 mins ago",
    priority: "Low",
    icon: Lightbulb,
    color: "text-green-400",
  },
];

export default function CitizenFeed() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Live Citizen Complaints
          </h2>

          <p className="text-zinc-400">
            Incoming reports from citizens
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2">
          <MessageSquare className="text-blue-400" size={18} />
          <span className="text-sm text-blue-400">
            247 Today
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {complaints.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-zinc-900 p-3">
                    <Icon className={item.color} size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.citizen}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      {item.issue}
                    </p>

                    <p className="mt-2 text-xs text-zinc-500">
                      {item.ward}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400">
                    {item.priority}
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-xs text-zinc-500">
                    <Clock3 size={14} />
                    {item.time}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}