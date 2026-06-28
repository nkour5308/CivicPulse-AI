"use client";

import { motion } from "framer-motion";
import {
  Bot,
  CloudRain,
  MapPinned,
  Truck,
  Bell,
} from "lucide-react";

const activities = [
  {
    icon: Bot,
    title: "Complaint Intelligence Agent",
    status: "Analyzing 42 new complaints...",
    color: "text-blue-400",
  },
  {
    icon: CloudRain,
    title: "Weather Prediction Agent",
    status: "Heavy rainfall detected in Ward 7",
    color: "text-cyan-400",
  },
  {
    icon: MapPinned,
    title: "Hotspot Detection Agent",
    status: "Garbage hotspot identified",
    color: "text-orange-400",
  },
  {
    icon: Truck,
    title: "Resource Planner",
    status: "Deploying Cleaning Team Alpha",
    color: "text-green-400",
  },
  {
    icon: Bell,
    title: "Citizen Notification Agent",
    status: "Sending alerts to nearby residents",
    color: "text-pink-400",
  },
];

export default function LiveActivity() {
  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Live AI Activity
          </h2>

          <p className="text-zinc-400">
            Multi-agent system running in real time
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-green-400">
            LIVE
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/60 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/5 p-3">
                  <Icon className={item.color} size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {item.status}
                  </p>
                </div>
              </div>

              <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                Running
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}