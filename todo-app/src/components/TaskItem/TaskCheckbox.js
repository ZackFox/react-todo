import React from "react";
import PropTypes from "prop-types";

import "./TaskCheckbox.css";

const TaskCheckbox = ({ task, isEdited, updateTask }) => {
  const completeToggle = () => {
    if (!isEdited) {
      const updatedTask = { ...task, isCompleted: !task.isCompleted };
      updateTask(task, updatedTask);
    }
  };

  return (
    <div className="task-checkbox">
      <input
        type="checkbox"
        id={`check_${task._id}`}
        checked={task.isCompleted}
        onChange={completeToggle}
      />
      <label
        htmlFor={`check_${task._id}`}
        title="отметить"
        className={`proxy-checkbox ${task.isCompleted ? "checked" : ""}`}
      />
    </div>
  );
};

TaskCheckbox.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    isCompleted: PropTypes.bool,
    text: PropTypes.string
  }).isRequired,
  isEdited: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TaskCheckbox;
