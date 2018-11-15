import { FETCH_USERS, DELETE_USER } from "./types";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const fetchUsers = () => dispatch => {
  fetch("/api/admin/users", headers)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_USERS,
        payload: data
      })
    )
    .catch(err => console.error(err));
};

export const deleteUser = userId => dispatch => {
  fetch("/api/admin/users/" + userId, {
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: DELETE_USER,
        payload: data
      })
    );
};
