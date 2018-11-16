import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../common/Button";
import Date from "../common/Date";

const dateStyle = {
  color: "#212529",
  fontSize: "1rem"
};

function cellType(item, key) {
  switch (key) {
    case "publishDate":
      return <Date date={item[key]} style={dateStyle} />;
    case "comments":
      return (
        <React.Fragment>
          {item[key].length} <FontAwesomeIcon icon="comments" />
        </React.Fragment>
      );
    case "author":
      return item[key].fullName;
    default:
      return item[key];
  }
}

const Row = props => {
  const { item, excludeKeys, index } = props;
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      {excludeKeys.map(key => (
        <td key={key}>{cellType(item, key)}</td>
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
