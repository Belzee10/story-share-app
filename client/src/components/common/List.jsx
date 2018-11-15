import React from "react";
import Row from "./Row";
import Thead from "./Thead";

// exclude "_id", "__v", "created_at", "password", "content", "categories"
function excludeKeys(keys) {
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    if (
      keys[i] !== "_id" &&
      keys[i] !== "__v" &&
      keys[i] !== "created_at" &&
      keys[i] !== "password" &&
      keys[i] !== "content" &&
      keys[i] !== "categories"
    ) {
      result.push(keys[i]);
    }
  }
  return result;
}

// function listBody(items, keys, props) {
//   if (!items.length) {
//     return (
//       <tr>
//         <td colSpan={excludeKeys(keys).length + 2}>No items found :(</td>
//       </tr>
//     );
//   }
//   return items.map((item, index) => (

//   ));
// }

const List = props => {
  const { items, keys } = props;
  return (
    <div className="text-center">
      <table className="table">
        <thead>
          <Thead excludeKeys={excludeKeys(keys)} />
        </thead>
        <tbody>
          {items.map((item, index) => (
            <Row
              item={item}
              excludeKeys={excludeKeys(keys)}
              index={index}
              key={item._id}
              handleDelete={props.handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
