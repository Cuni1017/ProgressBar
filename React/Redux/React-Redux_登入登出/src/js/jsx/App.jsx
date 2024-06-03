import React, { Component } from "react";
import Profile from "./Profile.jsx";

// npm install @reduxjs/toolkit react-redux redux
// 首先需要引入configureStore和Provider
// 寫需要的slice
// 新增一個store.js用configureStore創建store存入slice
// useSelector取值, useDispatch取slice寫的方法

// store 可以寫另一個store.js，這邊寫在這
// store.js裡要放需要的slice，然後存入reducer
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "../store/userSlice";

// 引入slice 存入store
const store = configureStore({
  reducer: {
    // key: value
    user: userSlice,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      // 將要提供的Component以Provider包起來傳入store
      <Provider store={store}>
        <div>
          <Profile />
        </div>
      </Provider>
    );
  };
}

export default App;
