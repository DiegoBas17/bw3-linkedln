import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import otherUsersReducer from "../reducers/otherUsersReducer";

const rootReducer = combineReducers({
  user: userReducer,
  otherUsers: otherUsersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
