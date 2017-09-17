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

  updateTask(taskId, text) {
    axios.post(`/api/v1/task/${taskId}`, { text }).then(task => {
      this.setState(prevState => ({
        tasks: prevState.tasks.map(item => {
          if (item._id === taskId) {
            item.text = text;
          }
          return item;
        }),
      }));
      // console.log(task);
      // this.setState(prevState => ({
      //   tasks: prevState.tasks.filter(({ _id }) => _id === taskId),
      // }));
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
