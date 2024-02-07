import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

const withAuth = (Component) => {
  return (props) => {
    const { user } = useUserContext();

    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
