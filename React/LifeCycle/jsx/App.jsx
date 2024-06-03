import React, { Component } from "react";
import ReactDOM from "react-dom";
import Content from "./Content.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("App: constructor");
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("App: getDerivedStateFromProps");

    return null;
  };

  componentDidMount = () => {
    console.log("App: componentDidMount");
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("App: shouldComponentUpdate");

    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("App: getSnapshotBeforeUpdate");

    return 1;
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("App: componentDidUpdate");
    console.log(snapshot);
  };

  componentWillUnmount = () => {
    console.log("App: componentWillUnmount");
  };

  plusCountHandler = () => {
    const count = this.state.count;
    this.setState(
      {
        count: count + 1,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render = () => {
    console.log("App: render");
    return (
      <div>
        {this.state.count > 5 ? "" : <Content />}
        <p>Progressbar TW</p>
        <p>count: {this.state.count}</p>
        <button type="button" onClick={this.plusCountHandler}>
          click me to plus 1
        </button>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById("app"));
