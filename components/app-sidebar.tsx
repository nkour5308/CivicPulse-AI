"use client";

import { MessageSquarePlus } from "lucide-react";
import Link from "next/link";
import { SearchCheck } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import {
  LayoutDashboard,
  Map,
  TriangleAlert,
  Bot,
  BrainCircuit,
  BarChart3,
  Truck,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Live City",
    href: "/city",
    icon: Map,
  },
  {
    title: "Incidents Center",
    href: "/incidents",
    icon: TriangleAlert,
  },
  {
    title: "AI Copilot",
    href: "/copilot",
    icon: Bot,
  },
  {
    title: "Raise Complaint",
    href: "/complaint",
    icon: MessageSquarePlus,
  },
  {
    title: "Track Complaint",
    href: "/track",
    icon: SearchCheck,
  },
  {
    title: "Prediction",
    href: "/prediction",
    icon: BrainCircuit,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Resources",
    href: "/resources",
    icon: Truck,
  },
  {
  title: "Admin",
  href: "/admin",
  icon: ShieldCheck,
},
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-white/10 bg-zinc-950">
      <div className="border-b border-white/10 p-8">
        <h1 className="text-2xl font-bold tracking-tight">
          CivicPulse AI
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Autonomous City OS
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-6">
        <div className="rounded-xl bg-emerald-500/10 p-4">
          <p className="text-xs uppercase tracking-widest text-emerald-400">
            System
          </p>

          <p className="mt-2 font-semibold">
            All AI Agents Online
          </p>
        </div>
      </div>
    </aside>
  );
}