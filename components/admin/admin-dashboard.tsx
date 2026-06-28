"use client";

import { useEffect, useState } from "react";
import {
  Complaint,
  getComplaints,
  subscribe,
  updateComplaintStatus,
} from "@/lib/city-store";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  function changeStatus(
    id: string,
    status: Complaint["status"]
  ) {
    updateComplaintStatus(id, status);
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">

      <table className="w-full">

        <thead className="bg-zinc-800">

          <tr>

            <th className="p-4 text-left">Complaint ID</th>

            <th className="p-4 text-left">Issue</th>

            <th className="p-4 text-left">Department</th>

            <th className="p-4 text-left">Officer</th>

            <th className="p-4 text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {complaints.length === 0 ? (

            <tr>

              <td
                colSpan={5}
                className="p-6 text-center text-zinc-400"
              >
                No complaints found.
              </td>

            </tr>

          ) : (

            complaints.map((complaint) => (

              <tr
                key={complaint.id}
                className="border-t border-zinc-800"
              >

                <td className="p-4">
                  {complaint.id}
                </td>

                <td className="p-4">
                  {complaint.issue}
                </td>

                <td className="p-4">
                  {complaint.department}
                </td>

                <td className="p-4">
                  {complaint.officer}
                </td>

                <td className="p-4">

                  <select
                    value={complaint.status}
                    onChange={(e) =>
                      changeStatus(
                        complaint.id,
                        e.target.value as Complaint["status"]
                      )
                    }
                    className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2"
                  >

                    <option>Submitted</option>

                    <option>Assigned</option>

                    <option>In Progress</option>

                    <option>Resolved</option>

                  </select>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}