export interface Complaint {
  id: string;
  title: string;
  description: string;
  ward: string;
  department: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  status: "Pending" | "In Progress" | "Resolved";
  createdAt: string;

  citizen?: string;
  officer?: string;
  contact?: string;
  email?: string;

  latitude?: number;
  longitude?: number;
}