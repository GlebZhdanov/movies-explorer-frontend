import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRouteVerification = (props) => {
  return (
    !props.loginVerification ? props.children : <Redirect to="/movies" />
  );
}

export default ProtectedRouteVerification;
