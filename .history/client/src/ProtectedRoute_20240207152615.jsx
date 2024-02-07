import React from "react";
import { useUserContext } from "../context/userContext";
import { Route } from "react-router-dom";

function ProtectedRoute({ render, ...rest }) {
  const { user } = useUserContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? render(props) : null;
      }}
    />
  );
}

export default ProtectedRoute;
