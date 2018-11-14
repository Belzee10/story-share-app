import React from "react";
import PropTypes from "prop-types";

const Count = props => {
  const children = props.children;
  return (
    <span className="count">
      {props.value} {children}
    </span>
  );
};

Count.propTypes = {
  value: PropTypes.number.isRequired,
  children: PropTypes.string
};

export default Count;
