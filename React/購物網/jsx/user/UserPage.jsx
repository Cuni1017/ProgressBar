import React, { Component } from "react"; //node_modules會自己對應
import ReactDOM from "react-dom";
// import User1 from "../json/user1.json";
import UserEditor from "./components/UserEditor.jsx";
import UserVideos from "./components/UserVideos.jsx";
// import LoadingView from "../components/LoadingView.jsx";
// import ErrorView from "../components/ErrorView.jsx";
// import UserService from "../utils/UserService.js";

// React\生命週期與非同步處理\jsx\components\ErrorView.jsx
// React\生命週期與非同步處理\jsx\user\UserPage.jsx

// #生命週期與非同步處理
class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  // https://ithelp.ithome.com.tw/articles/10273613
  // #History.pushState 可以讓我們在不移動頁面的情況下，添加一筆歷史紀錄，它一共有三個參數
  // state: 這個參數可以接受一個物件，該物件裡可以存放任何資料，至於有什麼實際用途，後面會再介紹。
  // title: 這是一個被暫時保留的參數，實際上沒有任何用途，且會被瀏覽器忽略。
  // URL: 這個參數是用來設定我們添加的這筆歷史紀錄的網址，可傳可不傳。
  componentDidMount = () => {
    window.history.pushState("", "", "/user/"); //改url但不重新導向的辦法
  };

  handler = (name, value) => {
    this.setState({ [name]: value }, () => {
      //   console.log(this.state);
    });
  };

  //   submit = (e) => {
  //     e.preventDefault(); //可以擋掉空白的提交
  //     console.log("Check something");

  //     // const thisForm = document.getElementById("thisForm");
  //     // thisForm.submit();
  //     this.thisForm.current.submit();
  //   };

  // #lifeCycle https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  //   #舊版
  //   componentWillMount = () => {
  //     console.log("componentWillMount");
  //   };

  //   #新版，但不建議用
  //   UNSAFE_componentWillMount = () => {
  //     console.log("UNSAFE_componentWillMount");
  //   };
  //   #建議使用
  //   static getDerivedStateFromProps = (props, state) => {
  //     console.log("App: getDerivedStateFromProps");
  //     return null;
  //   };
  componentDidMount = () => {
    // 通常ajax會放在這裡讓他抓資料
    // this.thisForm.current.submit();
    // fetch("http://127.0.0.1:5500/React/LifeCycle/json/user1.json")
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw Error(response.statusText);
    //     }
    //   })
    //   .then((user) => {
    //     this.handler("user", user);
    //     // console.log(user);
    //   })
    //   .catch((errorMessage) => {
    //     this.handler("errorMessage", errorMessage);
    //     // console.log(errorMessage);
    //   });
    // console.log("App: componentDidMount");
  };

  // 改成async await => 移至Utils/UserService.js
  //   fetchData = async () => {
  //     const userService = this.userService;
  //     try {
  //       await userService.logIn("user1", "");
  //       const user = userService.getCurrentUser();
  //       // const response = await fetch(
  //       //   "http://127.0.0.1:5500/React/生命週期與非同步處理/json/user1.json"
  //       // );
  //       // if (!response.ok) {
  //       //   throw Error(response.statusText);
  //       // }
  //       //   const user = await response.json();
  //       this.handler("user", user);
  //     } catch (error) {
  //       this.handler("error", error);
  //     }
  //   };

  //   componentDidUpdate = () => {
  //     console.log("App: componentDidUpdate");
  //   };

  //   shouldComponentUpdate = () => {
  //     console.log("App: shouldComponentUpdate");
  //     return true; //如果為false，在html上不會更新顯示，但this.state值是有改變的
  //   };

  //   getSnapshotBeforeUpdate = (prevProps, prevState) => {
  //     console.log("App: getSnapshotBeforeUpdate");
  //     return 1;
  //   };
  //   componentDidUpdate = (prevProps, prevState, snapshot) => {
  //     console.log("App: componentDidUpdate");
  //     console.log(snapshot);
  //   };
  //   componentWillUnmount = () => {
  //     console.log("App: componentWillUnmount");
  //   };

  // React只管資料與顯示而已，不管UI動作
  // 什麼時候需要createRef: input, canvas出現後才能開始畫，否則讀不到畫布, video, audio, image

  //   plusCountHander = (e) => {
  //     const count = this.state.count;
  //     this.setState({ count: count + 1 }, () => {
  //       //   console.log(this.state);
  //     });
  //   };

  render = () => {
    // console.log("App: render");
    const { user } = this.props;
    return (
      <div>
        <div>
          <UserEditor user={user} handler={this.handler} />
          <UserVideos likes={user.videos.likes} />
        </div>
        {/* #搭配Content.jsx */}
        {/* {this.state.count > 5 ? "" : <Content />}
        <p>ProgressBar TW</p>
        <p>count: {this.state.count}</p>
        <button type="button" onClick={this.plusCountHander}>
          Plus One
        </button> */}
        {/* 第3堂 Ref 原生DOM API和liftCycle的關係 */}
        {/* <form ref={this.thisForm}>
          <input type="text" name="value" value="" />
          <br />
          <button type="submit" onClick={this.submit}>
            submit
          </button>
        </form> */}
        {/* #搭配ErrorView,LoadingView.jsx */}
      </div>
    );
  };
}
// const A = {};
// const B = {};
// B.ref = A;
// B.ref.current = 3;
// console.log(A.current);

// const userService = new UserService();
// const user = userService.getCurrentUser();
// ReactDOM.render(
//   <App userService={userService} user={user} />,
//   document.getElementById("root")
// );

// import React, { Component } from "react";

// class UserPage extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div>UserPage</div>;
//   }
// }

export default UserPage;
