import { Complaint } from "@/types/complaint";

const STORAGE_KEY = "civicpulse_complaints";

export function getComplaints(): Complaint[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveComplaint(complaint: Complaint) {
  const complaints = getComplaints();

  complaints.unshift(complaint);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(complaints)
  );
}

export function updateComplaints(data: Complaint[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}