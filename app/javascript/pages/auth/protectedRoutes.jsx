import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const useAuth = () => {
  const user = { loggedIn: false };
  if (JSON.parse(localStorage.getItem('current_user'))) {
    user.loggedIn = true;
  }
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return (

    isAuth ? <Outlet /> : <Navigate to="/" />

  );
};

export default ProtectedRoutes;
