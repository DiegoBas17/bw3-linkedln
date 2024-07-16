import {
  GET_OTHER_USERS,
  GET_USER_SELECTED,
} from "../actions/getOtherUsersAction";

const initialState = {
  list: [],
  userSelected: null,
};

const otherUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OTHER_USERS:
      return {
        ...state,
        list: action.payload,
      };
    case GET_USER_SELECTED:
      return {
        ...state,
        userSelected: action.payload,
      };

    default:
      return state;
  }
};

export default otherUsersReducer;
