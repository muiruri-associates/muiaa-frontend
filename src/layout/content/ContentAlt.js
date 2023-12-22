import React from "react";
import PropTypes from "prop-types";

const ContentAlt = ({ ...props }) => {
  return (
    <div className="nk-content p-0">
      <div className="nk-content-inner">
        <div className="nk-content-body">
          {!props.page ? props.children : null}
          {props.page === "component" ? (
            <div className="components-preview wide-md mx-auto">{props.children}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

ContentAlt.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default ContentAlt;
