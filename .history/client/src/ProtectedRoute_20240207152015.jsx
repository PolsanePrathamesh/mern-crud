// ProtectedRoute.jsx
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { userContext } from "../context/userContext";

function ProtectedRoute({ element, ...rest }) {
  const { user } = useContext(userContext); // Use useContext hook to access context value

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" replace />}
    />
  );
}

export default ProtectedRoute;
