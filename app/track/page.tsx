import AppShell from "@/components/app-shell";
import TrackComplaint from "@/components/track/TrackComplaint";

export default function TrackPage() {
  return (
    <AppShell>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold">
            Track Complaint
          </h1>

          <p className="text-zinc-400 mt-3">
            Enter your Complaint ID to view live status updates.
          </p>
        </div>

        <TrackComplaint />

      </div>
    </AppShell>
  );
}