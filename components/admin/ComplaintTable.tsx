"use client";

import { Complaint } from "@/lib/city-store";
import ComplaintRow from "./ComplaintRow";

interface Props {
  complaints: Complaint[];
}

export default function ComplaintTable({
  complaints,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900">

      <table className="min-w-[1300px]w-full">

        <thead className="bg-zinc-800">

          <tr>

            <th className="p-4 text-left">Complaint ID</th>

            <th className="p-4 text-left">Issue</th>

            <th className="p-4 text-left">Ward</th>

            <th className="p-4 text-left">Officer</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-left">Priority</th>

            <th className="p-4 text-left">
  Department
</th>

<th className="p-4 text-left">
  Action
</th>

          </tr>

        </thead>

        <tbody>

          {complaints.map((complaint) => (

            <ComplaintRow
              key={complaint.id}
              complaint={complaint}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}