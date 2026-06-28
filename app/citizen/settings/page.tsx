import CitizenShell from "@/components/citizen/citizen-shell";
import SettingsPanel from "@/components/settings/settings-panel";

export default function SettingsPage() {
  return (
    <CitizenShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            System Settings
          </h1>

          <p className="mt-3 text-zinc-400">
            Configure CivicPulse AI behavior, alerts, and municipal intelligence parameters.
          </p>
        </div>

        <SettingsPanel />
      </div>
    </CitizenShell>
  );
}