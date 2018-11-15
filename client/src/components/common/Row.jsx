import React from "react";

import Button from "../common/Button";

const Row = props => {
  const { item, excludeKeys, index } = props;
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      {excludeKeys.map(key => (
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
  );
};

export default Row;
