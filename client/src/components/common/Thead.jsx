import React from "react";

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

export default Thead;
