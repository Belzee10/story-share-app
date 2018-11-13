import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = props => {
  const { buttonType, buttonClass, buttonUrl } = props;
  const btnClass = `btn ${buttonClass} btn-sm`;
  const children = props.children;

  const button = (
    <button type={buttonType} className={btnClass}>
      {children}
    </button>
  );

  const link = (
    <Link to={buttonUrl} type={buttonType} className={btnClass}>
      {children}
    </Link>
  );

  return buttonType === "button" ? button : link;
};

Button.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default Button;
