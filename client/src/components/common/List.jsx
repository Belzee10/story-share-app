import React from "react";
import Button from "../common/Button";

const List = props => {
  const { items } = props;
  // const array = [];
  // array.keys;
  return (
    <div className="text-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Stories</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>stories</td>
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
