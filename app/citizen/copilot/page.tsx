import CitizenShell from "@/components/citizen/citizen-shell";
import AICopilotChat from "@/components/copilot/ai-copilot-chat";
export default function CopilotPage() {
  return (
    <CitizenShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            AI Copilot
          </h1>

          <p className="mt-3 text-zinc-400">
            Talk directly to CivicPulse agents. Ask, plan, predict, and execute city operations.
          </p>
        </div>

<AICopilotChat />
      </div>
    </CitizenShell>
  );
}