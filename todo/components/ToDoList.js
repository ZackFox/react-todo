import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = props => {
  let taskItems;
  const { tasks, updateTask, deleteTask, completeToggle } = props;

  if (tasks) {
    taskItems = tasks.map(task =>
      <ToDoItem
        key={task._id}
        task={task}
        deleteTask={deleteTask}
        updateTask={updateTask}
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
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeToggle: PropTypes.func.isRequired,
};

export default ToDoList;
