import AdminShell from "@/components/admin/admin-shell";
import IncidentTable from "@/app/admin/incidents/incident-table";
import IncidentFilters from "@/app/admin/incidents/incident-filters";

export default function IncidentsPage() {
  return (
    <AdminShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Incident Center
          </h1>

          <p className="mt-3 text-zinc-400">
            AI-powered complaint management and response coordination.
          </p>
        </div>

        <IncidentFilters />

        <IncidentTable />
      </div>
    </AdminShell>
  );
}