import React from "react";
import { Link as Enlace } from "react-router-dom";

const Link = props => {
  return (
    <li className="nav-item text-uppercase mr-3">
      <Enlace to="/" className="nav-link">
        {props.item.name}
      </Enlace>
    </li>
  );
};

export default Link;
