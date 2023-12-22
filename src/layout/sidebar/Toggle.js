import PropTypes from "prop-types";
import React from "react";
import Icon from "../../components/icon/Icon";

const Toggle = ({ className, click, icon }) => {
  return (
    <a
      href="#toggle"
      className={className ? className : ""}
      onClick={(ev) => {
        ev.preventDefault();
        click(ev);
      }}
    >
      <Icon name={icon} />
    </a>
  );
};

Toggle.propTypes = {
  className: PropTypes.any,
  click: PropTypes.func,
  icon: PropTypes.any,
};
export default Toggle;
