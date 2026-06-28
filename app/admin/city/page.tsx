import AdminShell from "@/components/admin/admin-shell";
import DigitalTwin from "@/components/map/digital-twin";
import CityStats from "@/components/city/city-stats";
import ResourceStatus from "@/components/city/resource-status";

export default function CityPage() {
  return (
    <AdminShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Live City
          </h1>

          <p className="mt-3 text-zinc-400">
            Real-time monitoring dashboard.
          </p>
        </div>

        <CityStats />

        <DigitalTwin />
        <ResourceStatus />
      </div>
    </AdminShell>
  );
}