"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [authorityId, setAuthorityId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function login() {
    if (
      authorityId === "MC-1023" &&
      email === "admin@city.gov.in" &&
      password === "Civic@2026"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin");
    } else {
      setError("Invalid Authority ID, Official Email or Password.");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center">

      <div className="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-10">

        <h1 className="text-4xl font-bold text-center">
          Municipal Authority
        </h1>

        <p className="text-zinc-400 text-center mt-2">
          Authorized Personnel Login
        </p>

        <div className="space-y-5 mt-10">

          <input
            placeholder="Authority ID"
            value={authorityId}
            onChange={(e) => setAuthorityId(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4"
          />

          <input
            placeholder="Official Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4"
          />

          {error && (
            <p className="text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={login}
            className="w-full rounded-xl bg-emerald-600 py-4 font-semibold hover:bg-emerald-500"
          >
            Login
          </button>

        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">

          <p className="text-sm text-yellow-300">
            🔒 Restricted to authorized municipal personnel only.
          </p>

        </div>

      </div>

    </main>
  );
}