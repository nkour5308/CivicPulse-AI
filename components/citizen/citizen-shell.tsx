"use client";

import * as React from "react";
import CitizenSidebar from "./citizen-sidebar";

export default function CitizenShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-zinc-950 text-white">

      <CitizenSidebar />

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>

    </div>
  );
}