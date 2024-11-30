const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: String,
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
  votes: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;