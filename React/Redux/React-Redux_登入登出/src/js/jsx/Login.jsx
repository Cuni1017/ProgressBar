import React, { Component } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../store/userSlice";

function Login() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const handleLogout = () => {
    dispatch(setLogout());
  };

  const { name, age, email } = state.user.profile;
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Email:{email}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

// class Login extends Component {
//   constructor(props) {
//     super(props);
//   }

//   handleLogout = () => {};

//   render = () => {
//     return (
//       <div>
//         <p>Name:</p>
//         <p>Age:</p>
//         <p>Email:</p>
//         <button onClick={this.handleLogout}>Log Out</button>
//       </div>
//     );
//   };
// }

export default Login;
