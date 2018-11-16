import { FETCH_CATEGORIES, DELETE_CATEGORY, CREATE_CATEGORY } from "./types";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const fetchCategories = () => dispatch => {
  fetch("/api/admin/categories", headers)
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
  fetch("/api/admin/categories/" + categoryId, {
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
  fetch("/api/admin/categories", {
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
