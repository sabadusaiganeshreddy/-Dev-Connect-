const router = require('express').Router();
const Answer = require('../models/Answer');
const Question = require('../models/Question');

// Create an answer
router.post('/', async (req, res) => {
  try {
    const { content, code, author, question } = req.body;
    const newAnswer = new Answer({ content, code, author, question });
    await newAnswer.save();

    // Add answer to the question
    const questionDoc = await Question.findById(question);
    questionDoc.answers.push(newAnswer._id);
    await questionDoc.save();

    res.status(201).json('Answer created successfully');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get answers for a question
router.get('/:questionId', async (req, res) => {
  try {
    const answers = await Answer.find({ question: req.params.questionId }).populate('author', 'username');
    res.json(answers);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;