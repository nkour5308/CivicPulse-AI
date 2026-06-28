"use client";

import Link from "next/link";
import {
  Home,
  MessageSquarePlus,
  SearchCheck,
  Bot,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/citizen",
    icon: Home,
  },
  {
    title: "Raise Complaint",
    href: "/citizen/complaint",
    icon: MessageSquarePlus,
  },
  {
    title: "Track Complaint",
    href: "/citizen/track",
    icon: SearchCheck,
  },
  {
    title: "AI Assistant",
    href: "/citizen/copilot",
    icon: Bot,
  },
  {
    title: "Public Alerts",
    href: "/citizen/alerts",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/citizen/settings",
    icon: Settings,
  },
];

export default function CitizenSidebar() {
  return (
    <aside className="w-72 bg-zinc-900 border-r border-zinc-800 flex flex-col">

      <div className="p-8 border-b border-zinc-800">

        <h1 className="text-2xl font-bold">
          CivicPulse AI
        </h1>

        <p className="text-zinc-400 mt-2">
          Citizen Portal
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