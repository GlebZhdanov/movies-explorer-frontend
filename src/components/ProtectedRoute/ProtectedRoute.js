import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  return (
    props.loginVerification ? props.children : <Redirect to="/" />
  );
}

export default ProtectedRoute;
