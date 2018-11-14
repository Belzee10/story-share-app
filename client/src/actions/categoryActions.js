import { FETCH_CATEGORIES } from "./types";

export const fetchCategories = () => dispatch => {
  fetch("/api/admin/categories")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CATEGORIES,
        payload: data.result
      })
    )
    .catch(err => console.error(err));
};
