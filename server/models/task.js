const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  text: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  createTime: { type: Date, default: Date.now() },
  updateTime: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Task', TaskSchema);
