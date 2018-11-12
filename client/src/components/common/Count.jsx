import React from "react";
import PropTypes from "prop-types";

const Count = props => {
  return <span>{props.value}</span>;
};

Count.propTypes = {
  value: PropTypes.number.isRequired
};

export default Count;
