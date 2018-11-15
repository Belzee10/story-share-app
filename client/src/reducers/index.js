import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

export default combineReducers({
  categories: categoryReducer,
  users: userReducer
});
