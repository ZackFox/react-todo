import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
} from "../../actions/taskActions";

import { changeFilter } from "../../reducers/filter";
import getFilteredTasks from "../../helpers/getFilteredTasks";

import TaskForm from "../../components/TaskForm/TaskForm";
import Filters from "../../components/Filters/Filters";
import TasksList from "../../components/TasksList/TasksList";

import "./App.css";

const App = props => {
  useEffect(() => {
    props.getAllTasks();
  }, []);

  return (
    <div className="app">
      <header>
        <h2 className="heading">Список задач</h2>
      </header>

      <main className="main">
        <TaskForm addTask={props.addTask} />
        <Filters
          activeFilter={props.activeFilter}
          changeFilter={props.changeFilter}
        />
        <TasksList
          isLoading={props.isLoading}
          tasks={props.tasks}
          updateTask={props.updateTask}
          deleteTask={props.deleteTask}
        />
      </main>

      <footer>
        <p>
          ToDo App <a href="https://github.com/ZackFox/react-todo">(GitHub)</a>{" "}
          coding by ZackFox
        </p>
      </footer>
    </div>
  );
};

export default connect(
  state => ({
    tasks: getFilteredTasks(state.taskReducer.tasks, state.filter.active),
    isLoading: state.taskReducer.isLoading,
    activeFilter: state.filter.active
  }),
  {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask,
    changeFilter
  }
)(App);
