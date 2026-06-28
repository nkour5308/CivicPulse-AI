export type Complaint = {
  id: string;
  issue: string;
  ward: string;
  category: string;
  createdAt: string;

  status: "Submitted" | "Assigned" | "In Progress" | "Resolved";

  response: string;
  action: string;

  department: string;
  officer: string;
  contact: string;
  email: string;
  office: string;
  team: string;
  expectedResolution: string;
  priority: "High" | "Medium" | "Low";
};

export type Notification = {
  id: string;
  message: string;
  time: string;
};



const STORAGE_KEY = "civicpulse_complaints";

const NOTIFICATION_KEY = "civicpulse_notifications";

function loadNotifications(): Notification[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(NOTIFICATION_KEY);

  return data ? JSON.parse(data) : [];
}

let notifications: Notification[] = loadNotifications();

function saveNotifications() {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    NOTIFICATION_KEY,
    JSON.stringify(notifications)
  );
}

export function getNotifications() {
  if (typeof window !== "undefined") {
    notifications = loadNotifications();
  }

  return notifications;
}

/* ---------------- LOCAL STORAGE ---------------- */

function loadComplaints(): Complaint[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveComplaints() {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(complaints)
  );
}

/* ---------------- STORE ---------------- */

let complaints: Complaint[] = loadComplaints();

type Listener = () => void;

let listeners: Listener[] = [];

function notify() {
  listeners.forEach((listener) => listener());
}

export function subscribe(listener: Listener) {
  listeners.push(listener);

  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function getComplaints() {
  if (typeof window !== "undefined") {
    complaints = loadComplaints();
  }

  return complaints;
}

/* ---------------- AI ENGINE ---------------- */

function generateResponse(issue: string, category: string) {
  return `CivicPulse AI analyzed your complaint "${issue}". It has been categorized as ${category} and is awaiting review and assignment by the Municipal Authority.`;
}

function getAssignment(category: string) {
  switch (category) {
    case "Sanitation":
      return {
        department: "Municipal Sanitation Department",
        officer: "Rajesh Sharma",
        contact: "+91 98765 43210",
        email: "sanitation@city.gov.in",
        office: "Ward Sanitation Office",
        team: "Cleaning Team Alpha",
        expectedResolution: "Within 24 hours",
        action: "Garbage cleaning team dispatched",
      };

    case "Water":
      return {
        department: "Water Supply Department",
        officer: "Amit Verma",
        contact: "+91 98765 11223",
        email: "water@city.gov.in",
        office: "Water Control Center",
        team: "Water Repair Unit",
        expectedResolution: "Within 12–24 hours",
        action: "Pipeline inspection team assigned",
      };

    case "Electricity":
      return {
        department: "Electricity Maintenance Unit",
        officer: "Sunil Gupta",
        contact: "+91 98765 77889",
        email: "electricity@city.gov.in",
        office: "Power Grid Office",
        team: "Electrical Emergency Squad",
        expectedResolution: "Within 6–12 hours",
        action: "Fault repair team dispatched",
      };

    case "Traffic":
      return {
        department: "Traffic Control Department",
        officer: "Neha Singh",
        contact: "+91 98765 44556",
        email: "traffic@city.gov.in",
        office: "Traffic HQ",
        team: "Traffic Monitoring Unit",
        expectedResolution: "Immediate",
        action: "Traffic control unit assigned",
      };

    default:
      return {
        department: "Municipal Corporation",
        officer: "Duty Officer",
        contact: "+91 98765 00000",
        email: "support@city.gov.in",
        office: "City HQ",
        team: "General Response Team",
        expectedResolution: "24–48 hours",
        action: "General inspection team assigned",
      };
  }
}

/* ---------------- ADD COMPLAINT ---------------- */

export function addComplaint(
  data: Omit<
    Complaint,
    | "id"
    | "createdAt"
    | "status"
    | "response"
    | "action"
    | "department"
    | "officer"
    | "contact"
    | "email"
    | "office"
    | "team"
    | "expectedResolution"
  >
) {

  const newComplaint: Complaint = {
    id: `CP-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`,

    createdAt: new Date().toISOString(),

    status: "Submitted",

    ...data,

    priority:
  data.category === "Electricity" ||
  data.category === "Water"
    ? "High"
    : data.category === "Traffic"
    ? "Medium"
    : "Low",
    response: generateResponse(
      data.issue,
      data.category
    ),

    department: "",

officer: "",

contact: "",

email: "",

office: "",

team: "",

expectedResolution: "",

action: "",
  };

  complaints.unshift(newComplaint);

notifications.unshift({
  id: crypto.randomUUID(),
  message: `New complaint submitted: ${newComplaint.issue}`,
  time: new Date().toLocaleString(),
});

saveComplaints();
saveNotifications();

notify();

  return newComplaint;
}

/* ---------------- UPDATE STATUS ---------------- */
export function updateComplaint(
  id: string,
  updates: Partial<Complaint>
) {
  complaints = complaints.map((complaint) =>
    complaint.id === id
      ? {
          ...complaint,
          ...updates,
        }
      : complaint
  );

  saveComplaints();
  notify();
}

export function updateComplaintStatus(
  id: string,
  status: Complaint["status"]
) {
  complaints = complaints.map((complaint) =>
  complaint.id === id
    ? { ...complaint, status }
    : complaint
);

const updated = complaints.find((c) => c.id === id);

if (updated) {
  notifications.unshift({
    id: crypto.randomUUID(),
    message: `${updated.issue} → ${status}`,
    time: new Date().toLocaleString(),
  });

  saveNotifications();
}

saveComplaints();

notify();
}

/* ---------------- LOOKUP ---------------- */

export function getComplaintById(id: string) {
  return complaints.find((complaint) => complaint.id === id);
}