import React from "react";
import Button from "../common/Button";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}

const List = props => {
  const { items, keys } = props;
  return (
    <div className="text-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {keys.map(key => (
              <th scope="col" key={key}>
                {capitalize(key)}
              </th>
            ))}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td />
              <td>
                <Button
                  buttonClass="btn-warning"
                  buttonType="link"
                  buttonUrl="/"
                >
                  Edit
                </Button>{" "}
                <Button
                  buttonClass="btn-danger"
                  buttonType="link"
                  buttonUrl="/"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
