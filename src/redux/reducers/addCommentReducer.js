import { ADD_COMMENT } from "../actions/addCommentAction";

const initialState = {
  commentObj: {
    comment: "",
    rate: 1,
    postId: "",
  },
};

const addCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        commentObj: action.payload,
      };

    default:
      return state;
  }
};
export default addCommentReducer;
