"use client";

import { useEffect, useState } from "react";
import {
  Complaint,
  getComplaints,
  subscribe,
} from "@/lib/city-store";

type DepartmentStats = {
  department: string;
  complaints: number;
};

export default function ResourceDashboard() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());

    const unsub = subscribe(() => {
      setComplaints([...getComplaints()]);
    });

    return () => unsub();
  }, []);

  const map: Record<string, number> = {};

  complaints
    .filter((c) => c.status !== "Resolved")
    .forEach((c) => {
      map[c.department] = (map[c.department] || 0) + 1;
    });

  const departments: DepartmentStats[] = Object.entries(map)
    .map(([department, complaints]) => ({
      department,
      complaints,
    }))
    .sort((a, b) => b.complaints - a.complaints);

  return (
    <div className="grid lg:grid-cols-2 gap-6">

      {departments.length === 0 ? (
        <div className="col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center text-zinc-400">
          No active complaints.
        </div>
      ) : (
        departments.map((dept) => {

          const teams =
            dept.complaints > 15
              ? 4
              : dept.complaints > 8
              ? 3
              : dept.complaints > 3
              ? 2
              : 1;

          const eta =
            teams >= 4
              ? "6 Hours"
              : teams === 3
              ? "12 Hours"
              : teams === 2
              ? "24 Hours"
              : "48 Hours";

          return (
            <div
              key={dept.department}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold text-white">
                {dept.department}
              </h2>

              <p className="text-zinc-400 mt-2">
                Active Complaints
              </p>

              <p className="text-5xl font-bold text-blue-400 mt-2">
                {dept.complaints}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-zinc-800 rounded-xl p-4">
                  <p className="text-zinc-400 text-sm">
                    Recommended Teams
                  </p>

                  <p className="text-3xl font-bold text-green-400 mt-2">
                    {teams}
                  </p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-4">
                  <p className="text-zinc-400 text-sm">
                    Estimated Clearance
                  </p>

                  <p className="text-2xl font-bold text-yellow-400 mt-2">
                    {eta}
                  </p>
                </div>

              </div>

              <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-400 font-semibold">
                  AI Recommendation
                </p>

                <p className="text-zinc-300 mt-2">
                  Deploy {teams} response team
                  {teams > 1 ? "s" : ""} to the{" "}
                  <span className="font-semibold">
                    {dept.department}
                  </span>{" "}
                  to reduce the current backlog of{" "}
                  {dept.complaints} complaint
                  {dept.complaints > 1 ? "s" : ""}.
                </p>
              </div>

            </div>
          );
        })
      )}

    </div>
  );
}