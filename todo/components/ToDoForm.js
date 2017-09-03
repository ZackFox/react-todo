import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler(event) {
    event.preventDefault();
    const text = this.textField.value;
    if (text !== '') {
      this.props.addTask(text);
      this.textField.value = '';
    }
  }

  render() {
    return (
      <div className="well">
        <form onSubmit={this.addHandler}>
          <input
            type="text"
            ref={el => (this.textField = el)}
            placeholder="type new task"
          />
          <input type="submit" value="Новая задача" />
        </form>
      </div>
    );
  }
}

export default ToDoForm;
