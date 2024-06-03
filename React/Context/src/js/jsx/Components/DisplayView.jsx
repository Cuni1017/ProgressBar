import React, { Component } from "react";
import CounterContext from "../Contexts/CounterContext.jsx";
import enhanced from "../HOC/enhanced.jsx";

class DisplayView extends Component {
  render() {
    console.log(this.props);
    const { counter } = this.props;

    return <p>Counter: {counter}</p>;
  }
}

// export default DisplayView;

const EnhancedDisplayView = enhanced(DisplayView, CounterContext);

export default EnhancedDisplayView;
