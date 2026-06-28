"use client";

import dynamic from "next/dynamic";
import AdminShell from "@/components/admin/admin-shell";

const ComplaintMap = dynamic(
  () => import("@/components/admin/ComplaintMap"),
  {
    ssr: false,
  }
);

export default function MapPage() {
  return (
    <AdminShell>

      <div className="space-y-8">

        <div>

          <h1 className="text-5xl font-bold">
            Complaint Map
          </h1>

          <p className="mt-3 text-zinc-400">
            Interactive visualization of complaints across city wards.
          </p>

        </div>

        <ComplaintMap />

      </div>

    </AdminShell>
  );
}