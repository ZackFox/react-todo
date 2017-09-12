import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.isEditToggleHandler = this.isEditToggleHandler.bind(this);
    this.saveTaskHandler = this.saveTaskHandler.bind(this);
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
    this.completeToggleHandler = this.completeToggleHandler.bind(this);

    this.state = {
      isEdited: false,
    };
  }

  completeToggleHandler(e) {
    e.preventDefault();
    const taskId = this.taskItem.id;
    this.props.completeToggle(taskId);
  }

  isEditToggleHandler(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isEdited: !prevState.isEdited,
    }));
  }

  saveTaskHandler(e) {
    e.preventDefault();
    // axios request //
    this.setState(prevState => ({
      isEdited: !prevState.isEdited,
    }));
  }

  deleteTaskHandler(e) {
    e.preventDefault();
    this.props.deleteTask(this.taskItem.id);
  }

  render() {
    const { task } = this.props;
    const { isEdited } = this.state;

    // let buttons;

    // if (isEdited) {
    //   textField = (
    //     <input type="text" className="edit" defaultValue={task.text} />
    //   );

    //   buttons = (
    //     <div>
    //       <a href="/" className="" onClick={this.saveTaskHandler}>
    //         Сохранить
    //       </a>
    //       <a href="/" className="" onClick={this.isEditToggleHandler}>
    //         Отмена
    //       </a>
    //     </div>
    //   );
    // }

    return (
      <div
        id={task._id}
        ref={el => (this.taskItem = el)}
        className={!task.isCompleted ? 'taskItem' : 'taskItem completed'}
      >
        <a
          href="/"
          className="btn-complete"
          onClick={this.completeToggleHandler}
        >
          <i
            className={!task.isCompleted ? 'fa fa-check' : 'fa fa-check check'}
          />
        </a>

        <p>
          {task.text}
        </p>

        <a href="/" className="btn-edit" onClick={this.isEditToggleHandler}>
          <i className="fa fa-pencil" />
        </a>

        <a href="/" className="btn-delete" onClick={this.isEditToggleHandler}>
          <i className="fa fa-trash" />
        </a>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  task: PropTypes.shape().isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeToggle: PropTypes.func.isRequired,
};

export default ToDoItem;
