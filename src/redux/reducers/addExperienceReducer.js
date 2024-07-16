import { ADD_EXPERIENCE } from "../actions/addExperienceAction";

const initialState = {
  experienceObj: null,
};

const addExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE:
      return {
        ...state,
        experienceObj: action.payload,
      };

    default:
      return state;
  }
};
export default addExperienceReducer;
