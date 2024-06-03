import React, { Component } from "react";
import CounterContext from "../Contexts/CounterContext.jsx";
import enhanced from "../HOC/enhanced.jsx";

class Button extends Component {
  render() {
    // console.log(this.props);
    const { number, handler } = this.props;
    // const { handler } = this.context;

    return (
      <div>
        <button
          type="button"
          onClick={() => {
            handler(number);
          }}
        >
          {number}
        </button>
      </div>
    );
  }
}

// export default Button;

const EnhancedButton = enhanced(Button, CounterContext);

export default EnhancedButton;
