// Ce fichier est un composant Server car il utilise async/await et interagit avec la BDD
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route"; // assure-toi que le chemin est correct

import { connectDB } from "@/lib/mongodb";
import Event from "@/lib/models/Event";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }
  console.log("session",session)
  try {
    await connectDB();
    const events = await Event.find().sort({ date: 1 });
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Back-office d'administration</h1>
        <p>Bienvenue, {session.user?.email}</p>
        <div className="mt-6">
          <h2 className="text-2xl">Liste des événements</h2>
          {events.length === 0 ? (
            <p>Aucun événement n'a été trouvé.</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {events.map((event) => (
                <li key={event._id} className="border p-4 rounded">
                  <h3 className="font-semibold text-xl">{event.title}</h3>
                  <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="mt-2">{event.description}</p>
                  <div className="mt-2">
                    <a href={`/admin/edit/${event._id}`} className="text-blue-500 hover:underline">
                      Modifier
                    </a>
                    <a href={`/admin/delete/${event._id}`} className="text-red-500 hover:underline ml-4">
                      Supprimer
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-6">
          <a
            href="/admin/add"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Ajouter un événement
          </a>
        </div>
      </div>
    );
  } catch (err) {
    console.error("Erreur lors de la récupération des événements:", err);
    return <div className="p-6">Erreur lors de la récupération des événements.</div>;
  }
}
