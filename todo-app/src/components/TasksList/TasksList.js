import React from "react";
import PropTypes from "prop-types";

import withLoading from "../../helpers/withLoading";
import TaskItem from "../TaskItem/TaskItem";

import "./TasksList.css";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <p className="message">[ список пуст ]</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default withLoading(TaskList);
