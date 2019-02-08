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

  toggleEdit = e => {
    e.preventDefault();
    this.setState(state => ({ isEdited: !state.isEdited }));
  };

  toggleHandler = () => {
    if (!this.state.isEdited) {
      const id = this.props.task._id;
      const text = this.props.task.text;
      const isCompleted = !this.props.task.isCompleted;
      this.props.updateTask(id, { text, isCompleted });
    }
  };

  submitHandler = e => {
    e.preventDefault();
    const id = this.props.task._id;
    const text = e.target.parentNode.querySelector(".task-text").value;
    const isCompleted = this.props.task.isCompleted;
    this.props.updateTask(id, { text, isCompleted });
    this.toggleEdit(e);
  };

  deleteHandler = e => {
    e.preventDefault();
    this.props.deleteTask(this.props.task._id);
  };

  render() {
    const { isEdited } = this.state;

    return (
      <div className={`task-item`}>
        <TaskCheckbox
          id={this.props.task._id}
          isCompleted={this.props.task.isCompleted}
          onToggle={this.toggleHandler}
        />

        {!isEdited ? (
          <TaskCard
            text={this.props.task.text}
            isCompleted={this.props.task.isCompleted}
            onEdit={this.toggleEdit}
            onDelete={this.deleteHandler}
          />
        ) : (
          <EditedTaskCard
            text={this.props.task.text}
            onCancel={this.toggleEdit}
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
