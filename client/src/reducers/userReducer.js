import { FETCH_USERS, DELETE_USER, CREATE_USER } from "../actions/types";

const initialState = {
  items: [],
  keys: [],
  newUser: {},
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
    default:
      return state;
  }
}
