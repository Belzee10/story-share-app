import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/StoryShare-logo.png";

const Logo = props => {
  return <img src={logo} height={props.height} alt="StoryShare" />;
};

Logo.propTypes = {
  height: PropTypes.string.isRequired
};

export default Logo;
