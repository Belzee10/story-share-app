import React from "react";

function getTitle(title) {
  return title.charAt(0).toUpperCase() + title.slice(1, title.length);
}

const Title = props => {
  const { children } = props;
  return <React.Fragment>{getTitle(children)}</React.Fragment>;
};

export default Title;
