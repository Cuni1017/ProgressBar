import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";

import DisplayView from "./components/displayView";
import Counter from "./components/counter";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <DisplayView />
        <Counter />
      </div>
    </Provider>
  );
};
export default App;
