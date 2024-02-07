// ProtectedRoute.js
import { Route, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext"; // Import UserContext
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const { user, setUser, logout } = useContext(UserContext);so
  con

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
