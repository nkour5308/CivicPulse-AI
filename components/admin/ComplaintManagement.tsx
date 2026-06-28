"use client";

import { useEffect, useMemo, useState } from "react";
import ComplaintTable from "./ComplaintTable";
import {
  Complaint,
  getComplaints,
  subscribe,
} from "@/lib/city-store";

export default function ComplaintManagement() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  const total = complaints.length;

  const submitted = complaints.filter(
    (c) => c.status === "Submitted"
  ).length;

  const assigned = complaints.filter(
    (c) => c.status === "Assigned"
  ).length;

  const inProgress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const filtered = useMemo(() => {
    return complaints.filter((c) => {
      const value = search.toLowerCase();

      const matchesSearch =
        c.id.toLowerCase().includes(value) ||
        c.issue.toLowerCase().includes(value) ||
        c.ward.toLowerCase().includes(value);

      const matchesStatus =
        statusFilter === "All" ||
        c.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [complaints, search, statusFilter]);

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-5xl font-bold">
          Complaint Management
        </h1>

        <p className="mt-3 text-zinc-400">
          Review complaints, assign officers and monitor city operations.
        </p>

      </div>

      <div className="grid grid-cols-2 xl:grid-cols-5 gap-5">

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
          value={inProgress}
          color="text-orange-400"
        />

        <StatCard
          title="Resolved"
          value={resolved}
          color="text-green-400"
        />

      </div>

      <div className="flex flex-col md:flex-row gap-4">

        <input
          placeholder="Search by Complaint ID, Issue or Ward..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-xl bg-zinc-900 border border-zinc-800 p-4"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl bg-zinc-900 border border-zinc-800 px-5"
        >
          <option>All</option>
          <option>Submitted</option>
          <option>Assigned</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

      </div>

      <ComplaintTable complaints={filtered} />

    </div>
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

      <h2 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h2>

    </div>
  );
}