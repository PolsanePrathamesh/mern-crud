import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext, useEffect } from "react";

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    // Optionally perform additional actions or side effects
  }, []);

  // Check if the user is authenticated and has a name property
  const isAuthenticated = localStorage.getItem("isLoggedIn");
  console.log()

  // Render the Outlet if the user is authenticated, otherwise redirect to the login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
