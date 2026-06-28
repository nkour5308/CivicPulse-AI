"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  TriangleAlert,
  BrainCircuit,
  BarChart3,
  Truck,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Complaint Center",
    href: "/admin/incidents",
    icon: TriangleAlert,
  },
  {
    title: "AI Predictions",
    href: "/admin/prediction",
    icon: BrainCircuit,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Resources",
    href: "/admin/resources",
    icon: Truck,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 bg-zinc-900 border-r border-zinc-800 flex flex-col">

      <div className="p-8 border-b border-zinc-800">

        <h1 className="text-2xl font-bold">
          CivicPulse AI
        </h1>

        <p className="text-zinc-400 mt-2">
          Municipal Authority
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-zinc-800 transition"
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}

      </nav>

      <div className="p-4 border-t border-zinc-800">

        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-zinc-800"
        >
          <LogOut size={20} />
          Switch Role
        </Link>

      </div>

    </aside>
  );
}