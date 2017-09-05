import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    const taskId = e.target.parentNode.id;
    this.props.deleteTask(taskId);
  }

  toggleHandler() {
    const id = e.target.parentNode.id;
    this.props.toggleTask(id);
  }

  render() {
    return (
      <div
        className={
          !this.props.task.isCompleted ? 'taskItem' : 'taskItem completed'
        }
        id={this.props.task._id}
      >
        <p>
          {this.props.task.text}
        </p>

        <a href="/" className="btn" onClick={this.toggleHandler}>
          toggle
        </a>

        <a href="/" className="btn" onClick={this.clickHandler}>
          del
        </a>
      </div>
    );
  }
}

export default ToDoItem;
