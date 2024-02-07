import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { userContext } from '../context/userContext';

const withAuth = (Component) => {
  return (props) => {
    const { user } = userContext();

    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
