import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">

      <div className="max-w-4xl w-full">

        <div className="text-center mb-16">

          <h1 className="text-6xl font-bold text-white">
            CivicPulse AI
          </h1>

          <p className="mt-4 text-zinc-400 text-xl">
            Autonomous City Operating System
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <Link
            href="/"
            className="rounded-3xl border border-blue-500 bg-blue-500/10 p-10 hover:bg-blue-500/20 transition"
          >
            <div className="text-6xl mb-6">
              👤
            </div>

            <h2 className="text-3xl font-bold">
              Citizen Portal
            </h2>

            <p className="mt-4 text-zinc-400">
              Raise complaints, track progress and interact with CivicPulse AI.
            </p>

          </Link>

          <Link
            href="/admin-login"
            className="rounded-3xl border border-emerald-500 bg-emerald-500/10 p-10 hover:bg-emerald-500/20 transition"
          >
            <div className="text-6xl mb-6">
              🏛️
            </div>

            <h2 className="text-3xl font-bold">
              Municipal Authority
            </h2>

            <p className="mt-4 text-zinc-400">
              Access the city operations dashboard and manage complaints.
            </p>

          </Link>

        </div>

      </div>

    </main>
  );
}