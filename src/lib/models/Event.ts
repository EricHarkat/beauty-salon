import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: String }, // Optionnel : URL de l’image
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
