import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ exact, component: Component, allowedRoles, ...rest }) => {
  const isAuthenticated = localStorage.getItem("userRole"); // Check if user is authenticated

  const hasRequiredRoles = () => {
    if (!allowedRoles || allowedRoles.length === 0) {
      return true; // No specific roles required, allow access
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
          <Redirect to={`/errors/504-modern`} />
        )
      }
    />
  );
};

export default PrivateRoute;
