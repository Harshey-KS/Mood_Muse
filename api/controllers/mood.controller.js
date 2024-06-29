
import Mood from '../models/mood.model.js';

export const getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user.id }).sort({ date: 1 });
    res.json(moods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMood = async (req, res) => {
  const { mood, note, date } = req.body;
  const user = req.user.id;

  const newMood = new Mood({ mood, note, date, user });
  try {
    const savedMood = await newMood.save();
    res.status(201).json(savedMood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

