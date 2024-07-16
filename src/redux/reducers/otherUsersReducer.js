import { GET_OTHER_USERS } from "../actions/getOtherUsersAction";

const initialState = {
  list: [],
};

const otherUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OTHER_USERS:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default otherUsersReducer;
