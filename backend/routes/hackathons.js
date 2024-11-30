const router = require('express').Router();
const Hackathon = require('../models/Hackathon');

// Create a hackathon
router.post('/', async (req, res) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const newHackathon = new Hackathon({ name, description, startDate, endDate });
    await newHackathon.save();
    res.status(201).json('Hackathon created successfully');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get all hackathons
router.get('/', async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.json(hackathons);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;