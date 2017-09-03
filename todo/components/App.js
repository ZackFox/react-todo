import React, { Component } from 'react';
import axios from 'axios';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/v1/tasks')
      .then(res => this.setState({ tasks: res.data }))
      .catch(err => console.log(err));
  }

  addTask(text) {
    axios.post('/api/v1/task', { text }).then(res => {
      const tasks = this.state.tasks;
      tasks.push(res.data.task);
      this.setState({ tasks });
    });
  }

  deleteTask(taskId) {
    console.log('удалить ' + taskId);

    // const tasks = this.state.tasks;
    // tasks.push(task);
    // this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <header>
          <h3>Менеджер задач</h3>
        </header>
        <ToDoForm addTask={this.addTask} />
        <ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
