// ProtectedRoute.js
import { Route, Navigate,Outlet  } from "react-router-dom";
import { useUserContext } from "../context/userContext";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useUserContext();

  
};

export default ProtectedRoute;