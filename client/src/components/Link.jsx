import React from "react";

const Link = props => {
  return (
    <li className="nav-item text-uppercase mr-3">
      <a className="nav-link" href="#">
        {props.link.name}
      </a>
    </li>
  );
};

export default Link;
