import { FETCH_STORIES, DELETE_STORY } from "../actions/types";

const initialState = {
  items: [],
  keys: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORIES:
      return {
        ...state,
        items: action.payload.result,
        keys: action.payload.keys
      };
    case DELETE_STORY:
      return {
        ...state,
        items: action.payload.result,
        keys: action.payload.keys
      };
    default:
      return state;
  }
}
