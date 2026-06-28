"use client";

import { useEffect, useState } from "react";
import { Complaint } from "@/types/complaint";
import { getComplaints } from "@/lib/storage";

export function useComplaints() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    setComplaints(getComplaints());
  }, []);

  return {
    complaints,
    setComplaints,
  };
}