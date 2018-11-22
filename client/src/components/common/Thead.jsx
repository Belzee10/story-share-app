import React from "react";
import PropTypes from "prop-types";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}

const Thead = props => {
  const { excludeKeys } = props;
  return (
    <tr>
      <th scope="col">#</th>
      {excludeKeys.map(key => (
        <th scope="col" key={key}>
          {capitalize(key)}
        </th>
      ))}
      <th scope="col">Actions</th>
    </tr>
  );
};

Thead.propTypes = {
  excludeKeys: PropTypes.func.isRequired
};

export default Thead;
