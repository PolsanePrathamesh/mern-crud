// ProtectedRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { userContext } from "../context/userContext";

function ProtectedRoute({ element, ...rest }) {
  const { user } = userContext();

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" replace />}
    />
  );
}

export default ProtectedRoute;
