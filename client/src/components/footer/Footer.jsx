import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>
          Made with{" "}
          <FontAwesomeIcon
            style={{ color: "#ff0a46", fontSize: "13px" }}
            icon="heart"
          />{" "}
          by Ivan{" "}
          <a target="blank" href="https://twitter.com/belzee5">
            @belzee5
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
