import PropTypes from "prop-types"
import React from "react";
import Icon from "../icon/Icon";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Block = ({ className, size, ...props }) => {
  const blockClass = classNames({
    "nk-block": true,
    [`nk-block-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={blockClass}>{props.children}</div>;
};

Block.propTypes = {
  className: PropTypes.any,
  size: PropTypes.any,
  children: PropTypes.any
}
export const BlockContent = ({ className, ...props }) => {
  const blockContentClass = classNames({
    "nk-block-content": true,
    [`${className}`]: className,
  });
  return <div className={blockContentClass}>{props.children}</div>;
};

BlockContent.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any
}

export const BlockBetween = ({ className, ...props }) => {
  return <div className={`nk-block-between ${className ? className : ""}`}>{props.children}</div>;
};

BlockBetween.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any
}

export const BlockHead = ({ className, size, wide, ...props }) => {
  const blockHeadClass = classNames({
    "nk-block-head": true,
    [`nk-block-head-${size}`]: size,
    [`wide-${wide}`]: wide,
    [`${className}`]: className,
  });
  return <div className={blockHeadClass}>{props.children}</div>;
};

BlockHead.propTypes = {
  className: PropTypes.any,
  size: PropTypes.any,
  wide: PropTypes.any,
  children: PropTypes.any
}
export const BlockHeadContent = ({ className, ...props }) => {
  return <div className={[`nk-block-head-content${className ? " " + className : ""}`]}>{props.children}</div>;
};

BlockHeadContent.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any
}
export const BlockTitle = ({ className, page, ...props }) => {
  const classes = [`nk-block-title ${page ? "page-title" : "title"}${className ? " " + className : ""}`];
  return (
    <React.Fragment>
      {!props.tag ? (
        <h3 className={classes}>{props.children}</h3>
      ) : (
        <props.tag className={classes}>{props.children}</props.tag>
      )}
    </React.Fragment>
  );
};

BlockTitle.propTypes = {
  className: PropTypes.any,
  page: PropTypes.any,
  children: PropTypes.any,
  tag: PropTypes.string
}
export const BlockDes = ({ className, ...props }) => {
  const classes = [`nk-block-des${className ? " " + className : ""}`];
  return <div className={classes}>{props.children}</div>;
};

BlockDes.propTypes = {
  className: PropTypes.any,
  page: PropTypes.any,
  children: PropTypes.any
}

export const BackTo = ({ className, link, icon, ...props }) => {
  const classes = [`back-to${className ? " " + className : ""}`];
  return (
    <div className="nk-block-head-sub">
      <Link className={classes} to={process.env.PUBLIC_URL + link}>
        <Icon name={icon} />
        <span>{props.children}</span>
      </Link>
    </div>
  );
};

BackTo.propTypes = {
  className: PropTypes.any,
  icon: PropTypes.any,
  link: PropTypes.any,
  children: PropTypes.any
}
