"use client";

const teams = [
  {
    team: "Cleaning Team Alpha",
    status: "Working",
    location: "Ward 7",
  },
  {
    team: "Water Repair Unit",
    status: "En Route",
    location: "Ward 3",
  },
  {
    team: "Traffic Control",
    status: "Monitoring",
    location: "Ward 10",
  },
  {
    team: "Electric Maintenance",
    status: "Available",
    location: "Central Depot",
  },
];

export default function ResourceStatus() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Municipal Resources
      </h2>

      <div className="space-y-4">
        {teams.map((team) => (
          <div
            key={team.team}
            className="flex items-center justify-between rounded-xl bg-zinc-900 p-4"
          >
            <div>
              <h3 className="font-semibold">
                {team.team}
              </h3>

              <p className="text-sm text-zinc-500">
                {team.location}
              </p>
            </div>

            <span className="rounded-full bg-green-500/10 px-4 py-2 text-green-400">
              {team.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}