import {
  FETCH_STORIES,
  DELETE_STORY,
  CREATE_STORY,
  FETCH_STORY,
  UPDATE_STORY
} from "../actions/types";

const initialState = {
  items: [],
  keys: [],
  newStory: {},
  story: {},
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
    case FETCH_STORY:
      return {
        ...state,
        story: action.payload.result
      };
    case UPDATE_STORY:
      return {
        ...state,
        message: action.payload.result
      };
    default:
      return state;
  }
}
