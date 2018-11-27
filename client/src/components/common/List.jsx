import React from "react";
import PropTypes from "prop-types";

import Row from "./Row";
import Thead from "./Thead";

// exclude "_id", "__v", "created_at", "password", "content", "categories", "notifications"
function excludeKeys(keys) {
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    if (
      keys[i] !== "_id" &&
      keys[i] !== "__v" &&
      keys[i] !== "created_at" &&
      keys[i] !== "password" &&
      keys[i] !== "content" &&
      keys[i] !== "categories" &&
      keys[i] !== "notifications"
    ) {
      result.push(keys[i]);
    }
  }
  return result;
}

function listBody(items, keys, props) {
  if (!items.length) {
    return (
      <tr>
        <td colSpan={excludeKeys(keys).length + 2}>No items found :(</td>
      </tr>
    );
  }
  return items.map((item, index) => (
    <Row
      editUrl={props.editUrl}
      item={item}
      excludeKeys={excludeKeys(keys)}
      index={index}
      key={item._id}
      handleDelete={props.handleDelete}
    />
  ));
}

const List = props => {
  const { items, keys } = props;
  return (
    <div className="text-center">
      <table className="table">
        <thead>
          <Thead excludeKeys={excludeKeys(keys)} />
        </thead>
        <tbody>{listBody(items, keys, props)}</tbody>
      </table>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  editUrl: PropTypes.string
};

export default List;
