const step1 = () => {
  console.log("step1 start");
  return new Promise((resolve, reject) => {
    let result = false;
    setTimeout(() => {
      if (false) {
        let list = ["step1 Good"];
        resolve(1);
      } else {
        // throw new Error("Error 1");
        // return Promise.reject({ reson: "Error 1" });
        reject("Error 1!!");
      }
    }, 300);
  });
};
const step2 = (list) => {
  console.log("step2 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        // list.push("step2 Good");
        resolve(2);
      } else {
        // throw new Error("Error 2");
        // return Promise.reject("Error 2");
        reject("Error 2!!");
      }
    }, 200);
  });
};
const step3 = (list) => {
  console.log("step3 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        // list.push("step2 Good");
        resolve(3);
      } else {
        // throw new Error("Error 3");
        // return Promise.reject("Error 3");
        reject("Error 3!!");
      }
    }, 100);
  });
};

const run = () => {
  step1()
    .then(
      (list) => {
        console.log(list);
        return step2(list);
      },
      (err) => {
        console.log(err);
      }
    )
    .catch((err) => {
      console.log(err);
    });
};
//
// const run = () => {
//   step1()
//     .then(
//       (list) => {
//         console.log(list);
//         return step2(list);
//       },
//       (err) => {
//         console.log(err);
//       }
//     )
//     .then(
//       (list) => {
//         console.log(list);
//         return step3(list);
//       },
//       (err) => {
//         console.log(err);
//       }
//     )
//     .then((list) => {
//       //   console.log(list);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// 遇到錯誤會繼續進行，但輸出要自己處理
// const run = async () => {
//   const returnValue1 = await step1().catch((err) => {
//     console.log(err);
//   });
//   if (returnValue1) console.log(returnValue1);
//   const returnValue2 = await step2(returnValue1).catch((err) => {
//     console.log(err);
//   });
//   if (returnValue2) console.log(returnValue2);
// };

// 只要遇到錯誤就會直接跳到catch
// const run = async () => {
//   try {
//     const returnValue1 = await step1();
//     console.log(returnValue1);
//     const returnValue2 = await step2();
//     console.log(returnValue2);
//     const returnValue3 = await step3();
//     console.log(returnValue3);
//   } catch (error) {
//     console.log(error);
//   }
// };
run();

// 一個Promise裡只會有一個函式，參數為resolve和reject
// 函式內執行所需要程式後，利用resolve()傳入參數給下一個要使用的來參考
// resolve()內只能有一個值，否則接下去的promise拿到的會是undefined
// Promise利用.then((上一個promise的resolve)=>{doSomething()},()=>{return "failed"})繼續進行
// Promise.then(()=>{},()=>{}).then(()=>{},()=>{})...
