import PropTypes from "prop-types"
import React from "react";
import classnames from "classnames";

export const Col = ({ sm, lg, md, xxl, size, className, ...props }) => {
  var classNames = classnames({
    [`col-sm-${sm}`]: sm,
    [`col-lg-${lg}`]: lg,
    [`col-md-${md}`]: md,
    [`col-xxl-${xxl}`]: xxl,
    [`col-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={classNames}>{props.children}</div>;
};

Col.propTypes = {
  className: PropTypes.any,
  lg: PropTypes.any,
  md: PropTypes.any,
  size: PropTypes.any,
  sm: PropTypes.any,
  xxl: PropTypes.any,
  children: PropTypes.any
}
export const Row = ({ className, ...props }) => {
  const rowClass = classnames({
    row: true,
    [`${className}`]: className,
  });
  return <div className={rowClass}>{props.children}</div>;
};

Row.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any
}
