import React from "react";
import PropTypes from "prop-types";

import "./TaskItem.css";

const TaskCard = ({ task, setEdited, deleteTask }) => {
  const editlHandler = e => {
    e.preventDefault();
    setEdited(true);
  };

  const deleteHandler = e => {
    e.preventDefault();
    deleteTask(task);
  };

  return (
    <div className={`task-card ${task.isCompleted ? "completed" : ""}`}>
      <a href="/" className="task-edit" title="изменить" onClick={editlHandler}>
        &#x270E;
      </a>
      <a
        href="/"
        className="task-delete"
        title="удалить"
        onClick={deleteHandler}
      >
        &#x2716;
      </a>
      <span className="task-text">{task.text}</span>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    isCompleted: PropTypes.bool,
    text: PropTypes.string
  }).isRequired,
  setEdited: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default TaskCard;
