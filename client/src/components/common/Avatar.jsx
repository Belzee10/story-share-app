import React from "react";
import PropTypes from "prop-types";
// import { API_FILES_URL } from "../../config";

const Avatar = props => {
  const { image, alt, dimensions } = props;
  return (
    <div className="avatar">
      <img
        src={image}
        alt={alt}
        className="rounded-circle"
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
  dimensions: PropTypes.object.isRequired
};

export default Avatar;
