interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

export default function KpiCard({
  title,
  value,
  change,
  positive = true,
}: KpiCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-3">
        {value}
      </h2>

      <p
        className={`mt-2 text-sm ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </p>

    </div>
  );
}