"use client";

import { useState } from "react";
import { addComplaint } from "@/lib/city-store";

export default function ComplaintForm() {
  const [form, setForm] = useState({
    issue: "",
    ward: "",
    category: "Sanitation",
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedId, setGeneratedId] = useState("");

  function handleSubmit() {
    if (!form.issue || !form.ward) return;

    const result = addComplaint({
  issue: form.issue,
  ward: form.ward,
  category: form.category,
});

setGeneratedId(result.id);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({
        issue: "",
        ward: "",
        category: "Sanitation",
      });
    }, 1500);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
      <input
        value={form.issue}
        onChange={(e) =>
          setForm({ ...form, issue: e.target.value })
        }
        placeholder="Describe issue..."
        className="w-full p-3 rounded-xl bg-zinc-900 border border-white/10"
      />

      <input
        value={form.ward}
        onChange={(e) =>
          setForm({ ...form, ward: e.target.value })
        }
        placeholder="Ward / Location"
        className="w-full p-3 rounded-xl bg-zinc-900 border border-white/10"
      />

      <select
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
        className="w-full p-3 rounded-xl bg-zinc-900 border border-white/10"
      >
        <option>Sanitation</option>
        <option>Water</option>
        <option>Electricity</option>
        <option>Traffic</option>
        <option>Other</option>
      </select>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-xl"
      >
        Submit Complaint
      </button>

      {submitted && (
        <p className="text-green-400 text-sm">
          Complaint submitted successfully ✔
        </p>
      )}
      {generatedId && (
  <div className="mt-5 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
    <p className="text-green-400 font-bold">
      Complaint Submitted Successfully ✅
    </p>

    <p className="mt-2 text-white">
      Your Complaint ID:
    </p>

    <p className="text-blue-400 font-mono text-lg">
      {generatedId}
    </p>

    <p className="text-sm text-zinc-400 mt-2">
      Save this ID to track your complaint later
    </p>
  </div>
)}
    </div>
  );
}