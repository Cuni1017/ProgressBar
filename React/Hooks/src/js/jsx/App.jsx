import React, { Component, useState, useContext, useEffect } from "react";

// Hooks #fC = functional Component #cC = Class Component

// #useState 讓 functional Component 也能擁有state
// useState只能在function Component且最上面宣告

// #useContext 不用傳遞state給子孫，只要Provider有包括到他就可以使用傳進Provider的value
// 需要建立一個const Context名稱 = React.createContext()
// 要使用的子孫在自己裡面useContext(Context名稱)
// 使用context.Provider的Tag包住要使用的子孫

// #useEffect 使 fC 也能有 cC 的DidMount, DidUpdate和WillUnMount功能
// useEffect()內可以放兩個參數，第一個為每次更新後執行，第二個為一個Array[]，如果Array內
// 的值沒有更動就不會執行第一個參數(Function)，就像是cC中用prevProps, prevState來確認一樣，
// 用於最佳化，不讓他重新Render
//
const CounterContext = React.createContext();
const SetCounterContext = React.createContext();

const Button = (props) => {
  const { str } = props;
  const handler = useContext(SetCounterContext);
  return <button onClick={handler}>{str}</button>;
};

const DisPlayView = () => {
  const counter = useContext(CounterContext); //接CounterContext.Provider傳來的Value值
  //   const handler = useContext(SetCounterContext);
  //   console.log(counter);
  //   console.log(handler);
  return <p>Counter: {counter}</p>;
};

// const

const App = () => {
  const [counter, setCounter] = useState(100);
  const [test, setTest] = useState(100);

  useEffect(() => {
    //此處就像class Component的componenDidmount+componentDidUpdate
    // handler通常會宣告在這個function內
    document.title = `You Clicked ${counter} times`;
    console.log("App useEffect");

    // const subscription = props.source.subscribe();

    //可選的return function 會在每次useEffect執行後執行，可用來清除APIsubscribe
    return () => {
      //此處就像class Component的componentWillUnmount

      // Clean up the subscription
      // subscription.unsubscribe();

      console.log("App useEffect return");
    };
  }, [test, counter]); //這裡的第二個參數可以放一個Array，只要Array裡的值有變化的話才會重新render
  // 如果上面的是一個空的Array，則useEffect只會執行第一次，因為沒有值更變。

  return (
    <SetCounterContext.Provider
      value={() => {
        setCounter(counter + 1);
      }}
    >
      <CounterContext.Provider value={counter}>
        <DisPlayView />
        <Button str={"+"} />
      </CounterContext.Provider>
    </SetCounterContext.Provider>
  );
};

export default App;
