import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user, permissions }) => {
  console.log(user);
  console.log(permissions);

  const getPermisson = () => {
    return user.permission.find((permission) =>
      permissions.includes(permission)
    )
      ? true
      : false;
  };

  console.log("---");
  console.log(getPermisson());
  console.log("---");

  // console.log("請先登入");
  return !user.isLogin || !getPermisson() ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
