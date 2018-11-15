import { FETCH_USERS, DELETE_USER } from "../actions/types";

const initialState = {
  items: [],
  keys: []
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
    default:
      return state;
  }
}
