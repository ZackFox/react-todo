import React, { Component } from 'react';
import axios from 'axios';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
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

  toggleTask(taskId) {
    axios.put(`/api/v1/task/${taskId}`).then(() => {
      this.setState(prevState => ({
        tasks: prevState.tasks.map(task => {
          if (task._id === taskId) {
            task.isCompleted = !task.isCompleted;
          }
          return task;
        }),
      }));
    });
  }

  deleteTask(taskId) {
    axios.delete(`/api/v1/task/${taskId}`).then(() => {
      this.setState(prevState => ({
        tasks: prevState.tasks.filter(({ _id }) => _id !== taskId),
      }));
    });
  }

  render() {
    return (
      <div>
        <header>
          <h3>Менеджер задач</h3>
        </header>
        <ToDoForm addTask={this.addTask} />
        <ToDoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
