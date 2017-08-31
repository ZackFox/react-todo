import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.value}
        </p>
      </div>
    );
  }
}

export default ToDoItem;
