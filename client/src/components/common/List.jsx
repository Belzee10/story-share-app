import React from "react";
import Button from "../common/Button";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}

// exclude "_id", "__v", "created_at", "password"
function excludeKeys(keys) {
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    if (
      keys[i] !== "_id" &&
      keys[i] !== "__v" &&
      keys[i] !== "created_at" &&
      keys[i] !== "password"
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
    <tr key={item._id}>
      <th scope="row">{index + 1}</th>
      {excludeKeys(keys).map(key => (
        <td key={key}>{item[key]}</td>
      ))}
      <td>
        <Button buttonClass="btn-warning" buttonType="link" buttonUrl="/">
          Edit
        </Button>{" "}
        <Button
          buttonClass="btn-danger"
          buttonType="button"
          handleAction={() => props.handleDelete(item)}
        >
          Delete
        </Button>
      </td>
    </tr>
  ));
}

const List = props => {
  const { items, keys } = props;
  return (
    <div className="text-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {excludeKeys(keys).map(key => (
              <th scope="col" key={key}>
                {capitalize(key)}
              </th>
            ))}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{listBody(items, keys, props)}</tbody>
      </table>
    </div>
  );
};

export default List;
