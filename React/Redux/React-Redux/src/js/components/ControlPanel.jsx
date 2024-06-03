import React, { Component } from "react";

class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }

  increHandler = (num) => {
    const { counter, setCount } = this.props;
    setCount(num);
  };

  //   decreHandler = (e) => {
  //     console.log("decrement");
  //   };

  render = () => {
    // console.log(this.props);
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.increHandler(1);
          }}
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => {
            this.increHandler(-1);
          }}
        >
          -1
        </button>
      </div>
    );
  };
}

// connect應該是class Component取出外層包的Provider的store的方法
// 因為class Component不能用Hooks裡的useSelector和useDispatch所以才用這個connect 吧
// 利用connect產生出一個能調用在store裡的新Component
// connect用法
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  // console.log(state); // 為store寫的reducer
  return {
    counter: state.counter, // reducer底下的counter
  };
};

// 方法
import { setCount } from "../redux/slices/counterSlice";
const mapDispatchToProps = {
  setCount, // 引入再counterSlice裡寫的disPatch方法
};

// connect是一個function產生器，他可以把某一個state黏成props，讓透過這個func產生的component擁有這個props
// const func = connect(mapStateToProps, mapDispatchToProps);
// const ConnectedControlPanel = func(ControlPanel);

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

// export default ConnectedControlPanel;
