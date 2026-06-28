"use client";

import { useEffect, useState } from "react";
import CitizenShell from "@/components/citizen/citizen-shell";
import {
  Complaint,
  getComplaints,
  subscribe,
} from "@/lib/city-store";

export default function CitizenDashboard() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  const submitted = complaints.length;

  const pending = complaints.filter(
    (c) => c.status !== "Resolved"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  return (
    <CitizenShell>
      <div className="space-y-8">

        {/* Welcome */}

        <div>
          <h1 className="text-5xl font-bold">
            Welcome to CivicPulse AI 👋
          </h1>

          <p className="mt-3 text-zinc-400">
            Report civic issues, monitor your complaints and receive AI-powered city updates.
          </p>
        </div>

        {/* Complaint Summary */}

        <div>

          <h2 className="text-2xl font-semibold mb-5">
            Complaint Summary
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <StatCard
              title="Submitted"
              value={submitted.toString()}
              color="text-blue-400"
            />

            <StatCard
              title="Pending"
              value={pending.toString()}
              color="text-yellow-400"
            />

            <StatCard
              title="Resolved"
              value={resolved.toString()}
              color="text-green-400"
            />

          </div>

        </div>

        {/* Recent Complaints */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Recent Complaints
          </h2>

          {complaints.length === 0 ? (

            <p className="text-zinc-400">
              No complaints submitted yet.
            </p>

          ) : (

            <div className="space-y-4">

              {complaints.slice(0, 5).map((complaint) => (

                <div
                  key={complaint.id}
                  className="flex justify-between items-center border-b border-zinc-800 pb-4"
                >

                  <div>

                    <p className="font-medium">
                      {complaint.id}
                    </p>

                    <p className="text-sm text-zinc-400">
                      {complaint.issue}
                    </p>

                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      complaint.status === "Resolved"
                        ? "bg-green-500/20 text-green-400"
                        : complaint.status === "Submitted"
                        ? "bg-blue-500/20 text-blue-400"
                        : complaint.status === "Assigned"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {complaint.status}
                  </span>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Public Alerts */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Public Alerts
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl bg-yellow-500/10 border border-yellow-500 p-4">
              ⚠ Heavy rainfall expected in Ward 7 tomorrow.
            </div>

            <div className="rounded-xl bg-blue-500/10 border border-blue-500 p-4">
              💧 Water supply maintenance from 2 PM to 5 PM.
            </div>

            <div className="rounded-xl bg-red-500/10 border border-red-500 p-4">
              🚧 Road repair work near City Hospital.
            </div>

          </div>

        </div>

        {/* AI Suggestions */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            AI Suggestions
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl bg-zinc-800 p-4">
              💡 Based on previous complaint trends, most sanitation issues are resolved within 24 hours.
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              🌧 Rain is expected tomorrow. Avoid low-lying roads in your area.
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              📍 Enable location services to receive personalized civic alerts.
            </div>

          </div>

        </div>

      </div>
    </CitizenShell>
  );
}

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition">

      <p className="text-zinc-400">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

    </div>
  );
}