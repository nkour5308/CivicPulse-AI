"use client";

import { useState } from "react";

export default function SettingsPanel() {
  const [alertLevel, setAlertLevel] = useState("medium");
  const [aiMode, setAiMode] = useState("balanced");

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-8">
      
      {/* AI Mode */}
      <div>
        <h2 className="text-xl font-semibold">AI Decision Mode</h2>

        <select
          value={aiMode}
          onChange={(e) => setAiMode(e.target.value)}
          className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-900 p-3"
        >
          <option value="conservative">Conservative (Human approval heavy)</option>
          <option value="balanced">Balanced (Recommended)</option>
          <option value="autonomous">Autonomous (Full AI execution)</option>
        </select>

        <p className="mt-2 text-sm text-zinc-400">
          Controls how aggressively CivicPulse agents act without human intervention.
        </p>
      </div>

      {/* Alert Sensitivity */}
      <div>
        <h2 className="text-xl font-semibold">Alert Sensitivity</h2>

        <select
          value={alertLevel}
          onChange={(e) => setAlertLevel(e.target.value)}
          className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-900 p-3"
        >
          <option value="low">Low (Only critical issues)</option>
          <option value="medium">Medium (Recommended)</option>
          <option value="high">High (All anomalies)</option>
        </select>

        <p className="mt-2 text-sm text-zinc-400">
          Determines how many events trigger alerts across the city.
        </p>
      </div>

      {/* System Status */}
      <div className="rounded-2xl bg-zinc-900 p-5">
        <h3 className="text-lg font-semibold">System Status</h3>

        <div className="mt-4 space-y-2 text-sm text-zinc-400">
          <p>🟢 AI Agents: Online</p>
          <p>🟢 Prediction Engine: Active</p>
          <p>🟡 Data Sync: Stable</p>
          <p>🟢 City Sensors: Connected</p>
        </div>
      </div>
    </div>
  );
}