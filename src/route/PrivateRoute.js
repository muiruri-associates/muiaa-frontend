import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ exact, component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("userRole"); // Check if user is authenticated
  
  return (
    <Route
      exact={exact ? true : false}
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={`${process.env.PUBLIC_URL}/auth-login`} />
        )
      }
    />
  );
};

export default PrivateRoute;