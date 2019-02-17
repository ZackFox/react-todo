import {
  ALL_TASKS_REQUEST,
  ALL_TASKS_SUCCESS,
  ALL_TASKS_FAILURE,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from "../reducers/tasks";
import axios from "axios";

export const getAllTasks = () => dispatch => {
  dispatch({ type: ALL_TASKS_REQUEST });
  axios
    .get("/api/v1/tasks")
    .then(({ data }) => {
      dispatch({ type: ALL_TASKS_SUCCESS, tasks: data.tasks });
    })
    .catch(err => dispatch({ type: ALL_TASKS_FAILURE }));
};

export const addTask = text => dispatch => {
  axios
    .post("/api/v1/tasks", { text })
    .then(({ data }) => dispatch({ type: ADD_TASK, task: data.task }))
    .catch(err => console.log(err));
};

export const updateTask = (nextTask, prevTask) => dispatch => {
  dispatch({ type: UPDATE_TASK, task: nextTask });
  axios
    .put(`/api/v1/tasks/${nextTask._id}`, nextTask)
    .catch(err => dispatch({ type: UPDATE_TASK, task: prevTask }));
};

export const deleteTask = task => dispatch => {
  dispatch({ type: DELETE_TASK, task });
  axios
    .delete(`/api/v1/tasks/${task._id}`)
    .catch(err => dispatch({ type: ADD_TASK, task }));
};
