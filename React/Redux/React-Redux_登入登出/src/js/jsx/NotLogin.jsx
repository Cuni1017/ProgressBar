import React, { Component, useRef } from "react";

// 引入slice裡的action
import { setLogin } from "../store/userSlice";
import { useDispatch } from "react-redux"; //useDispatch是讓你去使用我們在redux定義的function

// 利用useRef取得input值
const NotLogin = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const handleLogin = () => {
    // console.log(nameRef);
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
    <div>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          placeholder="name"
          name="name"
          id="name"
          ref={nameRef}
        />
      </label>
      <br />
      <label htmlFor="age">
        Age:
        <input type="text" placeholder="age" name="age" id="age" ref={ageRef} />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          ref={emailRef}
        />
      </label>
      <br />
      <button onClick={handleLogin}>LogIn</button>
    </div>
  );
};

// class NotLogin extends Component {
//   constructor(props) {
//     super(props);
//   }

//   handleLogin = () => {};

//   render = () => {
//     return (
//       <div>
//         <label htmlFor="name">
//           Name:
//           <input type="text" placeholder="name" name="name" id="name" />
//         </label>
//         <br />
//         <label htmlFor="age">
//           Age:
//           <input type="text" placeholder="age" name="age" id="age" />
//         </label>
//         <br />
//         <label htmlFor="email">
//           Email:
//           <input type="text" placeholder="email" name="email" id="email" />
//         </label>
//         <br />
//         <button onClick={this.handleLogin}>LogIn</button>
//       </div>
//     );
//   };
// }

export default NotLogin;
