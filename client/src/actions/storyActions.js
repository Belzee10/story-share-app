import { FETCH_STORIES, DELETE_STORY } from "./types";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const fetchStories = () => dispatch => {
  fetch("/api/admin/stories", headers)
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
  fetch("/api/admin/stories/" + storyId, {
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
