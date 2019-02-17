import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TaskItem.css";

import TaskCard from "./TaskCard";
import EditedTaskCard from "./EditedTaskCard";
import TaskCheckbox from "./TaskCheckbox";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false
    };
  }

  valueChangeHandler = e => {
    this.setState({ value: e.target.value });
  };

  completeChangeHandler = () => {
    if (!this.state.isEdited) {
      const updatedTask = {
        ...this.props.task,
        isCompleted: !this.props.task.isCompleted
      };

      this.props.updateTask(updatedTask, this.props.task);
    }
  };

  editHandler = e => {
    e.preventDefault();
    this.setState(state => ({ isEdited: true }));
  };

  cancelHandler = e => {
    e.preventDefault();
    this.setState({ value: this.props.task.text, isEdited: false });
  };

  deleteHandler = e => {
    e.preventDefault();
    this.props.deleteTask(this.props.task);
  };

  submitHandler = e => {
    e.preventDefault();
    const card = e.target.parentNode;
    const text = card.querySelector(".task-text").value;
    const updatedTask = { ...this.props.task, text };

    this.props.updateTask(updatedTask, this.props.task);
    this.setState({ isEdited: false });
  };

  render() {
    const { isEdited } = this.state;

    return (
      <div className="task-item">
        <TaskCheckbox
          id={this.props.task._id}
          isCompleted={this.props.task.isCompleted}
          onToggle={this.completeChangeHandler}
        />

        {!isEdited ? (
          <TaskCard
            text={this.props.task.text}
            isCompleted={this.props.task.isCompleted}
            onEdit={this.editHandler}
            onDelete={this.deleteHandler}
          />
        ) : (
          <EditedTaskCard
            text={this.props.task.text}
            // onTyping={this.valueChangeHandler}
            onCancel={this.cancelHandler}
            onSave={this.submitHandler}
          />
        )}
      </div>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.shape({}).isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default TaskItem;
