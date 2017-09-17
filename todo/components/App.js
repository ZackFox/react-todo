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
    this.deleteTask = this.deleteTask.bind(this);
    this.completeToggle = this.completeToggle.bind(this);
  }

  componentDidMount() {
    this.getTasks('all');
  }

  getTasks(filter) {
    axios
      .get(`/api/v1/tasks?filter=${filter}`)
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
    axios.delete(`/api/v1/task/${taskId}`).then(() => {
      this.setState(prevState => ({
        tasks: prevState.tasks.filter(({ _id }) => _id !== taskId),
      }));
    });
  }

  completeToggle(taskId) {
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

  render() {
    return (
      <div>
        <ToDoForm addTask={this.addTask} />
        <ToDoFilter doFilter={this.getTasks} />
        <ToDoList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          completeToggle={this.completeToggle}
        />
      </div>
    );
  }
}

export default App;
