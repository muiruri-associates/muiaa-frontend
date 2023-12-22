import PropTypes from "prop-types"
import React from "react";
import Icon from "../icon/Icon";
import { UncontrolledTooltip } from "reactstrap";

const TooltipComponent = ({ iconClass, icon, id, direction, text, containerClassName, ...props }) => {
  return (
    <React.Fragment>
      {props.tag ? (
        <props.tag className={containerClassName} id={id}>
          {" "}
          <Icon className={`${iconClass ? iconClass : ""}`} name={icon}></Icon>
        </props.tag>
      ) : (
        <Icon className={`${iconClass ? iconClass : ""}`} name={icon} id={id}></Icon>
      )}
      <UncontrolledTooltip autohide={false} placement={direction} target={id}>
        {text}
      </UncontrolledTooltip>
    </React.Fragment>
  );
};

TooltipComponent.propTypes = {
  containerClassName: PropTypes.any,
  direction: PropTypes.any,
  icon: PropTypes.any,
  iconClass: PropTypes.any,
  id: PropTypes.any,
  text: PropTypes.any,
  tag: PropTypes.string
}
export default TooltipComponent;
