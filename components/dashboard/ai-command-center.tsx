"use client";

import {
  Bot,
  Mic,
  Send,
  Sparkles,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const suggestions = [
  "Which ward needs immediate attention?",
  "Predict flood risk for next 6 hours",
  "Show unresolved garbage complaints",
  "Optimize cleaning vehicle routes",
];

const agents = [
  {
    name: "Complaint Intelligence Agent",
    status: "Analyzing complaints",
  },
  {
    name: "Prediction Agent",
    status: "Forecasting risks",
  },
  {
    name: "Resource Allocation Agent",
    status: "Planning deployments",
  },
  {
    name: "Citizen Notification Agent",
    status: "Preparing alerts",
  },
];

export default function AICommandCenter() {
  return (
    <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <Bot className="text-blue-400" size={32} />

        <div>
          <h2 className="text-3xl font-bold">
            CivicPulse AI Copilot
          </h2>

          <p className="text-zinc-400">
            Talk with your city's autonomous intelligence
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <input
          placeholder="Ask CivicPulse anything..."
          className="flex-1 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none"
        />

        <button className="rounded-xl bg-zinc-800 p-4 hover:bg-zinc-700">
          <Mic size={20} />
        </button>

        <button className="rounded-xl bg-blue-600 p-4 hover:bg-blue-500">
          <Send size={20} />
        </button>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 flex items-center gap-2 font-semibold">
          <Sparkles size={18} />
          Suggested Questions
        </h3>

        <div className="grid gap-3 md:grid-cols-2">
          {suggestions.map((item) => (
            <button
              key={item}
              className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-left transition hover:border-blue-500"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
            <BrainCircuit size={20} />
            Agent Reasoning
          </h3>

          <div className="space-y-4">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center justify-between rounded-xl bg-zinc-800 p-4"
              >
                <div>
                  <p className="font-medium">
                    {agent.name}
                  </p>

                  <p className="text-sm text-zinc-400">
                    {agent.status}
                  </p>
                </div>

                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <h3 className="mb-5 text-xl font-semibold">
            Recommended Action
          </h3>

          <div className="rounded-xl bg-blue-500/10 p-5">
            <p className="text-zinc-300">
              AI recommends deploying two sanitation teams to
              Ward 7 before rainfall increases complaint volume.
            </p>

            <button className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium hover:bg-blue-500">
              Dispatch Resources
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}