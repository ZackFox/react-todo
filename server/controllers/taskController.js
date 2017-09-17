const Task = require('../models/task');

const taskController = {};

taskController.getTaskList = (req, res, next) => {
  const filter = req.query.filter;

  if (filter === 'all' || '') {
    Task.find({}).then(tasks => res.json(tasks)).catch(err => next(err));
  } else if (filter === 'current') {
    Task.find({ isCompleted: false })
      .then(tasks => res.json(tasks))
      .catch(err => next(err));
  } else if (filter === 'completed') {
    Task.find({ isCompleted: true })
      .then(tasks => res.json(tasks))
      .catch(err => next(err));
  }
};

taskController.create = (req, res) => {
  const newTask = new Task();
  newTask.text = req.body.text;

  newTask.save().then(task => {
    res.status(200).json({ status: '200', message: 'success', task });
  });
};

taskController.toggle = (req, res, next) => {
  const _id = req.params.id;

  Task.findById({ _id })
    .then(task => {
      task.isCompleted = !task.isCompleted;
      task.save();
    })
    .then(() => {
      res.status(200).json({ status: '200', message: 'success' });
    })
    .catch(err => next(err));
};

taskController.update = (req, res, next) => {
  const _id = req.params.id;
  const text = req.body.text;

  Task.findById({ _id })
    .then(task => {
      task.text = text;
      task.save();
    })
    .then(() => {
      res.status(200).json({ status: '200', message: 'success' });
    })
    .catch(err => next(err));
};

taskController.delete = (req, res, next) => {
  const _id = req.params.id;
  Task.findByIdAndRemove({ _id })
    .then(() => res.status(200).json({ status: '200', message: 'success' }))
    .catch(err => next(err));
};

module.exports = taskController;
