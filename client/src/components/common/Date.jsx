import React from "react";
import PropTypes from "prop-types";

import Moment from "react-moment";

const Date = props => {
  const { date, style } = props;

  return (
    <Moment format="MMM D, Y" style={style}>
      {date}
    </Moment>
  );
};

Date.propTypes = {
  date: PropTypes.string.isRequired,
  style: PropTypes.object
};

Date.defaultProps = {
  style: {
    color: "#a1a1a1",
    fontSize: "14px"
  }
};

export default Date;
