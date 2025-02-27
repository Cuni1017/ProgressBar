// import css from "../scss/main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

import { Provider, connect } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
