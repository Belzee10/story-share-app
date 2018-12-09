import React from "react";

import Like from "./Like";

const Likes = props => {
  const { likes } = props;
  return (
    <div className="likes d-block mt-2">
      <Like /> {likes} {likes === 1 ? <span> Like</span> : <span>Likes</span>}
    </div>
  );
};

export default Likes;
