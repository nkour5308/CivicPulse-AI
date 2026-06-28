"use client";

import { useState } from "react";
import { Complaint } from "@/lib/city-store";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";
import AssignComplaintModal from "./AssignComplaintModal";

interface Props {
  complaint: Complaint;
}

export default function ComplaintRow({ complaint }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="border-t border-zinc-800 hover:bg-zinc-800/40">

        <td className="p-4 font-semibold">
          {complaint.id}
        </td>

        <td className="p-4">
          {complaint.issue}
        </td>

        <td className="p-4">
          {complaint.ward}
        </td>

        <td className="p-4">
          {complaint.officer || "-"}
        </td>

        <td className="p-4">
          <StatusBadge status={complaint.status} />
        </td>

        <td className="p-4">
          <PriorityBadge priority={complaint.priority} />
        </td>

        <td className="p-4">
          {complaint.department || "-"}
        </td>

        <td className="p-4">
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500"
          >
            View Details
          </button>
        </td>

      </tr>

      {open && (
        <AssignComplaintModal
          complaint={complaint}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}