import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TaskItem.css";

const EditedTaskCard = ({ task, setEdited, updateTask, deleteTask }) => {
  const [value, setValue] = useState(task.text);

  const changeHandler = e => {
    setValue(e.target.value);
  };

  const cancelHandler = e => {
    e.preventDefault();
    setValue(task.text);
    setEdited(false);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (value === "") {
      deleteTask(task);
    } else {
      const updatedTask = { ...task, text: value };
      updateTask(task, updatedTask);
    }
    setEdited(false);
  };

  return (
    <div className="task-card edited">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="task-text"
          autoFocus
          autoComplete="off"
          onChange={changeHandler}
          value={value}
        />
        <a
          href="/"
          className="task-cancel"
          title="отменить"
          onClick={cancelHandler}
        >
          &#x2716;
        </a>
        <a
          href="/"
          className="task-save"
          title="сохранить"
          onClick={submitHandler}
        >
          OK
        </a>
      </form>
    </div>
  );
};

EditedTaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    isCompleted: PropTypes.bool,
    text: PropTypes.string
  }).isRequired,
  setEdited: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default EditedTaskCard;
