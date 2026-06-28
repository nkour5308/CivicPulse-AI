"use client";

import CitizenShell from "@/components/citizen/citizen-shell";

export default function PublicAlertsPage() {
  return (
    <CitizenShell>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold">
            Public Alerts
          </h1>

          <p className="mt-3 text-zinc-400">
            Stay informed about important city-wide announcements and emergency notifications.
          </p>
        </div>

        <div className="space-y-5">

          <div className="rounded-2xl border border-yellow-500 bg-yellow-500/10 p-6">
            <h2 className="text-xl font-bold text-yellow-400">
              ⚠ Heavy Rainfall Warning
            </h2>

            <p className="mt-3 text-zinc-300">
              Heavy rainfall is expected in Wards 5, 6 and 7 over the next 24
              hours. Residents are advised to avoid waterlogged roads and stay
              indoors during severe weather.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500 bg-blue-500/10 p-6">
            <h2 className="text-xl font-bold text-blue-400">
              💧 Water Supply Maintenance
            </h2>

            <p className="mt-3 text-zinc-300">
              Water supply will remain suspended from 2:00 PM to 5:00 PM today
              due to scheduled maintenance of the main pipeline.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500 bg-red-500/10 p-6">
            <h2 className="text-xl font-bold text-red-400">
              🚧 Road Diversion
            </h2>

            <p className="mt-3 text-zinc-300">
              Traffic near City Hospital has been diverted due to ongoing road
              construction. Please follow alternate routes indicated by traffic
              police.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500 bg-green-500/10 p-6">
            <h2 className="text-xl font-bold text-green-400">
              🌳 City Cleanliness Drive
            </h2>

            <p className="mt-3 text-zinc-300">
              A city-wide cleanliness campaign will be conducted this Sunday.
              Citizens are encouraged to participate and help keep the city
              clean.
            </p>
          </div>

        </div>

      </div>
    </CitizenShell>
  );
}