import React, { Component } from "react";

// let str = "Loading";

class LoadingView extends Component {
  constructor(props) {
    super(props);
    this.view = React.createRef();
    this.str = "Loading";
  }
  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.str = this.str + ".";
      this.view.current.innerHTML = this.str;
    }, 500);
  };
  componentWillUnmount = () => {
    if (this.timer) clearInterval(this.timer);
  };
  render() {
    return <h1 ref={this.view}>{this.str}</h1>;
  }
}

// const LoadingView = () => {
//   const view = React.createRef();
//   setInterval(() => {
//     str = str + ".";
//     view.current.innerHTML = str;
//   }, 500);
//   return <h1 ref={view}>{str}</h1>;
// };

export default LoadingView;
