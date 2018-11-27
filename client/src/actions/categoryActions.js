import {
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  CREATE_CATEGORY,
  FETCH_CATEGORY,
  UPDATE_CATEGORY
} from "./types";
import { API_ADMIN_URL } from "../config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const fetchCategories = () => dispatch => {
  fetch(`${API_ADMIN_URL}/categories`, headers)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CATEGORIES,
        payload: data
      })
    )
    .catch(err => console.error(err));
};

export const deleteCategory = categoryId => dispatch => {
  fetch(`${API_ADMIN_URL}/categories/` + categoryId, {
    headers,
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: DELETE_CATEGORY,
        payload: data
      })
    );
};

export const createCategory = category => dispatch => {
  fetch(`${API_ADMIN_URL}/categories`, {
    headers,
    method: "POST",
    body: JSON.stringify(category)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: CREATE_CATEGORY,
        payload: data
      })
    );
};

export const fetchCategory = categoryId => dispatch => {
  fetch(`${API_ADMIN_URL}/categories/${categoryId}`, {
    headers,
    method: "GET"
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CATEGORY,
        payload: data
      })
    );
};

export const updateCategory = (categoryId, category) => dispatch => {
  fetch(`${API_ADMIN_URL}/categories/${categoryId}`, {
    headers,
    method: "PATCH",
    body: JSON.stringify(category)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: UPDATE_CATEGORY,
        payload: data
      })
    );
};
