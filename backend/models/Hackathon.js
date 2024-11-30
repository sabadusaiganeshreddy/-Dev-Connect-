const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hackathonSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
}, {
  timestamps: true,
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

module.exports = Hackathon;