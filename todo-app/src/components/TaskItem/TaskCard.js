import React from "react";
import PropTypes from "prop-types";

import "./TaskItem.css";

const TaskCard = ({ text, isCompleted, onEdit, onDelete }) => {
  return (
    <div className={`task-card ${isCompleted ? "completed" : ""}`}>
      <a href="/" className="task-edit" title="изменить" onClick={onEdit}>
        &#x270E;
      </a>
      <a href="/" className="task-delete" title="удалить" onClick={onDelete}>
        &#x2716;
      </a>
      <span className="task-text">{text}</span>
    </div>
  );
};

TaskCard.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TaskCard;
