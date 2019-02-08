const Task = require("../models/task");

const getTasks = (req, res, next) => {
  return Task.find({})
    .then(tasks =>
      res.status(200).json({ status: "200", message: "success", tasks })
    )
    .catch(err => next(err));
};

const createTask = (req, res) => {
  const newTask = new Task();
  newTask.text = req.body.text;

  newTask.save().then(task => {
    res.status(200).json({ status: "200", message: "success", task });
  });
};

const updateTask = (req, res, next) => {
  Task.findById({ _id: req.params.id })
    .then(task => {
      task.text = req.body.text;
      task.isCompleted = req.body.isCompleted;
      return task.save();
    })
    .then(task => {
      res.status(200).json({ status: "200", message: "success", task });
    })
    .catch(err => next(err));
};

const deleteTask = (req, res, next) => {
  Task.findByIdAndRemove({ _id: req.params.id })
    .then(task =>
      res.status(200).json({ status: "200", message: "success", task })
    )
    .catch(err => next(err));
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};
