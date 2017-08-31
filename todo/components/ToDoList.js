import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    const tasks = this.props.tasks;

    if (!tasks) {
      return (
        <div className="well">
          <p>загрузка...</p>
        </div>
      );
    }

    return (
      <div className="well">
        {tasks.map(task =>
          <p key={task._id}>
            {task.text}
          </p>
        )}
      </div>
    );
  }
}

export default ToDoList;
