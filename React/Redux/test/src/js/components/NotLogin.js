import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../Redux/userSlice";

const NotLogin = () => {
  const nameRef = React.createRef();
  const ageRef = React.createRef();
  const emailRef = React.createRef();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const LoginHandler = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;
    const emailValue = emailRef.current.value;
    dispatch(
      setLogin({
        name: nameValue,
        age: ageValue,
        email: emailValue,
      })
    );
  };

  return (
    <form>
      <label htmlFor="name">
        名稱:
        <input type="text" name="name" placeholder="name" ref={nameRef} />
      </label>
      <br />
      <label htmlFor="age">
        年紀:
        <input type="text" name="age" placeholder="age" ref={ageRef} />
      </label>
      <br />
      <label htmlFor="email">
        信箱:
        <input type="text" name="email" placeholder="email" ref={emailRef} />
      </label>
      <br />
      <button onClick={LoginHandler}>Log In</button>
    </form>
  );
};

export default NotLogin;
