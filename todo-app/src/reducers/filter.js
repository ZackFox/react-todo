const CHANGE_FILTER = "CHANGE_FILTER";

export const filters = ["all", "current", "completed"];

export const changeFilter = filter => dispatch => {
  dispatch({ type: CHANGE_FILTER, filter });
};

export default (state = { active: "all" }, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return { active: action.filter };
    }
    default:
      return state;
  }
};
