import { FETCH_USERS, DELETE_USER, CREATE_USER } from "./types";
import { API_ADMIN_URL } from "../config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const headersMultipart = {
  "Content-Type": "multipart/form-data",
  Accept: "application/json"
};

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

export const createUser = (user, avatarFile) => dispatch => {
  const formData = new FormData();
  formData.append("avatar", avatarFile);
  formData.append("fullName", user.fullName);
  formData.append("email", user.email);
  formData.append("password", user.password);
  formData.append("role", user.role);

  fetch(`${API_ADMIN_URL}/users`, {
    headersMultipart,
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: CREATE_USER,
        payload: data
      })
    );
};
