import React from "react";
import PropTypes from "prop-types";

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

Row.propTypes = {
  item: PropTypes.object.isRequired,
  excludeKeys: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Row;
