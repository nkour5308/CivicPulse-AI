import CitizenShell from "@/components/citizen/citizen-shell";
import ComplaintForm from "@/components/complaint/complaint-form";

export default function ComplaintPage() {
  return (
    <CitizenShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Raise a Complaint
          </h1>

          <p className="mt-3 text-zinc-400">
            Report civic issues directly. Your complaint will be processed by AI agents in real time.
          </p>
        </div>

        <ComplaintForm />
      </div>
    </CitizenShell>
  );
}