import AdminShell from "@/components/admin/admin-shell";

export default function AdminDashboard() {
  return (
    <AdminShell>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold">
            Municipal Authority Dashboard
          </h1>

          <p className="mt-3 text-zinc-400">
            Monitor complaints, assign officers, manage city resources and track operations.
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
          <h2 className="text-2xl font-semibold">
            Welcome, Municipal Officer 👋
          </h2>

          <p className="mt-4 text-zinc-400">
            Use the sidebar to access Complaint Center, Analytics,
            AI Predictions, Resources and other administrative tools.
          </p>
        </div>

      </div>
    </AdminShell>
  );
}