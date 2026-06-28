import Link from "next/link";
<Link
  href="/dashboard/complaints"
  className="inline-block mt-6 px-6 py-3 bg-blue-600 rounded"
>
  Go to Complaints
</Link>
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-4xl font-bold">
        Citizen Dashboard
      </h1>

      <p className="text-zinc-400 mt-3">
        Track complaints, updates, and city services
      </p>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Active Complaints</h2>
          <p className="text-3xl mt-3 text-blue-400">12</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Resolved</h2>
          <p className="text-3xl mt-3 text-green-400">34</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Pending</h2>
          <p className="text-3xl mt-3 text-yellow-400">5</p>
        </div>

      </div>

    </main>
  );
}