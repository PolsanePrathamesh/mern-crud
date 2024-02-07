// ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

function ProtectedRoute({ element, ...rest }) {
  const { user } = useUserContext();

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" replace />}
    />
  );
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  element: propTypes.element.isRequired, // Validate that 'element' is a React element and required
  // Add other prop validations as needed
};
