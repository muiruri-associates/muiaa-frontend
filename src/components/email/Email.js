import React from "react";
import PropTypes from "prop-types";

EmailWrapper.propTypes = {
  children: PropTypes.any
}

export const EmailWrapper = ({ ...props }) => {
  return (
    <table className="email-wraper">
      <tbody>
        <tr>
          <td className="py-5">{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
};
EmailHeader.propTypes = {
  children: PropTypes.any
}
export const EmailHeader = ({ ...props }) => {
  return (
    <table className="email-header">
      <tbody>
        <tr>
          <td className="text-center pb-4">{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const EmailBody = ({ centered, ...props }) => {
  return (
    <table className={`email-body ${centered ? "text-center" : ""}`}>
      <tbody>{props.children}</tbody>
    </table>
  );
};

EmailBody.propTypes = {
  centered: PropTypes.any,
  children: PropTypes.node
}

export const EmailBodyContent = ({ className, ...props }) => {
  return (
    <tr>
      <td className={`${className ? className : ""}`}>{props.children}</td>
    </tr>
  );
};

EmailBodyContent.propTypes = {
  className: PropTypes.any,
  children: PropTypes.node
}

export const EmailFooter = ({ ...props }) => {
  return (
    <table className="email-footer">
      <tbody>
        <tr>
          <td className="text-center pt-4">{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
};
EmailFooter.propTypes = {
  children: PropTypes.node
}
