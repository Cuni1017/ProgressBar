import React, { Component } from "react";
import Login from "./Login.jsx";
import NotLogin from "./NotLogin.jsx";

import { useSelector } from "react-redux"; //useSelector是取得我們在redux定義的state

const Profile = () => {
  // 記得要先將此元件用Provider包起來，且傳入store

  // 用useSelector拿store裡的reducer
  //   const reducer = useSelector((reducer) => reducer);
  //   console.log(reducer.user);

  const state = useSelector((state) => state.user);
  //   console.log(state);
  return (
    <div
      style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
    >
      {state.profile.login ? <Login /> : <NotLogin />}
    </div>
  );
};

export default Profile;
