import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const changeHandler = e => {
    setValue(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (value === "") return;
    addTask(value);
    setValue("");
  };

  return (
    <div className="task-form">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="input-text"
          onChange={changeHandler}
          value={value}
          placeholder="Добавить задачу"
        />

        <a href="/" className="form-submit" onClick={submitHandler}>
          +
        </a>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default TaskForm;
