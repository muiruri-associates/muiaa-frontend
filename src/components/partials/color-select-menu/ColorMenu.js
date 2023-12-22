import PropTypes from "prop-types";
import React from "react";

export const ColorOptions = ({ value, label }) => {
  return (
    <div className="d-flex">
      <span className={`dot dot-${value} m-1`}></span>
      {label}
    </div>
  );
};

ColorOptions.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
};
