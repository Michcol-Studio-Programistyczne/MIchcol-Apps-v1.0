// server/models/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: String,
  isCompleted: {
    type: Boolean,
    default: false,
  },
  deadline: Date,
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
