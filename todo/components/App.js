import React, { Component } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.addNewTask = this.addNewTask.bind(this);
  }

  componentWillMount() {
    global
      .fetch('/api/v1/tasks')
      .then(res => res.json())
      .then(data => {
        this.setState({ tasks: data });
      })
      .catch(err => console.log(err));
  }

  addNewTask(task) {
    const tasks = this.state.tasks;
    tasks.push(task);
    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <header>
          <h3>Менеджер задач</h3>
        </header>
        <ToDoForm addTask={this.addNewTask} />
        <ToDoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
