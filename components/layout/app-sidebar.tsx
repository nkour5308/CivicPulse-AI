"use client";

export function AppSidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-black/40 backdrop-blur-xl">
      <div className="flex h-20 items-center border-b border-zinc-800 px-6">

        <div>
          <h1 className="text-xl font-bold">
            CivicPulse AI
          </h1>

          <p className="text-xs text-zinc-400">
            Autonomous City OS
          </p>
        </div>

      </div>

      <nav className="space-y-2 p-4">

        <button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-left">
          Overview
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
          Digital Twin
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
          Incidents
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
          Prediction
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
          Simulation
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
          Resources
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
          AI Copilot
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
          Command Center
        </button>

      </nav>
    </aside>
  );
}