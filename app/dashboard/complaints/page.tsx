"use client";

import { useState, useEffect } from "react";

type Complaint = {
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Resolved";
};

export default function Complaints() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  // load saved data
  useEffect(() => {
    const stored = localStorage.getItem("complaints");
    if (stored) setComplaints(JSON.parse(stored));
  }, []);

  // save data
  function save(updated: Complaint[]) {
    setComplaints(updated);
    localStorage.setItem("complaints", JSON.stringify(updated));
  }

  function addComplaint() {
    if (!title || !description) return;

    const newComplaint: Complaint = {
      title,
      description,
      status: "Pending",
    };

    save([newComplaint, ...complaints]);
    setTitle("");
    setDescription("");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-3xl font-bold">Submit Complaint</h1>

      {/* Form */}
      <div className="mt-6 space-y-4 max-w-xl">

        <input
          className="w-full p-3 bg-zinc-900 rounded"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-3 bg-zinc-900 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addComplaint}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Submit Complaint
        </button>

      </div>

      {/* List */}
      <div className="mt-10 space-y-4">

        {complaints.map((c, i) => (
          <div key={i} className="bg-zinc-900 p-4 rounded">

            <h2 className="font-semibold">{c.title}</h2>
            <p className="text-zinc-400">{c.description}</p>

            <span className="text-sm text-yellow-400">
              {c.status}
            </span>

          </div>
        ))}

      </div>

    </main>
  );
}