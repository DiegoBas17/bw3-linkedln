import { EDIT_EXPERIENCE } from "../actions/editExperieceAction";

const initialState = {
  experienceObj: null,
};

const editExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EXPERIENCE:
      return {
        ...state,
        experienceObj: action.payload,
      };
    default:
      return state;
  }
};
export default editExperienceReducer;
