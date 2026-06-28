"use client";

import * as React from "react";
import AdminSidebar from "./admin-sidebar";

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-zinc-950 text-white">

      <AdminSidebar />

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>

    </div>
  );
}