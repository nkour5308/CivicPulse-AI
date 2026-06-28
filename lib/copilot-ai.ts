import { getComplaints } from "./city-store";

export function getAIResponse(question: string): string {
  const q = question.toLowerCase();

  const complaints = getComplaints();

  if (complaints.length === 0) {
    return "There are currently no complaints in the system.";
  }

  // Total complaints
  if (
    q.includes("total") ||
    q.includes("how many") ||
    q.includes("complaints")
  ) {
    return `There are currently ${complaints.length} complaints registered in CivicPulse AI.`;
  }

  // Pending
  if (q.includes("pending")) {
    const pending = complaints.filter(
      c => c.status !== "Resolved"
    );

    return `There are ${pending.length} pending complaints requiring municipal action.`;
  }

  // Resolved
  if (q.includes("resolved")) {
    const resolved = complaints.filter(
      c => c.status === "Resolved"
    );

    return `${resolved.length} complaints have already been resolved.`;
  }

  // Water
  if (q.includes("water")) {
    const water = complaints.filter(
      c => c.category === "Water"
    );

    return `There are ${water.length} Water complaints. They are handled by the Water Supply Department.`;
  }

  // Sanitation
  if (q.includes("sanitation")) {
    const sanitation = complaints.filter(
      c => c.category === "Sanitation"
    );

    return `There are ${sanitation.length} sanitation complaints awaiting action.`;
  }

  // Electricity
  if (q.includes("electricity")) {
    const electricity = complaints.filter(
      c => c.category === "Electricity"
    );

    return `There are ${electricity.length} electricity complaints.`;
  }

  // Traffic
  if (q.includes("traffic")) {
    const traffic = complaints.filter(
      c => c.category === "Traffic"
    );

    return `There are ${traffic.length} traffic complaints.`;
  }

  // Latest complaint
  if (q.includes("latest")) {
    const latest = complaints[0];

    return `Latest complaint:

ID: ${latest.id}

Issue: ${latest.issue}

Ward: ${latest.ward}

Status: ${latest.status}`;
  }

  // Highest risk ward
  if (q.includes("highest") || q.includes("risk") || q.includes("ward")) {
    const wardMap: Record<string, number> = {};

    complaints.forEach(c => {
      wardMap[c.ward] = (wardMap[c.ward] || 0) + 1;
    });

    const top = Object.entries(wardMap).sort(
      (a, b) => b[1] - a[1]
    )[0];

    return `${top[0]} currently has the highest complaint volume with ${top[1]} complaints.`;
  }

  // Complaint ID lookup
  const complaint = complaints.find(c =>
    q.includes(c.id.toLowerCase())
  );

  if (complaint) {
    return `Complaint ${complaint.id}

Issue: ${complaint.issue}

Status: ${complaint.status}

Department: ${complaint.department}

Officer: ${complaint.officer}`;
  }

  return `I can help you with:

• Total complaints

• Pending complaints

• Resolved complaints

• Latest complaint

• Water complaints

• Electricity complaints

• Traffic complaints

• Highest risk ward

• Complaint ID lookup`;
}