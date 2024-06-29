
import mongoose from 'mongoose';

const moodSchema = new mongoose.Schema({
  mood: { type: String, required: true },
  note: { type: String, required: false },
  date: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Mood = mongoose.model('Mood', moodSchema);

export default Mood;
