import PropTypes from "prop-types";
import React from "react";

const UserGroup = ({ className, ...props }) => {
  return <div className={`user-avatar-group ${className ? className : ""}`}>{props.children}</div>;
};

UserGroup.propTypes = {
  className: PropTypes.any,
  children: PropTypes.node
}

export default UserGroup;
