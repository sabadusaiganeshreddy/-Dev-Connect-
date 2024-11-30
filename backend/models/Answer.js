const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  content: { type: String, required: true },
  code: String,
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  votes: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;