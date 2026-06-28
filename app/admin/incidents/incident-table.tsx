"use client";

import { useEffect, useState } from "react";
import {
  Complaint,
  getComplaints,
  subscribe,
  updateComplaintStatus,
} from "@/lib/city-store";
import AssignComplaintModal from "@/components/admin/AssignComplaintModal";
import PriorityBadge from "@/components/admin/PriorityBadge";
import StatusBadge from "@/components/admin/StatusBadge";

export default function IncidentTable() {
  const [incidents, setIncidents] = useState<Complaint[]>([]);
  const [selectedComplaint, setSelectedComplaint] =
    useState<Complaint | null>(null);

  useEffect(() => {
    function refresh() {
      setIncidents([...getComplaints()]);
    }

    refresh();

    const unsub = subscribe(refresh);

    return () => unsub();
  }, []);

  return (
    <>
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
        <table className="min-w-[1400px] w-full text-left">

          <thead className="bg-zinc-900">
            <tr>
              <th className="p-4">Complaint ID</th>
              <th className="p-4">Issue</th>
              <th className="p-4">Ward</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Department</th>
              <th className="p-4">Officer</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {incidents.length === 0 ? (
              <tr>
                <td
                  className="p-6 text-center text-zinc-400"
                  colSpan={8}
                >
                  No complaints submitted yet.
                </td>
              </tr>
            ) : (
              incidents.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="p-4 font-mono text-blue-400">
                    {item.id}
                  </td>

                  <td className="p-4">
                    {item.issue}
                  </td>

                  <td className="p-4">
                    {item.ward}
                  </td>

                  <td className="p-4">
                    <PriorityBadge priority={item.priority} />
                  </td>

                  <td className="p-4">
                    {item.department || "-"}
                  </td>

                  <td className="p-4">
                    {item.officer || "-"}
                  </td>

                  <td className="p-4">

                    <div className="space-y-3">

                      <StatusBadge status={item.status} />

                      <select
                        value={item.status}
                        onChange={(e) =>
                          updateComplaintStatus(
                            item.id,
                            e.target.value as Complaint["status"]
                          )
                        }
                        className="rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2 text-white"
                      >
                        <option>Submitted</option>
                        <option>Assigned</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                      </select>

                    </div>

                  </td>

                  <td className="p-4">

                    <button
                      onClick={() =>
                        setSelectedComplaint(item)
                      }
                      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition"
                    >
                      View Details
                    </button>

                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {selectedComplaint && (
        <AssignComplaintModal
          complaint={selectedComplaint}
          onClose={() => setSelectedComplaint(null)}
        />
      )}
    </>
  );
}