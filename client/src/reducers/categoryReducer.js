import {
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  CREATE_CATEGORY,
  FETCH_CATEGORY,
  UPDATE_CATEGORY
} from "../actions/types";

const initialState = {
  items: [],
  keys: [],
  newCategory: {},
  category: {},
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
        newCategory: action.payload.result,
        message: action.payload.message
      };
    case FETCH_CATEGORY:
      return {
        ...state,
        category: action.payload.result
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        message: action.payload.result
      };
    default:
      return state;
  }
}
