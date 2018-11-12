import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const buttonClass = `btn ${props.buttonClass} btn-sm`;
  const children = props.children;
  return (
    <button type={props.buttonType} className={buttonClass}>
      {children}
    </button>
  );
};

Button.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired
};

export default Button;
