import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../Redux/userSlice";

const Login = () => {
  const state = useSelector((state) => state);
  const { name, age, email } = state.user.profile;

  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(setLogout());
  };

  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Email:{email}</p>
      <button onClick={LogoutHandler}>Log out</button>
    </div>
  );
};

export default Login;
