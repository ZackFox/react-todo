import React, { Component, PropTypes } from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  toggleHandler() {
    this.props.toggleTask(this.taskItem.id);
  }

  deleteItemHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteTask(this.taskItem.id);
  }

  render() {
    const { task } = this.props;

    return (
      <div
        id={task._id}
        ref={el => (this.taskItem = el)}
        onClick={this.toggleHandler}
        className={!task.isCompleted ? 'taskItem' : 'taskItem completed'}
      >
        <p>
          {task.text}
        </p>

        {/* <a href="/" className="" >
          <i className="fa fa-check-square-o" />
          toggle
        </a> */}

        <a href="/" className="" onClick={this.deleteItemHandler}>
          delete
        </a>
      </div>
    );
  }
}

ToDoItem.prototypes = {};

export default ToDoItem;
