import React from "react";
import PropTypes from "prop-types";

function avatar(props) {
  const { image, dimensions, alt } = props;
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
}

function noAvatar(props) {
  const { dimensions, alt } = props;
  dimensions.lineHeight = dimensions.width;
  return (
    <div style={dimensions} className="no-avatar">
      {alt.charAt(0).toUpperCase()}
    </div>
  );
}

const Avatar = props => {
  return props.image ? avatar(props) : noAvatar(props);
};

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
  dimensions: PropTypes.object.isRequired
};

export default Avatar;
