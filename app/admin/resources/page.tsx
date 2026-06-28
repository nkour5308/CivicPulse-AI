import AdminShell from "@/components/admin/admin-shell";
import ResourceDashboard from "@/components/resources/resource-dashboard";

export default function ResourcesPage() {
  return (
    <AdminShell>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold">
            Resource Management
          </h1>

          <p className="text-zinc-400 mt-3">
            Live allocation of municipal resources based on citizen complaints.
          </p>
        </div>

        <ResourceDashboard />

      </div>
    </AdminShell>
  );
}