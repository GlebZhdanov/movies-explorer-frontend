// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
//
// const ProtectedRoute = ({ component: Component, ...props }) => {
//   return (
//     <Route>
//       {() => (props.loginVerification ? <Component {...props} /> : <Redirect to='/' />)}
//     </Route>
//   );
// };
//
// export default ProtectedRoute;


import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  return (
    props.loginVerification ? props.children : <Redirect to="/" />
  );
}

export default ProtectedRoute;
