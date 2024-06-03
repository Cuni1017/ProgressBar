import React from "react";
import Login from "./Login";
import NotLogin from "./NotLogin";

import { useSelector } from "react-redux";

const Profile = () => {
  const state = useSelector((state) => state);
  const { user } = state;
  //   console.log(state);
  return <div>{user.profile.isLogin ? <Login /> : <NotLogin />}</div>;
};

export default Profile;
