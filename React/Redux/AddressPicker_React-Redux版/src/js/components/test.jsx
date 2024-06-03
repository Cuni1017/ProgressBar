import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    // console.log(this.props);
    return <div>Test</div>;
  };
}

import { connect } from "react-redux";

const mapStatetoProps = (state, ownProps) => {
  return {
    fullAddress: state.fullAddress,
  };
};

import { setFullAddress } from "../redux/slices/fullAddressSlice";
const mapDispatchtoProps = {
  setFullAddress,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Test);

// export default Test;
