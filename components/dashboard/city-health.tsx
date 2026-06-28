"use client";

import {
  Activity,
  AlertTriangle,
  Brain,
  CloudRain,
  ShieldCheck,
  TrafficCone,
} from "lucide-react";

const metrics = [
  {
    title: "City Health",
    value: "92%",
    color: "text-emerald-400",
    icon: ShieldCheck,
  },
  {
    title: "Traffic Flow",
    value: "Normal",
    color: "text-blue-400",
    icon: TrafficCone,
  },
  {
    title: "Weather Risk",
    value: "Low",
    color: "text-cyan-400",
    icon: CloudRain,
  },
  {
    title: "Critical Alerts",
    value: "03",
    color: "text-red-400",
    icon: AlertTriangle,
  },
  {
    title: "AI Confidence",
    value: "98%",
    color: "text-violet-400",
    icon: Brain,
  },
  {
    title: "System Load",
    value: "74%",
    color: "text-orange-400",
    icon: Activity,
  },
];

export default function CityHealth() {
  return (
    <section className="mt-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">
          City Health Command Center
        </h2>

        <p className="mt-2 text-zinc-400">
          Real-time health metrics powered by CivicPulse AI.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <Icon className={metric.color} size={30} />

                <span className={`text-3xl font-bold ${metric.color}`}>
                  {metric.value}
                </span>
              </div>

              <h3 className="mt-8 text-lg font-semibold">
                {metric.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}