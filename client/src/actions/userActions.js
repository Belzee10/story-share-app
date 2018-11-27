import {
  FETCH_USERS,
  DELETE_USER,
  CREATE_USER,
  FETCH_USER,
  UPDATE_USER
} from "./types";
import { API_ADMIN_URL } from "../config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

// const headersMultipart = {
//   "Content-Type": "multipart/form-data",
//   Accept: "application/json"
// };

export const fetchUsers = () => dispatch => {
  fetch(`${API_ADMIN_URL}/users`, headers)
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
  fetch(`${API_ADMIN_URL}/users/` + userId, {
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

export const createUser = user => dispatch => {
  fetch(`${API_ADMIN_URL}/users`, {
    headers,
    method: "POST",
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: CREATE_USER,
        payload: data
      })
    );
};

export const fetchUser = userId => dispatch => {
  fetch(`${API_ADMIN_URL}/users/${userId}`, {
    headers,
    method: "GET"
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_USER,
        payload: data
      })
    );
};

export const updateUser = (userId, user) => dispatch => {
  fetch(`${API_ADMIN_URL}/users/${userId}`, {
    headers,
    method: "PATCH",
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: UPDATE_USER,
        payload: data
      })
    );
};
