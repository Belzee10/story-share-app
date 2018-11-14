import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = props => {
  const { buttonType, buttonClass, buttonUrl } = props;
  const btnClass = `btn ${buttonClass} btn-sm`;
  const children = props.children;

  if (buttonType === "button" || buttonType === "submit") {
    return (
      <button
        type={buttonType}
        className={btnClass}
        onClick={props.handleAction}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link to={buttonUrl} className={btnClass}>
        {children}
      </Link>
    );
  }
};

Button.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired, //submit, button, link
  children: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string,
  handleAction: PropTypes.func
};

export default Button;
