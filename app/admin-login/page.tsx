"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function login() {
    if (
      username === "admin" &&
      password === "admin123"
    ) {
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center">
          Municipal Authority
        </h1>

        <p className="text-zinc-400 text-center mt-3">
          Sign in to access the Admin Dashboard
        </p>

        <div className="space-y-5 mt-8">

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4"
          />

          {error && (
            <p className="text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={login}
            className="w-full bg-blue-600 hover:bg-blue-500 rounded-xl py-4 font-semibold"
          >
            Login
          </button>

        </div>

        <div className="mt-8 text-sm text-zinc-500 text-center">
          Demo Credentials
          <br />
          Username: <b>admin</b>
          <br />
          Password: <b>admin123</b>
        </div>

      </div>

    </main>
  );
}