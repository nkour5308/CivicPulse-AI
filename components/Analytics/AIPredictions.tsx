"use client";

import { getAnalytics } from "@/lib/analytics";

export default function AIPredictions() {
  const analytics = getAnalytics();

  const topWard =
    Object.entries(analytics.wardCounts).sort(
      (a, b) => b[1] - a[1]
    )[0];

  const topCategory = Object.entries(analytics.departments).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const predictions = [];

  if (topWard) {
    predictions.push({
      title: "High Risk Ward",
      value: Math.min(topWard[1] * 10, 100),
      color: "bg-red-500",
      description: `${topWard[0]} has the highest complaint volume (${topWard[1]} complaints).`,
    });
  }

  if (topCategory) {
    predictions.push({
      title: `${topCategory[0]} Trend`,
      value: Math.min(topCategory[1] * 10, 100),
      color: "bg-blue-500",
      description: `${topCategory[0]} complaints are increasing (${topCategory[1]} total).`,
    });
  }

  predictions.push({
    title: "Resolution Performance",
    value: analytics.resolutionRate,
    color: "bg-green-500",
    description: `${analytics.resolutionRate}% of complaints have been resolved.`,
  });

  predictions.push({
    title: "Pending Workload",
    value: analytics.total === 0
      ? 0
      : Math.round(
          ((analytics.submitted +
            analytics.assigned +
            analytics.inProgress) /
            analytics.total) *
            100
        ),
    color: "bg-yellow-500",
    description: `${
      analytics.submitted +
      analytics.assigned +
      analytics.inProgress
    } complaints still require attention.`,
  });

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">
        AI Predictions
      </h2>

      {predictions.length === 0 ? (
        <p className="text-zinc-400">
          No complaint data available yet.
        </p>
      ) : (
        <div className="space-y-6">
          {predictions.map((item) => (
            <div key={item.title}>
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">
                  {item.title}
                </span>

                <span className="text-blue-400 font-semibold">
                  {item.value}%
                </span>
              </div>

              <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full`}
                  style={{ width: `${item.value}%` }}
                />
              </div>

              <p className="text-gray-400 text-sm mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}