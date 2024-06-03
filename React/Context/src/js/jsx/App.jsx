import React, { Component } from "react";
import CounterContext from "./Contexts/CounterContext.jsx";
import Button from "./Components/Button.jsx";
import DisplayView from "./Components/DisplayView.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handler = (number) => {
    this.setState({ counter: this.state.counter + number });
  };

  getContextValue = () => {
    return {
      state: this.state,
      handler: this.handler,
    };
  };

  render() {
    return (
      <div>
        {/* 用Context.Provider包住他，value會直接對應到Component裡有寫static contextType = Context的this.context */}
        <CounterContext.Provider value={this.getContextValue()}>
          <DisplayView counter={this.state.counter} />
          <Button number={1} />
          <Button number={-1} />
        </CounterContext.Provider>
      </div>
    );
  }
}

export default App;
