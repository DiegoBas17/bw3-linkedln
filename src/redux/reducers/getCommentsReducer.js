import { GET_COMMENTS } from "../actions/getCommentsAction";

const initialState = {
  list: [],
};

const getCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};
export default getCommentsReducer;
