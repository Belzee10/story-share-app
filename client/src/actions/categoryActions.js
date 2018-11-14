import { FETCH_CATEGORIES } from "./types";

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
//asdfsdf
