export const ALL_TASKS_REQUEST = "ALL_TASKS_REQUEST";
export const ALL_TASKS_SUCCESS = "ALL_TASKS_SUCCESS";
export const ALL_TASKS_FAILURE = "ALL_TASKS_FAILURE";
export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";
export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";

const initialState = {
  tasks: [],
  isLoading: true
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
    case ADD_TASK_SUCCESS: {
      return { ...state, tasks: [...state.tasks, action.task] };
    }
    case UPDATE_TASK_SUCCESS: {
      const filtered = state.tasks.map(task => {
        return task._id === action.task._id ? action.task : task;
      });
      return { ...state, tasks: filtered };
    }
    case DELETE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter(t => t._id !== action.task._id)
      };
    }
    default:
      return state;
  }
};
