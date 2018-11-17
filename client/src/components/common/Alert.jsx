import React from "react";

const Alert = props => {
  const { children, alertType } = props;
  return (
    <div className={`alert alert-${alertType}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
