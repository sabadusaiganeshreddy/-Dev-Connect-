const router = require('express').Router();
const Question = require('../models/Question');

// Create a question
router.post('/', async (req, res) => {
  try {
    const { title, description, code, author } = req.body;
    const newQuestion = new Question({ title, description, code, author });
    await newQuestion.save();
    res.status(201).json('Question created successfully');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find().populate('author', 'username');
    res.json(questions);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;