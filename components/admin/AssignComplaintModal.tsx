"use client";

import { Complaint, updateComplaint } from "@/lib/city-store";

interface Props {
  complaint: Complaint;
  onClose: () => void;
}

const officers = [
  {
    name: "Rajesh Sharma",
    department: "Municipal Sanitation Department",
    contact: "+91 9876543210",
    email: "rajesh@city.gov.in",
    team: "Cleaning Team Alpha",
    office: "Ward Office 1",
    expectedResolution: "24 Hours",
  },
  {
    name: "Amit Verma",
    department: "Water Supply Department",
    contact: "+91 9876543222",
    email: "amit@city.gov.in",
    team: "Water Repair Unit",
    office: "Water HQ",
    expectedResolution: "12 Hours",
  },
  {
    name: "Neha Singh",
    department: "Traffic Control Department",
    contact: "+91 9876543333",
    email: "neha@city.gov.in",
    team: "Traffic Squad",
    office: "Traffic HQ",
    expectedResolution: "Immediate",
  },
  {
    name: "Sunil Gupta",
    department: "Electricity Maintenance Unit",
    contact: "+91 9876544444",
    email: "sunil@city.gov.in",
    team: "Electrical Team",
    office: "Power Grid Office",
    expectedResolution: "8 Hours",
  },
];

export default function AssignComplaintModal({
  complaint,
  onClose,
}: Props) {
  function assignOfficer(name: string) {
    const officer = officers.find((o) => o.name === name);

    if (!officer) return;

    updateComplaint(complaint.id, {
      officer: officer.name,
      department: officer.department,
      contact: officer.contact,
      email: officer.email,
      office: officer.office,
      team: officer.team,
      expectedResolution: officer.expectedResolution,
      status: "Assigned",
    });

    onClose();
  }

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />

      <div className="fixed right-0 top-0 h-screen w-[520px] bg-zinc-950 border-l border-zinc-800 z-50 overflow-y-auto">

        <div className="p-8 space-y-8">

          <div className="flex justify-between items-center">

            <h1 className="text-3xl font-bold">
              Complaint Details
            </h1>

            <button
              onClick={onClose}
              className="text-2xl"
            >
              ✕
            </button>

          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">

            <h2 className="text-xl font-bold mb-5">
              Complaint Information
            </h2>

            <div className="space-y-4">

              <Info title="Complaint ID" value={complaint.id} />

              <Info title="Issue" value={complaint.issue} />

              <Info title="Ward" value={complaint.ward} />

              <Info title="Category" value={complaint.category} />

              <Info title="Status" value={complaint.status} />

              <Info title="Priority" value={complaint.priority} />

            </div>

          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">

            <h2 className="text-xl font-bold mb-5">
              AI Recommendation
            </h2>

            <div className="rounded-xl bg-zinc-800 p-4">
              {complaint.response}
            </div>

          </div>

          <div className="rounded-2xl bg-zinc-900 p-6">

            <h2 className="text-xl font-bold mb-5">
              Assign Officer
            </h2>

            <select
              defaultValue=""
              onChange={(e) =>
                assignOfficer(e.target.value)
              }
              className="w-full rounded-xl bg-zinc-800 p-4"
            >
              <option value="">
                Select Officer
              </option>

              {officers.map((officer) => (
                <option
                  key={officer.name}
                  value={officer.name}
                >
                  {officer.name}
                </option>
              ))}

            </select>

          </div>

        </div>

      </div>
    </>
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
    <div>

      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>

    </div>
  );
}