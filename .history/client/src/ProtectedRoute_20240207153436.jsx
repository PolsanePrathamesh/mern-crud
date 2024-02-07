// ProtectedRoute.js
import { Route, Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/userContext";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
