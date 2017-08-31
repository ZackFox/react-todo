import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler(event) {
    event.preventDefault();
    const field = document.getElementById('field');
    if (field.value === '') return false;

    const task = {
      text: field.value,
      comlite: false,
    };

    this.props.addTask(task);
    field.value = '';
  }

  render() {
    return (
      <div className="well">
        <form onSubmit={this.addHandler}>
          <input type="text" id="field" placeholder="type new task" />
          <input type="submit" value="Новая задача" />
        </form>
      </div>
    );
  }
}

export default ToDoForm;
