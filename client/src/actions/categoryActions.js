import { FETCH_CATEGORIES } from "./types";

export const fetchCategories = () => dispatch => {
  fetch("/admin/categories")
    .then(res => res.json())
    .then(categories =>
      dispatch({
        type: FETCH_CATEGORIES,
        payload: categories.result
      })
    );
};
