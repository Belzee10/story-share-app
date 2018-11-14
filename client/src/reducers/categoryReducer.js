import { FETCH_CATEGORIES } from "../actions/types";

const initialState = {
  items: [],
  keys: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: action.payload.result,
        keys: action.payload.keys
      };
    default:
      return state;
  }
}
