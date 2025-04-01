"use client";

import { useEffect, useState } from "react";

type Event = {
  _id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Nos Événements</h1>
      <ul className="space-y-4">
        {events.length === 0 ? (
          <p>Aucun événement pour le moment.</p>
        ) : (
          events.map((event) => (
            <li key={event._id} className="p-4 border bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
              <p className="mt-2">{event.description}</p>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
