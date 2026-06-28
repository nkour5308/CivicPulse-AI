"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/admin-shell";
import ComplaintMap from "@/components/admin/ComplaintMap";
import ResourceDashboard from "@/components/resources/resource-dashboard";
import {
  Complaint,
  getComplaints,
  subscribe,
} from "@/lib/city-store";

export default function AdminDashboard() {
  const router = useRouter();

  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");

    if (!loggedIn) {
      router.push("/admin/login");
      return;
    }

    function refresh() {
      setComplaints([...getComplaints()]);
    }

    refresh();

    const unsub = subscribe(refresh);

    return () => unsub();
  }, [router]);

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

  const highPriority = complaints.filter(
    (c) => c.priority === "High"
  ).length;

  const officers = new Set(
    complaints
      .map((c) => c.officer)
      .filter((o) => o && o.trim() !== "")
  ).size;

  const recent = [...complaints].slice(0, 5);

  return (
    <AdminShell>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-5xl font-bold">
            Municipal Authority Dashboard
          </h1>

          <p className="mt-3 text-zinc-400">
            AI-powered city monitoring and complaint management.
          </p>
        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-2 xl:grid-cols-6 gap-5">

          <StatCard
            title="Total"
            value={total}
            color="text-blue-400"
          />

          <StatCard
            title="Submitted"
            value={submitted}
            color="text-yellow-400"
          />

          <StatCard
            title="Assigned"
            value={assigned}
            color="text-indigo-400"
          />

          <StatCard
            title="In Progress"
            value={progress}
            color="text-orange-400"
          />

          <StatCard
            title="Resolved"
            value={resolved}
            color="text-green-400"
          />

          <StatCard
            title="High Priority"
            value={highPriority}
            color="text-red-400"
          />

        </div>

        {/* Operational Overview */}

<div className="grid lg:grid-cols-3 gap-6">

  <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

    <h2 className="text-2xl font-bold mb-5">
      Officer Summary
    </h2>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>Officers Assigned</span>
        <span className="text-cyan-400 font-bold">
          {officers}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Pending Assignments</span>
        <span className="text-yellow-400 font-bold">
          {submitted}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Active Cases</span>
        <span className="text-orange-400 font-bold">
          {assigned + progress}
        </span>
      </div>

    </div>

  </div>

  <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

    <h2 className="text-2xl font-bold mb-5">
      Resolution Performance
    </h2>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>Resolved</span>
        <span className="text-green-400 font-bold">
          {resolved}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Resolution Rate</span>
        <span className="text-green-400 font-bold">
          {total === 0
            ? "0%"
            : `${Math.round((resolved / total) * 100)}%`}
        </span>
      </div>

      <div className="flex justify-between">
        <span>High Priority</span>
        <span className="text-red-400 font-bold">
          {highPriority}
        </span>
      </div>

    </div>

  </div>

  <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

    <h2 className="text-2xl font-bold mb-5">
      System Status
    </h2>

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>AI Engine</span>
        <span className="text-green-400">
          ● Online
        </span>
      </div>

      <div className="flex justify-between">
        <span>Complaint System</span>
        <span className="text-green-400">
          ● Operational
        </span>
      </div>

      <div className="flex justify-between">
        <span>Notifications</span>
        <span className="text-green-400">
          ● Active
        </span>
      </div>

    </div>

  </div>

</div>

        {/* Recent Complaints + AI */}

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

            <h2 className="text-2xl font-bold mb-5">
              Recent Complaints
            </h2>

            {recent.length === 0 ? (
              <p className="text-zinc-400">
                No complaints yet.
              </p>
            ) : (
              <div className="space-y-4">

                {recent.map((item) => (

                  <div
                    key={item.id}
                    className="rounded-xl bg-zinc-800 p-4"
                  >
                    <div className="flex justify-between">

                      <div>

                        <p className="font-semibold">
                          {item.issue}
                        </p>

                        <p className="text-sm text-zinc-500">
                          {item.id}
                        </p>

                      </div>

                      <span className="text-blue-400">
                        {item.status}
                      </span>

                    </div>

                  </div>

                ))}

              </div>
            )}

          </div>

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

            <h2 className="text-2xl font-bold mb-5">
              AI Insights
            </h2>

            <div className="space-y-4">

              <Insight>
                Total complaints received: <b>{total}</b>
              </Insight>

              <Insight>
                High priority complaints: <b>{highPriority}</b>
              </Insight>

              <Insight>
                Complaints resolved: <b>{resolved}</b>
              </Insight>

              <Insight>
                Officers assigned: <b>{officers}</b>
              </Insight>

              <Insight>
                Resolution rate:{" "}
                <b>
                  {total === 0
                    ? "0%"
                    : `${Math.round(
                        (resolved / total) * 100
                      )}%`}
                </b>
              </Insight>

            </div>

          </div>

        </div>

        {/* Resources */}

        <ResourceDashboard />

      </div>
    </AdminShell>
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
    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5">

      <p className="text-zinc-400">
        {title}
      </p>

      <h2 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h2>

    </div>
  );
}

function Insight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-zinc-800 p-4">
      {children}
    </div>
  );
}