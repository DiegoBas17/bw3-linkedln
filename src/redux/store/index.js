import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import otherUsersReducer from "../reducers/otherUsersReducer";
import experiencesReducer from "../reducers/experiencesReducer";

const rootReducer = combineReducers({
  user: userReducer,
  otherUsers: otherUsersReducer,
  experiences: experiencesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
