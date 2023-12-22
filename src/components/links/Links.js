import React from "react";
import Icon from "../icon/Icon";
import classNames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

LinkItem.propTypes = {
  tag: PropTypes.string, // You can specify the expected type
  link: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node, // If you&apos;re using props.children
};

export const LinkItem = ({ tag, link, icon, text, children, ...props }) => {
  return (
    <li>
      {tag !== 'a' ? (
        <Link to={process.env.PUBLIC_URL + link} {...props}>
          {icon ? <Icon name={icon} /> : null} <span>{text || children}</span>
        </Link>
      ) : (
        <a href={process.env.PUBLIC_URL + link} onClick={(ev) => ev.preventDefault()}>
          {icon ? <Icon name={icon} /> : null} <span>{text || children}</span>
        </a>
      )}
    </li>
  );
};

LinkList.propTypes = {
  opt: PropTypes.any,
  className: PropTypes.string, // Add PropTypes validation for className
  children: PropTypes.any,
};

export const LinkList = ({ opt, className, children }) => {
  const listClasses = classNames({
    'link-list': !opt,
    'link-list-opt': opt,
    [`${className}`]: className, // Include className in the classNames object
  });
  return <ul className={listClasses}>{children}</ul>;
};

