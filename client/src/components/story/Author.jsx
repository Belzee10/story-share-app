import React from "react";

const Author = props => {
  const { children } = props;
  return <React.Fragment>{children}</React.Fragment>;
};

export default Author;
