import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { userContext } from "./userContext";

export function ProtectedRoute({ element, ...rest }) {
  const { user } = useContext(userContext);

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" replace />}
    />
  );
}
