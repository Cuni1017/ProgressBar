import React, { Component } from "react";

// HOC
// https://pjchender.dev/react/react-higher-order-component/
// https://progressbar.tw/courses/14/watching

// 產生一個更進階的Component，將props和context都傳入統一當成他的props
// 前提為要使用的Component要引入這個enhanced.jsx還有需要的context

const enhanced = (TargetComponent, Context) => {
  return class extends Component {
    static contextType = Context;
    constructor(props) {
      super(props);
    }

    render = () => {
      return (
        <TargetComponent {...this.props} {...this.context}></TargetComponent>
      );
    };
  };
};

export default enhanced;
