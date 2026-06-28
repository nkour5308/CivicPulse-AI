interface Props {
  priority: "High" | "Medium" | "Low";
}

export default function PriorityBadge({
  priority,
}: Props) {
  const color =
    priority === "High"
      ? "bg-red-500/20 text-red-400 border-red-500/30"
      : priority === "Medium"
      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      : "bg-green-500/20 text-green-400 border-green-500/30";

  return (
    <span
      className={`rounded-full border px-3 py-1 text-sm font-medium ${color}`}
    >
      {priority}
    </span>
  );
}