// ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext"; // Import UserContext
import { useContext, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user, "pr");
  }, []);

  return user.name ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
