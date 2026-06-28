const metrics = [
  {
    title: "Prediction Accuracy",
    value: 96,
    color: "bg-blue-500",
  },
  {
    title: "Auto Complaint Routing",
    value: 93,
    color: "bg-green-500",
  },
  {
    title: "Resource Allocation",
    value: 89,
    color: "bg-yellow-500",
  },
  {
    title: "Citizen Satisfaction",
    value: 91,
    color: "bg-purple-500",
  },
];

export default function AIPerformance() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        AI Performance
      </h2>

      <div className="space-y-6">

        {metrics.map((metric) => (

          <div key={metric.title}>

            <div className="flex justify-between mb-2">

              <span className="text-white">
                {metric.title}
              </span>

              <span className="text-white font-semibold">
                {metric.value}%
              </span>

            </div>

            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">

              <div
                className={`${metric.color} h-full rounded-full`}
                style={{
                  width: `${metric.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}