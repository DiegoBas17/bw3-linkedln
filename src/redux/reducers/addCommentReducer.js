import { ADD_COMMENT } from "../actions/addCommentAction";

const initialState = {
  commentObj: null,
};

const addCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        commentObj: action.payload,
      };

    default:
      return state;
  }
};
export default addCommentReducer;
