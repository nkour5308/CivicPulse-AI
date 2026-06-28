"use client";

import {
  Brain,
  MessageSquare,
  ShieldAlert,
  Truck,
  Bell,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Citizen Complaint Received",
    description: "Complaint submitted through mobile app",
    color: "text-blue-400",
  },
  {
    icon: Brain,
    title: "Complaint Intelligence Agent",
    description: "Analyzing complaint using NLP",
    color: "text-violet-400",
  },
  {
    icon: ShieldAlert,
    title: "Risk Prediction Agent",
    description: "Severity score: HIGH (91%)",
    color: "text-red-400",
  },
  {
    icon: Truck,
    title: "Resource Allocation Agent",
    description: "Dispatching sanitation vehicle",
    color: "text-amber-400",
  },
  {
    icon: Bell,
    title: "Citizen Notification Agent",
    description: "Resident updated automatically",
    color: "text-cyan-400",
  },
  {
    icon: CheckCircle2,
    title: "Resolution",
    description: "Issue closed successfully",
    color: "text-emerald-400",
  },
];

export default function AgentTimeline() {
  return (
    <section className="mt-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Multi-Agent Decision Pipeline
        </h2>

        <p className="mt-2 text-zinc-400">
          How CivicPulse AI resolves every complaint autonomously
        </p>
      </div>

      <div className="space-y-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-16 h-12 w-[2px] bg-zinc-700" />
              )}

              <div className="rounded-xl bg-zinc-900 p-3">
                <Icon className={step.color} size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-1 text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}