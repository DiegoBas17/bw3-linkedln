import { GET_EXPERIENCES } from "../actions/getExperiecesAction";

const initialState = {
  list: [],
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};
export default experiencesReducer;
