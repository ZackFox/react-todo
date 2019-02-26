import { call, put, takeEvery, all } from "redux-saga/effects";

import {
  ALL_TASKS_REQUEST,
  ALL_TASKS_SUCCESS,
  ALL_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS
} from "../reducers/tasks";

import axios from "axios";

function* getTasks() {
  try {
    const { data } = yield call(axios.get, "/api/v1/tasks");
    yield put({ type: ALL_TASKS_SUCCESS, tasks: data.tasks });
  } catch (err) {
    yield put({ type: ALL_TASKS_FAILURE, err });
  }
}

function* addTask({ text }) {
  try {
    const { data } = yield call(axios.post, "/api/v1/tasks", { text });
    yield put({ type: ADD_TASK_SUCCESS, task: data.task });
  } catch (err) {
    yield put({ type: ADD_TASK_FAILURE, err });
  }
}

function* updateTask({ prevTask, nextTask }) {
  try {
    yield put({ type: UPDATE_TASK_SUCCESS, task: nextTask });
    yield call(axios.put, `/api/v1/tasks/${nextTask._id}`, nextTask);
  } catch (err) {
    yield put({ type: UPDATE_TASK_SUCCESS, task: prevTask });
  }
}

function* deleteTask({ task }) {
  try {
    yield put({ type: DELETE_TASK_SUCCESS, task });
    yield call(axios.delete, `/api/v1/tasks/${task._id}`);
  } catch (err) {
    yield put({ type: ADD_TASK_SUCCESS, task });
  }
}

function* watchGetTasks() {
  yield takeEvery(ALL_TASKS_REQUEST, getTasks);
}

function* watchAddTask() {
  yield takeEvery(ADD_TASK_REQUEST, addTask);
}

function* watchUpdateTask() {
  yield takeEvery(UPDATE_TASK_REQUEST, updateTask);
}

function* watchDeleteTask() {
  yield takeEvery(DELETE_TASK_REQUEST, deleteTask);
}

export default function*() {
  yield all([
    watchGetTasks(),
    watchAddTask(),
    watchUpdateTask(),
    watchDeleteTask()
  ]);
}
