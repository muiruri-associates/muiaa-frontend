import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";
import { Card } from "reactstrap";

export const DataTable = ({ className, ...props }) => {
  return (
    <Card className={`card-bordered ${className ? className : ""}`}>
      <div className="card-inner-group">{props.children}</div>
    </Card>
  );
};

DataTable.propTypes = {
  bodyClassName: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.any,
  title: PropTypes.any,
};

export const DataTableTitle = ({ ...props }) => {
  return (
    <div className="card-inner position-relative card-tools-toggle">
      <div className="card-title-group">{props.children}</div>
    </div>
  );
};

DataTableTitle.propTypes = {
  children: PropTypes.any,
};

export const DataTableBody = ({ compact, className, bodyclass, ...props }) => {
  return (
    <div className={`card-inner p-0 ${className ? className : ""}`}>
      <div
        className={`nk-tb-list nk-tb-ulist ${bodyclass ? bodyclass : ""} ${
          compact ? "is-compact" : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

DataTableBody.propTypes = {
  bodyclass: PropTypes.any,
  className: PropTypes.any,
  compact: PropTypes.any,
  children: PropTypes.any,
};

export const DataTableHead = ({ ...props }) => {
  return <div className="nk-tb-item nk-tb-head">{props.children}</div>;
};

DataTableHead.propTypes = {
  children: PropTypes.any,
};

export const DataTableRow = ({ className, size, ...props }) => {
  const rowClass = classNames({
    "nk-tb-col": true,
    [`${className}`]: className,
    [`tb-col-${size}`]: size,
  });
  return <div className={rowClass}>{props.children}</div>;
};

DataTableRow.propTypes = {
  className: PropTypes.any,
  size: PropTypes.any,
  children: PropTypes.any,
};

export const DataTableItem = ({ className, ...props }) => {
  return (
    <div className={`nk-tb-item ${className ? className : ""}`}>{props.children}</div>
  );
};

DataTableItem.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
};
