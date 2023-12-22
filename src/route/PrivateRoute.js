import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ exact, component: Component, allowedRoles, ...rest }) => {
  const isAuthenticated = localStorage.getItem("userRole");
  const hasRequiredRoles = () => {
    if (!allowedRoles || allowedRoles.length === 0) {
      return true;
    }

    const userRoles = isAuthenticated ? JSON.parse(localStorage.getItem("userRole")) : [];
    return allowedRoles.some(userRole => userRoles.includes(userRole));
  };
  
  return (
    <Route
      exact={exact ? true : false}
      {...rest}
      render={(props) =>
        isAuthenticated && hasRequiredRoles() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={`/auth-login`} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default PrivateRoute;
