import React, { Component } from 'react';
// import { render } from 'react-dom';
// import ToDoItem from '../components/toDoItem';

class ToDoList extends Component {
  render() {
    const toDoItems = this.props.tasks.map(item =>
      <li key={item.id}>
        {item.text}
      </li>
    );

    return (
      <div>
        {toDoItems}
      </div>
    );
  }
}

export default ToDoList;
