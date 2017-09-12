import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = props => {
  let taskItems;
  const { tasks, deleteTask, completeToggle } = props;

  if (tasks) {
    taskItems = tasks.map(task =>
      <ToDoItem
        key={task._id}
        task={task}
        deleteTask={deleteTask}
        completeToggle={completeToggle}
      />
    );
  } else {
    taskItems = <p>загрузка..</p>;
  }

  return (
    <div className="">
      {taskItems}
    </div>
  );
};

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeToggle: PropTypes.func.isRequired,
};

export default ToDoList;
