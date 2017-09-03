import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    const taskId = e.target.parentNode.id;
    this.props.deleteTask(taskId);
  }

  render() {
    return (
      <div className="taskItem" id={this.props.task._id}>
        <p>
          {this.props.task.text}
        </p>
        <a href="/" className="btn" onClick={this.clickHandler}>
          edit
        </a>
        <a href="/" className="btn" onClick={this.clickHandler}>
          del
        </a>
      </div>
    );
  }
}

export default ToDoItem;
