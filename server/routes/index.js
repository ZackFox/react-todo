const express = require('express');

const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getTaskList);
router.post('/task', taskController.create);
router.post('/task/:id', taskController.update);
router.put('/task/:id', taskController.toggle);
router.delete('/task/:id', taskController.delete);

module.exports = router;
