import {
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  CREATE_CATEGORY
} from "../actions/types";

const initialState = {
  items: [],
  keys: [],
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: action.payload.result,
        keys: action.payload.keys
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        items: action.payload.result,
        keys: action.payload.keys
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        message: action.payload.message
      };
    default:
      return state;
  }
}
