import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { TopNavbar } from "./top-navbar";

interface Props {
  children: ReactNode;
}

export function AppShell({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <AppSidebar />

      <main className="flex-1 flex flex-col">
        <TopNavbar />

        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}