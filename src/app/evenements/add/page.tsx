"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddEventPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date, description }),
    });

    if (response.ok) {
      router.push("/evenements");
    }
  };

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Ajouter un événement</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Titre"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded">
          Ajouter
        </button>
      </form>
    </section>
  );
}
