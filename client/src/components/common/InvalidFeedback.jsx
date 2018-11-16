import React from "react";
import PropTypes from "prop-types";

const InvalidFeedback = props => {
  const { children } = props;
  return <div className="invalid-feedback">{children}</div>;
};

InvalidFeedback.propTypes = {
  children: PropTypes.string.isRequired
};

export default InvalidFeedback;
