import React, { Component } from "react";
import ControlPanel from "./ControlPanel.jsx";

import { Provider, connect } from "react-redux";
import store from "../redux/store";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    // console.log(this.props);
    return (
      <div>
        Count:{this.props.counter.count}
        <br />
        <ControlPanel />
      </div>
    );
  };
}

import { Connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(App);

// export default App;
