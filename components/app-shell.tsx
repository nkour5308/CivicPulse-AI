"use client";

import * as React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

import AppSidebar from "./app-sidebar";
import AppHeader from "./app-header";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex h-screen w-full overflow-hidden bg-zinc-950 text-white">
        <AppSidebar />

        <div className="flex flex-1 flex-col overflow-hidden">
          <AppHeader />

          <main className="flex-1 overflow-auto p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}