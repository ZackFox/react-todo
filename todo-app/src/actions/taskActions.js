import {
  ALL_TASKS_REQUEST,
  ADD_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
  DELETE_TASK_REQUEST
} from "../reducers/tasks";

export const getAllTasks = () => ({ type: ALL_TASKS_REQUEST });

export const addTask = text => ({ type: ADD_TASK_REQUEST, text });

export const updateTask = (prevTask, nextTask) => ({
  type: UPDATE_TASK_REQUEST,
  prevTask,
  nextTask
});

export const deleteTask = task => ({ type: DELETE_TASK_REQUEST, task });
