import React, { Component } from 'react';
// import { render } from 'react-dom';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoForm />
        <ToDoList tasks={this.props.tasks} />
      </div>
    );
  }
}

export default App;
