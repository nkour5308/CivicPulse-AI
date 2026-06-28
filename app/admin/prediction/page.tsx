import AdminShell from "@/components/admin/admin-shell";
import PredictionDashboard from "@/components/prediction/prediction-dashboard";

export default function PredictionPage() {
  return (
    <AdminShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Prediction Engine
          </h1>

          <p className="mt-3 text-zinc-400">
            AI models forecasting risks, complaints, and infrastructure failures across the city.
          </p>
        </div>

        <PredictionDashboard />
      </div>
    </AdminShell>
  );
}