import React, { useContext, useReducer } from "react";

// Hooks #fC = functional Component #cC = Class Component

// #useReducer 或 useState 通常只會選擇其中一種，當需要複雜的 state 邏輯而且包括多個子數值或下一個 state 依賴之前的 state，useReducer 會比 useState 更適用。

const CounterContext = React.createContext();
const SetCounterContext = React.createContext();

const Button = (props) => {
  const { str } = props;
  const handler = useContext(SetCounterContext);
  return <button onClick={handler}>{str}</button>;
};

const DisPlayView = () => {
  const state = useContext(CounterContext);
  return <p>Counter: {state.count}</p>;
};

const initialState = { count: 0 };

function MyReducer(state, action) {
  console.log(state);
  console.log(action);
  //   switch (action.type) {
  //     case "increment":
  //       return { count: state.count + 1 };
  //     case "decrement":
  //       return { count: state.count - 1 };
  //     default:
  //       throw new Error();
  //   }
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const TestuseReducer = () => {
  const [count, dispatch] = useReducer(MyReducer, initialState);

  return (
    <SetCounterContext.Provider
      value={() => {
        dispatch("increment"); //會傳入reducer的action
      }}
    >
      <CounterContext.Provider value={count}>
        <DisPlayView />
        <Button str={"+"} />
      </CounterContext.Provider>
    </SetCounterContext.Provider>
  );
};

export default TestuseReducer;
