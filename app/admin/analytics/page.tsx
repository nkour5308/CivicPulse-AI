"use client";

import { useEffect, useState } from "react";
import { getComplaints, subscribe, Complaint } from "@/lib/city-store";
import KpiCard from "@/components/Analytics/KpiCard";
import TrendChart from "@/components/Analytics/TrendChart";
import DepartmentPie from "@/components/Analytics/DepartmentPie";
import ResolutionChart from "@/components/Analytics/ResolutionChart";
import AIPredictions from "@/components/Analytics/AIPredictions";
import AgentActivity from "@/components/Analytics/AgentActivity";
import AIPerformance from "@/components/Analytics/AIPerformance";
import WardHeatmap from "@/components/Analytics/WardHeatmap";
import { getAnalytics } from "@/lib/analytics";
  export default function AnalyticsPage() {
    const [complaints, setComplaints] = useState<Complaint[]>([]);

useEffect(() => {
  setComplaints(getComplaints());

  const unsub = subscribe(() => {
    setComplaints([...getComplaints()]);
  });

  return () => unsub();
}, []);

const totalComplaints = complaints.length;

const resolvedComplaints = complaints.filter(
  c => c.status === "Resolved"
).length;

const pendingComplaints = complaints.filter(
  c => c.status !== "Resolved"
).length;

const resolutionRate =
  totalComplaints === 0
    ? 0
    : Math.round((resolvedComplaints / totalComplaints) * 100);
  const analytics = getAnalytics();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-bold text-white">
          Analytics Dashboard
        </h1>

        <p className="text-gray-400 mt-2 text-lg">
          AI-powered insights into city performance, complaints, and municipal operations.
        </p>
      </div>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    <KpiCard
  title="Total Complaints"
  value={String(totalComplaints)}
  change={`${pendingComplaints} Pending`}
/>

<KpiCard
  title="Resolution Rate"
  value={`${resolutionRate}%`}
  change={`${resolvedComplaints} Resolved`}
/>

<KpiCard
  title="Pending Complaints"
  value={String(pendingComplaints)}
  change="Live Data"
/>

<KpiCard
  title="AI Accuracy"
  value="98.7%"
  change="Gemini AI Active"
/>

</section>

<div className="flex flex-wrap justify-between items-center">

  <h2 className="text-xl font-semibold text-white">
    City Analytics Overview
  </h2>

  <div className="flex gap-3 mt-4 md:mt-0">

    <button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition">
      Today
    </button>

    <button className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg text-gray-300 hover:border-blue-500 transition">
      7 Days
    </button>

    <button className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg text-gray-300 hover:border-blue-500 transition">
      30 Days
    </button>

    <button className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg text-gray-300 hover:border-blue-500 transition">
      1 Year
    </button>

  </div>

</div>
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

    <div className="xl:col-span-2">
        <TrendChart />
    </div>

    <DepartmentPie />

</section>
<section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

    <ResolutionChart />

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl">

        <h2 className="text-2xl font-semibold text-white mb-6">
            AI City Insights
        </h2>

        <div className="space-y-5">

            <div className="border border-zinc-800 rounded-xl p-4">
                <p className="text-blue-400 font-semibold">
                    💧 Water Leakage Cluster
                </p>

                <p className="text-gray-400 mt-2">
                    AI detected an unusual increase in water leakage complaints in Ward 4.
                </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-4">
                <p className="text-yellow-400 font-semibold">
                    🚧 Traffic Alert
                </p>

                <p className="text-gray-400 mt-2">
                    Congestion expected tomorrow between 8–10 AM due to road maintenance.
                </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-4">
                <p className="text-green-400 font-semibold">
                    ♻️ Resource Optimization
                </p>

                <p className="text-gray-400 mt-2">
                    AI recommends reallocating two sanitation vehicles to Ward 7.
                </p>
            </div>

        </div>

    </div>

</section>

<section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

    <AIPredictions />

    <AgentActivity />

</section>
      {/* AI Insights */}
      <section>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

    <WardHeatmap />

    <AIPerformance />

</section>

<div className="rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 p-8">

  <h2 className="text-2xl font-bold text-white mb-4">
    AI Executive Summary
  </h2>

  <ul className="space-y-3 text-gray-300">

    <li>✅ Complaint resolution improved by 12% this week.</li>

    <li>⚠️ Ward 7 has the highest predicted flood risk.</li>

    <li>🚛 AI recommends deploying two additional sanitation vehicles.</li>

    <li>📈 Overall city service efficiency increased by 8%.</li>

  </ul>

</div>
    </div>
  );
}