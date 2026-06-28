export type Complaint = {
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Resolved";
};

export function getComplaints(): Complaint[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("complaints");
  return data ? JSON.parse(data) : [];
}

export function saveComplaints(data: Complaint[]) {
  localStorage.setItem("complaints", JSON.stringify(data));
}