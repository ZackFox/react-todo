const express = require('express');

const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getTaskList);
router.post('/task', taskController.create);
router.put('/task/:id', taskController.update);
router.delete('/task/:id', taskController.delete);

module.exports = router;
