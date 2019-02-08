import React from "react";
import PropTypes from "prop-types";

import "./TaskCheckbox.css";

const TaskCheckbox = ({ id, isCompleted, onToggle }) => {
  return (
    <div className="task-checkbox">
      <input
        type="checkbox"
        id={`check_${id}`}
        checked={isCompleted}
        onChange={onToggle}
      />
      <label
        htmlFor={`check_${id}`}
        title="отметить"
        className={`proxy-checkbox ${isCompleted ? "checked" : ""}`}
      />
    </div>
  );
};

TaskCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TaskCheckbox;
