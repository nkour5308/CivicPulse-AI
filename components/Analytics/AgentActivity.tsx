"use client";

import { getComplaints, subscribe } from "@/lib/city-store";
import { useEffect, useState } from "react";

export default function AgentActivity() {
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    function loadActivities() {
      const complaints = getComplaints();

      const latest = complaints.slice(0, 8).map((complaint) => ({
        agent: "Dispatcher Agent",
        action: `Assigned ${complaint.category} complaint (${complaint.id})`,
        time: new Date(complaint.createdAt).toLocaleString(),
        color: "bg-green-500",
      }));

      setActivities(latest);
    }

    loadActivities();

    const unsub = subscribe(loadActivities);

    return () => unsub();
  }, []);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Live Agent Activity
      </h2>

      {activities.length === 0 ? (
        <p className="text-zinc-400">
          No agent activity yet.
        </p>
      ) : (
        <div className="space-y-5">

          {activities.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div
                className={`w-3 h-3 rounded-full mt-2 ${item.color}`}
              />

              <div>
                <p className="text-white font-medium">
                  {item.agent}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {item.action}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {item.time}
                </p>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}