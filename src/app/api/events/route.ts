import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Event from "@/lib/models/Event";

// Récupérer tous les événements
export async function GET() {
  await connectDB();
  const events = await Event.find().sort({ date: 1 });
  return NextResponse.json(events);
}

// Ajouter un événement
export async function POST(req: Request) {
  await connectDB();
  const { title, date, description, image } = await req.json();

  if (!title || !date || !description) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  const newEvent = new Event({ title, date, description, image });
  await newEvent.save();

  return NextResponse.json(newEvent, { status: 201 });
}
