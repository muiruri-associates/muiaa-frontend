import PropTypes from "prop-types"
import React from "react";
import classNames from "classnames";

const Button = ({ color, size, className, outline, disabled, ...props }) => {
  const buttonClass = classNames({
    btn: true,
    [`btn-${color}`]: !outline,
    [`btn-outline-${color}`]: outline,
    [`btn-${size}`]: size,
    disabled: disabled,
    [`${className}`]: className,
  });
  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.any,
  color: PropTypes.any,
  disabled: PropTypes.any,
  outline: PropTypes.any,
  size: PropTypes.any,
  children: PropTypes.any
}
export default Button;
