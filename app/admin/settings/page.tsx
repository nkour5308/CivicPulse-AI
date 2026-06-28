import AdminShell from "@/components/admin/admin-shell";

export default function AdminSettingsPage() {
  return (
    <AdminShell>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold">
            Settings
          </h1>

          <p className="mt-3 text-zinc-400">
            Configure the CivicPulse AI Municipal Authority Portal.
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">

          <h2 className="text-2xl font-semibold mb-6">
            General Settings
          </h2>

          <div className="space-y-6">

            <div className="flex justify-between items-center">
              <span>AI Recommendations</span>
              <span className="text-green-400">Enabled</span>
            </div>

            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <span className="text-green-400">Enabled</span>
            </div>

            <div className="flex justify-between items-center">
              <span>Emergency Alerts</span>
              <span className="text-green-400">Enabled</span>
            </div>

          </div>

        </div>

      </div>
    </AdminShell>
  );
}