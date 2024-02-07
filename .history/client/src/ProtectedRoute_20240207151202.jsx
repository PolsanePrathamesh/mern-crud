import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { userContext } from "../context/userContext";

export function ProtectedRoute({ element, ...rest }) {
  const { user } = useContext(userContext);

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" replace />}
    />
  );
}
ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired // Validate that 'element' is a React element and required
    // Add other prop validations as needed
  };