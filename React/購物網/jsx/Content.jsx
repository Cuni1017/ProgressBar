import React from "react"; //node_modules會自己對應

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Content: constructor");
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("Content: getDerivedStateFromProps");
    return null;
  };
  componentDidMount = () => {
    // 通常ajax會放在這裡讓他抓資料
    // this.thisForm.current.submit();
    console.log("Content: componentDidMount");
  };
  componentDidUpdate = () => {
    console.log("Content: componentDidUpdate");
  };

  shouldComponentUpdate = () => {
    console.log("Content: shouldComponentUpdate");
    return true; //如果為false，在html上不會更新顯示，但this.state值是有改變的
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Content: getSnapshotBeforeUpdate");
    return 2;
  };
  // getSnapshotBeforeUpdate與componentDidUpdate要一起搭配
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("Content: componentDidUpdate and SnapShot: " + snapshot);
    // console.log(snapshot);
  };
  componentWillUnmount = () => {
    console.log("Content: componentWillUnmount");
  };

  render() {
    console.log("Content: render");
    return <div>Content Will Disapper</div>;
  }
}

export default Content;
