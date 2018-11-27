import {
  FETCH_USERS,
  DELETE_USER,
  CREATE_USER,
  FETCH_USER,
  UPDATE_USER
} from "../actions/types";

const initialState = {
  items: [],
  keys: [],
  newUser: {},
  user: {},
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload.result,
        keys: action.payload.keys
      };
    case DELETE_USER:
      return {
        ...state,
        items: action.payload.result,
        keys: action.payload.keys
      };
    case CREATE_USER:
      return {
        ...state,
        newUser: action.payload.result,
        message: action.payload.message
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload.result
      };
    case UPDATE_USER:
      return {
        ...state,
        message: action.payload.result
      };
    default:
      return state;
  }
}
