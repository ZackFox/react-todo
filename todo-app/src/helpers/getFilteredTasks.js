export default (tasks, activeFilter) => {
  if (activeFilter === "all") {
    return tasks;
  } else if (activeFilter === "current") {
    return tasks.filter(t => !t.isCompleted);
  } else if (activeFilter === "completed") {
    return tasks.filter(t => t.isCompleted);
  }
};
