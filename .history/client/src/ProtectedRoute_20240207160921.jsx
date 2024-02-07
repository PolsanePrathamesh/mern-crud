// ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext"; // Import UserContext
import { useContext, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {}, []);


import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext, useEffect } from "react";

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    // Optionally perform additional actions or side effects
  }, []);

  // Check if the user is authenticated and has a name property
  const isAuthenticated = user && user.name;

  // Render the Outlet if the user is authenticated, otherwise redirect to the login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

  return user.name ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
