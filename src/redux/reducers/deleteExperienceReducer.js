import { DELETE_EXPERIENCE } from "../actions/deleteExperienceAction";

const initialState = {
  list: [],
};

const deleteExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_EXPERIENCE:
      return {
        ...state,
        list: state.list.filter((experience) => experience._id !== action.payload),
      };

    default:
      return state;
  }
};

export default deleteExperienceReducer;
