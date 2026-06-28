import { getComplaints } from "@/lib/city-store";

export function getAnalytics() {
  const complaints = getComplaints();

  const total = complaints.length;

  const submitted = complaints.filter(
    (c) => c.status === "Submitted"
  ).length;

  const assigned = complaints.filter(
    (c) => c.status === "Assigned"
  ).length;

  const inProgress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const resolutionRate =
    total === 0 ? 0 : Math.round((resolved / total) * 100);

  const departments = {
    Sanitation: complaints.filter(
      (c) => c.category === "Sanitation"
    ).length,

    Water: complaints.filter(
      (c) => c.category === "Water"
    ).length,

    Electricity: complaints.filter(
      (c) => c.category === "Electricity"
    ).length,

    Traffic: complaints.filter(
      (c) => c.category === "Traffic"
    ).length,

    Other: complaints.filter(
      (c) => c.category === "Other"
    ).length,
  };

  const wardCounts = complaints.reduce((acc, complaint) => {
    acc[complaint.ward] = (acc[complaint.ward] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    complaints,
    total,
    submitted,
    assigned,
    inProgress,
    resolved,
    resolutionRate,
    departments,
    wardCounts,
  };
}