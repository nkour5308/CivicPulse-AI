"use client";

import CityHealth from "./city-health";
import LiveActivity from "./live-activity";
import { motion } from "framer-motion";
import { Activity, BrainCircuit, ShieldCheck, TriangleAlert } from "lucide-react";
import RecentIncidents from "./recent-incidents";
import CitizenFeed from "./citizen-feed";
import AgentTimeline from "./agent-timeline";
import AICommandCenter from "./ai-command-center";

const stats = [
  {
    title: "City Health",
    value: "92%",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "AI Agents",
    value: "10",
    icon: BrainCircuit,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Live Events",
    value: "247",
    icon: Activity,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Critical Alerts",
    value: "03",
    icon: TriangleAlert,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function DashboardHero() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-6xl font-bold tracking-tight">
          Autonomous City
          <br />
          Operating System
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-zinc-400">
          CivicPulse AI continuously monitors traffic, weather,
          sensors, citizen complaints and predicts civic issues
          before they become emergencies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className={`inline-flex rounded-xl p-3 ${item.bg}`}>
                <Icon className={item.color} size={24} />
              </div>

              <h3 className="mt-6 text-zinc-400">
                {item.title}
              </h3>

              <p className="mt-2 text-4xl font-bold">
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <p className="mb-3 text-sm text-zinc-400">
          Ask CivicPulse AI
        </p>

        <input
          placeholder="Which ward requires immediate attention?"
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-blue-500"
        />
      </div>
<LiveActivity />
<CityHealth />
<RecentIncidents />
<CitizenFeed />
<AgentTimeline />
<AICommandCenter />
    </section>
    
  );
}