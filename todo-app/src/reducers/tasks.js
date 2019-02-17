export const ALL_TASKS_REQUEST = "ALL_TASKS_REQUEST";
export const ALL_TASKS_SUCCESS = "ALL_TASKS_SUCCESS";
export const ALL_TASKS_FAILURE = "ALL_TASKS_FAILURE";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE";
export const DELETE_TASK = "DELETE_TASK";

const initialState = {
  tasks: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_TASKS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ALL_TASKS_SUCCESS: {
      return { tasks: action.tasks, isLoading: false };
    }
    case ALL_TASKS_FAILURE: {
      return { ...state, isLoading: false };
    }
    case ADD_TASK: {
      return { ...state, tasks: [...state.tasks, action.task] };
    }
    case UPDATE_TASK: {
      const filtered = state.tasks.map(task => {
        return task._id === action.task._id ? action.task : task;
      });
      return { ...state, tasks: filtered };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(t => t._id !== action.task._id)
      };
    }
    default:
      return state;
  }
};
