import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import otherUsersReducer from "../reducers/otherUsersReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import addExperienceReducer from "../reducers/addExperienceReducer";
import editExperienceReducer from "../reducers/editExperienceReducer";
import arrayPostHomeReducer from "../reducers/arrayPostHomeReducer";
import deleteExperienceReducer from "../reducers/deleteExperienceReducer";
import lavoroReducer from "../reducers/lavoroReducer";
import getCommentsReducer from "../reducers/getCommentsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  otherUsers: otherUsersReducer,
  experiences: experiencesReducer,
  addExperience: addExperienceReducer,
  editExperience: editExperienceReducer,
  arrayPostHome: arrayPostHomeReducer,
  deleteExperience: deleteExperienceReducer,
  lavoroLista: lavoroReducer,
  getComments: getCommentsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
