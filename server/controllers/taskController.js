const Task = require('../models/task');

const taskController = {};

taskController.getTaskList = (req, res, next) => {
  Task.find({}).then(tasks => res.json(tasks)).catch(err => next(err));
};

taskController.create = (req, res) => {
  const newTask = new Task();
  newTask.text = req.body.text;
  newTask.save().then(() => {
    res.json({ status: true, ms: 'success' });
  });
};

// taskController.update = (req, res, next) => {
//   Task.find({}).then(tasks => res.json(tasks)).catch(err => next(err));
// };

// taskController.delete = (req, res, next) => {
//   Task.find({}).then(tasks => res.json(tasks)).catch(err => next(err));
// };

module.exports = taskController;
