const Event = require('../models/event');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const event = new Event({ title, description, date, location });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
