import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

const Head = ({ ...props }) => {
  return (
    <Helmet>
      <title>{props.title ? props.title + " | " : null} DashLite React Admin Template</title>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string
}

export default Head;
