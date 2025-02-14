import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {

  const isAuthenticated = localStorage.getItem("uid");

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/dashboard"} />
  );
};

export default AuthRoute;
