// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const ProtectedRoute = ({ component: Component, ...rest }) => { // Use 'component' prop instead of 'element'
  const { user } = useUserContext();

  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
