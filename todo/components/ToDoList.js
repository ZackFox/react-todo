import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    let taskItems;

    if (this.props.tasks) {
      taskItems = this.props.tasks.map(task =>
        <ToDoItem
          key={task._id}
          task={task}
          deleteTask={this.props.deleteTask}
        />
      );
    }

    return (
      <div className="well">
        {!this.props.tasks ? <p>загрузка..</p> : taskItems}
      </div>
    );
  }
}

export default ToDoList;
