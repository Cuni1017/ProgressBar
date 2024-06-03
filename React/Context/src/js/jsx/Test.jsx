import React, { Component } from "react";

// 自己練習

const CounterContext = React.createContext();

class DisplayView extends Component {
  static contextType = CounterContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { counter } = this.context;
    // const counter = 0;
    // console.log(this.context);
    return <p>Counter: {counter}</p>;
  }
}

class Button extends Component {
  static contextType = CounterContext;
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.context);
    const { number } = this.props;
    const { handler } = this.context;
    return (
      <button
        type="button"
        onClick={() => {
          handler(number);
          //   this.handler(1);
        }}
      >
        {number}
      </button>
    );
  }
}

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handler = (num) => {
    this.setState({ counter: this.state.counter + num });
  };

  getContextValue = () => {
    return {
      counter: this.state.counter,
      handler: this.handler,
    };
  };

  render() {
    return (
      <CounterContext.Provider value={this.getContextValue()}>
        <DisplayView />
        <Button number={+1} />
        <Button number={-1} />
      </CounterContext.Provider>
    );
  }
}

export default Test;
