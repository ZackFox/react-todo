import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TaskItem.css";

import TaskCard from "./TaskCard";
import EditedTaskCard from "./EditedTaskCard";
import TaskCheckbox from "./TaskCheckbox";

const TaskItem = React.memo(({ task, updateTask, deleteTask }) => {
  const [isEdited, setEdited] = useState(false);

  return (
    <div className="task-item">
      <TaskCheckbox task={task} isEdited={isEdited} updateTask={updateTask} />

      {!isEdited ? (
        <TaskCard task={task} setEdited={setEdited} deleteTask={deleteTask} />
      ) : (
        <EditedTaskCard
          task={task}
          setEdited={setEdited}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
});

TaskItem.propTypes = {
  task: PropTypes.shape({}).isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default TaskItem;
