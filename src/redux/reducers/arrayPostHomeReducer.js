import { GET_FETCH } from "../actions/arrayPostHomeAction";

const initialState = {
  arrayPost: [],
};

const arrayPostHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FETCH:
      return {
        ...state,
        arrayPost: action.payload,
      };
    default:
      return state;
  }
};
export default arrayPostHomeReducer;
