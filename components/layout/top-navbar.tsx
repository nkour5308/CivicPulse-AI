export function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-8 backdrop-blur-xl">

      <div>

        <h2 className="text-2xl font-bold">
          Good Evening 👋
        </h2>

        <p className="text-sm text-zinc-400">
          Welcome back to CivicPulse AI
        </p>

      </div>

      <div className="flex items-center gap-3">

        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

        <span className="text-sm text-zinc-300">
          All AI Agents Online
        </span>

      </div>

    </header>
  );
}