import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import storyReducer from "./storyReducer";

export default combineReducers({
  categories: categoryReducer,
  users: userReducer,
  stories: storyReducer
});
