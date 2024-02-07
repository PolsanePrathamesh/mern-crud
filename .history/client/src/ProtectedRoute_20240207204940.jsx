import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext, useEffect } from "react";

const ProtectedRoute = () => {



  const isAuthenticated = localStorage.getItem("isLoggedIn");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
