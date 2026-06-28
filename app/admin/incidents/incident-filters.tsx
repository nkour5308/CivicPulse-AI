"use client";

export default function IncidentFilters() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <select className="rounded-xl border border-white/10 bg-zinc-900 p-3">
        <option>All Departments</option>
        <option>Sanitation</option>
        <option>Water</option>
        <option>Traffic</option>
      </select>

      <select className="rounded-xl border border-white/10 bg-zinc-900 p-3">
        <option>All Priorities</option>
        <option>Critical</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select className="rounded-xl border border-white/10 bg-zinc-900 p-3">
        <option>All Status</option>
        <option>Open</option>
        <option>Assigned</option>
        <option>Resolved</option>
      </select>

      <input
        placeholder="Search complaint..."
        className="rounded-xl border border-white/10 bg-zinc-900 p-3"
      />
    </div>
  );
}