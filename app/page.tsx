import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">

      <div className="max-w-6xl w-full">

        <div className="text-center mb-16">

          <h1 className="text-6xl font-bold text-white">
            CivicPulse AI
          </h1>

          <p className="mt-5 text-xl text-zinc-400">
            Autonomous City Operating System for Predictive Governance
          </p>

          <p className="mt-3 text-zinc-500">
            Select your role to continue
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <Link
            href="/citizen"
            className="rounded-3xl border border-blue-500 bg-blue-500/10 p-10 hover:bg-blue-500/20 transition duration-300"
          >
            <div className="text-7xl mb-6">
              👤
            </div>

            <h2 className="text-4xl font-bold">
              Citizen Portal
            </h2>

            <p className="mt-4 text-zinc-400">
              Raise complaints, track requests, receive AI guidance and city updates.
            </p>

          </Link>

          <Link
            href="/admin/login"
            className="rounded-3xl border border-emerald-500 bg-emerald-500/10 p-10 hover:bg-emerald-500/20 transition duration-300"
          >
            <div className="text-7xl mb-6">
              🏛️
            </div>

            <h2 className="text-4xl font-bold">
              Municipal Authority
            </h2>

            <p className="mt-4 text-zinc-400">
              Manage complaints, deploy resources and operate the city dashboard.
            </p>

          </Link>

        </div>

      </div>

    </main>
  );
}