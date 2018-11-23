import { FETCH_STORIES, DELETE_STORY, CREATE_STORY } from "./types";
import { API_ADMIN_URL } from "../config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const fetchStories = () => dispatch => {
  fetch(`${API_ADMIN_URL}/stories`, headers)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_STORIES,
        payload: data
      })
    )
    .catch(err => console.error(err));
};

export const deleteStory = storyId => dispatch => {
  fetch(`${API_ADMIN_URL}/stories/` + storyId, {
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: DELETE_STORY,
        payload: data
      })
    );
};

export const createStory = story => dispatch => {
  fetch(`${API_ADMIN_URL}/stories`, {
    headers,
    method: "POST",
    body: JSON.stringify(story)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: CREATE_STORY,
        payload: data
      })
    );
};
