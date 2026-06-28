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
    function refresh() {
      setComplaints([...getComplaints()]);
    }

    refresh();

    const unsub = subscribe(refresh);

    return () => unsub();
  }, []);

  const total = complaints.length;

  const submitted = complaints.filter(
    (c) => c.status === "Submitted"
  ).length;

  const assigned = complaints.filter(
    (c) => c.status === "Assigned"
  ).length;

  const progress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const recent = [...complaints].slice(0, 5);

  return (
    <CitizenShell>
      <div className="space-y-8">

        <div>

          <h1 className="text-5xl font-bold">
            Welcome to CivicPulse AI
          </h1>

          <p className="mt-3 text-zinc-400">
            Smart AI-powered civic complaint management for faster and transparent municipal services.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Total Complaints"
            value={total}
            color="text-blue-400"
          />

          <StatCard
            title="Submitted"
            value={submitted}
            color="text-yellow-400"
          />

          <StatCard
            title="In Progress"
            value={assigned + progress}
            color="text-orange-400"
          />

          <StatCard
            title="Resolved"
            value={resolved}
            color="text-green-400"
          />

        </div>

        {/* Recent Complaints */}

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Complaints
          </h2>

          {recent.length === 0 ? (

            <div className="text-zinc-400">
              No complaints submitted yet.
            </div>

          ) : (

            <div className="space-y-4">

              {recent.map((item) => (

                <div
                  key={item.id}
                  className="rounded-xl bg-zinc-800 p-4 flex justify-between items-center"
                >

                  <div>

                    <p className="font-semibold">
                      {item.issue}
                    </p>

                    <p className="text-sm text-zinc-400">
                      {item.id}
                    </p>

                    <p className="text-xs text-zinc-500 mt-1">
                      {item.department || "Department not assigned"}
                    </p>

                  </div>

                  <span
                    className={
                      item.status === "Resolved"
                        ? "text-green-400"
                        : item.status === "In Progress"
                        ? "text-orange-400"
                        : item.status === "Assigned"
                        ? "text-blue-400"
                        : "text-yellow-400"
                    }
                  >
                    {item.status}
                  </span>

                </div>

              ))}

            </div>

          )}

        </div>

       {/* My Complaint Status */}

<div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

  <h2 className="text-2xl font-bold mb-6">
    My Complaint Status
  </h2>

  <div className="space-y-4">

    <div className="flex justify-between rounded-xl bg-zinc-800 p-4">
      <span>📝 Submitted</span>
      <span className="font-bold text-yellow-400">
        {submitted}
      </span>
    </div>

    <div className="flex justify-between rounded-xl bg-zinc-800 p-4">
      <span>👨‍💼 Assigned</span>
      <span className="font-bold text-blue-400">
        {assigned}
      </span>
    </div>

    <div className="flex justify-between rounded-xl bg-zinc-800 p-4">
      <span>🚧 In Progress</span>
      <span className="font-bold text-orange-400">
        {progress}
      </span>
    </div>

    <div className="flex justify-between rounded-xl bg-zinc-800 p-4">
      <span>✅ Resolved</span>
      <span className="font-bold text-green-400">
        {resolved}
      </span>
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
  value: number;
  color: string;
}) {
  return (
    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

      <p className="text-zinc-400">
        {title}
      </p>

      <h2 className={`mt-4 text-4xl font-bold ${color}`}>
        {value}
      </h2>

    </div>
  );
}