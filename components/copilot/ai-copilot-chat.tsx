"use client";

import { getAIResponse } from "@/lib/copilot-ai";
import { useState, useRef } from "react";
import { Send, Mic, MicOff } from "lucide-react";
import { useEffect } from "react";
import { getComplaints } from "@/lib/city-store";


const messagesSeed = [
  {
    role: "assistant",
    content:
      "Hello. I am CivicPulse AI. I can analyze city conditions, predict risks, and recommend actions.",
  },
];

export default function AICopilotChat() {
  const [messages, setMessages] = useState(messagesSeed);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

const recognitionRef = useRef<any>(null);

useEffect(() => {
  window.speechSynthesis.getVoices();

  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}, []);

function startListening() {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    setListening(true);
  };

  recognition.onend = () => {
    setListening(false);
  };

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;

    setInput(transcript);
  };

  recognition.start();

  recognitionRef.current = recognition;
}

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;

  // Stop any speech already in progress
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "en-US";
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  // Try to use a natural English voice if available
  const voices = window.speechSynthesis.getVoices();

  const preferredVoice = voices.find(
    (voice) =>
      voice.lang.startsWith("en") &&
      voice.name.toLowerCase().includes("google")
  );

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  window.speechSynthesis.speak(utterance);
}

  async function sendMessage() {
  if (!input.trim()) return;

  const userMessage = {
    role: "user",
    content: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  const question = input;
  setInput("");

  try {
    const res = await fetch("/api/copilot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: question,
        complaints: getComplaints(),
      }),
    });

    const data = await res.json();

    const aiMessage = {
      role: "assistant",
      content: data.reply,
    };

    setMessages((prev) => [...prev, aiMessage]);

    speak(data.reply);

  } catch {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Unable to contact CivicPulse AI.",
      },
    ]);
  }
}

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="h-[420px] overflow-y-auto space-y-4 p-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl max-w-[80%] ${
              msg.role === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "bg-zinc-900 text-zinc-200"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
{listening && (
  <div className="mb-3 text-green-400 animate-pulse font-medium">
    🎤 Listening...
  </div>
)}

      <div className="mt-6 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask CivicPulse AI..."
          className="flex-1 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3"
        />

        <button
  onClick={startListening}
  className={`rounded-xl px-4 ${
    listening
      ? "bg-red-600 animate-pulse"
      : "bg-zinc-700 hover:bg-zinc-600"
  }`}
>
  {listening ? (
    <MicOff size={18} />
  ) : (
    <Mic size={18} />
  )}
</button>

<button
  onClick={sendMessage}
  className="rounded-xl bg-blue-600 px-4 hover:bg-blue-500"
>
  <Send size={18} />
</button>
      </div>
    </div>
  );
}