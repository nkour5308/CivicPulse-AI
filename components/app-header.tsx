export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-zinc-950/80 px-8 backdrop-blur-xl">
      <div>
        <h2 className="text-3xl font-bold">
          Good Evening 👋
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Welcome back, Commissioner
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

        <span className="text-sm">
          AI Monitoring Active
        </span>
      </div>
    </header>
  );
}
