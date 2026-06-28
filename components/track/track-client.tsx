"use client";

import { useState } from "react";
import { getComplaintById } from "@/lib/city-store";

export default function TrackClient() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSearch() {
  setLoading(true);

  const data = getComplaintById(id.trim());
  setResult(data || null);

  setSearched(true);
  setLoading(false);
}

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Track Complaint</h1>

      <div className="flex gap-3">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Complaint ID"
          className="p-3 rounded bg-zinc-900 border border-white/10 w-full"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 px-5 rounded"
        >
          Track
        </button>
      </div>

      {result && (
        <div className="p-4 rounded bg-white/5 border border-white/10">
          <p><b>Issue:</b> {result.issue}</p>
          <p><b>Status:</b> {result.status}</p>
          <p><b>Department:</b> {result.department}</p>
          <p><b>Officer:</b> {result.officer}</p>
          <p><b>Contact:</b> {result.contact}</p>
          <p><b>Email:</b> {result.email}</p>
          <p><b>Action:</b> {result.action}</p>
          <p className="text-blue-400">{result.response}</p>
        </div>
      )}

      {searched && !result && (
  <p className="text-red-400">
    Complaint not found
  </p>
)}
    </div>
  );
}