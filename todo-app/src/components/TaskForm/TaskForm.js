import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TaskForm.css";

class TaskForm extends Component {
  state = { value: "" };

  changeHandler = e => {
    this.setState({ value: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const text = this.state.value;
    if (text === "") return;

    this.props.addTask(text);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="task-form">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            className="input-text"
            onChange={this.changeHandler}
            value={this.state.value}
            placeholder="Добавить задачу"
          />

          <a href="/" className="form-submit" onClick={this.submitHandler}>
            +
          </a>
        </form>
      </div>
    );
  }
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default TaskForm;
