import { FETCH_STORIES, DELETE_STORY, CREATE_STORY } from "../actions/types";

const initialState = {
  items: [],
  keys: [],
  newStory: {},
  message: ""
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
    case CREATE_STORY:
      return {
        ...state,
        newStory: action.payload.result,
        message: action.payload.message
      };
    default:
      return state;
  }
}
