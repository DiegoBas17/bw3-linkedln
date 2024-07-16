import { GET_USER } from "../actions/getUserAction";

const initialState = {
  userObj: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userObj: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
