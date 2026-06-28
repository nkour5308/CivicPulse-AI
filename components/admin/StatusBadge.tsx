interface Props {
  status: "Submitted" | "Assigned" | "In Progress" | "Resolved";
}

export default function StatusBadge({ status }: Props) {
  let color = "";

  switch (status) {
    case "Submitted":
      color =
        "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      break;

    case "Assigned":
      color =
        "bg-blue-500/20 text-blue-400 border-blue-500/30";
      break;

    case "In Progress":
      color =
        "bg-orange-500/20 text-orange-400 border-orange-500/30";
      break;

    case "Resolved":
      color =
        "bg-green-500/20 text-green-400 border-green-500/30";
      break;
  }

  return (
    <span
      className={`rounded-full border px-3 py-1 text-sm font-medium ${color}`}
    >
      {status}
    </span>
  );
}