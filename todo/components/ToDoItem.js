import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.isEditToggleHandler = this.isEditToggleHandler.bind(this);
    this.saveTaskHandler = this.saveTaskHandler.bind(this);
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
    this.completeToggleHandler = this.completeToggleHandler.bind(this);

    this.state = {
      isEdited: false,
    };
  }

  completeToggleHandler(e) {
    e.preventDefault();
    const taskId = this.taskItem.id;
    this.props.completeToggle(taskId);
  }

  isEditToggleHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState(prevState => ({
      isEdited: !prevState.isEdited,
    }));
  }

  saveTaskHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    const id = this.taskItem.id;
    const text = this.newText.value;
    this.props.updateTask(id, text);
    this.setState(prevState => ({
      isEdited: !prevState.isEdited,
    }));
  }

  deleteTaskHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteTask(this.taskItem.id);
  }

  render() {
    const { task } = this.props;
    const { isEdited } = this.state;
    let taskContent = null;

    if (!isEdited) {
      taskContent = (
        <div onClick={!isEdited ? this.completeToggleHandler : null}>
          <span
            href="/"
            className={`btn-complete ${task.isCompleted ? 'check' : ''}`}
          >
            <i className="fa fa-check" />
          </span>
          <p>
            {task.text}
          </p>
          <a href="/" className="btn-edit" onClick={this.isEditToggleHandler}>
            <i className="fa fa-pencil" />
          </a>
          <a href="/" className="btn-delete" onClick={this.deleteTaskHandler}>
            <i className="fa fa-trash" />
          </a>
        </div>
      );
    } else {
      taskContent = (
        <div>
          <input
            type="text"
            ref={el => (this.newText = el)}
            className="edit"
            defaultValue={task.text}
          />
          <a href="/" className="btn-save" onClick={this.saveTaskHandler}>
            ОК
          </a>
          <a href="/" className="btn-cancel" onClick={this.isEditToggleHandler}>
            X
          </a>
        </div>
      );
    }

    return (
      <div
        id={task._id}
        ref={el => (this.taskItem = el)}
        className={`taskItem ${task.isCompleted ? 'completed' : ''}`}
      >
        {taskContent}
      </div>
    );
  }
}

ToDoItem.propTypes = {
  task: PropTypes.shape().isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeToggle: PropTypes.func.isRequired,
};

export default ToDoItem;
