import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn");
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    console.log("here");
    return <Navigate to="/login" />;
  }
  // return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
