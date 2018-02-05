import React, { Component } from 'react';
import axios from 'axios';

import ToDoForm from '../components/ToDoForm';
import ToDoFilter from '../components/ToDoFilter';
import ToDoList from '../components/ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [], filter: 'all' };
    this.addTask = this.addTask.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeToggle = this.completeToggle.bind(this);
  }

  componentDidMount() {
    this.getTasks('all');
  }

  getTasks(filter) {
    axios
      .get(`/api/v1/tasks?filter=${filter}`)
      .then(({ data }) => this.setState({ tasks: data }))
      .catch(err => console.log(err));
  }

  addTask(text) {
    const tasks = Object.assign([], this.state.tasks);
    axios
      .post('/api/v1/task', { text })
      .then(({ data }) => {
        tasks.push(data.task);
        this.setState(state => Object.assign({ tasks }, state.tasks));
      })
      .catch(err => console.log(err));
  }

  updateTask(taskId, text) {
    const tasks = Object.assign([], this.state.tasks);
    tasks.map(item => {
      if (item._id === taskId) {
        item.text = text;
      }
      return item;
    });

    axios
      .post(`/api/v1/task/${taskId}`, { text })
      .then(() => {
        this.setState(state => Object.assign({ tasks }, state.tasks));
      })
      .catch(err => console.log(err));
  }

  deleteTask(taskId) {
    const tasks = Object.assign([], this.state.tasks);
    const deleted = tasks.filter(({ _id }) => _id !== taskId);
    this.setState({ tasks: deleted });
    axios.delete(`/api/v1/task/${taskId}`).catch(err => console.log(err));
  }

  completeToggle(taskId) {
    const tasks = Object.assign([], this.state.tasks);
    tasks.map(task => {
      if (task._id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    axios.put(`/api/v1/task/${taskId}`).then(() => {
      this.setState(state => Object.assign({ tasks }, state.tasks));
    });
  }

  render() {
    return (
      <div>
        <h2 className="heading">Список задач</h2>
        <ToDoForm addTask={this.addTask} />
        <ToDoFilter doFilter={this.getTasks} />
        <ToDoList
          tasks={this.state.tasks}
          updateTask={this.updateTask}
          deleteTask={this.deleteTask}
          completeToggle={this.completeToggle}
        />
      </div>
    );
  }
}

export default App;
