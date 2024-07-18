import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import otherUsersReducer from "../reducers/otherUsersReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import addExperienceReducer from "../reducers/addExperienceReducer";
import editExperienceReducer from "../reducers/editExperienceReducer";
import deleteExperienceReducer from "../reducers/deleteExperienceReducer";

const rootReducer = combineReducers({
  user: userReducer,
  otherUsers: otherUsersReducer,
  experiences: experiencesReducer,
  addExperience: addExperienceReducer,
  editExperience: editExperienceReducer,
  deleteExperience: deleteExperienceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
