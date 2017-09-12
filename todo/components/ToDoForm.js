import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler(e) {
    e.preventDefault();
    const text = this.textField.value;
    if (text !== '') {
      this.props.addTask(text);
      this.textField.value = '';
    }
  }

  render() {
    return (
      <div className="well task-form">
        <form onSubmit={this.addHandler}>
          <div className="form-group add-task">
            <input
              type="text"
              className="form-control"
              ref={el => (this.textField = el)}
              placeholder="Добавить задачу"
            />

            <a href="/" className="form-submit" onClick={this.addHandler}>
              <i className="fa fa-plus" />
            </a>
          </div>
        </form>
      </div>
    );
  }
}

ToDoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default ToDoForm;
