"use client";

import { useState } from "react";
import { getComplaintById } from "@/lib/city-store";

export default function TrackComplaint() {

  const [id, setId] = useState("");

  const [complaint, setComplaint] = useState<any>(null);

  function searchComplaint() {
    const result = getComplaintById(id.trim());

    setComplaint(result || false);
  }

  return (
    <div className="space-y-8">

      <div className="flex gap-4">

        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Complaint ID"
          className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 p-4"
        />

        <button
          onClick={searchComplaint}
          className="bg-blue-600 hover:bg-blue-500 px-8 rounded-xl"
        >
          Track
        </button>

      </div>

      {complaint === false && (
        <div className="bg-red-500/10 border border-red-500 rounded-xl p-5">
          Complaint not found.
        </div>
      )}

      {complaint && (

        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 space-y-6">

          <div>

            <h2 className="text-3xl font-bold text-white">
              {complaint.id}
            </h2>

            <p className="text-zinc-400 mt-2">
              {complaint.issue}
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <Info title="Ward" value={complaint.ward} />

            <Info title="Category" value={complaint.category} />

            <Info title="Department" value={complaint.department} />

            <Info title="Officer" value={complaint.officer} />

            <Info title="Contact" value={complaint.contact} />

            <Info title="Expected Resolution" value={complaint.expectedResolution} />

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              AI Response
            </h3>

            <div className="bg-zinc-800 rounded-xl p-5 text-zinc-300">
              {complaint.response}
            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Complaint Progress
            </h3>

            <Progress status={complaint.status} />

          </div>

        </div>

      )}

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-zinc-800 rounded-xl p-4">

      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <p className="text-white mt-2 font-medium">
        {value}
      </p>

    </div>
  );
}

function Progress({
  status,
}: {
  status: string;
}) {

  const steps = [
    "Submitted",
    "Assigned",
    "In Progress",
    "Resolved",
  ];

  const current = steps.indexOf(status);

  return (

    <div className="flex justify-between">

      {steps.map((step, index) => (

        <div
          key={step}
          className="flex flex-col items-center flex-1"
        >

          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center
            ${
              index <= current
                ? "bg-green-500"
                : "bg-zinc-700"
            }`}
          >
            ✓
          </div>

          <p className="text-sm mt-3 text-center">
            {step}
          </p>

        </div>

      ))}

    </div>

  );
}