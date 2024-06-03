import App from "./jsx/App.jsx";
import { createStore } from "redux";

// 簡單的試做，redux的createStore的功能更多
// const createStore = (dispatch, initState) => {
//   let state = initState === null ? "" : initState;

//   const subscriptions = [];

//   const doCallbacks = () => {
//     subscriptions.forEach((callback) => {
//       callback();
//     });
//   };
//   return {
//     getState: () => {
//       return state;
//     },
//     subscribe: (callback) => {
//       subscriptions.push(callback);
//     },
//     dispatch: (action) => {
//       const result = dispatch(state, action);
//       if (result != state) {
//         state = result;
//         doCallbacks();
//       }
//     },
//   };
// };

const Counter = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(Counter, 12); //第二參數為state初始值

// 在REACT裡，最討厭的事情是要一直傳handler下去給子孫。今天想把props傳下去，這個props又被改的話就要一起將handler傳下去，才能將props改變後的內容傳回最上層
// 由於樹狀的節點太多層，就會導致相依性太重，最下層很難去通知到最上層。
// 為什麼要用redux
// 如果使用這種event機制的話，UI其實只要獲得props就好了，如果UI有需要改變值的話，就把type, event送出去，剩下的就跟UI沒關係了
// 父層會自然的獲得這個內容，繼續往下render

// 像是更新UI
store.subscribe(() => {
  console.log(store.getState());
});
store.subscribe(() => {
  console.log("---");
});
// 像是BUTTON的使用或任何資料的存取
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

// 不好的寫法 counter暴露在外面
{
  // let counter = 0;
  // const subscriptions = [];
  // const subscribe = (callback) => {
  //   subscriptions.push(callback);
  // };
  // const doCallbacks = () => {
  //   subscriptions.forEach((callback) => {
  //     callback();
  //   });
  // };
  // const setCounter = (type) => {
  //   if (type == "INCREMENT") {
  //     counter += 1;
  //   } else if (type == "DECREMENT") {
  //     counter -= 1;
  //   }
  //   doCallbacks();
  //   //   console.log(counter);
  // };
  // subscribe(() => {
  //   console.log(counter);
  // });
  // subscribe(() => {
  //   console.log("---");
  // });
  // setCounter("INCREMENT");
  // setCounter("INCREMENT");
  // setCounter("DECREMENT");
}
