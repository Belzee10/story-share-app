import React from "react";

const Button = props => {
  const buttonClass = `btn ${props.buttonClass}`;
  return (
    <button type={props.buttonType} className={buttonClass}>
      {props.children}
    </button>
  );
};

export default Button;
