const Task = require('../models/task');

const taskController = {};

taskController.getTaskList = (req, res, next) => {
  Task.find({}).then(tasks => res.json(tasks)).catch(err => next(err));
};

taskController.create = (req, res) => {
  const newTask = new Task();
  newTask.text = req.body.text;

  newTask.save().then(task => {
    res.status(200).json({ status: '200', message: 'success', task });
  });
};

taskController.update = (req, res, next) => {
  // Task.find({}).then(tasks => res.json(tasks)).catch(err => next(err));
};

taskController.delete = (req, res, next) => {
  const _id = req.params.id;
  Task.findByIdAndRemove({ _id })
    .then(() => res.status(200).json({ status: '200', message: 'success' }))
    .catch(err => next(err));
};

module.exports = taskController;
